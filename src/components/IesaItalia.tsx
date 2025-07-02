import React from 'react';
import { MapPin, Users, Heart, Phone, ExternalLink, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const IesaItalia = () => {
  const services = [
    {
      name: "ASL TO3 - Piemonte",
      location: "Collegno, Torino",
      description: "Centro di riferimento nazionale per lo IESA, con il CEDRI come centro europeo di documentazione",
      contact: "cedriforiesa@aslto3.piemonte.it",
      website: "https://www.aslto3.piemonte.it/strutture/c-e-d-ri-for-iesa",
      established: "2020",
      users: "50+",
      type: "Centro Esperto Regionale"
    },
    {
      name: "ASL TO4 - Piemonte", 
      location: "Ivrea, Torino",
      description: "Servizio IESA attivo sul territorio del Canavese con approccio territoriale integrato",
      website: "https://www.aslto4.piemonte.it",
      established: "2018",
      users: "25+",
      type: "Servizio Territoriale"
    },
    {
      name: "ASL Oristano - Sardegna",
      location: "Oristano",
      description: "Esperienza pionieristica IESA in Sardegna con focus sull'integrazione comunitaria",
      website: "https://www.asloristano.it",
      established: "2019",
      users: "15+",
      type: "Servizio Insulare"
    },
    {
      name: "ASL Caserta",
      location: "Caserta, Caserta",
      description: "Centro di riferimento  per lo IESA",
      contact: "cedriforiesa@aslto3.piemonte.it",
      website: "https://www.aslto3.piemonte.it/strutture/c-e-d-ri-for-iesa",
      established: "2020",
      users: "50+",
      type: "Azienda Sanitaria Locale"
    },
    {
      name: "AUSL Modena",
      location: "Modena, Modena",
      description: "Centro di riferimento per lo IESA",
      contact: "cedriforiesa@aslto3.piemonte.it",
      website: "https://www.ausl.mo.it/azienda/dipartimenti-territoriali/dipartimento-salute-mentale-dipendenze-patologiche/salute-mentale-adulti/progetto-iesa/",
      established: "2020",
      users: "50+",
      type: "Azienda Sanitaria Locale"
    },
    {
      name: "AUSL Bologna",
      location: "Bologna, Bologna",
      description: "Centro di riferimento per lo IESA",
      contact: "cedriforiesa@aslto3.piemonte.it",
      website: "https://www.ausl.bologna.it/cit/iesa",
      established: "2020",
      users: "50+",
      type: "Azienda Sanitaria Locale"
    },
    {
      name: "USL Firenze",
      location: "Firenze, Firenze",
      description: "Centro di riferimento per lo IESA",
      contact: "inserimentieterofamiliari@uslcentro.toscana.it",
      website: "https://www.facebook.com/progettoiesafirenze/",
      established: "2020",
      users: "50+",
      type: "Azienda Sanitaria Locale"
    },
    {
      name: "ASL BAT",
      location: "Barletta, BAT",
      description: "Centro di riferimento per lo IESA",
      contact: "cedriforiesa@aslto3.piemonte.it",
      website: "https://www.sanita.puglia.it/web/asl-barletta-andria-trani/archivio-news_det/-/journal_content/56/36008/aggiungi-un-posto-a-tavola-inserimento-eterofamiliare-per-adulti",
      established: "2020",
      users: "50+",
      type: "Azienda Sanitaria Locale"
    },
    {
      name: "AUSSL 9 Treviso",
      location: "Oderzo, Treviso",
      description: "Centro di riferimento per lo IESA",
      contact: "lisa.loschi@aulss2.veneto.it",
      website: "https://www.aulss2.veneto.it/Attivo-il-progetto-IESA-permette-di-accogliere-persone-con-disturbi-psichiatrici",
      established: "2020",
      users: "50+",
      type: "Azienda Sanitaria Locale"
    },
    {
      name: "Ass.ne 'La Rosa Bianca'",
      location: "Modena, Modena",
      description: "Centro di riferimento per lo IESA",
      contact: "iesa@ausl.mo.it ,info@rosabiancamodena.it",
      website: "https://www.rosabiancamodena.it/la-rosa-bianca/",
      established: "2020",
      users: "50+",
      type: "Associazione"
    },
    {
      name: "Coop. 'Alice nello Specchio'",
      location: "Torino, Torino",
      description: "Centro di riferimento per lo IESA",
      contact: "edizioniansformazione@alicenellospecchio.it",
      website: "https://www.alicenellospecchio.it/",
      established: "2020",
      users: "50+",
      type: "Cooperativa"
    },
    {
      name: "Coop. 'AEPER' - progetto 'La casa abitata'",
      location: "Bergamo, Bergamo",
      description: "Centro di riferimento per lo IESA",
      contact: "cedriforiesa@aslto3.piemonte.it",
      website: "https://www.cooperativaaeper.it/ricerca-progetti/affido-psichiatrico/",
      established: "2020",
      users: "50+",
      type: "Cooperativa"
    },
    {
      name: "Coop. 'Novo Millennio' - progetto 'So-Stare con voi'",
      location: "Monza, Monza",
      description: "Centro di riferimento per lo IESA",
      contact: "cedriforiesa@aslto3.piemonte.it",
      website: "https://www.novomillennio.it/area-salute-mentale/so-stare-con-voi/",
      established: "2020",
      users: "50+",
      type: "Cooperativa"
    },
    {
      name: "IESM - Coop. Sociale NEMO Onlus",
      location: "Poirino, Torino",
      description: "Centro di riferimento per lo IESA",
      contact: "cedriforiesa@aslto3.piemonte.it",
      website: "https://www.facebook.com/p/IESM-Cooperativa-sociale-NEMO-onlus-100067970336310/",
      established: "2020",
      users: "50+",
      type: "Cooperativa"
    },
    {
      name: "Ass.ne 'Uovo di colombo'",
      location: "Viareggio, Lucca",
      description: "Centro di riferimento per lo IESA",
      contact: "cedriforiesa@aslto3.piemonte.it",
      website: "https://www.uovodicolombo.net/chi-siamo/a",
      established: "2020",
      users: "50+",
      type: "Associazione"
    },
  ];

  const stats = [
    { label: "Servizi Attivi", value: "12+", icon: Building2 },
    { label: "Famiglie Coinvolte", value: "150+", icon: Heart },
    { label: "Persone Accolte", value: "200+", icon: Users },
    { label: "Regioni Coperte", value: "8", icon: MapPin }
  ];

  return (
    <section id="italia" className="py-20 bg-gradient-to-br from-iesa-gray to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-iesa-blue mb-6">
            IESA Italia
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Lo IESA in Italia è un modello flessibile che prevede un ampio ventaglio di esperienze 
            d'accoglienza, caratterizzato dalla presenza di famiglie o singole persone che scelgono 
            volontariamente di offrire ospitalità ad adulti con disagio psichico.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-iesa-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-iesa-blue mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Descrizione del modello */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-iesa-blue mb-6 text-center">Il Modello IESA</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-iesa-teal mb-4">Caratteristiche Principali</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-iesa-teal mt-1 mr-3 flex-shrink-0" />
                  Accoglienza volontaria in famiglia ospitante diversa da quella di origine
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-iesa-teal mt-1 mr-3 flex-shrink-0" />
                  Supporto costante da parte di équipe specializzate
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-iesa-teal mt-1 mr-3 flex-shrink-0" />
                  Periodi di accoglienza variabili e flessibili
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-iesa-teal mb-4">Obiettivi</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-iesa-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Favorire il reinserimento sociale della persona ospitata
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-iesa-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Promuovere l'autonomia e l'indipendenza
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-iesa-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Creare una rete di supporto comunitario
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Servizi Attivi */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-iesa-blue mb-8 text-center">Servizi IESA Attivi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-iesa-teal text-white text-xs rounded-full">
                      {service.type}
                    </span>
                    <span className="text-sm text-gray-500">Dal {service.established}</span>
                  </div>
                  <CardTitle className="text-lg text-iesa-blue group-hover:text-iesa-teal transition-colors">
                    {service.name}
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {service.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {service.users} utenti
                    </span>
                  </div>

                  <div className="space-y-2">
                    {service.contact && (
                      <a 
                        href={`mailto:${service.contact}`}
                        className="flex items-center text-sm text-iesa-teal hover:text-iesa-blue transition-colors"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        {service.contact}
                      </a>
                    )}
                    {service.website && (
                      <a 
                        href={service.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-iesa-teal hover:text-iesa-blue transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Sito ufficiale
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-iesa-blue mb-4">
              Vuoi attivare un servizio IESA nella tua regione?
            </h3>
            <p className="text-gray-600 mb-6">
              Il CEDRI offre supporto tecnico-scientifico per l'implementazione 
              di nuovi servizi IESA sul territorio nazionale.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-iesa-gradient text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Richiedi Informazioni
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IesaItalia;
