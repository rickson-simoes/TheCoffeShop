export interface IProduct {
  id: string;
  name: string;
  unitPrice: number;
  price: number;
  label: string[];
  description: string;
}

export interface ICoffee {
  id: string,
  name: string;
  price: number;
  unitPrice: number;
}

export interface ITotalItemsInBasket {
  id: string;
  name: string;
  price: number;
  unitPrice: number;
  quantity: number;
}

export interface IBasketContextType {
  addCoffee: (coffee: ICoffee) => void;
  removeCoffee: (coffee: ICoffee) => void;
  allCoffees: ITotalItemsInBasket[];
  removeAll: (id: string) => void;
}

export interface IBasketContextProvider {
  children: React.ReactNode
}
