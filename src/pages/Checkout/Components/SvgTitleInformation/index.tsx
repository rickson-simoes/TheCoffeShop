import { Container, AdressDeliveryText, AdressInformationText, ThemeColors } from "./styles";


interface IAddressInformation {
  svg: JSX.Element;
  title: string;
  informative: string;
  svgColor: keyof typeof ThemeColors;
}

export function SvgTitleInformation({ informative, svg, title, svgColor }: IAddressInformation) {
  return (
    <Container color={svgColor}>
      {svg}

      <AdressDeliveryText>
        {title}
      </AdressDeliveryText>

      <span></span>

      <AdressInformationText>
        {informative}
      </AdressInformationText>
    </Container>
  )
}