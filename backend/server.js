import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ROTA PARA RECEBER O ORÇAMENTO
app.post("/enviar-orcamento", async (req, res) => {
  const dados = req.body;

  // CONFIGURA O ENVIO DO EMAIL
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: dados.email,
    to: "faleconoscorsdconstrucoes@gmail.com",
    subject: `Novo orçamento solicitado: ${dados.nome} ${dados.sobrenome}`,
    html: `
      <h2>Solicitação de Orçamento</h2>
      <p><b>Nome:</b> ${dados.nome} ${dados.sobrenome}</p>
      <p><b>WhatsApp:</b> ${dados.whatsapp}</p>
      <p><b>Email:</b> ${dados.email}</p>
      <p><b>Serviço:</b> ${dados.servico}</p>
      <p><b>Endereço:</b> ${dados.endereco}</p>
      <p><b>Especificações:</b> ${dados.especificacoes}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.log("Erro ao enviar email:", error);
    return res.status(500).json({ error: "Erro ao enviar email." });
  }
});

app.listen(4000, () => console.log("Backend rodando na porta 4000"));
