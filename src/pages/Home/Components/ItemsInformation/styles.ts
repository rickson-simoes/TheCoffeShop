import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 1.25rem;

  @media (max-width:1100px) {
    grid-template-columns: 1fr 1fr;
  } 

  span {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  `