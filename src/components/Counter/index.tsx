import { Minus, Plus } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { BasketContext } from "../../contexts/basketContext";
import { IProduct } from "../../interfaces";
import { CounterField } from "./styles";

export function Counter(product: IProduct) {
  console.log(product);
  const [coffees, setCoffees] = useState<IProduct[]>([]);
  const { products, setAddProduct } = useContext(BasketContext);
  const totalCoffeesCounter = products.filter(value => value.id == product.id).length || 0;

  useEffect(() => {
    if (products.length > 0) {
      const getAllCoffeesInsideProducts = products.filter(value => value.id == product.id);

      setCoffees(getAllCoffeesInsideProducts)
    }
  }, [])

  function handleCount(option: string) {
    if (option == 'plus') {
      setCoffees([...coffees, product]);
      setAddProduct([...products, product])
    }

    if (option == 'minus' && totalCoffeesCounter > 0) {
      const index = coffees.findIndex(value => value.id == product.id)
      coffees.splice(index, 1);
      setCoffees([...coffees]);

      const updatedProducts = products.filter(value => value.id !== product.id);
      setAddProduct([...updatedProducts, ...coffees]);
    }
  }

  return (
    <CounterField>
      <button type='button' onClick={() => handleCount("minus")}> <Minus weight="bold" /> </button>
      <span> {totalCoffeesCounter} </span>
      <button type='button' onClick={() => handleCount("plus")}> <Plus weight="bold" /> </button>
    </CounterField>
  )
};