import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";

const Unit2 = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-heading mb-4">
            Unidade Itapuã (Goiana)
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            Estilo e Sofisticação
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 hover:scale-105 transition-transform text-lg md:text-xl px-8 md:px-12 py-5 md:py-6 h-auto shadow-lg shadow-primary/20 w-full max-w-md"
            >
              <a
                href="https://www.trinks.com/dom-cavatti-2-"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center"
              >
                Agendar na Unidade 2
              </a>
            </Button>
          </div>
        </div>
      </section>



      {/* Info & Map */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card border-border p-6 md:p-8">
              <h2 className="text-2xl font-bold gradient-heading mb-6">
                Informações de Contato
              </h2>
              
              <div className="space-y-6">
                {/* Endereço */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                      📍 Endereço
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Rua Goiânia, 234, Loja 4 rua do bar dos meninos<br />
                      Itapuã, Vila Velha, ES - 29101-780
                    </p>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                      📞 Telefone
                    </h3>
                    <a 
                      href="tel:+5527996284485"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      (27) 99628-4485
                    </a>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                      🕒 Horário de Funcionamento
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Segunda a Sábado: 9h - 19h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border overflow-hidden h-64 md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1732377600!6m8!1m7!1s6xyOGAsBzFosVeakUflsXg!2m2!1d-20.3506904!2d-40.2851735!3f285.09!4f10.74!5f0.7899999999999999"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Localização Unidade 2 - Street View"
              ></iframe>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Unit2;
