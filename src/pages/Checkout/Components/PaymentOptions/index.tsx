import { Bank, CreditCard, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { ErrorSpan, LabelPayment, PaymentContainer } from "./styles";

export function PaymentOptions() {
  const { register, formState: { errors: { formaPagamento } }, watch } = useFormContext();

  const formaPagamentoError = formaPagamento?.message;
  const formaPagamentoTipo = watch("formaPagamento");

  return (
    <>
      {formaPagamentoError && <p><ErrorSpan>{formaPagamentoError?.toString()}</ErrorSpan></p>}
      <PaymentContainer>
        <LabelPayment checked={formaPagamentoTipo == 'credito'}>
          <input
            type="radio"
            value="credito"
            hidden
            {...register('formaPagamento')}
          />

          <CreditCard size={16} /> Cartão de crédito
        </LabelPayment>

        <LabelPayment checked={formaPagamentoTipo == 'debito'}>
          <input
            type="radio"
            value="debito"
            hidden
            {...register('formaPagamento')}
          />

          <Bank size={16} /> Cartão de débito
        </LabelPayment>

        <LabelPayment checked={formaPagamentoTipo == 'dinheiro'}>
          <input
            type="radio"
            value="dinheiro"
            hidden
            {...register('formaPagamento')}
          />

          <Money size={16} /> Dinheiro
        </LabelPayment>
      </PaymentContainer>
    </>
  )
}