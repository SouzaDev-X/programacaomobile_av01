const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Banco de dados em memória (substituir futuramente por persistência)
let produtos = [
  { id: 1, nome: "Teclado Mecânico", quantidade: 10, preco: 350.5 },
  { id: 2, nome: "Mouse Gamer", quantidade: 5, preco: 200.0 },
  { id: 3, nome: "Monitor 24\"", quantidade: 3, preco: 1200.0 },
];

// Rotas da API

// GET /produtos - listar todos os produtos
app.get("/produtos", (req, res) => {
  res.json(produtos);
});

// GET /produtos/:id - buscar produto pelo id
app.get("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);
  const produto = produtos.find((p) => p.id === id);
  if (!produto) return res.status(404).json({ error: "Produto não encontrado" });
  res.json(produto);
});

// POST /produtos - criar novo produto
app.post("/produtos", (req, res) => {
  const { nome, quantidade, preco } = req.body;
  if (!nome || quantidade == null || preco == null) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }
  const novoProduto = { id: Date.now(), nome, quantidade, preco };
  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});

// PUT /produtos/:id - atualizar produto
app.put("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);
  const { nome, quantidade, preco } = req.body;
  const index = produtos.findIndex((p) => p.id === id);
  if (index === -1) return res.status(404).json({ error: "Produto não encontrado" });
  produtos[index] = { id, nome, quantidade, preco };
  res.json(produtos[index]);
});

// DELETE /produtos/:id - excluir produto
app.delete("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = produtos.findIndex((p) => p.id === id);
  if (index === -1) return res.status(404).json({ error: "Produto não encontrado" });
  produtos.splice(index, 1);
  res.status(204).send();
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 API Estoque rodando em http://localhost:${PORT}`);
});
