import { Bank, CreditCard, Money } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import { LabelPayment } from "./styles";

export function RadioOptions() {
  const [option, setOption] = useState("");

  function handleOptionPayment(event: ChangeEvent<HTMLInputElement>) {
    setOption(event.target.value)
  }

  return (
    <>
      <LabelPayment checked={option == "credito"}>
        <input
          type="radio"
          value="credito"
          checked={option == "credito"}
          onChange={handleOptionPayment}
          hidden
        />

        <CreditCard size={16} /> Cartão de crédito
      </LabelPayment>

      <LabelPayment checked={option == "debito"}>
        <input
          type="radio"
          value="debito"
          checked={option == "debito"}
          onChange={handleOptionPayment}
          hidden
        />

        <Bank size={16} /> Cartão de débito
      </LabelPayment>

      <LabelPayment checked={option == "dinheiro"}>
        <input
          type="radio"
          value="dinheiro"
          checked={option == "dinheiro"}
          onChange={handleOptionPayment}
          hidden
        />

        <Money size={16} /> Dinheiro
      </LabelPayment>
    </>
  )
}