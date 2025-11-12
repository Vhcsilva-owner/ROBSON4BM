import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import auth from "./rotas/auth.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", auth);

app.listen(5000, () => console.log("Servidor rodando na porta 5000"));
