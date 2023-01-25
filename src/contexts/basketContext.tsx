import { createContext, useState } from "react";
import { IBasketContextProvider, IBasketContextType, IItemsInBasket, IProduct } from "../interfaces";
import { ConvertToCurrency } from "../Helpers/ConvertToCurrency"


export const BasketContext = createContext({} as IBasketContextType);

export function BasketContextProvider({ children }: IBasketContextProvider) {
  const [products, setProducts] = useState<IProduct[]>([]);

  function setAddProduct(item: IProduct[]) {
    setProducts(item);
  }

  function TotalItemsInBasket(items: IProduct[]) {
    const countedItems = items.reduce((acc, item) => {
      const { name, price } = item;
      const removeSpacesInName = name.replace(/\s/g, "");

      const key = removeSpacesInName;
      if (!acc[key]) {
        acc[key] = {
          name,
          price: 0,
          quantity: 0
        };
      }
      acc[key].price += price;
      acc[key].quantity = acc[key].quantity == 0 ? 1 : acc[key].price / item.price;

      return acc;
    }, {} as IItemsInBasket as any);

    return Object.values(countedItems as IItemsInBasket[]);
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