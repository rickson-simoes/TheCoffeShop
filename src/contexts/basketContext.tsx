import { createContext, Dispatch, useState } from "react";
import { IProduct } from "../interfaces";

interface IBasketContextType {
  products: IProduct[];
  setAddProduct: (item: IProduct[]) => void;
}

interface IBasketContextProvider {
  children: React.ReactNode
}

export const BasketContext = createContext({} as IBasketContextType);

export function BasketContextProvider({ children }: IBasketContextProvider) {
  const [products, setProducts] = useState<IProduct[]>([]);

  function setAddProduct(item: IProduct[]) {
    setProducts(item);
  }

  return (
    <BasketContext.Provider
      value={{ products, setAddProduct }}>
      {children}
    </BasketContext.Provider>
  )
};