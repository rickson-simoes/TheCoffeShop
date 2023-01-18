import { AddressInputs, CustomInput, InputRowCustomOne, OptionalInput, InputRowCustomTwo } from "./styles";

export function Inputs() {
  return (
    <AddressInputs>
      <div>
        <CustomInput type="text" placeholder="CEP" />
      </div>

      <CustomInput type="text" placeholder="Rua" />

      <InputRowCustomOne>
        <CustomInput type="text" placeholder="Número" />

        <OptionalInput>
          <CustomInput type="text" placeholder="Complemento" />
          <span>Opcional</span>
        </OptionalInput>
      </InputRowCustomOne>

      <InputRowCustomTwo>
        <CustomInput type="text" placeholder="Bairro" />
        <CustomInput type="text" placeholder="Cidade" />
        <CustomInput type="text" placeholder="UF" />
      </InputRowCustomTwo>
    </AddressInputs>
  )
}