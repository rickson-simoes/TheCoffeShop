import { Minus, Plus } from "phosphor-react";
import { useContext } from "react";
import { BasketContext } from "../../contexts/basketContext";
import { ICoffee } from "../../interfaces";
import { CounterField } from "./styles";

export function Counter({ ...coffeeItem }: ICoffee) {
  const { addCoffee, removeCoffee, allCoffees } = useContext(BasketContext);

  const getCoffee = allCoffees.find(value => value.id == coffeeItem.id);

  function handleCount(option: string) {
    if (option == 'plus') {
      addCoffee(coffeeItem);
    }

    if (option == 'minus') {
      removeCoffee(coffeeItem);
    }
  }

  return (
    <CounterField>
      <button type='button' onClick={() => handleCount("minus")}> <Minus weight="bold" /> </button>
      <span> {getCoffee?.quantity || 0} </span>
      <button type='button' onClick={() => handleCount("plus")}> <Plus weight="bold" /> </button>
    </CounterField>
  )
};