import { createContext, useState } from "react";
import { IBasketContextProvider, IBasketContextType, ITotalItemsInBasket, IProduct } from "../interfaces";

export const BasketContext = createContext({} as IBasketContextType);

export function BasketContextProvider({ children }: IBasketContextProvider) {
  const [products, setProducts] = useState<IProduct[]>([]);

  function setAddProduct(item: IProduct[]) {
    setProducts(item);
  }

  function TotalItemsInBasket(items: IProduct[]) {
    const countedItems = items.reduce((acc, item) => {
      const { name, id, unitPrice } = item;

      const key = id;
      if (!acc[key]) {
        acc[key] = {
          id,
          name,
          unitPrice,
          price: 0,
          quantity: 0
        };
      }
      acc[key].price += unitPrice;
      acc[key].quantity = acc[key].quantity == 0 ? 1 : acc[key].price / Number(item.unitPrice);

      return acc;
    }, {} as ITotalItemsInBasket as any);

    return Object.values(countedItems as ITotalItemsInBasket[]);
  }

  const BasketItems = TotalItemsInBasket(products);
  const TotalBasketItems = BasketItems.map(value => {
    return {
      ...value,
      price: value.price,
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