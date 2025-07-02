
import React from 'react';
import { ChevronDown, Heart, Users, Globe, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-iesa-blue via-iesa-blue/90 to-iesa-teal overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Famiglia che accoglie" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-iesa-blue/80 via-iesa-blue/70 to-iesa-teal/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-iesa-teal/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-40 w-1 h-1 bg-iesa-teal/50 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Title */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                CEDRI
              </span>
              <br />
              <span className="text-3xl md:text-4xl font-light opacity-90">
                Centro Europeo Documentazione, Ricerca e Formazione
              </span>
              <br />
              <span className="text-4xl md:text-5xl font-semibold text-iesa-teal">
                IESA
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto leading-relaxed">
              Inserimento Eterofamiliare Supportato di Adulti
            </p>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
              <Heart className="h-12 w-12 mb-4 text-iesa-teal" />
              <h3 className="text-lg font-semibold mb-2">Accoglienza</h3>
              <p className="text-sm opacity-80">Famiglie che aprono le loro case con il cuore</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
              <Users className="h-12 w-12 mb-4 text-iesa-teal" />
              <h3 className="text-lg font-semibold mb-2">Comunità</h3>
              <p className="text-sm opacity-80">Una rete di supporto e integrazione sociale</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
              <Globe className="h-12 w-12 mb-4 text-iesa-teal" />
              <h3 className="text-lg font-semibold mb-2">Esperienza</h3>
              <p className="text-sm opacity-80">Modello europeo consolidato da decenni</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-iesa-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Scopri lo IESA
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-iesa-blue transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Diventa Famiglia Ospitante
            </button>
          </div>

          {/* Scroll Indicator - Ottimizzato per mobile e desktop */}
          <div className="hidden md:flex flex-col items-center animate-bounce">
            <p className="text-sm opacity-70 mb-2">Scorri per saperne di più</p>
            <ChevronDown className="h-6 w-6 opacity-70" />
          </div>
          
          {/* Mobile Scroll Indicator */}
          <div className="md:hidden flex justify-center mt-8">
            <div className="animate-bounce bg-white/20 rounded-full p-3">
              <ChevronDown className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 md:h-30">
          <path fill="white" d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,69.3C672,64,768,64,864,69.3C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
