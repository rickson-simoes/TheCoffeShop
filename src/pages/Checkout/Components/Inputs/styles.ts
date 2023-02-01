import styled from "styled-components"


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

export const RowInputsOne = styled.div`
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

export const RowInputsTwo = styled.div`
  display: flex;
  gap: 1rem;

  input:nth-child(2) {
    width: 17.25rem;
  }

  input:last-child {
    width: 3.75rem;
  }
`