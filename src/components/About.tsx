
import React from 'react';
import { Award, Target, Heart, Users2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Accoglienza",
      description: "Promuoviamo l'inserimento eterofamiliare supportato come modello di cura e supporto sociale"
    },
    {
      icon: Award,
      title: "Eccellenza",
      description: "Standard elevati nella ricerca, formazione e documentazione scientifica europea"
    },
    {
      icon: Target,
      title: "Missione",
      description: "Valorizzare e diffondere il modello IESA attraverso evidenze scientifiche e best practices"
    },
    {
      icon: Users2,
      title: "Collaborazione",
      description: "Rete consolidata con servizi IESA nazionali e internazionali in tutta Europa"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-iesa-blue mb-6">
            Chi Siamo
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Il Centro Europeo di Documentazione, Ricerca e Formazione sullo IESA, 
            istituito con Deliberazione del Direttore Generale ASL TO3 nel 2022, 
            è il punto di riferimento per la valorizzazione del modello IESA in Europa.
          </p>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-iesa-blue mb-4">Direttore Scientifico</h3>
                <h4 className="text-xl font-semibold text-iesa-teal mb-2">Dott. Gianfranco Aluffi</h4>
                <p className="text-gray-600 leading-relaxed">
                  Direttore Scientifico e Referente del Servizio IESA ASL TO3, 
                  Centro Esperto Regione Piemonte e Referente dell'Unità di 
                  Monitoraggio e Programmazione Clinica del DISM.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-iesa-gradient rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  GA
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-iesa-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-iesa-blue mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Description */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-iesa-blue mb-8 text-center">Il nostro impegno</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-iesa-teal mb-4">Documentazione e Ricerca</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-iesa-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Reperimento e creazione di archivio scientifico e storico europeo
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-iesa-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Direzione scientifica della rivista "Dymphna's Family"
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-iesa-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Realizzazione di ricerche scientifiche e tesi specialistiche
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-iesa-teal mb-4">Formazione e Sviluppo</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-iesa-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Corso regionale di formazione di base per operatori IESA
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-iesa-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Organizzazione di tirocini e stage formativi
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-iesa-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Collaborazione alla Fòl Fest di Collegno
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
