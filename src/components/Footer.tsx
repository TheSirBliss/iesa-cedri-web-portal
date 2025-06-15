
import React from 'react';
import { Mail, Facebook, Youtube, ExternalLink, MapPin, Phone, Clock, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/share/18Xw9wLLS6/?mibextid=wwXIfr'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@cedriforiesaaslto3?si=nU02EKH4MmWeyoiR'
    }
  ];

  const quickLinks = [
    { name: 'Chi Siamo', href: '#about' },
    { name: 'Servizi', href: '#services' },
    { name: 'IESA Italia', href: '#italia' },
    { name: 'IESA Mondo', href: '#mondo' },
    { name: 'Archivio', href: '#archive' },
    { name: 'Contatti', href: '#contact' }
  ];

  const resources = [
    { name: 'Dymphna\'s Family', href: '#' },
    { name: 'Corso di Formazione', href: '#' },
    { name: 'Ricerche e Tesi', href: '#' },
    { name: 'GREPFa Europa', href: 'https://www.grepfa.org' }
  ];

  return (
    <footer className="bg-gradient-to-br from-iesa-blue via-iesa-blue-light to-iesa-teal text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">CEDRI</h3>
                <p className="text-sm opacity-90">Centro Europeo IESA</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed mb-6">
              Il Centro Europeo di Documentazione, Ricerca e Formazione sullo IESA - 
              Inserimento Eterofamiliare Supportato di Adulti.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigazione</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-white/60 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Risorse</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    target={resource.href.startsWith('http') ? '_blank' : undefined}
                    rel={resource.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-white/60 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                    {resource.name}
                    {resource.href.startsWith('http') && (
                      <ExternalLink className="h-3 w-3 ml-1 opacity-60" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contatti</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white/80 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90 text-sm">ASL TO3 - Collegno</p>
                  <p className="text-white/70 text-xs">Via Martiri XXX Aprile, 30</p>
                  <p className="text-white/70 text-xs">10093 Collegno (TO)</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/80 flex-shrink-0" />
                <a 
                  href="mailto:cedriforiesa@aslto3.piemonte.it"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  cedriforiesa@aslto3.piemonte.it
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/80 flex-shrink-0" />
                <a 
                  href="mailto:iesaitalia@libero.it"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  iesaitalia@libero.it
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-white/80 flex-shrink-0" />
                <p className="text-white/90 text-sm">Lun-Ven 9:00-17:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-white/80 text-sm">
              <Heart className="h-4 w-4 text-red-300" />
              <span>
                Realizzato con dedizione per promuovere l'accoglienza e l'inclusione sociale
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-white/70 text-sm">
              <span>© 2025 CEDRI per IESA - ASL TO3</span>
              <a 
                href="https://www.aslto3.piemonte.it/strutture/c-e-d-ri-for-iesa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center"
              >
                Sito Ufficiale ASL TO3
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
