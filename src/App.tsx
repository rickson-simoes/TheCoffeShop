import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { BasketContextProvider } from "./contexts/basketContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <BrowserRouter>
        <BasketContextProvider>
          <Router />
        </BasketContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
};