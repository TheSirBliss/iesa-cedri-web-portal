import { useState, useEffect } from "react";
import { Header } from "./components/Header"; // La tua Navigazione è qui dentro
import { Features } from "./components/Features";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import JsonData from "./data/data.json";

// Importa Helmet per la gestione della SEO
import { Helmet } from "react-helmet-async";


const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      {/* Blocco per la gestione centralizzata della SEO */}
      <Helmet>
        <meta charset="utf-g" />
        <title>CEDRI for IESA | Formazione, Supervisione e Ricerca</title>
        <meta name="description" content="CEDRI for IESA è il centro di riferimento in Italia per la formazione, supervisione e ricerca sul modello IESA, un approccio innovativo all'accoglienza eterofamiliare supportata nella salute mentale." />
        <link rel="canonical" href="https://www.cedriforiesa.it" /> {/* Inserisci qui il tuo URL finale */}
      </Helmet>
      
      {/* Il resto della tua applicazione rimane invariato */}
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
