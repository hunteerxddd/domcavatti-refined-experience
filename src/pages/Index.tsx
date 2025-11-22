import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    UNIDADE 1
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    Itapuã (Rua Curitiba)
                  </p>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  >
                    <Link to="/unidade-1">Agendar Horário</Link>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    UNIDADE 2
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    Itapuã (Rua Goiana)
                  </p>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  >
                    <Link to="/unidade-2">Agendar Horário</Link>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    UNIDADE 3
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    Itaparica (Av. Muqui)
                  </p>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  >
                    <Link to="/unidade-3">Agendar Horário</Link>
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
