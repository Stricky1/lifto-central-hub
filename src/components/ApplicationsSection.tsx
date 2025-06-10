
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Palette, Package, Monitor, Bot, ExternalLink } from 'lucide-react';

const ApplicationsSection = () => {
  const applications = [
    {
      title: "Instalador",
      description: "Ferramenta automatizada para instalação rápida e segura de sistemas operacionais em múltiplos computadores simultaneamente.",
      icon: Download,
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      title: "Customização",
      description: "Interface intuitiva para personalização de configurações, papel de parede, e preferências do sistema em lote.",
      icon: Palette,
      color: "text-purple-500", 
      bgColor: "bg-purple-50"
    },
    {
      title: "Instalador de Programas",
      description: "Gerenciador centralizado para instalação e atualização de softwares educacionais e utilitários essenciais.",
      icon: Package,
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      title: "Gerência",
      description: "Painel de controle completo para monitoramento em tempo real, estatísticas de uso e relatórios do laboratório.",
      icon: Monitor,
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      title: "Bot de Alerta",
      description: "Sistema inteligente de notificações automáticas para problemas, manutenções e atualizações importantes.",
      icon: Bot,
      color: "text-red-500",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <section id="aplicacoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Aplicações Disponíveis
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conjunto completo de ferramentas integradas para automatizar e simplificar 
              todas as tarefas de gerenciamento do seu laboratório de informática
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 ${app.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <app.icon className={`h-6 w-6 ${app.color}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {app.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {app.description}
                  </p>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => {
                      // Aqui você pode adicionar a lógica de redirecionamento para cada aplicação
                      console.log(`Acessando aplicação: ${app.title}`);
                    }}
                  >
                    Acessar Aplicação
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-muted/30 border-dashed">
              <CardContent className="py-8">
                <Monitor className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Acesso Local na Rede
                </h3>
                <p className="text-muted-foreground mb-4">
                  Todas as aplicações estão disponíveis em seu servidor local. 
                  Certifique-se de estar conectado à rede da instituição.
                </p>
                <div className="text-sm text-muted-foreground bg-background p-3 rounded-lg">
                  <strong>Endereço do servidor:</strong> 
                  <code className="ml-2 text-primary">http://servidor-lifto.local</code>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
