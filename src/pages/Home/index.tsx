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
import { NavLink } from 'react-router-dom';
import { ConvertToCurrency } from '../../Helpers/ConvertToCurrency';
import { Products } from '../../Products';

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
            <img src={MainImageCoffee} alt="Imagem de um copo com a logo CoffeeDelivery" />
          </SectionContent>
        </Content>
      </Intro>

      <CoffeeList>
        <div>
          <h2>Nossos cafés</h2>
          <form>
            <List>
              {Products.map(product => (
                <CoffeeType key={product.name}>
                  <img src={`src\\assets\\CoffeTypeSvgs\\Type=${product.name}.svg`} alt="" width={120} height={120} />

                  <CoffeeLabels>
                    {product.label.map((labelName) => (
                      <label key={labelName}>{labelName}</label>
                    ))}
                  </CoffeeLabels>

                  <CoffeeDescription>
                    <h4>{product.name}</h4>
                    <span>{product.description}</span>
                  </CoffeeDescription>

                  <CoffeePriceTagMenu>
                    <label>{ConvertToCurrency(product.price)}</label>

                    <ActionMenu>
                      <Counter id={product.id} name={product.name} price={product.price} unitPrice={product.unitPrice} />

                      <NavLink to="/checkout" title="Checkout cart">
                        <CartButton>
                          <ShoppingCartSimple weight="fill" />
                        </CartButton>
                      </NavLink>
                    </ActionMenu>
                  </CoffeePriceTagMenu>
                </CoffeeType>
              ))}
            </List>
          </form>
        </div>
      </CoffeeList>
    </Main>
  )
};