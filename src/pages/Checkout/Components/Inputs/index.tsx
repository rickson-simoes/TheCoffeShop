import { useFormContext } from "react-hook-form";
import { AddressInputs, CustomInput, OptionalInput, RowInputsOne, RowInputsTwo } from "./styles";

export function Inputs() {
  const { register } = useFormContext();

  return (
    <AddressInputs>
      <div>
        <CustomInput type="text" placeholder="CEP" {...register('cep')} maxLength={9} />
      </div>

      <CustomInput type="text" placeholder="Rua" {...register('rua')} />

      <RowInputsOne>
        <CustomInput type="number" placeholder="Número" {...register('numero', { valueAsNumber: true, })} />

        <OptionalInput>
          <CustomInput type="text" placeholder="Complemento" {...register('complemento')} />
          <span>Opcional</span>
        </OptionalInput>
      </RowInputsOne>

      <RowInputsTwo>
        <CustomInput type="text" placeholder="Bairro" {...register('bairro')} />
        <CustomInput type="text" placeholder="Cidade" {...register('cidade')} />
        <CustomInput type="text" placeholder="UF" {...register('uf')} />
      </RowInputsTwo>
    </AddressInputs>
  )
}