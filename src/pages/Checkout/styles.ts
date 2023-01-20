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
    justify-content: space-between;

    padding: 1rem 0 2rem;
    border-bottom: 1px solid ${props => props.theme["gray-400"]};

    > div {
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }

    > span {
      font-weight: 700;
    }
  }
`

export const ItemMenu = styled.div`
 display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const ItemInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    display: flex;
    gap: 0.6rem;
  }

  > span {
    color: ${props => props.theme["gray-800"]}
  }
`

export const ButtonRemoval = styled.button`
    background-color:${props => props.theme["gray-400"]};
    transition: all 0.1s;

    display: inline-flex;
    align-items: center;
    gap: 0.325rem;

    border-radius: 6px;
    padding: 0.5rem;
    border: 0;

    cursor: pointer;

    &:hover {
      background-color:${props => props.theme["gray-500"]};
    }

    > svg {
      color: ${props => props.theme.purple}
    }

    > span {
      font-size: 0.75rem;
      color: ${props => props.theme["gray-700"]};
      text-transform: uppercase;
    }
`

export const TotalOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    justify-content: space-between;
  }
`

export const TotalFontSizeBigger = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
`

export const ButtonCheckoutOrder = styled.button`
  background-color: ${props => props.theme.yellow};
  color: ${props => props.theme.white};

  cursor: pointer;
  padding: 1rem;
  text-transform: uppercase;
  border: 0;
  border-radius: 6px;

  :hover {
    opacity: 0.8;
  }
`