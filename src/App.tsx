import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { BasketContextProvider } from "./contexts/basketContext";
import { AddressContextProvider } from "./contexts/addressContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <BrowserRouter>
        <BasketContextProvider>
          <AddressContextProvider>
            <Router />
          </AddressContextProvider>
        </BasketContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
};