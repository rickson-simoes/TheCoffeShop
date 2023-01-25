export function ConvertToCurrency(price: number) {
  const number = price;
  const formattedNumber = number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', useGrouping: false });

  const [, Price] = formattedNumber.split(" ");

  return Price;
}