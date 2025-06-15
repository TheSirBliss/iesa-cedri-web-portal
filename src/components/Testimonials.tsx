
import React from 'react';
import { Quote, Star, Heart, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria R.",
      role: "Famiglia Ospitante",
      location: "Collegno, TO",
      content: "L'esperienza IESA ha arricchito la nostra famiglia in modo inaspettato. Accogliere Giovanni non è stato solo un gesto di solidarietà, ma un vero scambio di affetti e esperienze che ci ha cambiato positivamente.",
      rating: 5,
      year: "2023",
      avatar: "MR"
    },
    {
      name: "Dr. Paolo S.",
      role: "Medico Psichiatra",
      location: "ASL TO3",
      content: "Il modello IESA rappresenta una rivoluzione nel trattamento della salute mentale. Ho visto pazienti ritrovare dignità e autonomia grazie all'accoglienza familiare supportata.",
      rating: 5,
      year: "2022",
      avatar: "PS"
    },
    {
      name: "Giovanni M.",
      role: "Persona Accolta",
      location: "Torino",
      content: "Dopo anni di ospedalizzazione, ho ritrovato il piacere di vivere in una vera famiglia. L'équipe IESA mi ha sempre supportato nel mio percorso verso l'autonomia.",
      rating: 5,
      year: "2024",
      avatar: "GM"
    },
    {
      name: "Sara L.",
      role: "Operatrice IESA",
      location: "ASL TO3",
      content: "Lavorare nel progetto IESA significa essere testimoni quotidiani di piccoli miracoli. Vedere persone ritrovare fiducia in se stesse e nelle relazioni è la nostra più grande soddisfazione.",
      rating: 5,
      year: "2023",
      avatar: "SL"
    },
    {
      name: "Famiglia T.",
      role: "Famiglia Ospitante",
      location: "Ivrea, TO",
      content: "Quando abbiamo deciso di aprire la nostra casa a Lucia, non sapevamo che sarebbe diventata parte della famiglia. Tre anni dopo, non riusciamo a immaginare la vita senza di lei.",
      rating: 5,
      year: "2021",
      avatar: "FT"
    },
    {
      name: "Dr.ssa Elena C.",
      role: "Psicologa",
      location: "CEDRI IESA",
      content: "Il supporto scientifico e la formazione continua offerta dal CEDRI sono fondamentali per garantire la qualità dell'accoglienza IESA. La ricerca europea ci guida verso standard sempre più elevati.",
      rating: 5,
      year: "2024",
      avatar: "EC"
    }
  ];

  const stats = [
    { icon: Heart, value: "98%", label: "Soddisfazione Famiglie" },
    { icon: Users, value: "95%", label: "Successo Reinserimento" },
    { icon: Star, value: "4.9/5", label: "Valutazione Media" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-iesa-blue via-iesa-blue-light to-iesa-teal">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Le Voci dello IESA
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Testimonianze autentiche di famiglie, operatori e persone accolte che hanno 
            vissuto l'esperienza dell'accoglienza eterofamiliare supportata.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-8 w-8 text-iesa-teal opacity-50" />
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-iesa-gradient rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-iesa-blue">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.location} • {testimonial.year}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Vuoi Condividere la Tua Esperienza?
            </h3>
            <p className="text-white/90 mb-6">
              Le tue testimonianze aiutano a far conoscere il valore dell'accoglienza IESA 
              e possono ispirare altre famiglie e persone a intraprendere questo percorso.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-iesa-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Condividi la Tua Storia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
