import React, { useState } from "react";
import {
  Box,
  TextField,
  Grid,
  Typography,
  Button,
  MenuItem,
  Divider,
} from "@mui/material";

export default function Orcamento() {
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Enviado");
  }

  return (
    <Box
      id="orcamento"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e2e8f0, #cbd5e1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        py: 10,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "85vh",
          maxWidth: 900,
          background: "#fff",
          borderRadius: 2,
          p: 4,
          boxShadow: "0 10px 30px rgba(0,0,0,.15)",
        }}
      >
        <Typography variant="h4" fontWeight={700} textAlign="center">
          Solicitar Orçamento
        </Typography>

        <Typography textAlign="center" color="text.secondary" mb={3}>
          Preencha os dados abaixo
        </Typography>

        <Divider sx={{ mb: 4 }} />

        <Box component="form" onSubmit={handleSubmit}>
          {/* LINHAS SUPERIORES */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Nome" name="nome" onChange={handleChange} />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Sobrenome" name="sobrenome" onChange={handleChange} />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Whatsapp" name="whatsapp" onChange={handleChange} />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Email" name="email" onChange={handleChange} />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Endereço" name="endereco" onChange={handleChange} />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField 
                fullWidth
                select
                label="Serviços Desejados"
                name="servico"
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              >

                <MenuItem value="">Selecione</MenuItem>
                <MenuItem value="Casa do zero">Casa do zero</MenuItem>
                <MenuItem value="Reforma interna">Reforma interna</MenuItem>
                <MenuItem value="Reforma externa">Reforma externa</MenuItem>
                <MenuItem value="Pisos">Pisos</MenuItem>
                <MenuItem value="Decks">Decks</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          {/* QUEBRA FORÇADA DE LINHA */}
          <Box mt={4}>
            <TextField
              fullWidth
              multiline
              minRows={3}
              label="Especificações"
              name="especificacoes"
              onChange={handleChange}
            />
          </Box>

          {/* BOTÃO NO CANTO INFERIOR DIREITO */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 3,
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                px: 5,
                py: 1.5,
                fontWeight: 700,
              }}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
