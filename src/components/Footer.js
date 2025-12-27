import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => (
  <Box
    sx={{
      bgcolor: "#0D1B2A",
      color: "white",
      py: 6,
      px: { xs: 4, md: 10 },
      borderTop: "1px solid rgba(255,255,255,0.1)",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
        maxWidth: "1300px",
        margin: "0 auto",
        gap: 6,
      }}
    >
      {/* COLUNA ESQUERDA */}
      <Box sx={{ minWidth: 250 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            letterSpacing: 1.5,
            fontFamily: "Montserrat, sans-serif",
            textTransform: "uppercase",
          }}
        >
          RSD Construções Ltda
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mt: 2,
            opacity: 0.8,
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Construindo com qualidade, segurança e compromisso.  
        </Typography>

        <Typography variant="body2" sx={{ mt: 2, opacity: 0.8 }}>
          Desenvolvido por{" "}
          <Link
            href="https://github.com/machadoyuri"
            color="#16DB65"
            underline="hover"
            sx={{ fontWeight: 600 }}
          >
            DevMSDaRosa
          </Link>
        </Typography>
      </Box>

      {/* COLUNA CENTRO */}
      <Box sx={{ minWidth: 200 }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            mb: 1,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          Localização
        </Typography>

        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Rua Palmeira, 256
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Campo Bom, RS – Brasil
        </Typography>
      </Box>

      {/* COLUNA DIREITA */}
      <Box sx={{ minWidth: 200 }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            mb: 1,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          Contato
        </Typography>

        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          rsdconstrucoes@gmail.com
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          (51) 99543-5133
        </Typography>
      </Box>
    </Box>

    {/* LINHA DIVISÓRIA */}
    <Box
      sx={{
        mt: 5,
        borderTop: "1px solid rgba(255,255,255,0.1)",
        pt: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="caption" sx={{ opacity: 0.6 }}>
        © {new Date().getFullYear()} RSD Construções. Todos os direitos reservados.
      </Typography>
    </Box>
  </Box>
);

export default Footer;
