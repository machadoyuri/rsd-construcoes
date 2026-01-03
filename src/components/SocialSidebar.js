import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SIDEBAR_WIDTH = 56;   // largura da área dos ícones
const BUTTON_WIDTH = 30;   // largura do botão

export default function SocialSidebar() {
  const [open, setOpen] = useState(true);

  return (
    <Box
      sx={{
        position: "fixed",
        top: "40%",
        right: 0,
        display: "flex",
        alignItems: "center",
        bgcolor: "#0D1B2A",
        borderRadius: "10px 0 0 10px",
        transform: open
          ? "translateX(0)"
          : `translateX(${SIDEBAR_WIDTH}px)`, // esconde só os ícones
        transition: "transform 0.35s ease",
        zIndex: 3300,
      }}
    >
      {/* 🔲 BOTÃO (sempre visível e se move junto) */}
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          width: `${BUTTON_WIDTH}px`,
          height: "90px",
          borderRadius: "8px 0 0 8px",
          bgcolor: "#0D1B2A",
          color: "#fff",
          "&:hover": { bgcolor: "#14263d" },
          flexShrink: 0,
        }}
      >
        {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>

      {/* 📦 ÁREA DOS ÍCONES */}
      <Box
        sx={{
          px: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Tooltip title="Instagram" placement="left">
          <IconButton
            component="a"
            href="https://www.instagram.com/seuperfil"
            target="_blank"
            rel="noreferrer"
            sx={{ color: "#E1306C" }}
          >
            <InstagramIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn" placement="left">
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/seuperfil"
            target="_blank"
            rel="noreferrer"
            sx={{ color: "#0A66C2" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="GitHub" placement="left">
          <IconButton
            component="a"
            href="https://github.com/seuperfil"
            target="_blank"
            rel="noreferrer"
            sx={{ color: "#fff" }}
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}
