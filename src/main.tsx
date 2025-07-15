import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async' // <-- 1. Importa

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Avvolgi l'intera App nel Provider */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
