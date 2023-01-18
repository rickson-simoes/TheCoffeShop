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

export const AddressInformations = styled.div`
    display: grid;
    align-items: center;
    column-gap: 0.5rem;
    grid-template-columns: max-content 1fr;

    svg {
      color: ${props => props.theme.yellowDark}
    }
`

export const AdressDeliveryText = styled.span`
  color: ${props => props.theme["gray-800"]};
`

export const AdressInformationText = styled.span`
  font-size: 0.875rem;
`

export const AddressInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CustomInput = styled.input`
  padding: 0.725rem;
  background-color: ${props => props.theme["gray-300"]};
  border: 1px solid ${props => props.theme["gray-400"]};
  border-radius: 6px;

  &::placeholder {
    font-size: 0.875rem;
  }

  &:focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${props => props.theme.yellow};
  }
`

export const InputRowCustomOne = styled.div`
  display: flex;
  gap: 1rem;
`

export const OptionalInput = styled.div`
  background-color: ${props => props.theme["gray-300"]};
  border: 1px solid ${props => props.theme["gray-400"]};
  display: grid;
  grid-template-columns: 1fr min-content;
  flex: 1;
  align-items: center;
  border-radius: 6px;

  &:focus-within {
    box-shadow: 0 0 0 2px ${props => props.theme.yellow};
  }

  input {
    border: none;
    
    &:focus {
      box-shadow: 0 0 0 0px;
    }
  }

  span {
    font-size: 0.75rem;
    font-style: italic;
    margin-right: 0.5rem;
    color: ${props => props.theme["gray-600"]}
  }
`

export const InputRowCustomTwo = styled.div`
  display: flex;
  gap: 1rem;

  input:nth-child(2) {
    width: 17.25rem;
  }

  input:last-child {
    width: 3.75rem;
  }
`

export const Payment = styled.div`

`