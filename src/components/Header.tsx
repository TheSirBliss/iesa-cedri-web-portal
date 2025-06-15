
import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Chi Siamo', href: '#about' },
    { name: 'Servizi', href: '#services' },
    { name: 'IESA Italia', href: '#italia' },
    { name: 'IESA Mondo', href: '#mondo' },
    { name: 'Archivio', href: '#archive' },
    { name: 'Contatti', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-iesa-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div>
              <h1 className="text-lg lg:text-xl font-bold text-iesa-blue">CEDRI</h1>
              <p className="text-xs text-iesa-gray-dark hidden lg:block">Centro Europeo IESA</p>
            </div>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-iesa-teal transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-iesa-teal transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="border-iesa-teal text-iesa-teal hover:bg-iesa-teal hover:text-white"
              onClick={() => window.open('https://www.aslto3.piemonte.it/strutture/c-e-d-ri-for-iesa', '_blank')}
            >
              Sito ASL TO3
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-iesa-teal"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t animate-fade-in">
            <nav className="px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm font-medium text-gray-700 hover:text-iesa-teal transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-iesa-teal text-iesa-teal hover:bg-iesa-teal hover:text-white"
                  onClick={() => {
                    window.open('https://www.aslto3.piemonte.it/strutture/c-e-d-ri-for-iesa', '_blank');
                    setIsOpen(false);
                  }}
                >
                  Sito ASL TO3
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
