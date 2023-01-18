import styled from "styled-components";


export const ThemeColors = {
  yellowDark: 'yellowDark',
  purple: 'purple'
} as const

interface IContainerSvgColor {
  color: keyof typeof ThemeColors;
}

export const Container = styled.div<IContainerSvgColor>`
    display: grid;
    align-items: center;
    column-gap: 0.5rem;
    grid-template-columns: max-content 1fr;

    svg {
      color: ${props => props.theme[props.color]}
    }
`

export const AdressDeliveryText = styled.span`
  color: ${props => props.theme["gray-800"]};
`

export const AdressInformationText = styled.span`
  font-size: 0.875rem;
`