const express = require("express");

const app = express();
const PORT = 3000;

// Middleware para permitir JSON
app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
  res.json({
    mensagem: "Backend funcionando com sucesso 🚀"
  });
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
