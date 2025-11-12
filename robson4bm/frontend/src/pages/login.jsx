import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", { email, senha });
      if (res.data.tipo === "admin") navigate("/admin");
      else alert("Login realizado com sucesso!");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Senha"
        type="password"
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
      <p onClick={() => navigate("/register")}>Não tem conta? Cadastre-se</p>
    </div>
  );
}
