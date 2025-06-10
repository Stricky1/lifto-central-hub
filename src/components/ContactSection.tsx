
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageCircle, MapPin, Clock, Users } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Contato e Suporte
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nossa equipe está pronta para ajudar você a implementar e usar o LIFTO 
              da melhor forma possível em sua instituição
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <span>E-mail de Suporte</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Entre em contato para dúvidas técnicas, reportar problemas ou solicitar novas funcionalidades.
                </p>
                <div className="space-y-2">
                  <a 
                    href="mailto:suporte@lifto.ifto.edu.br" 
                    className="block text-primary hover:underline font-medium"
                  >
                    suporte@lifto.ifto.edu.br
                  </a>
                  <a 
                    href="mailto:gredes@ifto.edu.br" 
                    className="block text-primary hover:underline font-medium"
                  >
                    gredes@ifto.edu.br
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <span>Telefone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Atendimento telefônico para suporte direto e emergências técnicas.
                </p>
                <div className="space-y-2">
                  <p className="font-medium text-foreground">(63) 3229-2200</p>
                  <p className="text-sm text-muted-foreground">
                    Horário de atendimento: Segunda a Sexta, 8h às 18h
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <span>Canal de Ajuda</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Acesse nossa comunidade online para tutoriais, FAQ e suporte da comunidade.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Acessar WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>Localização</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Instituto Federal do Tocantins</h4>
                  <p className="text-muted-foreground text-sm">
                    Campus Palmas<br />
                    Quadra 310 Norte, Avenida LO 05, s/n<br />
                    Plano Diretor Norte, Palmas - TO<br />
                    CEP: 77021-090
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Grupo de Pesquisa G-REDES</h4>
                  <p className="text-muted-foreground text-sm">
                    Laboratório de Redes e Sistemas Distribuídos<br />
                    Bloco de Informática, Sala 12
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-primary" />
                  <span>Equipe de Desenvolvimento</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Coordenação do Projeto</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Prof. Dr. [Nome do Coordenador]<br />
                    Coordenador do G-REDES
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Horário de Atendimento</h4>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Segunda a Sexta: 8h às 12h e 14h às 18h</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Button variant="outline" className="w-full">
                    Agendar Reunião
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Contribua com o Projeto LIFTO
              </h3>
              <p className="text-muted-foreground mb-4 max-w-3xl mx-auto">
                O LIFTO é um projeto open-source desenvolvido para a comunidade educacional. 
                Sua contribuição, feedback e sugestões são fundamentais para o crescimento e 
                melhoria contínua das nossas ferramentas.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Reportar Bug
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Sugerir Melhoria
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Contribuir com Código
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
