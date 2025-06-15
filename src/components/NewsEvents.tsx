
import React from 'react';
import { Calendar, MapPin, Clock, ExternalLink, Users, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const NewsEvents = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Corso Regionale di Formazione IESA 2025",
      date: "15-17 Marzo 2025",
      time: "09:00 - 17:00",
      location: "ASL TO3, Collegno",
      description: "Corso di formazione di base per operatori IESA, aperto a medici, psicologi, assistenti sociali e operatori sanitari.",
      type: "Formazione",
      participants: 40,
      status: "Iscrizioni Aperte",
      link: "#"
    },
    {
      id: 2,
      title: "Fòl Fest 2025 - Salute delle Menti",
      date: "10-12 Maggio 2025",
      time: "10:00 - 22:00",
      location: "Collegno, Piazza del Municipio",
      description: "Manifestazione dedicata alla salute mentale nel nome dell'inclusione e della cittadinanza, con workshop IESA.",
      type: "Evento Pubblico",
      participants: 500,
      status: "In Programma",
      link: "#"
    },
    {
      id: 3,
      title: "Convegno Europeo GREPFa",
      date: "20-22 Giugno 2025",
      time: "09:00 - 18:00",
      location: "Parigi, Francia",
      description: "Convegno internazionale del Gruppo di Ricerca Europeo per l'Accoglienza Familiare.",
      type: "Convegno",
      participants: 200,
      status: "Save the Date",
      link: "https://www.grepfa.org"
    }
  ];

  const recentNews = [
    {
      id: 1,
      title: "Pubblicata la nuova edizione di Dymphna's Family",
      date: "15 Gennaio 2025",
      category: "Pubblicazione",
      excerpt: "È uscita la nuova edizione italiana della rivista europea sullo IESA con contributi internazionali.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      link: "#"
    },
    {
      id: 2,
      title: "CEDRI firma accordo con Università di Torino",
      date: "8 Gennaio 2025",
      category: "Partnership",
      excerpt: "Nuovo protocollo per la realizzazione di tesi di laurea e ricerche specialistiche sullo IESA.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
      link: "#"
    },
    {
      id: 3,
      title: "Workshop Internazionale sulla Formazione IESA",
      date: "20 Dicembre 2024",
      category: "Formazione",
      excerpt: "Confronto con esperti europei sui modelli formativi per operatori dell'accoglienza familiare.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=250&fit=crop",
      link: "#"
    },
    {
      id: 4,
      title: "Nuovo servizio IESA attivo in Sardegna",
      date: "15 Dicembre 2024",
      category: "Espansione",
      excerpt: "L'ASL di Oristano amplia il proprio servizio IESA con il supporto scientifico del CEDRI.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop",
      link: "#"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Riconoscimento Regione Piemonte",
      description: "Premio per l'innovazione in ambito socio-sanitario 2024"
    },
    {
      icon: BookOpen,
      title: "500+ Documenti Archiviati",
      description: "Raggiunto l'obiettivo di documentazione europea"
    },
    {
      icon: Users,
      title: "50+ Operatori Formati",
      description: "Completato con successo il corso regionale 2024"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-iesa-blue mb-6">
            News & Eventi
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Rimani aggiornato su tutte le novità, eventi formativi e iniziative 
            del mondo IESA nazionale e internazionale.
          </p>
        </div>

        {/* Achievement Banner */}
        <div className="bg-iesa-gradient rounded-2xl p-8 mb-12 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">I Nostri Successi 2024</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8" />
                </div>
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <p className="text-sm opacity-90">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upcoming Events */}
          <div>
            <h3 className="text-3xl font-bold text-iesa-blue mb-8 flex items-center">
              <Calendar className="h-8 w-8 mr-3" />
              Prossimi Eventi
            </h3>
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                        event.type === 'Formazione' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'Evento Pubblico' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {event.type}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        event.status === 'Iscrizioni Aperte' ? 'bg-green-100 text-green-800' :
                        event.status === 'In Programma' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                    <CardTitle className="text-lg text-iesa-blue group-hover:text-iesa-teal transition-colors">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-iesa-teal" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-iesa-teal" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-iesa-teal" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-iesa-teal" />
                        {event.participants} partecipanti
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>
                    
                    <Button 
                      className="w-full bg-iesa-gradient hover:shadow-lg transition-all duration-300"
                      onClick={() => event.link !== '#' && window.open(event.link, '_blank')}
                      disabled={event.link === '#'}
                    >
                      {event.status === 'Iscrizioni Aperte' ? 'Iscriviti Ora' : 'Maggiori Info'}
                      {event.link !== '#' && <ExternalLink className="h-4 w-4 ml-2" />}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent News */}
          <div>
            <h3 className="text-3xl font-bold text-iesa-blue mb-8 flex items-center">
              <BookOpen className="h-8 w-8 mr-3" />
              Ultime Notizie
            </h3>
            <div className="space-y-6">
              {recentNews.map((news) => (
                <Card key={news.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-3 py-1 bg-iesa-teal text-white text-xs rounded-full">
                          {news.category}
                        </span>
                        <span className="text-xs text-gray-500">{news.date}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-iesa-blue group-hover:text-iesa-teal transition-colors mb-2">
                        {news.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {news.excerpt}
                      </p>
                      <button 
                        onClick={() => news.link !== '#' && window.open(news.link, '_blank')}
                        disabled={news.link === '#'}
                        className="text-iesa-teal hover:text-iesa-blue text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform"
                      >
                        Leggi di più
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-iesa-blue to-iesa-teal rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Rimani Sempre Aggiornato</h3>
          <p className="text-lg mb-6 opacity-90">
            Iscriviti alla nostra newsletter per ricevere aggiornamenti su eventi, 
            pubblicazioni e novità dal mondo IESA.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="La tua email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button 
              className="bg-white text-iesa-blue hover:bg-gray-100 transition-colors duration-300 px-8"
            >
              Iscriviti
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
