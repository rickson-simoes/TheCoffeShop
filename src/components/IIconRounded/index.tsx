import { BGColor, ItemIcon } from "./styles";

interface IIconRounded {
  svg: JSX.Element;
  backgroundColor: keyof typeof BGColor;
}

export function IconRounded({ svg, backgroundColor }: IIconRounded) {
  return (
    <>
      <ItemIcon backgroundColor={backgroundColor}>
        {svg}
      </ItemIcon>
    </>
  )
};