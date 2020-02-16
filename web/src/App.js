import React, { useState, useEffect } from "react";
import DevItem from "./Components/DevItem";
import DevForm from "./Components/DevForm";
import api from "./services/api";
import "./Global.css";
import "./Main.css";
import "./Aside.css";
import "./App.css";
import "./Animacoes.css";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    try {
      const response = await api.post("/devs", data);
      setDevs([...devs, response.data]);
      alert("Cadastrado com sucesso!");
    } catch (err) {
      alert(err.request.response);
    }
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
