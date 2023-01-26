export interface IProduct {
  id: string;
  name: string;
  unitPrice?: number;
  price: number | string;
  label?: string[];
  description?: string;
}

export interface ITotalItemsInBasket {
  id: string;
  name: string;
  unitPrice: number;
  price: number;
  quantity: number;
}

export interface IBasketContextType {
  products: IProduct[];
  setAddProduct: (item: IProduct[]) => void;
  TotalBasketItems: ITotalItemsInBasket[];
}

export interface IBasketContextProvider {
  children: React.ReactNode
}
