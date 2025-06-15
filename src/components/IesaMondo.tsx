
import React from 'react';
import { Globe, ExternalLink, Users, Calendar, Award, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const IesaMondo = () => {
  const countries = [
    {
      name: "Regno Unito",
      services: [
        {
          name: "Shared Lives Plus",
          url: "https://sharedlivesplus.org.uk",
          description: "Organizzazione nazionale che supporta oltre 13.000 adulti attraverso 9.000 famiglie condivise",
          established: "1992",
          users: "13,000+"
        },
        {
          name: "Shared Lives South West",
          url: "https://www.sharedlivessw.org.uk",
          description: "Servizio regionale specializzato nell'accoglienza per persone con disabilità e salute mentale",
          established: "1995",
          users: "800+"
        },
        {
          name: "Alex Fox's Blog",
          url: "https://alexfoxblog.wordpress.com",
          description: "Blog di ricerca e approfondimento sui modelli di vita condivisa e inclusione sociale",
          established: "2010",
          users: "Ricerca"
        }
      ]
    },
    {
      name: "Germania",
      services: [
        {
          name: "BWF (Bundesverband für Wohnen)",
          url: "https://www.bwf-info.de",
          description: "Associazione federale per l'abitare che promuove forme innovative di accoglienza familiare",
          established: "1985",
          users: "5,000+"
        },
        {
          name: "SPIX e.V.",
          url: "https://www.spix-ev.de",
          description: "Associazione specializzata nell'integrazione sociale attraverso progetti di vita assistita",
          established: "1998",
          users: "1,200+"
        }
      ]
    },
    {
      name: "Francia",
      services: [
        {
          name: "FAMIDAC",
          url: "https://www.famidac.fr",
          description: "Federazione nazionale delle associazioni per l'accoglienza familiare di adulti",
          established: "1988",
          users: "8,000+"
        },
        {
          name: "IFREP Paris",
          url: "https://www.ifrep.org",
          description: "Istituto di formazione, ricerca e valutazione delle pratiche medico-sociali",
          established: "1982",
          users: "Formazione"
        },
        {
          name: "GREPFa",
          url: "https://www.grepfa.org",
          description: "Gruppo di ricerca europeo per l'accoglienza familiare, coordinamento internazionale",
          established: "1995",
          users: "Rete EU"
        },
        {
          name: "Association Clémence Isaure",
          url: "https://www.clemence-isaure.org",
          description: "Associazione storica per l'accoglienza familiare terapeutica nel Sud della Francia",
          established: "1970",
          users: "600+"
        }
      ]
    },
    {
      name: "Belgio",
      services: [
        {
          name: "Gezinsverpleging OPZ Geel",
          url: "https://www.opzgeel.be",
          description: "L'esperienza storica di Geel, modello pioneristico mondiale dell'accoglienza familiare",
          established: "1200",
          users: "500+"
        }
      ]
    }
  ];

  const history = [
    {
      year: "XIII secolo",
      event: "Nascita dell'accoglienza familiare a Geel (Belgio)",
      description: "La città di Geel inizia ad accogliere persone con disturbi mentali presso famiglie locali"
    },
    {
      year: "1970",
      event: "Sviluppo moderno in Francia",
      description: "Nascita delle prime associazioni strutturate per l'accoglienza familiare terapeutica"
    },
    {
      year: "1990",
      event: "Espansione europea",
      description: "Il modello si diffonde nel Regno Unito, Germania e altri paesi europei"
    },
    {
      year: "2020",
      event: "Arrivo in Italia",
      description: "Istituzione del CEDRI e sviluppo sistematico dello IESA in Italia"
    }
  ];

  return (
    <section id="mondo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-iesa-blue mb-6">
            IESA nel Mondo
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Se in Italia il modello IESA è ancora poco diffuso, in Europa e nel mondo è da tempo 
            una realtà consolidata. Il modello nasce in Belgio con l'esperienza pionieristica di Geel, 
            che da secoli offre ospitalità in famiglie a persone con disturbi mentali.
          </p>
        </div>

        {/* Timeline storica */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-iesa-blue mb-8 text-center">Storia del Movimento IESA</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-iesa-gradient opacity-30"></div>
            <div className="space-y-8">
              {history.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="text-2xl font-bold text-iesa-teal mb-2">{item.year}</div>
                      <h4 className="text-lg font-semibold text-iesa-blue mb-2">{item.event}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-iesa-gradient rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Servizi per Paese */}
        <div className="space-y-12">
          {countries.map((country, countryIndex) => (
            <div key={countryIndex} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-iesa-gradient rounded-full flex items-center justify-center mr-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-iesa-blue">{country.name}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {country.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-1 bg-iesa-teal text-white text-xs rounded-full">
                          Dal {service.established}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {service.users}
                        </span>
                      </div>
                      <CardTitle className="text-lg text-iesa-blue group-hover:text-iesa-teal transition-colors">
                        {service.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <a 
                        href={service.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-iesa-teal hover:text-iesa-blue transition-colors group"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                        Visita il sito
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Statistiche globali */}
        <div className="mt-16 bg-iesa-gradient rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">IESA nel Mondo in Numeri</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Paesi Attivi</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-sm opacity-90">Persone Accolte</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">800</div>
              <div className="text-sm opacity-90">Anni di Storia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-90">Organizzazioni</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-iesa-blue mb-4">
              Unisciti alla Rete Europea IESA
            </h3>
            <p className="text-gray-600 mb-6">
              Il CEDRI collabora attivamente con la rete internazionale per lo scambio 
              di best practices e lo sviluppo di progetti congiunti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://www.grepfa.org', '_blank')}
                className="bg-iesa-gradient text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Scopri GREPFa
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-iesa-teal text-iesa-teal px-6 py-3 rounded-full font-semibold hover:bg-iesa-teal hover:text-white transition-all duration-300"
              >
                Collabora con Noi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IesaMondo;
