import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importe suas imagens
import servico0 from "../assets/HouseTheZero.jpg";
import servico1 from "../assets/Pisos.jpg";
import servico2 from "../assets/Telhados.jpg";
import servico3 from "../assets/Deques.jpg";
import servico4 from "../assets/Muros.jpg";
import servico5 from "../assets/Interior.jpg";
import servico6 from "../assets/Reparoexeterno1.jpg";

const services = [
  { id: 1, title: "Casas direto da planta", image: servico0 },
  { id: 2, title: "Construções de deques", image: servico3 },
  { id: 3, title: "Muros e pátios", image: servico4 },
  { id: 4, title: "Instalações de Pisos", image: servico1 },
  { id: 5, title: "Instalações de Telhados", image: servico2 },
  { id: 6, title: "Reparos estruturais externos", image: servico5 },
  { id: 7, title: "Reparos estruturais inferior", image: servico6 },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  // 🔹 RESPONSIVIDADE DO CARROSSEL
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,

    responsive: [
      {
        breakpoint: 1400,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 1100,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 850,
        settings: { slidesToShow: 2, centerMode: true, centerPadding: "40px" }
      },
      {
        breakpoint: 700,
        settings: { slidesToShow: 1, centerMode: true, centerPadding: "80px" }
      },
      {
        breakpoint: 500,
        settings: { slidesToShow: 1, centerMode: true, centerPadding: "20px" }
      },
      {
        breakpoint: 380,
        settings: { slidesToShow: 1, centerMode: false }
      }
    ]
  };

  /** 🔹 Tela de detalhes */
  if (selectedService) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          p: { xs: 3, sm: 4, md: 5 }
        }}
      >
        <Button variant="outlined" onClick={() => setSelectedService(null)}>
          Voltar
        </Button>

        <Typography
          variant="h2"
          gutterBottom
          mt={2}
          sx={{ fontSize: { xs: 28, sm: 36, md: 48 } }}
        >
          {selectedService.title}
        </Typography>

        {selectedService.image && (
          <Box
            component="img"
            src={selectedService.image}
            alt={selectedService.title}
            sx={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: "12px",
              boxShadow: 3,
              mt: 2
            }}
          />
        )}

        <Typography sx={{ mt: 3, fontSize: { xs: 16, sm: 18 } }}>
          Aqui você poderá detalhar o que o serviço "{selectedService.title}" oferece,
          incluindo benefícios, processos e imagens.
        </Typography>
      </Box>
    );
  }

  /** 🔹 Tela principal */
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        background: "linear-gradient(135deg, #e2e8f0, #cbd5e1)",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: { xs: 3, sm: 4, md: 5 },
        pt: { xs: 5, sm: 5 }
      }}
    >
      <Typography
        variant="h1"
        mb={5}
        sx={{
          fontSize: { xs: 22, sm: 28, md: 36 },
          fontWeight: 600,
        }}
      >
        NOSSOS SERVIÇOS
      </Typography>


      <Box sx={{ width: "100%" }}>
        <Slider {...settings}>
          {services.map((service) => (
            <Box key={service.id} px={2}>
              <Card
                onClick={() => setSelectedService(service)}
                sx={{
                  height: { xs: 260, sm: 330, md: 380, lg: 400 },
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "0.2s",
                  borderRadius: "16px",
                  overflow: "hidden",
                  backgroundImage: service.image
                    ? `url(${service.image})`
                    : "linear-gradient(135deg, #f5f5f5, #ddd)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  "&:hover": {
                    boxShadow: 9,
                    transform: "scale(1.02)"
                  }
                }}
              >
                <CardContent
                  sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    width: "100%",
                    textAlign: "center",
                    color: "white",
                    py: 2
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: 15, sm: 17, md: 19 }
                    }}
                  >
                    {service.title}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Services;
