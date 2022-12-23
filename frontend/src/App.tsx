import React from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./components/molecules/Footer";
import theme from "./Theme/theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Footer/>
    </div>
    </ThemeProvider>
    
  );
}

