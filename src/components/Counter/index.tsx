import { Minus, Plus } from "phosphor-react";
import { CounterField } from "./styles";

export function Counter() {
  return (
    <CounterField>
      <button type='button'> <Minus weight="bold" /> </button>
      <span> 1 </span>
      <button type='button'> <Plus weight="bold" /> </button>
    </CounterField>
  )
};