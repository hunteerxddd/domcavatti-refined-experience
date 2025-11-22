import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-heading mb-4">
              DOM CAVATTI
            </h3>
            <p className="text-muted-foreground text-sm">
              Mais que uma barbearia. Uma experiência.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              <Link
                to="/"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Início
              </Link>
              <Link
                to="/unidade-1"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Unidade 1: Itapuã (Curitiba)
              </Link>
              <Link
                to="/unidade-2"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Unidade 2: Itapuã (Goiana)
              </Link>
              <Link
                to="/unidade-3"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Unidade 3: Itaparica (Muqui)
              </Link>
            </nav>
          </div>

          {/* Addresses */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Nossas Unidades</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Unidade 1: Rua Curitiba, 735, Loja 1 e 2, Itapuã, Vila Velha, ES - 29101-557</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Unidade 2: Rua Goiânia, 234, Loja 4 rua do bar dos meninos, Itapuã, Vila Velha, ES - 29101-780</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Unidade 3: Avenida Muqui, 805, Praia de Itaparica, Vila Velha, ES - 29102-285</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Dom Cavatti. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/domcavattibarbearia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/domcavatti/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
