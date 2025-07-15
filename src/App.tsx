import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// Importazioni corrette (senza graffe, tranne per hook e librerie)
import Header from "./components/Header";
//import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Contact from "./components/Contact";
import JsonData from "./data/data.json";
// <Features data={landingPageData.Features} />


const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CEDRI for IESA | Formazione, Supervisione e Ricerca</title>
        <meta name="description" content="CEDRI for IESA è il centro di riferimento in Italia per la formazione, supervisione e ricerca sul modello IESA." />
        <link rel="canonical" href="https://www.cedriforiesa.it" />
      </Helmet>
      
      {/* Ora i nomi dei componenti corrispondono agli import corretti */}
      <Header data={landingPageData.Header} />
      <About /* data={landingPageData.About} */ /> {/* Ho commentato 'data' perché il nuovo About non lo usa */}
      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
