import { Coffee, Minus, Package, Plus, ShoppingCart, ShoppingCartSimple, Timer } from 'phosphor-react';
import MainImageCoffee from '../../assets/Home/main-image-coffee.svg'
import { ActionMenu, CartButton, CoffeeDescription, CoffeeList, CoffeePriceTagMenu, CoffeeType, Content, Counter, Intro, ItemIcon, ItemsInformation, List, Main, TitleInformation } from "./style";

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

              <CoffeePriceTagMenu>
                <label>9,90</label>

                <ActionMenu>
                  <Counter>
                    <button type='button'> <Minus weight="bold" /> </button>
                    <span> 1 </span>
                    <button type='button'> <Plus weight="bold" /> </button>
                  </Counter>

                  <CartButton>
                    <ShoppingCartSimple weight="fill" />
                  </CartButton>
                </ActionMenu>
              </CoffeePriceTagMenu>
            </CoffeeType>
          </List>
        </div>
      </CoffeeList>
    </Main>
  )
};