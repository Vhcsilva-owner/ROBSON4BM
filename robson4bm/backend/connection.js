import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "sistema_login",
});

db.connect((err) => {
  if (err) console.log("Erro ao subir a API!", err);
  else console.log("Conectado na sua API!");
});
