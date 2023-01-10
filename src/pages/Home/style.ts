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