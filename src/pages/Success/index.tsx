import { Container, InformationContent, LinearGradientContainer, OrderInformation, OrderReceived, OrderTitle } from "./styles";

import ManBikeRiding from '../../assets/PedidoConfirmado/Ilustracao-homem-moto.svg'
import { IconRounded } from '../../components/IconRounded';
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { AddressContext } from "../../contexts/addressContext";
import { useContext } from "react";

export function SuccessPage() {
  const { userInformation } = useContext(AddressContext);
  return (
    <Container>
      <OrderReceived>
        <OrderTitle>
          <h1>Uhu! Pedido confirmado</h1>
          <span>Agora é só aguardar que logo o café chagará até você</span>
        </OrderTitle>

        <LinearGradientContainer>
          <OrderInformation>
            <div>
              <IconRounded backgroundColor="purple" svg={<MapPin weight="fill" />} />
              <InformationContent>
                <span> Entrega em <strong>Rua {userInformation.rua}, {userInformation.numero}</strong></span>
                <span> {userInformation.bairro} - {userInformation.cidade}, {userInformation.uf}</span>
              </InformationContent>
            </div>

            <div>
              <IconRounded backgroundColor="yellow" svg={<Timer weight="fill" />} />
              <InformationContent>
                <span> Previsão de entrega</span>
                <span> <strong> 20 min - 30 min </strong></span>
              </InformationContent>
            </div>

            <div>
              <IconRounded backgroundColor="yellowDark" svg={<CurrencyDollar weight="fill" />} />
              <InformationContent>
                <span> Pagamento na entrega </span>
                <span> <strong>{userInformation.formaPagamento}</strong></span>
              </InformationContent>
            </div>
          </OrderInformation>
        </LinearGradientContainer>
      </OrderReceived>

      <section>
        <img src={ManBikeRiding} alt="Man riding a bike with a package in his back" />
      </section>
    </Container>
  )
};