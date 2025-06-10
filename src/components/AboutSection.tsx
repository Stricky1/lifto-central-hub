
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, BookOpen, Server, HardDrive } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sobre o Projeto LIFTO
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O LIFTO é um sistema web inovador desenvolvido pelo grupo de pesquisa G-REDES 
            do Instituto Federal do Tocantins (IFTO), criado especificamente para 
            centralizar e simplificar o gerenciamento de laboratórios de informática 
            em instituições educacionais, aumentando a vida útil das máquinas e 
            centralizando toda a gerência em um computador servidor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Nossa História</h3>
            <p className="text-muted-foreground leading-relaxed">
              Nascido da necessidade real de otimizar a gestão de laboratórios educacionais, 
              o LIFTO foi desenvolvido com foco na praticidade e acessibilidade. Nossa equipe 
              identificou os principais desafios enfrentados por professores, técnicos e 
              gestores no dia a dia dos laboratórios e criou soluções tecnológicas integradas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Através de um sistema centralizado em servidor único, que também atua como 
              servidor de sistemas operacionais e responsável pela configuração das máquinas 
              clientes, transformamos processos complexos em tarefas simples, permitindo que 
              educadores foquem no que realmente importa: o ensino e a aprendizagem.
            </p>
          </div>

          <div className="grid gap-4">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <Target className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Acessibilidade</h4>
                    <p className="text-sm text-muted-foreground">
                      Interfaces simples e intuitivas, projetadas para usuários de todos os níveis técnicos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <HardDrive className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Vida Útil Estendida</h4>
                    <p className="text-sm text-muted-foreground">
                      Aumentamos a vida útil das máquinas dos laboratórios através de gerenciamento otimizado.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <Server className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Gerência Centralizada</h4>
                    <p className="text-sm text-muted-foreground">
                      Um único servidor centraliza toda a gerência, sistemas operacionais e configuração das máquinas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <BookOpen className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Ensino Público</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprometidos com a democratização da tecnologia na educação pública brasileira.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
