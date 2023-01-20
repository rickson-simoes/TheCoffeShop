import { Container, LinearGradientContainer, OrderInformation, SectionOrderReceived } from "./styles";
import ManBikeRiding from '../../assets/PedidoConfirmado/Ilustracao-homem-moto.svg'

export function SuccessPage() {
  return (
    <Container>
      <SectionOrderReceived>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <span>Agora é só aguardar que logo o café chagará até você</span>
        </div>

        <LinearGradientContainer>
          <OrderInformation>
            <div>
              svg
              <div>
                <span> Entrega em <strong>Rua João Daniel Martinelli, 102</strong></span>
                <span> Farrapos - Porto Alegre, RS</span>
              </div>
            </div>

            <div>
              svg
              <div>
                <span> Previsão de entrega</span>
                <span> <strong> 20 min - 30 min </strong></span>
              </div>
            </div>

            <div>
              svg
              <div>
                <span> Pagamento na entrega </span>
                <span> <strong>Cartão de crédito</strong></span>
              </div>
            </div>
          </OrderInformation>
        </LinearGradientContainer>
      </SectionOrderReceived>

      <section>
        <img src={ManBikeRiding} alt="Man riding a bike with a package in his back" />
      </section>
    </Container>
  )
};