import { Container, AdressDeliveryText, AdressInformationText, ThemeColors } from "./styles";

interface ISvgTitleInformation {
  svg: JSX.Element;
  title: string;
  informative: string;
  svgColor: keyof typeof ThemeColors;
}

export function SvgTitleInformation({ informative, svg, title, svgColor }: ISvgTitleInformation) {
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