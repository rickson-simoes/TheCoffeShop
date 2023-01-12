import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import MainImageCoffee from '../../assets/Home/main-image-coffee.svg'
import { CoffeeDescription, CoffeeList, CoffeeType, Content, Intro, ItemIcon, ItemsInformation, List, Main, TitleInformation } from "./style";

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
                <ItemIcon backgroundColor='yellowDark'>
                  <ShoppingCart weight="fill" />
                </ItemIcon>
                Compra simples e segura
              </span>
              <span>
                <ItemIcon backgroundColor='darkGray'>
                  <Package weight="fill" />
                </ItemIcon>
                Embalagem mantém o café intacto
              </span>
              <span>
                <ItemIcon backgroundColor='yellow'>
                  <Timer weight="fill" />
                </ItemIcon>
                Entrega rápida e rastreada
              </span>
              <span>
                <ItemIcon backgroundColor='purple'>
                  <Coffee weight="fill" />
                </ItemIcon>
                O café chega fresquinho até você
              </span>
            </ItemsInformation>
          </section>

          <section>
            <img src={MainImageCoffee} alt="Imagem de um copo com a logo CoffeeDelivery" width='476' height='360' />
          </section>
        </Content>
      </Intro>

      <CoffeeList>
        <div>
          <h2>Nossos cafés</h2>
          <List>
            <CoffeeType>
              <img src="src\assets\CoffeTypeSvgs\Type=Expresso.svg" alt="" width={120} height={120} />
              <label>tradicional</label>
              <CoffeeDescription>
                <h4>Expresso Tradicional</h4>
                <span>O tradicional café feito com água quente e grãos moídos</span>
              </CoffeeDescription>
              <div>
                <div>R$ 9,90</div>
                <div>
                  <span> - </span>
                  <span> 1 </span>
                  <span> + </span>
                </div>
                <div>
                  <ShoppingCart weight="fill" />
                </div>
              </div>
            </CoffeeType>
          </List>
        </div>
      </CoffeeList>
    </Main>
  )
};