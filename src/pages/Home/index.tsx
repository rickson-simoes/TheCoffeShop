import { Coffee, Package, ShoppingCart, ShoppingCartSimple, Timer } from 'phosphor-react';
import MainImageCoffee from '../../assets/Home/main-image-coffee.svg'
import { Counter } from '../../components/Counter';
import { IconRounded } from '../../components/IIconRounded';
import {
  ActionMenu,
  CartButton,
  CoffeeDescription,
  CoffeeLabels,
  CoffeeList,
  CoffeePriceTagMenu,
  CoffeeType,
  Content,
  Intro,
  ItemsInformation,
  List,
  Main,
  SectionContent,
  TitleInformation
} from "./styles";

export function Home() {
  return (
    <Main>
      <Intro>
        <Content>
          <SectionContent>
            <TitleInformation>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
              </span>
            </TitleInformation>

            <ItemsInformation>
              <span>
                <IconRounded backgroundColor='yellowDark' svg={<ShoppingCart weight="fill" />} />
                Compra simples e segura
              </span>
              <span>
                <IconRounded backgroundColor='darkGray' svg={<Package weight="fill" />} />
                Embalagem mantém o café intacto
              </span>
              <span>
                <IconRounded backgroundColor='yellow' svg={<Timer weight="fill" />} />
                Entrega rápida e rastreada
              </span>
              <span>
                <IconRounded backgroundColor='purple' svg={<Coffee weight="fill" />} />
                O café chega fresquinho até você
              </span>
            </ItemsInformation>
          </SectionContent>

          <SectionContent>
            <img src={MainImageCoffee} alt="Imagem de um copo com a logo CoffeeDelivery" width='476' height='360' />
          </SectionContent>
        </Content>
      </Intro>

      <CoffeeList>
        <div>
          <h2>Nossos cafés</h2>
          <List>
            <CoffeeType>
              <img src="src\assets\CoffeTypeSvgs\Type=Expresso.svg" alt="" width={120} height={120} />

              <CoffeeLabels>
                <label>tradicional</label>
                <label>com leite</label>
                <label>alcoolico</label>
              </CoffeeLabels>

              <CoffeeDescription>
                <h4>Expresso Tradicional</h4>
                <span>O tradicional café feito com água quente e grãos moídos</span>
              </CoffeeDescription>

              <CoffeePriceTagMenu>
                <label>9,90</label>

                <ActionMenu>
                  <Counter />

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