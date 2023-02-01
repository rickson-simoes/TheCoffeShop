import { CurrencyDollar, MapPinLine, Trash } from "phosphor-react";
import { useContext } from "react";
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { Counter } from "../../components/Counter";
import { BasketContext } from "../../contexts/basketContext";
import { ConvertToCurrencyBRL } from "../../Helpers/ConvertToCurrency";
import { Inputs } from "./Components/Inputs";
import { PaymentOptions } from "./Components/PaymentOptions";
import { SvgTitleInformation } from "./Components/SvgTitleInformation";
import { ButtonCheckoutOrder, ButtonRemoval, FormContainer, ItemInformation, ItemMenu, List, OrderCheckout, OrderContainer, TotalFontSizeBigger, TotalOrder } from "./styles";



export function CheckoutPage() {
  const obrigatoryField = { invalid_type_error: "Campo obrigatório" };

  const userInformationValidationSchema = zod.object({
    cep: zod.string(obrigatoryField).min(8, 'Cep inválido, Mín: 8 caracteres').max(9, 'Máx: 9 caracteres'),
    rua: zod.string(obrigatoryField).min(2, 'Mín: 2 caracteres').max(50, 'Máx: 50 caracteres'),
    numero: zod.number(obrigatoryField).min(1, 'Mín: 1 caracter'),
    complemento: zod.string().max(50, 'Max: 50 caracteres'),
    bairro: zod.string(obrigatoryField).min(2, 'Mín: 2 caracteres'),
    cidade: zod.string(obrigatoryField).min(2, 'Mín: 2 caracteres'),
    uf: zod.string(obrigatoryField).max(2, 'Máx: 2 caracteres'),
    formaPagamento: zod.string(obrigatoryField),
  });

  type IUserInformationValidationSchema = zod.infer<typeof userInformationValidationSchema>;

  const FormData = useForm<IUserInformationValidationSchema>({
    resolver: zodResolver(userInformationValidationSchema),
  });

  const { handleSubmit, formState } = FormData
  console.log(formState.errors);

  const { allCoffees, removeAll } = useContext(BasketContext);

  const totalItems = allCoffees.reduce((acc, item) => acc + item.price, 0);
  const totalDelivery = 3.50;
  const totalValue = ConvertToCurrencyBRL(totalItems + totalDelivery);

  function handleSubmitOrder(data: any) {
    console.log(data);
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
                      <ButtonRemoval type="button" onClick={() => removeAll(value.id)}><Trash /> <span>Remover</span></ButtonRemoval>
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