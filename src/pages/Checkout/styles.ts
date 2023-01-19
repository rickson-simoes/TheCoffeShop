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
    gap: 1rem;
  }
`

export const OrderContainer = styled.div`
  background-color: ${props => props.theme["gray-200"]};
  border-radius: 6px;
  padding: 2.5rem;
  max-width: 40rem;
  
  display: flex;
  flex-direction: column;
  gap: 2rem;  
`

export const OrderCheckout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2rem;
  border-radius: 0.375rem 2.75rem; 

  background-color: ${props => props.theme["gray-200"]};
`
export const List = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    display: flex;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${props => props.theme["gray-400"]};
  }
`