import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

const Unit3 = () => {
  const services = {
    procedimentosCapilares: [
      { name: "Botox Capilar", price: "A partir de: R$ 100" },
      { name: "Camuflagem Capilar", price: "Sob consulta" },
      { name: "Coloração / Tonalização Cabelo", price: "A partir de: R$ 40" },
      { name: "Hidratação Capilar", price: "Sob consulta" },
      { name: "Hidratação Capilar Power (Ozonioterapia)", price: "Sob consulta" },
      { name: "Higienização + Secagem", price: "R$ 30" },
      { name: "Luzes Capilar", price: "Sob consulta" },
      { name: "Platinagem", price: "Sob consulta" },
      { name: "Relaxamento Capilar", price: "Sob consulta" },
      { name: "Selagem Masculina", price: "Sob consulta" },
    ],
    cabelos: [
      { name: "Acabamento de Corte ( Pezinho )", price: "Sob consulta" },
      { name: "Corte", price: "R$ 50" },
      { name: "Corte a Máquina (1Pente) + Pezinho", price: "R$ 30" },
      { name: "Corte e Barba", price: "R$ 100" },
      { name: "Corte Feminino", price: "A partir de: R$ 60" },
      { name: "Corte Infantil", price: "Sob consulta" },
      { name: "Primeiro Corte Infantil", price: "Sob consulta" },
    ],
    combos: [
      { name: "Corte + Barba + Hidratação", price: "R$ 130" },
      { name: "Corte + Barba + Sobrancelha", price: "R$ 115" },
      { name: "Corte + Barboterapia", price: "R$ 120" },
      { name: "Corte + Hidratação", price: "R$ 80" },
      { name: "Corte + Sobrancelha", price: "R$ 65" },
    ],
    depilacaoSobrancelha: [
      { name: "Depilação de Orelha", price: "R$ 20" },
      { name: "Depilação Nariz", price: "R$ 20" },
      { name: "Depilação Nariz + Orelha", price: "R$ 30" },
      { name: "Design de Sobrancelha", price: "A partir de: R$ 15" },
      { name: "Mascara Black", price: "Sob consulta" },
    ],
    barba: [
      { name: "Barba", price: "R$ 50" },
      { name: "Barboterapia", price: "Sob consulta" },
      { name: "Bigode Modelado", price: "R$ 20" },
      { name: "Tonalização de Barba", price: "Sob consulta" },
    ],
  };


  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-heading mb-4">
            Unidade Itaparica (Av. Muqui)
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Excelência e Tradição
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8"
          >
            <a
              href="https://www.trinks.com/dom-cavatti-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar na Unidade 3
            </a>
          </Button>
        </div>
      </section>



      {/* Services */}
      <section className="py-12 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading text-center mb-12">
            Serviços e Valores
          </h2>

          <div className="space-y-8">
            {/* Procedimentos Capilares */}
            <Card className="bg-card border-border p-6 md:p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Procedimentos Capilares
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.procedimentosCapilares.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-3 border-b border-border last:border-0"
                  >
                    <span className="text-foreground text-sm md:text-base">
                      {service.name}
                    </span>
                    <span className="font-semibold text-primary text-sm md:text-base whitespace-nowrap ml-4">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Cabelos */}
            <Card className="bg-card border-border p-6 md:p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Cabelos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.cabelos.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-3 border-b border-border last:border-0"
                  >
                    <span className="text-foreground text-sm md:text-base">
                      {service.name}
                    </span>
                    <span className="font-semibold text-primary text-sm md:text-base whitespace-nowrap ml-4">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Combos */}
            <Card className="bg-card border-border p-6 md:p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Combos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.combos.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-3 border-b border-border last:border-0"
                  >
                    <span className="text-foreground text-sm md:text-base">
                      {service.name}
                    </span>
                    <span className="font-semibold text-primary text-sm md:text-base whitespace-nowrap ml-4">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Depilação e Sobrancelha */}
            <Card className="bg-card border-border p-6 md:p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Depilação e Sobrancelha
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.depilacaoSobrancelha.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-3 border-b border-border last:border-0"
                  >
                    <span className="text-foreground text-sm md:text-base">
                      {service.name}
                    </span>
                    <span className="font-semibold text-primary text-sm md:text-base whitespace-nowrap ml-4">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Barba */}
            <Card className="bg-card border-border p-6 md:p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Barba</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.barba.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-3 border-b border-border last:border-0"
                  >
                    <span className="text-foreground text-sm md:text-base">
                      {service.name}
                    </span>
                    <span className="font-semibold text-primary text-sm md:text-base whitespace-nowrap ml-4">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Info & Map */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card border-border p-6 md:p-8">
              <div className="flex items-start space-x-3 mb-6">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Endereço
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Avenida Muqui, 805
                    <br />
                    Praia de Itaparica, Vila Velha, ES - 29102-285
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Horário
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Segunda a Sábado: 9h - 19h
                    <br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border overflow-hidden h-64 md:h-auto">
              <iframe
                src="https://maps.google.com/maps?daddr=Avenida%20Muqui,%20805,%20Praia%20de%20Itaparica,%20Vila%20Velha,%20ES%20-%2029102-285&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Localização Unidade 3"
              ></iframe>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Unit3;
