import styled from "styled-components";

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 70rem;
  margin: 0 auto;
  gap: 2rem;

  > section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const OrderContainer = styled.div`
  background-color: ${props => props.theme["gray-200"]};
  border-radius: 6px;
  padding: 2.5rem;
  max-width: 40rem;
`

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const PaymentOptions = styled.div`
  display: flex;
  gap: 1rem;
`