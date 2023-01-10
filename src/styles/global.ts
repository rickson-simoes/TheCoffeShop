import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box ;
  }

  body {
    background: ${props => props.theme['gray-100']};
    color: ${props => props.theme['gray-700']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Baloo 2', cursive;
    color: ${props => props.theme['gray-900']}
  }

  a {
    text-decoration: none ;
    color: ${props => props.theme['gray-700']};
  }
`;