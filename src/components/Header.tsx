
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/e0714c6f-64b1-49bb-b656-bc135b6f8595.png" 
              alt="LIFTO Logo" 
              className="h-10 w-10"
            />
            <h1 className="text-2xl font-bold text-primary">LIFTO</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('sobre')} className="text-foreground hover:text-primary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('como-usar')} className="text-foreground hover:text-primary transition-colors">
              Como Usar
            </button>
            <button onClick={() => scrollToSection('aplicacoes')} className="text-foreground hover:text-primary transition-colors">
              Aplicações
            </button>
            <button onClick={() => scrollToSection('downloads')} className="text-foreground hover:text-primary transition-colors">
              Downloads
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-foreground hover:text-primary transition-colors">
              Contato
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <button onClick={() => scrollToSection('sobre')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('como-usar')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              Como Usar
            </button>
            <button onClick={() => scrollToSection('aplicacoes')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              Aplicações
            </button>
            <button onClick={() => scrollToSection('downloads')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              Downloads
            </button>
            <button onClick={() => scrollToSection('contato')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
