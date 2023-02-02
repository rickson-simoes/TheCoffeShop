import { IFormInformationSchema } from "../pages/Checkout/userValidationSchema";

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
  removeAllCoffeesFromID: (id: string) => void;
}

export interface IBasketContextProvider {
  children: React.ReactNode
}

export interface IAddressContext {
  addUserInformation: (userInformation: IFormInformationSchema) => void;
  userInformation: IFormInformationSchema;
}

export interface IAddressContextProvider {
  children: React.ReactNode
}

export enum CoffeeActionTypes {
  Add = "Add",
  AddMore = "AddMore",
  Remove = "Remove",
  RemoveMore = "RemoveMore",
}

export interface DispatchOptions {
  payload: ITotalItemsInBasket,
  type: CoffeeActionTypes
};