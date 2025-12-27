import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import FormsOrc from "./pages/Orcamento";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="formsRsd">
        <FormsOrc />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
