import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import MainImageCoffee from '../../assets/Home/main-image-coffee.svg'
import { Content, Intro, ItemsInformation, Main, TitleInformation } from "./style";

export function Home() {
  return (
    <Main>
      <Intro>
        <Content>
          <section>
            <TitleInformation>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
              </span>
            </TitleInformation>

            <ItemsInformation>
              <span>
                <ShoppingCart weight="fill" />
                Compra simples e segura
              </span>
              <span>
                <Package weight="fill" />
                Embalagem mantém o café intacto
              </span>
              <span>
                <Timer weight="fill" />
                Entrega rápida e rastreada
              </span>
              <span>
                <Coffee weight="fill" />
                O café chega fresquinho até você
              </span>
            </ItemsInformation>
          </section>

          <section>
            <img src={MainImageCoffee} alt="Imagem de um copo com a logo CoffeeDelivery" width='476' height='360' />
          </section>
        </Content>
      </Intro>

      <div>
        <h2>Nossos cafés</h2>
      </div>
    </Main>
  )
};