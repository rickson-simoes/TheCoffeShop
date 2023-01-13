import styled from "styled-components";
import MainBackground from '../../assets/Home/main-background.svg';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`

export const Intro = styled.div`
  background-image: url(${MainBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;  
  box-shadow: inset 0px 1px 16px 15px ${props => props.theme["gray-100"]};
  padding: 1rem 0;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 70rem;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;

    max-width: 36.75rem;
  }
`

export const TitleInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
  }  

  span {
    font-size: 1.25rem;
  }
`

export const ItemsInformation = styled.div`
  display: grid;
  grid-template-columns: 1fr 55%;
  gap: 1.25rem;

  span {
    display: flex;
    align-items: center;
  }
  
`
const BGColor = {
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
  color: white;
  margin-right: 0.5rem;
`


export const CoffeeList = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 3.375rem;
    width: 70rem;

    > h2 {
      font-weight: 800;
    }
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`

export const CoffeeType = styled.div`
  background-color:${props => props.theme["gray-200"]};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > img {
    // 120 pelo tamanho da imagem, e 0.16 pela porcentagem da imagem que quero que fique de fora
    // 120 tamanho * 0,16% 
    margin-top: calc(0px - 120*0.16px);
  }
`

export const CoffeeLabels = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.2rem;
  flex-wrap: wrap;

  > label {
    background-color:${props => props.theme.yellowLight};
    color:${props => props.theme.yellowDark};

    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    border-radius: 6.25rem;
    
    transition: all 0.1s;
    :hover {
      background-color: ${props => props.theme.yellowDark};
      color: white;
    }
  }
`

export const CoffeeDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  padding: 0px 20px;


  > h4 {
    color: ${props => props.theme["gray-800"]};
    font-size: 1.25rem;
  }

  > span {
    color: ${props => props.theme["gray-600"]};
    font-size: 0.875rem;
    text-align: center;
  }

`

export const CoffeePriceTagMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1.25rem;

  label {
    font-size: 1.5rem;
    font-family: 'Baloo 2',cursive;
    font-weight: 800;

    &::before {
      font-family: 'roboto', sans-serif;
      content: "R$ ";
      font-size: 0.875rem;
      font-weight: 400;
    }
  }
`

export const ActionMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `


export const Counter = styled.div`
  background-color:${props => props.theme["gray-400"]};

  display: flex;
  gap: 10px;
  border-radius: 6px;
  padding: 0.5rem;

  button {
    color:${props => props.theme.purple};
    background-color: transparent;
    
    border: 0;
    line-height:0;
    cursor: pointer;
  }

  span {
    color:${props => props.theme["gray-900"]};
  }
`

export const CartButton = styled.div`
  background-color: ${props => props.theme.purpleDark};
  color: ${props => props.theme.white};
  border-radius: 6px;
  padding: 8px;
  line-height:0;
  transition: all 0.1s;
  
  :hover {
      background-color: ${props => props.theme.purple};
    }
`