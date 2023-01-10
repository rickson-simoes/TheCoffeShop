import styled from "styled-components";


export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`

export const Content = styled.div`
  width: 51.25rem;
  display: flex;
  justify-content: space-between;

  img {
    cursor: pointer;
  }
`;

export const ActionBar = styled.nav`
  display: flex;
  gap: 0.750rem;
`;

const Colors = {
  purple: 'purple',
  purpleLight: 'purpleLight',
  purpleDark: 'purpleDark',
  yellowLight: 'yellowLight',
  yellowDark: 'yellowDark',
  white: 'white'
} as const

interface NavItemProps {
  background: keyof typeof Colors;
  fontColor?: keyof typeof Colors;
  svgColor?: keyof typeof Colors;
}

export const NavItem = styled.a<NavItemProps>`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  background: ${props => props.theme[Colors[props.background]]};
  color: ${props => props.theme[Colors[props.fontColor!]]};
  border-radius: 6px;
  gap: 0.25rem;

  svg {
    color: ${props => props.theme[Colors[props.svgColor!]]};
  }

  span {
    font-size: 0.875rem;
  }
`

export const Counter = styled.div`
  position: absolute;
  margin-bottom: 2.5rem;
  margin-left: 1rem;

  span {
    overflow: hidden;
    display: grid;
    place-items: center;
    background: ${props => props.theme.yellowDark} ;
    border-radius: 50%;
    width: 1.35rem;
    height: 1.25rem;
    font-size: 0.750rem;    
  }
`
