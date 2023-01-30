import { IProduct } from "../interfaces";

export const Products: IProduct[] = [
  {
    id: crypto.randomUUID(),
    name: "Expresso",
    unitPrice: 2.90,
    price: 2.90,
    label: [
      "tradicional"
    ],
    description: "O tradicional café feito com água quente e grãos moídos."
  },
  {
    id: crypto.randomUUID(),
    name: "Americano",
    unitPrice: 1.90,
    price: 1.90,
    label: [
      "tradicional",
    ],
    description: "Expresso diluído, menos intenso que o tradicional"
  },
  {
    id: crypto.randomUUID(),
    name: "Expresso Cremoso",
    unitPrice: 3.90,
    price: 3.90,
    label: [
      "tradicional"
    ],
    description: "Café expresso tradicional com espuma cremosa"
  },
  {
    id: crypto.randomUUID(),
    name: "Café Gelado",
    unitPrice: 3.90,
    price: 3.90,
    label: [
      "tradicional"
    ],
    description: "Bebida preparada com café expresso e cubos de gelo"
  },
  {
    id: crypto.randomUUID(),
    name: "Café com leite",
    unitPrice: 4.90,
    price: 4.90,
    label: [
      "tradicional",
      "com leite"
    ],
    description: "Meio a meio de expresso tradicional com leite vaporizado"
  },
  {
    id: crypto.randomUUID(),
    name: "Latte",
    unitPrice: 4.50,
    price: 4.50,
    label: [
      "tradicional",
      "com leite"
    ],
    description: "Meio a meio de expresso tradicional com leite vaporizado"
  },
  {
    id: crypto.randomUUID(),
    name: "Capuccino",
    unitPrice: 5.40,
    price: 5.40,
    label: [
      "tradicional",
      "com leite"
    ],
    description: "Bebida com canela feita de doses iguais de café, leite e espuma"
  },
  {
    id: crypto.randomUUID(),
    name: "Macchiato",
    unitPrice: 5.90,
    price: 5.90,
    label: [
      "tradicional",
      "com leite"
    ],
    description: "Bebida com canela feita de doses iguais de café, leite e espuma"
  },
  {
    id: crypto.randomUUID(),
    name: "Mochaccino",
    unitPrice: 5.90,
    price: 5.90,
    label: [
      "tradicional",
      "com leite"
    ],
    description: "Café expresso com calda de chocolate, pouco leite e espuma"
  },
  {
    id: crypto.randomUUID(),
    name: "Chocolate Quente",
    unitPrice: 5.90,
    price: 5.90,
    label: [
      "especial",
      "com leite"
    ],
    description: "Café expresso com calda de chocolate, pouco leite e espuma"
  },
  {
    id: crypto.randomUUID(),
    name: "Cubano",
    unitPrice: 6.90,
    price: 6.90,
    label: [
      "especial",
      "gelado",
      "alcoólico"
    ],
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã"
  },
  {
    id: crypto.randomUUID(),
    name: "Havaiano",
    unitPrice: 6.10,
    price: 6.10,
    label: [
      "especial",
      "gelado",
    ],
    description: "Bebida adocicada preparada com café e leite de coco"
  },
  {
    id: crypto.randomUUID(),
    name: "Árabe",
    unitPrice: 5.90,
    price: 5.90,
    label: [
      "especial",
    ],
    description: "Bebida preparada com grãos de café árabe e especiarias"
  },
  {
    id: crypto.randomUUID(),
    name: "Irlandês",
    unitPrice: 7.50,
    price: 7.50,
    label: [
      "especial",
      "gelado",
      "Alcoólico",
    ],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly"
  },
]