
import React from 'react';
import { BookOpen, Users, GraduationCap, Search, FileText, Calendar, Globe, Video } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Archivio Documentale",
      description: "Reperimento, creazione e aggiornamento di un archivio di documentazione scientifica e storica proveniente da tutta Europa",
      features: ["500+ documenti archiviati", "Banca dati online consultabile", "Materiale storico specializzato"]
    },
    {
      icon: FileText,
      title: "Rivista Dymphna's Family",
      description: "Direzione Scientifica e coordinamento editoriale della rivista europea sullo IESA",
      features: ["Edizione italiana", "Contenuti scientifici", "Rete europea di contributi"]
    },
    {
      icon: GraduationCap,
      title: "Formazione Specializzata",
      description: "Progettazione e coordinamento scientifico di proposte formative e didattiche in ambito IESA",
      features: ["Corso regionale annuale", "Formazione operatori", "Programmi personalizzati"]
    },
    {
      icon: Search,
      title: "Ricerca Scientifica",
      description: "Costituzione di gruppi di lavoro per studi e ricerche sul tema dell'accoglienza eterofamiliare",
      features: ["Progetti di ricerca", "Tesi specialistiche", "Analisi scientifica"]
    },
    {
      icon: Users,
      title: "Monitoraggio Clinico",
      description: "Dialogo continuo con il Centro Esperto Regionale e rilevazione delle evidenze",
      features: ["Unità di Monitoraggio", "Programmazione Clinica", "Analisi dati"]
    },
    {
      icon: Calendar,
      title: "Eventi e Promozione",
      description: "Organizzazione di iniziative volte a promuovere il modello IESA",
      features: ["Fòl Fest Collegno", "Conferenze scientifiche", "Workshop formativi"]
    },
    {
      icon: Globe,
      title: "Rete Internazionale",
      description: "Collaborazione con servizi IESA nazionali e internazionali in tutta Europa",
      features: ["Partnership europee", "Scambi di best practices", "Progetti transnazionali"]
    },
    {
      icon: Video,
      title: "Tirocini e Stage",
      description: "Organizzazione di tirocini, stage e attività di servizio civile universale",
      features: ["Programmi formativi", "Esperienza pratica", "Supporto al centro"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-iesa-blue mb-6">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Il CEDRI offre un'ampia gamma di servizi specializzati per la valorizzazione 
            e promozione del modello IESA attraverso ricerca, formazione e documentazione scientifica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-iesa-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-iesa-blue group-hover:text-iesa-teal transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-500">
                      <span className="w-1.5 h-1.5 bg-iesa-teal rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-iesa-gradient rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Vuoi saperne di più sui nostri servizi?</h3>
            <p className="text-lg mb-6 opacity-90">
              Contattaci per informazioni dettagliate sui nostri programmi di formazione, 
              ricerca e documentazione sullo IESA.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-iesa-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Contattaci Ora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
