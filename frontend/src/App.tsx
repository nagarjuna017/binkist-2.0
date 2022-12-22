import React from "react";
import { ThemeProvider } from "styled-components";
import Banner from "./components/molecules/Banner";
import theme from "./Theme/theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Banner/>
    </div>
    </ThemeProvider>
    
  );
}

