import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { IconRounded } from "../../../../components/IconRounded";
import { Container } from "./styles";

export function ItemsInformation() {
  return (
    <Container>
      <span>
        <IconRounded backgroundColor='yellowDark' svg={<ShoppingCart weight="fill" />} />
        Compra simples e segura
      </span>
      <span>
        <IconRounded backgroundColor='darkGray' svg={<Package weight="fill" />} />
        Embalagem mantém o café intacto
      </span>
      <span>
        <IconRounded backgroundColor='yellow' svg={<Timer weight="fill" />} />
        Entrega rápida e rastreada
      </span>
      <span>
        <IconRounded backgroundColor='purple' svg={<Coffee weight="fill" />} />
        O café chega fresquinho até você
      </span>
    </Container>
  )
};