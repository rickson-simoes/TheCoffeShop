import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { ActionBar, HeaderContainer, Content, NavItem, ItemsQuantityNotification } from './styles'

import CoffeDelivery from '../../assets/logo/coffe-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { BasketContext } from '../../contexts/basketContext';
import { AddressContext } from '../../contexts/addressContext';

export function Header() {
  const navigate = useNavigate();
  const { allCoffees } = useContext(BasketContext);
  const { userInformation } = useContext(AddressContext);

  return (
    <>
      <HeaderContainer>
        <Content>
          <img src={CoffeDelivery} alt="" onClick={() => navigate("/")} />

          <ActionBar>
            <NavLink to="/checkout">
              <NavItem
                background='purpleLight'
                fontColor='purpleDark'
                svgColor='purple'
              >
                <MapPin weight="fill" size={22} />

                <span>{userInformation.cidade == undefined ? "Adicione um endereço" : `${userInformation.cidade}, ${userInformation.uf}`}</span>
              </NavItem>
            </NavLink>

            <NavLink to="/checkout">
              <NavItem background='yellowLight' svgColor='yellowDark' fontColor='white'>
                <ItemsQuantityNotification>
                  {allCoffees.length > 0 && <span>{allCoffees.length}</span>}
                </ItemsQuantityNotification>
                <ShoppingCart weight="fill" size={22} />
              </NavItem>
            </NavLink>
          </ActionBar>
        </Content>
      </HeaderContainer>
      <Outlet />
    </>
  )
};