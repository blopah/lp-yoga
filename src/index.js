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
  </React.StrictMode>
);
