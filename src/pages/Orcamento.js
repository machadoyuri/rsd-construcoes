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
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    whatsapp: "",
    email: "",
    servico: "",
    endereco: "",
    especificacoes: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/enviar-orcamento", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    response.ok
      ? alert("Orçamento enviado com sucesso!")
      : alert("Erro ao enviar orçamento.");
  }

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e2e8f0, #cbd5e1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        py: 8,
        px: 2,
      }}
    >
      {/* CARD PRINCIPAL */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "760px",
          background: "#ffffff",
          borderRadius: "22px",
          p: { xs: 4, sm: 5 },
          boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.9rem", md: "2.4rem" },
              color: "#1e293b",
            }}
          >
            Solicitar Orçamento
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              color: "#475569",
              mt: 1,
            }}
          >
            Preencha seus dados para receber um orçamento detalhado.
          </Typography>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {/* FORM */}
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
                sx={{ background: "#F8FAFC", borderRadius: "10px" }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Sobrenome"
                name="sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
                sx={{ background: "#F8FAFC", borderRadius: "10px" }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="WhatsApp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="(DDD) 9 0000-0000"
                required
                InputLabelProps={{ shrink: true }}
                sx={{ background: "#F8FAFC", borderRadius: "10px" }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
                sx={{ background: "#F8FAFC", borderRadius: "10px" }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Serviço desejado"
                name="servico"
                value={formData.servico}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
                sx={{ background: "#F8FAFC", borderRadius: "10px" }}
              >
                <MenuItem value="">Selecione</MenuItem>
                <MenuItem value="Casa do zero">Casa do zero</MenuItem>
                <MenuItem value="Colocação de pisos">Colocação de pisos</MenuItem>
                <MenuItem value="Reforma externa">Reforma externa</MenuItem>
                <MenuItem value="Reforma interna">Reforma interna</MenuItem>
                <MenuItem value="Muro">Muro</MenuItem>
                <MenuItem value="Decks">Decks</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Endereço"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                placeholder="Rua, número, bairro, cidade"
                required
                InputLabelProps={{ shrink: true }}
                sx={{ background: "#F8FAFC", borderRadius: "10px" }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                minRows={4}
                label="Especificações"
                name="especificacoes"
                value={formData.especificacoes}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
                sx={{ background: "#F8FAFC", borderRadius: "10px" }}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 1 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  py: 2,
                  fontSize: "1.15rem",
                  borderRadius: "12px",
                  backgroundColor: "#1E40AF",
                  "&:hover": { backgroundColor: "#1e3a8a" },
                  fontWeight: 700,
                  textTransform: "none",
                }}
              >
                Enviar Orçamento
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
