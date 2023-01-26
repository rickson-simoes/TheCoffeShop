export function ConvertToCurrency(price: number) {
  const formattedNumber = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', useGrouping: false });

  const [, Price] = formattedNumber.split(" ");

  return Price;
}

export function ConvertToCurrencyBRL(price: number) {
  const formattedNumber = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', useGrouping: false });

  return formattedNumber;
}