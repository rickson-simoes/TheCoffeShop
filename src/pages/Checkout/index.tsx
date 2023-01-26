import { CurrencyDollar, MapPinLine, Trash } from "phosphor-react";
import { useContext } from "react";

import { Counter } from "../../components/Counter";
import { BasketContext } from "../../contexts/basketContext";
import { ConvertToCurrencyBRL } from "../../Helpers/ConvertToCurrency";
import { Inputs } from "./Components/Inputs";
import { PaymentOptions } from "./Components/PaymentOptions";
import { SvgTitleInformation } from "./Components/SvgTitleInformation";
import { ButtonCheckoutOrder, ButtonRemoval, FormContainer, ItemInformation, ItemMenu, List, OrderCheckout, OrderContainer, TotalFontSizeBigger, TotalOrder } from "./styles";

export function CheckoutPage() {
  const { TotalBasketItems } = useContext(BasketContext);

  const totalItems = TotalBasketItems.reduce((acc, item) => acc + item.price, 0);
  const totalDelivery = 3.50;
  const totalValue = ConvertToCurrencyBRL(totalItems + totalDelivery);

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
            {TotalBasketItems.map((value) => (
              <li key={value.id}>
                <ItemMenu>
                  <img src={`src\\assets\\CoffeTypeSvgs\\Type=${value.name}.svg`} alt="" width={64} height={64} />

                  <ItemInformation>
                    <span>{value.name} <span>({ConvertToCurrencyBRL(value.unitPrice)} Und)</span></span>
                    <div>
                      <Counter {...value} />
                      <ButtonRemoval type="button"><Trash /> <span>Remover</span></ButtonRemoval>
                    </div>
                  </ItemInformation>
                </ItemMenu>

                <span>{ConvertToCurrencyBRL(value.price)}</span>
              </li>
            )) ?? "No coffees selected"}
          </List>

          <TotalOrder>
            <div>
              <span>Total de itens</span> <span>{ConvertToCurrencyBRL(totalItems)}</span>
            </div>

            <div>
              <span>Entrega</span> <span>{ConvertToCurrencyBRL(totalDelivery)}</span>
            </div>

            <div>
              <TotalFontSizeBigger>Total</TotalFontSizeBigger> <TotalFontSizeBigger>{totalValue}</TotalFontSizeBigger>
            </div>
          </TotalOrder>

          <ButtonCheckoutOrder type="submit"><strong>Confirmar Pedido</strong></ButtonCheckoutOrder>
        </OrderCheckout>
      </section>
    </FormContainer>
  )
};