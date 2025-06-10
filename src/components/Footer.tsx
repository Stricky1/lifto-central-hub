
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/e0714c6f-64b1-49bb-b656-bc135b6f8595.png" 
                  alt="LIFTO" 
                  className="h-8 w-8"
                />
                <h3 className="text-lg font-bold text-foreground">LIFTO</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Sistema de gerenciamento de laboratórios educacionais desenvolvido pelo G-REDES/IFTO.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Aplicações</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Instalador</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Customização</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Gerência</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Bot de Alerta</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Downloads</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Tutoriais</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Instituições</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/lovable-uploads/63872def-0238-4739-880a-96fbe6921a5f.png" 
                    alt="G-REDES" 
                    className="h-8 w-8"
                  />
                  <span className="text-sm text-muted-foreground">G-REDES</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <div className="font-medium">IFTO - Campus Palmas</div>
                  <div>Instituto Federal do Tocantins</div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} LIFTO - Sistema de Gerenciamento de Laboratórios. 
              Desenvolvido pelo G-REDES/IFTO.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Licença</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
