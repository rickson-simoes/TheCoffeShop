import styled from "styled-components"

export const CounterField = styled.div`
  background-color:${props => props.theme["gray-400"]};

  display: flex;
  gap: 10px;
  border-radius: 6px;
  padding: 0.5rem;

  button {
    color:${props => props.theme.purple};
    background-color: transparent;
    
    border: 0;
    line-height:0;
    cursor: pointer;
  }

  span {
    color:${props => props.theme["gray-900"]};
  }
`