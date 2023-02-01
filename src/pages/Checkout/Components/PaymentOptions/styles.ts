import styled from "styled-components";


export const PaymentContainer = styled.div`
  display: flex;
  gap: 1rem;
`

interface ILabelPayment {
  checked: boolean;
}

export const LabelPayment = styled.label<ILabelPayment>`
  background-color: ${props => props.checked ? props.theme.purpleLight : props.theme["gray-400"]};
  outline: transparent;
  box-shadow: 0 0 0 1px ${props => props.checked ? props.theme.purple : 0};

  display: flex;
  flex: 1;
  align-items: center;
  gap: 0.6rem;

  border-radius: 6px;
  padding: 1rem;    
  font-size: 0.75rem;
  text-transform: uppercase;
  cursor: pointer;

  transition: all 0.1s;

  &:hover {
    background-color: ${props => props.theme["gray-500"]};;
  }  

  svg {
    color: ${props => props.theme.purple};
    line-height: 0;
  } 
`