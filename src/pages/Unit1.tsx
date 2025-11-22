import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, AlertCircle, Phone } from "lucide-react";

const Unit1 = () => {
  const services = {
    cabelo: [
      { name: "Acabamento de Corte (Pezinho)", price: "R$ 15" },
      { name: "Camuflagem Capilar", price: "R$ 50" },
      { name: "Coloração / Tonalização", price: "R$ 50" },
      { name: "Corte", price: "R$ 50" },
      { name: "CORTE DOMS CLUB", price: "Grátis" },
      { name: "Corte e Barba", price: "R$ 100" },
      { name: "CORTE e BARBA DOMS CLUB", price: "Grátis" },
      { name: "Corte Infantil", price: "R$ 60" },
      { name: "Escova Turbinada Masculina", price: "R$ 45" },
      { name: "Hidratação Capilar", price: "R$ 30" },
      { name: "Hidratação Capilar Power (Ozonioterapia)", price: "R$ 60" },
      { name: "Higienização + Secagem", price: "R$ 25" },
      { name: "Luzes Capilar", price: "A partir de: R$ 120" },
      { name: "Platinagem", price: "A partir de: R$ 150" },
      { name: "Primeiro Corte Infantil", price: "R$ 150" },
      { name: "Relaxamento Capilar", price: "R$ 80" },
      { name: "Selagem Masculina", price: "A partir de: R$ 120" },
    ],
    barba: [
      { name: "Barba", price: "R$ 50" },
      { name: "BARBA DOMS CLUB", price: "Grátis" },
      { name: "Barboterapia", price: "R$ 70" },
      { name: "Tonalização de Barba", price: "R$ 40" },
    ],
    depilacao: [
      { name: "(COMBO) Depilção Nariz + Orelha", price: "R$ 45" },
      { name: "Depilação de Nariz", price: "R$ 30" },
      { name: "Depilação Masculina - Orelhas", price: "R$ 30" },
    ],
    facial: [{ name: "Mascara Black", price: "R$ 25" }],
    sobrancelha: [{ name: "Acabamento de Sobrancelha", price: "R$ 15" }],
  };


  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-heading mb-4">
            Unidade Itapuã (Curitiba)
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            A Origem
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 mb-6"
          >
            <a
              href="https://www.trinks.com/barbearia-dom-cavatti"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar na Unidade 1
            </a>
          </Button>

          {/* VIP Info Box */}
          <Card className="bg-accent/20 border-accent p-6 mt-8">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="font-semibold text-foreground mb-2">
                  Sala VIP Exclusiva
                </h3>
                <p className="text-sm text-muted-foreground">
                  Esta unidade possui nossa Sala VIP Exclusiva. Um espaço
                  reservado para atendimento premium com privacidade total.
                  Entre em contato para reservar.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>



      {/* Services */}
      <section className="py-12 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading text-center mb-12">
            Serviços e Valores
          </h2>

          <div className="space-y-8">
            {/* Cabelo */}
            <Card className="bg-card border-border p-6 md:p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Cabelo</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.cabelo.map((service, idx) => (
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

            {/* Barba e Bigode */}
            <Card className="bg-card border-border p-6 md:p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Barba e Bigode
              </h3>
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

            {/* Depilação */}
            <Card className="bg-card border-border p-6 md:p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Depilação
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.depilacao.map((service, idx) => (
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

            {/* Facial */}
            <Card className="bg-card border-border p-6 md:p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Facial</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.facial.map((service, idx) => (
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

            {/* Sobrancelha */}
            <Card className="bg-card border-border p-6 md:p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Sobrancelha
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.sobrancelha.map((service, idx) => (
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
                      Rua Curitiba, 735, Loja 1 e 2<br />
                      Itapuã, Vila Velha, ES - 29101-557
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
                src="https://maps.google.com/maps?daddr=Rua%20Curitiba,%20735,%20Loja%201%20e%202,%20Itapu%C3%A3,%20Vila%20Velha,%20ES%20-%2029101-557&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Localização Unidade 1"
              ></iframe>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Unit1;
