
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Monitor, Users, Settings } from 'lucide-react';

const HeroBanner = () => {
  const scrollToApps = () => {
    const element = document.getElementById('aplicacoes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logos Section */}
          <div className="flex items-center justify-center space-x-8 mb-8 flex-wrap gap-4">
            <img 
              src="/lovable-uploads/63872def-0238-4739-880a-96fbe6921a5f.png" 
              alt="G-REDES" 
              className="h-16 md:h-20"
            />
            <img 
              src="/lovable-uploads/e0714c6f-64b1-49bb-b656-bc135b6f8595.png" 
              alt="LIFTO" 
              className="h-16 md:h-20"
            />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">IFTO</div>
              <div className="text-sm text-muted-foreground">Instituto Federal</div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            <span className="text-primary">LIFTO</span>
            <br />
            <span className="text-2xl md:text-4xl font-normal">
              Sistema de Gerenciamento de Laboratórios
            </span>
          </h1>

          {/* Mission Statement */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Centralizando e simplificando o gerenciamento de laboratórios de informática 
            em ambientes educacionais com tecnologia acessível e inovadora.
          </p>

          {/* Feature Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <Monitor className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Monitoramento</p>
            </div>
            <div className="text-center">
              <Settings className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Automação</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Colaboração</p>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            onClick={scrollToApps}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg animate-scale-in"
          >
            Acessar Aplicações
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
