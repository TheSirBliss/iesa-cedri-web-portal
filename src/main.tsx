import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HelmetProvider } from 'react-helmet-async';

// 1. Importa globalmente i fogli di stile di Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// 2. Importa i tuoi stili globali personalizzati (se ne hai uno)
// Assicurati che venga importato DOPO Bootstrap per poter sovrascrivere le regole
import './index.css'; 

// 3. Renderizza l'applicazione
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
