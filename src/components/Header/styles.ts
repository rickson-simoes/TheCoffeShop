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
