import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { AddressInformations, Address, AdressDeliveryText, AdressInformationText, FormContainer, OrderContainer, Payment, AddressInputs, OptionalInput, InputRowCustomOne, InputRowCustomTwo, CustomInput } from "./styles";

export function CheckoutPage() {
  return (
    <FormContainer>
      <section>
        <h4>Complete seu pedido</h4>

        <OrderContainer>
          <Address>
            <AddressInformations>
              <MapPinLine size={24} />

              <AdressDeliveryText>
                Endereço de Entrega
              </AdressDeliveryText>

              <span></span>

              <AdressInformationText>
                Informe o endereço onde deseja receber seu pedido
              </AdressInformationText>
            </AddressInformations>

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
          </Address>
        </OrderContainer>

        <OrderContainer>
          <Payment>
            <AddressInformations>
              <CurrencyDollar size={24} />

              <AdressDeliveryText>
                Pagamento
              </AdressDeliveryText>

              <span></span>

              <AdressInformationText>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </AdressInformationText>
            </AddressInformations>
          </Payment>
        </OrderContainer>
      </section>

      <section>
        <h4>Cafés selecionados</h4>

        <div>
          sdfasdfsdafads
        </div>

        <button type="submit">hum</button>
      </section>
    </FormContainer>
  )
};