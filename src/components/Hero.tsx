
import React from 'react';
import { ArrowRight, BookOpen, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-iesa-blue via-iesa-blue-light to-iesa-teal overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-float"></div>
        <div className="absolute top-1/4 right-20 w-16 h-16 border-2 border-white rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border-2 border-white rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 border-2 border-white rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            ASL TO3 - Piemonte
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">CEDRI</span>
            <span className="block text-2xl md:text-4xl lg:text-5xl font-normal text-white/90 mt-2">
              Centro Europeo Documentazione, Ricerca e Formazione sullo IESA
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Promuoviamo il modello IESA attraverso documentazione scientifica, 
            ricerca e formazione specializzata in tutta Europa
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-iesa-blue hover:bg-white/90 text-lg px-8 py-4 h-auto"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Scopri di più
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-iesa-blue text-lg px-8 py-4 h-auto backdrop-blur-sm"
              onClick={() => document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Archivio Documenti
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-1">500+</div>
              <div className="text-sm text-white/80">Documenti Archiviati</div>
            </div>
            <div className="text-center animate-slide-in-right" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-1">2020</div>
              <div className="text-sm text-white/80">Anno di Fondazione</div>
            </div>
            <div className="text-center animate-slide-in-right" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-1">Europa</div>
              <div className="text-sm text-white/80">Rete Internazionale</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
