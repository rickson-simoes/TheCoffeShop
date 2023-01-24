export interface IProduct {
  name: string;
  price: number;
  label: string[];
  description: string;
}

export interface IProducts {
  product: IProduct
}