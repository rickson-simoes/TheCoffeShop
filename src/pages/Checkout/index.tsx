import { CurrencyDollar, MapPinLine, Trash } from "phosphor-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Counter } from "../../components/Counter";
import { BasketContext } from "../../contexts/basketContext";
import { ConvertToCurrencyBRL } from "../../Helpers/ConvertToCurrency";

import { Inputs } from "./Components/Inputs";
import { PaymentOptions } from "./Components/PaymentOptions";
import { SvgTitleInformation } from "./Components/SvgTitleInformation";
import { ButtonCheckoutOrder, ButtonRemoval, FormContainer, ItemInformation, ItemMenu, List, OrderCheckout, OrderContainer, TotalFontSizeBigger, TotalOrder } from "./styles";
import { IFormInformationSchema, userInformationValidationSchema } from "./userValidationSchema";
import { AddressContext } from "../../contexts/addressContext";


export function CheckoutPage() {
  const navigate = useNavigate();
  const { addUserInformation } = useContext(AddressContext);

  const FormData = useForm<IFormInformationSchema>({
    resolver: zodResolver(userInformationValidationSchema),
  });

  const { handleSubmit } = FormData

  const { allCoffees, removeAllCoffeesFromID } = useContext(BasketContext);

  const totalItems = allCoffees.reduce((acc, item) => acc + item.price, 0);
  const totalDelivery = 3.50;
  const totalValue = ConvertToCurrencyBRL(totalItems + totalDelivery);

  function handleSubmitOrder(data: IFormInformationSchema) {
    addUserInformation(data);
    navigate("/success");
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSubmitOrder)}>
      <section>
        <h4>Complete seu pedido</h4>

        <OrderContainer>
          <SvgTitleInformation
            title="Endereço de entrega"
            informative="Informe o endereço onde deseja receber seu pedido"
            svg={<MapPinLine size={24} />}
            svgColor="yellowDark"
          />

          <FormProvider {...FormData}>
            <Inputs />
          </FormProvider>
        </OrderContainer>

        <OrderContainer>
          <SvgTitleInformation
            title="Pagamento"
            informative="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            svg={<CurrencyDollar size={24} />}
            svgColor="purple"
          />

          <FormProvider {...FormData}>
            <PaymentOptions />
          </FormProvider>
        </OrderContainer>
      </section>

      <section>
        <h4>Cafés selecionados</h4>

        <OrderCheckout>
          <List>
            {allCoffees.map((value) => (
              <li key={value.id}>
                <ItemMenu>
                  <img src={`src\\assets\\CoffeTypeSvgs\\Type=${value.name}.svg`} alt="" width={64} height={64} />

                  <ItemInformation>
                    <span>{value.name} <span>({ConvertToCurrencyBRL(value.unitPrice)} Und)</span></span>
                    <div>
                      <Counter {...value} />
                      <ButtonRemoval type="button" onClick={() => removeAllCoffeesFromID(value.id)}><Trash /> <span>Remover</span></ButtonRemoval>
                    </div>
                  </ItemInformation>
                </ItemMenu>

                <span>{ConvertToCurrencyBRL(value.price)}</span>
              </li>
            ))}
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