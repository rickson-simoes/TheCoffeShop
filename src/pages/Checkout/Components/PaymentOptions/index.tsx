import { Bank, CreditCard, Money } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorSpan, LabelPayment, PaymentContainer } from "./styles";

export function PaymentOptions() {
  const [option, setOption] = useState("");
  const { register, formState } = useFormContext();

  const formaPagamentoError = formState.errors.formaPagamento?.message;

  function handleOptionPayment(event: ChangeEvent<HTMLInputElement>) {
    setOption(event.target.value)
  }

  return (
    <>
      {formaPagamentoError && <p><ErrorSpan>{formaPagamentoError?.toString()}</ErrorSpan></p>}
      <PaymentContainer>
        <LabelPayment checked={option == "credito"}>
          <input
            type="radio"
            value="credito"
            checked={option == "credito"}
            hidden
            {...register('formaPagamento', { onChange: (e) => handleOptionPayment(e) })}
          />

          <CreditCard size={16} /> Cartão de crédito
        </LabelPayment>

        <LabelPayment checked={option == "debito"}>
          <input
            type="radio"
            value="debito"
            checked={option == "debito"}
            hidden
            {...register('formaPagamento', { onChange: (e) => handleOptionPayment(e) })}
          />

          <Bank size={16} /> Cartão de débito
        </LabelPayment>

        <LabelPayment checked={option == "dinheiro"}>
          <input
            type="radio"
            value="dinheiro"
            checked={option == "dinheiro"}
            hidden
            {...register('formaPagamento', { onChange: (e) => handleOptionPayment(e) })}
          />

          <Money size={16} /> Dinheiro
        </LabelPayment>
      </PaymentContainer>
    </>
  )
}