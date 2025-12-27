import React from "react";
import { Box, Typography } from "@mui/material";

const AboutDetails = () => {
  return (
    <Box sx={{ minHeight: "100vh", p: 5 }}>
      <Typography variant="h2">Mais sobre a RSD Construções</Typography>
      <Typography mt={3}>
        Aqui você poderá detalhar mais informações sobre a empresa, equipe, histórico,
        projetos e conquistas.
      </Typography>
    </Box>
  );
};

export default AboutDetails;
