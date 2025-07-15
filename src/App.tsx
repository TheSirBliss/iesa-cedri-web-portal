import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Features } from "./components/Features";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import JsonData from "./data/data.json";

// Importa Helmet per la gestione della SEO
import { Helmet } from "react-helmet-async";

// NOTA: Ho rimosso la libreria 'smooth-scroll' come da piano precedente.
// Lo scrolling fluido verrà gestito via CSS.

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      {/* Blocco per la gestione centralizzata della SEO con la CORREZIONE */}
      <Helmet>
        <meta charset="utf-8" /> {/* <-- ECCO LA CORREZIONE */}
        <title>CEDRI for IESA | Formazione, Supervisione e Ricerca</title>
        <meta name="description" content="CEDRI for IESA è il centro di riferimento in Italia per la formazione, supervisione e ricerca sul modello IESA, un approccio innovativo all'accoglienza eterofamiliare supportata nella salute mentale." />
        {/* Assicurati di aggiornare questo URL quando andrai live */}
        <link rel="canonical" href="https://www.cedriforiesa.it" />
      </Helmet>
      
      {/* Il resto della tua applicazione */}
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
