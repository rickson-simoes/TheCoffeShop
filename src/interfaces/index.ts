export interface IProduct {
  name: string;
  price: number;
  label: string[];
  description: string;
}

export interface IProducts {
  product: IProduct;
}

export interface IBasketContextType {
  products: IProduct[];
  setAddProduct: (item: IProduct[]) => void;
  TotalBasketItems: ITotalBasketItems[];
}

export interface IItemsInBasket {
  name: string;
  price: number;
  quantity: number;
}

export type ITotalBasketItems = Pick<IItemsInBasket, 'name' | 'quantity'> & { price: string };

export interface IBasketContextProvider {
  children: React.ReactNode
}
