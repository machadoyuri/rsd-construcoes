import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import logoRSD from "../assets/logoRSD.png";

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const Navbar = () => {
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // se rolar mais de 100px, troca o fundo pra preto
      if (scrollY > 100) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={transparent ? 0 : 4}
      sx={{
        height: '9vh',
        p: 1,
        transition: "background-color 0.4s ease, box-shadow 0.4s ease",
        bgcolor: transparent ? "transparent" : "#000.0.1",
        color: "white",
      }}
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logoRSD}
            alt="Logo RSD"
            style={{ width: 80, marginRight: 16, marginTop: -50 }}
          />
        </Box>

        {/* Botões de navegação */}
        <Box sx={{ display: "flex", gap: 5, marginTop: -3}}>
          <Button color="inherit" onClick={() => scrollToSection("home")}>Home</Button>
          <Button color="inherit" onClick={() => scrollToSection("services")}>Serviços</Button>
          <Button color="inherit" onClick={() => scrollToSection("about")}>Sobre</Button>
          <Button color="inherit" onClick={() => scrollToSection("orcamento")}>Orçamentos</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
