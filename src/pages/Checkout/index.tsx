import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { Inputs } from "./Components/Inputs";
import { SvgTitleInformation } from "./Components/SvgTitleInformation";
import { Address, FormContainer, OrderContainer, Payment } from "./styles";

export function CheckoutPage() {
  return (
    <FormContainer>
      <section>
        <h4>Complete seu pedido</h4>

        <OrderContainer>
          <Address>
            <SvgTitleInformation
              title="Endereço de entrega"
              informative="Informe o endereço onde deseja receber seu pedido"
              svg={<MapPinLine size={24} />}
              svgColor="yellowDark"
            />

            <Inputs />
          </Address>
        </OrderContainer>

        <OrderContainer>
          <Payment>
            <SvgTitleInformation
              title="Pagamento"
              informative="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              svg={<CurrencyDollar size={24} />}
              svgColor="purple"
            />
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