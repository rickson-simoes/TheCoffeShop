import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 70rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const OrderReceived = styled.section`
   display: flex;
   flex-direction: column;
   gap: 2rem;
`

export const OrderTitle = styled.div`
  h1 {
    color: ${props => props.theme.yellowDark};
    font-size: 2rem;
    font-weight: 800;
  }

  span {
    color: ${props => props.theme["gray-800"]};
    font-size: 1.25rem;
  }
`;

export const LinearGradientContainer = styled.div`
  background-image: 
    linear-gradient(${props => props.theme["gray-100"]},${props => props.theme["gray-100"]}),
    linear-gradient(to left, ${props => props.theme.purple}, ${props => props.theme.yellow});
  
  border-radius: 0.4rem 2.2rem;
  border: solid 1px transparent;
  background-origin: border-box;
  background-clip: content-box, border-box;
`

export const OrderInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const InformationContent = styled.div`
  display: flex;
  flex-direction: column;
`