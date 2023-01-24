import { ShoppingCartSimple } from 'phosphor-react';

import MainImageCoffee from '../../assets/Home/main-image-coffee.svg'
import { Counter } from '../../components/Counter';
import { ItemsInformation } from './Components/ItemsInformation';
import { TitleInformation } from './Components/TitleInformation';
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
  List,
  Main,
  SectionContent
} from "./styles";

export function Home() {
  return (
    <Main>
      <Intro>
        <Content>
          <SectionContent>
            <TitleInformation />

            <ItemsInformation />
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

                  <CartButton href='/checkout'>
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