import { Outlet, useNavigate } from 'react-router-dom'
import { ActionBar, HeaderContainer, Content, NavItem } from './styles'

import CoffeDelivery from '../../assets/logo/coffe-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react';

export function Header() {
  const navigate = useNavigate();

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

            <NavItem href="#" background='yellowLight' svgColor='yellowDark'>
              <ShoppingCart weight="fill" size={22} />
            </NavItem>
          </ActionBar>
        </Content>
      </HeaderContainer>
      <Outlet />
    </>
  )
};