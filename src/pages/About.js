import React from "react";
import { Box, Typography, Button } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        p: { xs: 4, md: 12 },
        alignItems: "center",
        justifyContent: "center",
        pt: 12,
        backgroundColor: "#1F4E79",
        color: "white",
        gap: 6,
      }}
    >
      {/* TEXTOS */}
      <Box sx={{ flex: 1, maxWidth: 600 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Sobre Nossa Marca
        </Typography>

        <Typography
          sx={{
            mt: 3,
            lineHeight: 1.7,
            fontSize: 18,
            opacity: 0.95,
            fontFamily: "Roboto, sans-serif",
          }}
        >
          A RSD Construções é especializada em soluções completas para obras,
          manutenção e infraestrutura. Atuamos com excelência e compromisso,
          oferecendo serviços de alta qualidade para clientes residenciais e corporativos.
        </Typography>

        <Typography
          sx={{
            mt: 2,
            lineHeight: 1.7,
            fontSize: 18,
            opacity: 0.95,
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Com uma trajetória sólida e profissionais experientes, valorizamos
          segurança, eficiência e transparência em cada projeto realizado.
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 4,
            px: 4,
            py: 1.5,
            fontSize: 16,
            fontWeight: 600,
            borderRadius: "8px",
            backgroundColor: "#2A9B3B",
            letterSpacing: 1,
            "&:hover": {
              backgroundColor: "#238B33",
              transform: "scale(1.03)",
              boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
            },
            transition: "0.3s",
          }}
        >
          Saiba Mais
        </Button>
      </Box>

      {/* IMAGEM */}
      <Box sx={{ flex: 1, textAlign: "center" }}>
        <img
          src="/sobre-imagem.jpg"
          alt="Sobre RSD"
          style={{
            width: "85%",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          }}
        />
      </Box>
    </Box>
  );
};

export default About;
