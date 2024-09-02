import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './components/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />  {/* Vídeo de background sendo renderizado primeiro */}
    <App />   {/* Conteúdo principal sobre o vídeo */}
    <section className="signup-form" id="signup">
            <h2>Garanta Sua Aula Grátis</h2>
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact"/>
                <p>
                    <label><input type="text" name="nome" placeholder="Nome" required /></label>
                </p>
                <p>
                    <label><input type="email" name="email" placeholder="E-mail" required /></label>
                </p>
                <p>
                    <label><input type="tel" name="telefone" placeholder="Telefone" required /></label>
                </p>
                <button type="submit">Garantir Minha Aula Grátis</button>
            </form>
        </section>
  </React.StrictMode>
);
