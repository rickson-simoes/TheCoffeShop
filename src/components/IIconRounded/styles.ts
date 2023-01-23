import styled from "styled-components";

export const BGColor = {
  purple: 'purple',
  yellowDark: 'yellowDark',
  yellow: 'yellow',
  darkGray: 'gray-700',
} as const;

interface IItemIcon {
  backgroundColor: keyof typeof BGColor;
}

export const ItemIcon = styled.div<IItemIcon>`
  background: ${props => props.theme[BGColor[props.backgroundColor]]};
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 50%;
  color: ${props => props.theme.white};
  margin-right: 0.5rem;
`