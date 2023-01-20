import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 70rem;

  display: flex;
  justify-content: space-between;
`

export const SectionOrderReceived = styled.section`
   display: flex;
   flex-direction: column;
   gap: 2rem;
`

export const LinearGradientContainer = styled.div`
  background-image: 
    linear-gradient(${props => props.theme.white},${props => props.theme.white}),
    linear-gradient(to left, ${props => props.theme.purple}, ${props => props.theme.yellow});
  
  border-radius: 0.4rem 2.2rem;
  border: solid 1px transparent;
  background-origin: border-box;
  background-clip: content-box, border-box;
`

export const OrderInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2.5rem;
`