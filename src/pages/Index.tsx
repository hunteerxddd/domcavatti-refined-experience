import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-heading mb-6 leading-tight">
            Mais que uma Barbearia. <br />Uma Experiência.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Três unidades. Uma sala VIP exclusiva. Escolha sua experiência.
          </p>
        </div>
      </section>

      {/* Units Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Unit 1 */}
            <Card className="bg-card border-border overflow-hidden hover-lift group">
              <div
                className="h-80 bg-cover bg-facade relative"
                style={{
                  backgroundImage: "url(https://i.imgur.com/L0i20kW.png)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl md:text-3xl font-bold gradient-heading mb-1">
                    UNIDADE 1: ITAPUÃ
                  </h3>
                  <p className="text-white/70 text-xs mb-3 font-medium">
                    Rua Curitiba
                  </p>
                  <p className="text-white text-sm md:text-base mb-4 font-semibold">
                    A Origem. Onde tudo começou.
                  </p>
                  
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 mb-4 space-y-2.5 border border-primary/20">
                    <div className="flex items-center text-sm text-white">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">Rua Curitiba, 735 - Itapuã, Vila Velha</span>
                    </div>
                    <div className="flex items-center text-sm text-white">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">(27) 99628-4485</span>
                    </div>
                    <div className="flex items-center text-sm text-white">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">Seg-Sáb: 09-19h | Dom: Fechado</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-base font-semibold"
                  >
                    <Link to="/unidade-1">Ver Serviços e Equipe</Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Unit 2 */}
            <Card className="bg-card border-border overflow-hidden hover-lift group">
              <div
                className="h-80 bg-cover bg-facade relative"
                style={{
                  backgroundImage: "url(https://i.imgur.com/oECLqVZ.png)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl md:text-3xl font-bold gradient-heading mb-1">
                    UNIDADE 2: ITAPUÃ
                  </h3>
                  <p className="text-white/70 text-xs mb-3 font-medium">
                    Rua Goiana
                  </p>
                  <p className="text-white text-sm md:text-base mb-4 font-semibold">
                    Estilo e Sofisticação.
                  </p>
                  
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 mb-4 space-y-2.5 border border-primary/20">
                    <div className="flex items-center text-sm text-white">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">Rua Goiânia, 234 - Itapuã, Vila Velha</span>
                    </div>
                    <div className="flex items-center text-sm text-white">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">(27) 99628-4485</span>
                    </div>
                    <div className="flex items-center text-sm text-white">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">Seg-Sáb: 09-19h | Dom: Fechado</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-base font-semibold"
                  >
                    <Link to="/unidade-2">Ver Serviços e Equipe</Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Unit 3 */}
            <Card className="bg-card border-border overflow-hidden hover-lift group">
              <div
                className="h-80 bg-cover bg-facade relative"
                style={{
                  backgroundImage: "url(https://i.imgur.com/RaIsp9r.png)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl md:text-3xl font-bold gradient-heading mb-1">
                    UNIDADE 3: ITAPARICA
                  </h3>
                  <p className="text-white/70 text-xs mb-3 font-medium">
                    Av. Muqui
                  </p>
                  <p className="text-white text-sm md:text-base mb-4 font-semibold">
                    Excelência e Tradição.
                  </p>
                  
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 mb-4 space-y-2.5 border border-primary/20">
                    <div className="flex items-center text-sm text-white">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">Avenida Muqui, 805 - Itaparica, Vila Velha</span>
                    </div>
                    <div className="flex items-center text-sm text-white">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">(27) 99628-4485</span>
                    </div>
                    <div className="flex items-center text-sm text-white">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">Seg-Sáb: 09-19h | Dom: Fechado</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-base font-semibold"
                  >
                    <Link to="/unidade-3">Ver Serviços e Equipe</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* VIP Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Card className="bg-card border-border overflow-hidden">
            <div
              className="h-96 bg-cover bg-center relative"
              style={{
                backgroundImage: "url(https://i.imgur.com/xoDrwHK.jpeg)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h2 className="text-3xl md:text-5xl font-bold gradient-heading mb-4">
                  A Experiência Definitiva
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-4 max-w-2xl">
                  Conheça a Sala VIP Exclusiva
                </p>
                <p className="text-sm md:text-base text-white/80 mb-8 max-w-xl">
                  Um espaço reservado para quem busca o máximo em sofisticação,
                  conforto e atendimento personalizado. Localizada na Unidade 1.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-base md:text-lg px-8"
                >
                  <a
                    href="https://wa.me/5527996284485?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+Sala+VIP+Exclusiva."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reservar Sala VIP (via WhatsApp)
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
