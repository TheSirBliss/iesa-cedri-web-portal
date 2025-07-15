
import React from 'react';
import { BookOpen, Users, Award, Globe, Heart, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Documentazione Europea",
      description: "Archivio completo di materiali scientifici e storici provenienti da tutta Europa",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Users,
      title: "Formazione Specializzata",
      description: "Corsi regionali e percorsi formativi per operatori e famiglie ospitanti",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Award,
      title: "Ricerca Scientifica",
      description: "Studi, analisi e pubblicazioni per migliorare continuamente il modello IESA",
      image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Globe,
      title: "Rete Internazionale",
      description: "Collaborazioni con centri IESA in Europa e nel mondo attraverso il GREPFa",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const objectives = [
    {
      icon: Heart,
      title: "Valorizzazione del Modello",
      description: "Promuovere e diffondere il modello IESA come alternativa terapeutica efficace"
    },
    {
      icon: BookOpen,
      title: "Banca Dati Online",
      description: "Creare un archivio digitale consultabile con documentazione internazionale"
    },
    {
      icon: Users,
      title: "Formazione Continua",
      description: "Sviluppare programmi formativi per operatori, famiglie e professionisti"
    },
    {
      icon: Target,
      title: "Monitoraggio Scientifico",
      description: "Analizzare e valutare l'efficacia delle esperienze IESA attraverso ricerca"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-iesa-blue mb-6">
            Chi Siamo
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Il CEDRI è il Centro Europeo di Documentazione, Ricerca e Formazione sullo IESA, 
            istituito per valorizzare e promuovere il modello dell'Inserimento Eterofamiliare 
            Supportato di Adulti attraverso documentazione, ricerca e formazione specializzata.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-iesa-teal/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold text-iesa-blue mb-6">La Nostra Missione</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Istituito con Deliberazione del Direttore Generale ASL TO3 N. 252 del 15/03/2022, 
                    il CEDRI rappresenta un punto di riferimento europeo per lo sviluppo e la diffusione 
                    del modello IESA.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Attraverso una rete consolidata con servizi IESA nazionali e internazionali, 
                    contribuiamo alla creazione di una banca dati consultabile e alla promozione 
                    di best practices nel campo dell'accoglienza eterofamiliare.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Team CEDRI" 
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-iesa-blue mb-8 text-center">Le Nostre Attività</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-iesa-blue mb-3 group-hover:text-iesa-teal transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-iesa-blue mb-8 text-center">I Nostri Obiettivi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-iesa-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <objective.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-iesa-blue mb-3">{objective.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-iesa-gradient rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">CEDRI in Numeri</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Documenti Archiviati</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-sm opacity-90">Paesi Collaboratori</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-sm opacity-90">Famiglie Formate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2020</div>
              <div className="text-sm opacity-90">Anno di Fondazione</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
