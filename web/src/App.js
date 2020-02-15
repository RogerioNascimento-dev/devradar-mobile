import React from "react";
import "./Global.css";
import "./Main.css";
import "./Aside.css";
import "./App.css";
import "./Animacoes.css";

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário Github</label>
            <input name="github_username" id="github_username" />
          </div>
          <div className="input-block">
            <label htmlFor="tecs">Tecnologias</label>
            <input name="tecs" id="tecs" />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Latitude</label>
              <input name="longitude" id="longitude" />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/40906099"
                alt="RogerioNascimento-dev"
              />
              <div className="user-info">
                <strong>Rogério Nascimento</strong>
                <span>ReactJS,React,NodeJS,PHP</span>
              </div>
            </header>
            <p>
              Analista de sistemas e desenvolvedor de softwares Web e Mobile
            </p>
            <a href="https://github.com/RogerioNascimento-dev">
              Acessar perfil no Github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/40906099"
                alt="RogerioNascimento-dev"
              />
              <div className="user-info">
                <strong>Rogério Nascimento</strong>
                <span>ReactJS,React,NodeJS,PHP</span>
              </div>
            </header>
            <p>
              Analista de sistemas e desenvolvedor de softwares Web e Mobile
            </p>
            <a href="https://github.com/RogerioNascimento-dev">
              Acessar perfil no Github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/40906099"
                alt="RogerioNascimento-dev"
              />
              <div className="user-info">
                <strong>Rogério Nascimento</strong>
                <span>ReactJS,React,NodeJS,PHP</span>
              </div>
            </header>
            <p>
              Analista de sistemas e desenvolvedor de softwares Web e Mobile
            </p>
            <a href="https://github.com/RogerioNascimento-dev">
              Acessar perfil no Github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/40906099"
                alt="RogerioNascimento-dev"
              />
              <div className="user-info">
                <strong>Rogério Nascimento</strong>
                <span>ReactJS,React,NodeJS,PHP</span>
              </div>
            </header>
            <p>
              Analista de sistemas e desenvolvedor de softwares Web e Mobile
            </p>
            <a href="https://github.com/RogerioNascimento-dev">
              Acessar perfil no Github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
