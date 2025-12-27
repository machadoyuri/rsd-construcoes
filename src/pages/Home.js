import React from "react";
import { Box, Typography, Button, Fade } from "@mui/material";
import logoInicial from "../assets/LogoRSD2.png";

function Home() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",

                // BACKGROUND TOTALMENTE RESPONSIVO
                backgroundImage: `url(${logoInicial})`,
                backgroundSize: { xs: "cover", md: "cover" },
                backgroundPosition: { xs: "center", sm: "center" },
                backgroundRepeat: "no-repeat",

                // ESPAÇAMENTOS RESPONSIVOS
                pt: { xs: 8, sm: 10 },
                px: { xs: 2, sm: 4, md: 6, lg: 8 },
            }}
        >
            {/* Overlay para leitura perfeita */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0, 0, 0, 0.55)",
                    backdropFilter: "brightness(0.95)",
                }}
            />

            <Fade in timeout={1100}>
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        width: "100%",
                        maxWidth: { xs: "100%", sm: "90%", md: "70%", lg: "60%" },
                        px: { xs: 2, sm: 0 },
                    }}
                >
                    {/* Título Principal */}
                    <Typography
                        fontWeight={700}
                        color="white"
                        sx={{
                            fontFamily: "Montserrat, sans-serif",
                            textTransform: "uppercase",
                            textShadow: "0 4px 12px rgba(0,0,0,0.7)",
                            letterSpacing: { xs: "2px", sm: "3px", md: "4px" },

                            // TAMANHO 100% RESPONSIVO (inclusive TV grande)
                            fontSize: {
                                xs: 32,   // celular pequeno
                                sm: 48,   // celular grande
                                md: 70,   // tablet
                                lg: 90,   // notebook
                                xl: 110,  // monitor grande / TV
                            },
                        }}
                    >
                        RSD Construções
                    </Typography>

                    {/* Texto de descrição */}
                    <Typography
                        color="white"
                        sx={{
                            mt: { xs: 2.5, sm: 3, md: 4 },
                            opacity: 0.95,
                            fontFamily: "Roboto, sans-serif",
                            lineHeight: 1.6,
                            mx: "auto",

                            // largura ajustada 100% em qualquer tela
                            maxWidth: { xs: "95%", sm: 500, md: 650, lg: 750 },

                            fontSize: {
                                xs: 14.5,
                                sm: 16,
                                md: 17,
                                lg: 18,
                                xl: 20,
                            },

                            textShadow: "0 2px 8px rgba(0,0,0,0.6)",
                        }}
                    >
                        Soluções completas em construção civil, manutenção e infraestrutura.
                        Compromisso com qualidade, segurança e resultados de alto padrão.
                    </Typography>

                    {/* Botão totalmente responsivo */}
                    <Button
                        variant="contained"
                        sx={{
                            mt: { xs: 3, sm: 4, md: 5 },
                            px: { xs: 3, sm: 5, md: 6 },
                            py: { xs: 1.2, sm: 1.4, md: 1.6 },

                            fontSize: {
                                xs: 14,
                                sm: 16,
                                md: 17,
                                lg: 18,
                            },

                            fontWeight: 600,
                            borderRadius: "12px",
                            backgroundColor: "#2A9B3B",
                            letterSpacing: 1,
                            boxShadow: "0 4px 14px rgba(0,0,0,0.45)",
                            transition: "0.25s",

                            "&:hover": {
                                backgroundColor: "#238B33",
                                boxShadow: "0 6px 20px rgba(0,0,0,0.55)",
                                transform: "scale(1.04)",
                            },
                        }}
                        onClick={() =>
                            document.getElementById("social")?.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                    >
                        Fale Conosco
                    </Button>
                </Box>
            </Fade>
        </Box>
    );
}

export default Home;
