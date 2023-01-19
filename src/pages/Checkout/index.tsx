import { CurrencyDollar, MapPinLine, Trash } from "phosphor-react";

import { Counter } from "../../components/Counter";
import { Inputs } from "./Components/Inputs";
import { PaymentOptions } from "./Components/PaymentOptions";
import { SvgTitleInformation } from "./Components/SvgTitleInformation";
import { ButtonRemoval, FormContainer, ItemInformation, ItemMenu, List, OrderCheckout, OrderContainer } from "./styles";

export function CheckoutPage() {
  return (
    <FormContainer>
      <section>
        <h4>Complete seu pedido</h4>

        <OrderContainer>
          <SvgTitleInformation
            title="Endereço de entrega"
            informative="Informe o endereço onde deseja receber seu pedido"
            svg={<MapPinLine size={24} />}
            svgColor="yellowDark"
          />

          <Inputs />
        </OrderContainer>

        <OrderContainer>
          <SvgTitleInformation
            title="Pagamento"
            informative="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            svg={<CurrencyDollar size={24} />}
            svgColor="purple"
          />

          <PaymentOptions />
        </OrderContainer>
      </section>

      <section>
        <h4>Cafés selecionados</h4>

        <OrderCheckout>
          <List>
            <li>
              <ItemMenu>
                <img src="src\assets\CoffeTypeSvgs\Type=Expresso.svg" alt="" width={64} height={64} />

                <ItemInformation>
                  <span>Expresso Tradicional</span>
                  <div>
                    <Counter />
                    <ButtonRemoval type="button"><Trash /> <span>Remover</span></ButtonRemoval>
                  </div>
                </ItemInformation>
              </ItemMenu>

              <span>R$ 9,90</span>
            </li>
          </List>

          <div>
            <div><span>Total de itens</span> <span>R$ 29.70</span></div>
            <div><span>Entrega</span> <span>R$ 3.50</span></div>
            <div><span>Total</span> <span>R$ 33.20</span></div>
          </div>

          <button type="submit">Confirmar Pedido</button>
        </OrderCheckout>
      </section>
    </FormContainer>
  )
};