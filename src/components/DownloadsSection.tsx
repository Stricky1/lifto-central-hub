
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, HardDrive, Code, FileText } from 'lucide-react';

const DownloadsSection = () => {
  const downloadCategories = [
    {
      title: "Imagens de Sistema",
      description: "Sistemas operacionais pré-configurados e otimizados para laboratórios educacionais",
      icon: HardDrive,
      items: [
        { name: "Ubuntu Education 22.04 LTS", size: "4.2 GB", description: "Sistema completo com ferramentas educacionais" },
        { name: "Windows 10 Education", size: "5.8 GB", description: "Versão educacional pré-configurada" },
        { name: "Linux Mint Edu", size: "3.9 GB", description: "Interface amigável para iniciantes" }
      ]
    },
    {
      title: "Aplicações Standalone",
      description: "Versões offline das ferramentas LIFTO para instalação independente",
      icon: Download,
      items: [
        { name: "LIFTO Installer", size: "45 MB", description: "Instalador principal do sistema" },
        { name: "LIFTO Manager", size: "32 MB", description: "Ferramenta de gerenciamento offline" },
        { name: "LIFTO Monitor", size: "28 MB", description: "Monitor de sistema independente" }
      ]
    },
    {
      title: "Scripts Úteis",
      description: "Automações e ferramentas complementares para administradores avançados",
      icon: Code,
      items: [
        { name: "Auto-Config Scripts", size: "2.1 MB", description: "Scripts de configuração automática" },
        { name: "Backup Tools", size: "5.3 MB", description: "Ferramentas de backup e restauração" },
        { name: "Network Utils", size: "1.8 MB", description: "Utilitários de rede e diagnóstico" }
      ]
    }
  ];

  const handleDownload = (itemName: string) => {
    // Aqui você implementaria a lógica real de download
    console.log(`Iniciando download: ${itemName}`);
    // Por exemplo: window.open(`/downloads/${itemName}`);
  };

  return (
    <section id="downloads" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Downloads
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Baixe imagens de sistema pré-configuradas, aplicações standalone e scripts úteis 
              para implementar o LIFTO em sua instituição
            </p>
          </div>

          <div className="space-y-8">
            {downloadCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center space-x-3">
                    <category.icon className="h-6 w-6 text-primary" />
                    <span className="text-xl text-foreground">{category.title}</span>
                  </CardTitle>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="p-6 hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="text-lg font-semibold text-foreground">{item.name}</h4>
                              <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                                {item.size}
                              </span>
                            </div>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                          </div>
                          <Button 
                            onClick={() => handleDownload(item.name)}
                            className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Baixar
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <FileText className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Documentação e Manuais
                  </h3>
                  <p className="text-blue-700 mb-4">
                    Acesse guias completos de instalação, configuração e uso de todas as ferramentas LIFTO.
                  </p>
                  <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                    <FileText className="h-4 w-4 mr-2" />
                    Acessar Documentação
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;
