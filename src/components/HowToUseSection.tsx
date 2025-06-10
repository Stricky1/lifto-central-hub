
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Shield, RefreshCw } from 'lucide-react';

const HowToUseSection = () => {
  const steps = [
    {
      number: "01",
      title: "Acesse o Sistema",
      description: "Abra qualquer navegador conectado à rede da escola ou internet e acesse o link do LIFTO."
    },
    {
      number: "02", 
      title: "Escolha a Ferramenta",
      description: "Na página inicial, selecione a aplicação que deseja utilizar clicando no botão correspondente."
    },
    {
      number: "03",
      title: "Siga as Instruções",
      description: "Cada ferramenta possui interface intuitiva com instruções claras para guiá-lo no processo."
    },
    {
      number: "04",
      title: "Execute as Ações",
      description: "Realize as tarefas necessárias com apenas alguns cliques, de forma simples e segura."
    }
  ];

  return (
    <section id="como-usar" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Como Usar o LIFTO
            </h2>
            <p className="text-lg text-muted-foreground">
              Siga estes passos simples para começar a usar nossas ferramentas de gerenciamento
            </p>
          </div>

          <div className="grid gap-6 mb-12">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block h-6 w-6 text-primary" />
                )}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Recomendações de Segurança</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Sempre feche o navegador após o uso em computadores compartilhados
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Verifique se está conectado à rede correta antes de iniciar
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Mantenha seu navegador atualizado para melhor experiência
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <RefreshCw className="h-5 w-5 text-primary" />
                  <span>Manutenção e Atualizações</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    O sistema é atualizado automaticamente sem intervenção do usuário
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Reporte problemas através dos canais de suporte disponíveis
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Acompanhe as novidades e melhorias através do canal oficial
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
