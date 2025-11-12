import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("usuario");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/api/register", {
        nome,
        email,
        senha,
        tipo,
      });
      alert("Usuário cadastrado!");
      navigate("/");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="register-container">
      <h2>Cadastro</h2>
      <input placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Senha"
        type="password"
        onChange={(e) => setSenha(e.target.value)}
      />
      <select onChange={(e) => setTipo(e.target.value)}>
        <option value="usuario">Usuário</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleRegister}>Cadastrar</button>
    </div>
  );
}
