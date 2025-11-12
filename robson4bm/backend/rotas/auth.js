import express from "express";
import { db } from "../connection.js";

const router = express.Router();

router.post("/register", (req, res) => {
  const { nome, email, senha, tipo } = req.body;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length > 0) return res.status(400).json({ message: "Usuário já existe!" });

    db.query(
      "INSERT INTO usuarios (nome, email, senha, tipo) VALUES (?, ?, ?, ?)",
      [nome, email, senha, tipo],
      (err) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({ message: "Usuário cadastrado com sucesso!" });
      }
    );
  });
});

// Login
router.post("/login", (req, res) => {
  const { email, senha } = req.body;

  db.query(
    "SELECT * FROM usuarios WHERE email = ? AND senha = ?",
    [email, senha],
    (err, result) => {
      if (err) return res.status(500).json(err);
      if (result.length === 0)
        return res.status(400).json({ message: "Email ou senha incorretos!" });

      return res.status(200).json(result[0]);
    }
  );
});

// Mostrar todos (para admin)
router.get("/usuarios", (req, res) => {
  db.query("SELECT id, nome, email, tipo FROM usuarios", (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result);
  });
});

export default router;
