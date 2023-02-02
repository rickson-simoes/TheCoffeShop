import { useFormContext } from "react-hook-form";
import { AddressInputs, CustomInput, ErrorSpan, OptionalInput, RowInputsOne, RowInputsTwo } from "./styles";

export function Inputs() {
  const { register, formState } = useFormContext();
  const cepError = formState.errors.cep?.message;
  const ruaError = formState.errors.rua?.message;
  const numeroError = formState.errors.numero?.message;
  const bairroError = formState.errors.bairro?.message;
  const cidadeError = formState.errors.cidade?.message;
  const ufError = formState.errors.uf?.message;

  return (
    <AddressInputs>
      <div>
        <CustomInput type="text" placeholder="Cep" {...register('cep')} maxLength={9} />
        {cepError && <p><ErrorSpan>{cepError.toString()}</ErrorSpan></p>}
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <CustomInput type="text" placeholder="Rua" {...register('rua', { required: true })} />
        {ruaError && <ErrorSpan>{ruaError.toString()}</ErrorSpan>}
      </div>


      <RowInputsOne>
        <div>
          <CustomInput type="number" placeholder="Número" {...register('numero', { valueAsNumber: true, })} />
          {numeroError && <p><ErrorSpan>{numeroError?.toString()}</ErrorSpan></p>}
        </div>

        <OptionalInput>
          <CustomInput type="text" placeholder="Complemento" {...register('complemento')} />
          <span>Opcional</span>
        </OptionalInput>
      </RowInputsOne>

      <RowInputsTwo>
        <div>
          <CustomInput type="text" placeholder="Bairro" {...register('bairro')} />
          {bairroError && <ErrorSpan>{bairroError.toString()}</ErrorSpan>}
        </div>

        <div>
          <CustomInput type="text" placeholder="Cidade" {...register('cidade')} />
          {cidadeError && <ErrorSpan>{cidadeError.toString()}</ErrorSpan>}
        </div>

        <div>
          <CustomInput type="text" placeholder="UF" {...register('uf')} maxLength={2} />
          {ufError && <ErrorSpan>{ufError.toString()}</ErrorSpan>}
        </div>
      </RowInputsTwo>
    </AddressInputs>
  )
}