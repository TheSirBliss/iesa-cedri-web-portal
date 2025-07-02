
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    type: 'info',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulazione invio form - qui andrà integrato EmailJS o altro servizio
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Messaggio inviato con successo! Ti contatteremo presto.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        type: 'info',
        message: ''
      });
    } catch (error) {
      toast.error('Errore nell\'invio del messaggio. Riprova più tardi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Principale",
      value: "cedriforiesa@aslto3.piemonte.it",
      description: "Per informazioni ufficiali e richieste istituzionali"
    },
    {
      icon: Mail,
      title: "Email Contenuti",
      value: "iesaitalia@libero.it",
      description: "Per proposte di materiali e contenuti per l'archivio"
    },
    {
      icon: MapPin,
      title: "Sede",
      value: "ASL TO3 - Collegno",
      description: "Via Martiri XXX Aprile, 30 - 10093 Collegno (TO)"
    },
    {
      icon: Clock,
      title: "Orari",
      value: "Lun-Ven 9:00-17:00",
      description: "Disponibili per appuntamenti e consulenze"
    }
  ];

  const team = [
    {
      name: "Dott. Gianfranco Aluffi",
      role: "Direttore Scientifico",
      description: "Referente del Servizio IESA ASL TO3, Centro Esperto Regione Piemonte",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Dott.ssa Chiara Laura Riccardo",
      role: "Coordinatore Scientifico",
      description: "Docente Università di Torino, Coordinatore CEDRI",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Prof. Jean-Claude Cébula",
      role: "Consulente Internazionale",
      description: "Direttore IFREP Parigi, Esperto GREPFa",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-iesa-blue mb-6">
            Contatti
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Siamo qui per rispondere alle tue domande, fornire informazioni sui nostri servizi 
            e supportarti nel tuo percorso con lo IESA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-iesa-blue flex items-center">
                  <MessageSquare className="h-6 w-6 mr-3" />
                  Scrivici
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iesa-teal focus:border-transparent"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iesa-teal focus:border-transparent"
                        placeholder="tua@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iesa-teal focus:border-transparent"
                      placeholder="+39 123 456 7890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo di Richiesta *
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iesa-teal focus:border-transparent"
                    >
                      <option value="info">Richiesta Informazioni</option>
                      <option value="caregiver">Candidatura Famiglia Ospitante</option>
                      <option value="training">Corso di Formazione</option>
                      <option value="research">Ricerca e Collaborazione</option>
                      <option value="media">Proposta Contenuti</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Oggetto *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iesa-teal focus:border-transparent"
                      placeholder="Oggetto del messaggio"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Messaggio *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iesa-teal focus:border-transparent resize-none"
                      placeholder="Descrivi la tua richiesta in dettaglio..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-iesa-gradient hover:shadow-lg transition-all duration-300 text-lg py-3"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-iesa-blue flex items-center">
                  <Phone className="h-6 w-6 mr-3" />
                  Informazioni di Contatto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-iesa-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-iesa-blue">{info.title}</h4>
                      <p className="text-iesa-teal font-medium">{info.value}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Map - Indirizzo corretto di Collegno */}
            <Card className="shadow-xl border-0">
              <CardContent className="p-0">
                <div className="h-64 bg-gray-200 rounded-lg relative overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.8536842105263!2d7.551622876315789!3d45.077473871052634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788152b95d6b5f5%3A0x1c4b8b8b8b8b8b8b!2sVia%20Martiri%20XXX%20Aprile%2C%2030%2C%2010093%20Collegno%20TO%2C%20Italy!5e0!3m2!1sen!2sit!4v1641234567890"
                    width="100%" 
                    height="256" 
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mappa sede CEDRI IESA"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section con foto realistiche */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-iesa-blue mb-8 text-center">Il Nostro Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-iesa-blue mb-1">{member.name}</h4>
                  <p className="text-iesa-teal font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-iesa-gradient rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">Link Utili</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a 
              href="https://www.aslto3.piemonte.it/strutture/c-e-d-ri-for-iesa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-300"
            >
              <h4 className="font-semibold mb-2">Sito ASL TO3</h4>
              <p className="text-sm opacity-90">Informazioni ufficiali sul servizio</p>
            </a>
            <a 
              href="https://www.facebook.com/share/18Xw9wLLS6/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-300"
            >
              <h4 className="font-semibold mb-2">Facebook</h4>
              <p className="text-sm opacity-90">Seguici sui social media</p>
            </a>
            <a 
              href="https://youtube.com/@cedriforiesaaslto3?si=nU02EKH4MmWeyoiR"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-300"
            >
              <h4 className="font-semibold mb-2">YouTube</h4>
              <p className="text-sm opacity-90">Video e contenuti multimediali</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
