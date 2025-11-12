import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/api/usuarios");
      setUsuarios(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="admin-container">
      <h2>Painel do Admin</h2>
      <h3>bigodeira maxima</h3>
      <p>Total de usuários cadastrados: {usuarios.length}</p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nome}</td>
              <td>{u.email}</td>
              <td>{u.tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="voltar-btn" onClick={() => navigate("/")}>
        ⬅ Voltar
      </button>
    </div>
  );
}
