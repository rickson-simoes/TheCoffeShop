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
  box-shadow: inset 1px 1px 20px 10px ${props => props.theme["gray-100"]};
  width: 100%;

  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 34rem;
  width: 1120px;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;

    max-width: 36.75rem;
    height: 342px;    
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
  grid-template-columns: repeat(2, 1fr);
`

// FAZER O BACKGROUND REDONDO DOS SVGS