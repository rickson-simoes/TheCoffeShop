import { createContext, useState } from "react";
import { IBasketContextProvider, IBasketContextType, IItemsInReduceBasket, IProduct } from "../interfaces";
import { ConvertToCurrency } from "../Helpers/ConvertToCurrency"


export const BasketContext = createContext({} as IBasketContextType);

export function BasketContextProvider({ children }: IBasketContextProvider) {
  const [products, setProducts] = useState<IProduct[]>([]);

  function setAddProduct(item: IProduct[]) {
    setProducts(item);
  }

  function TotalItemsInBasket(items: IProduct[]) {
    const countedItems = items.reduce((acc, item) => {
      const { name, price, id } = item;

      const key = id;
      if (!acc[key]) {
        acc[key] = {
          id,
          name,
          price: 0,
          quantity: 0
        };
      }
      acc[key].price += price;
      acc[key].quantity = acc[key].quantity == 0 ? 1 : acc[key].price / item.price;

      return acc;
    }, {} as IItemsInReduceBasket as any);

    return Object.values(countedItems as IItemsInReduceBasket[]);
  }

  const BasketItems = TotalItemsInBasket(products);
  const TotalBasketItems = BasketItems.map(value => {
    return {
      ...value,
      price: ConvertToCurrency(value.price),
      quantity: Math.round(value.quantity)
    }
  })

  return (
    <BasketContext.Provider
      value={{ products, setAddProduct, TotalBasketItems }}>
      {children}
    </BasketContext.Provider>
  )
};