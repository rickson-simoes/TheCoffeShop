import { Outlet, useNavigate } from 'react-router-dom'
import { ActionBar, HeaderContainer, Content, NavItem, ItemsQuantityNotification } from './styles'

import CoffeDelivery from '../../assets/logo/coffe-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react';
import { BasketContext } from '../../App';
import { useContext } from 'react';

export function Header() {
  const navigate = useNavigate();
  const { products } = useContext(BasketContext);

  return (
    <>
      <HeaderContainer>
        <Content>
          <img src={CoffeDelivery} alt="" onClick={() => navigate("/")} />

          <ActionBar>
            <NavItem
              href="#"
              background='purpleLight'
              fontColor='purpleDark'
              svgColor='purple'
            >
              <MapPin weight="fill" size={22} />

              <span>Porto Alegre, RS</span>
            </NavItem>

            <NavItem href="/checkout" background='yellowLight' svgColor='yellowDark' fontColor='white'>
              <ItemsQuantityNotification>
                {products.length > 0 && <span>{products.length}</span>}
              </ItemsQuantityNotification>
              <ShoppingCart weight="fill" size={22} />
            </NavItem>
          </ActionBar>
        </Content>
      </HeaderContainer>
      <Outlet />
    </>
  )
};