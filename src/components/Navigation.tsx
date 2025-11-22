import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unitsOpen, setUnitsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <h1 className="text-2xl md:text-3xl font-bold gradient-heading">
              DOM CAVATTI
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Início
            </Link>

            {/* Units Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                <span>Nossas Unidades</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  to="/unidade-1"
                  className="block px-4 py-3 text-sm hover:bg-muted transition-colors first:rounded-t-lg"
                >
                  Unidade 1: Itapuã (Curitiba)
                </Link>
                <Link
                  to="/unidade-2"
                  className="block px-4 py-3 text-sm hover:bg-muted transition-colors"
                >
                  Unidade 2: Itapuã (Goiana)
                </Link>
                <Link
                  to="/unidade-3"
                  className="block px-4 py-3 text-sm hover:bg-muted transition-colors last:rounded-b-lg"
                >
                  Unidade 3: Itaparica (Muqui)
                </Link>
              </div>
            </div>

            <a
              href="https://wa.me/5527996284485?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+Sala+VIP+Exclusiva."
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Sala VIP Exclusiva
            </a>

            <Button
              asChild
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              <a
                href="https://wa.me/5527996284485"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contato
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Início
            </Link>

            {/* Mobile Units Dropdown */}
            <div>
              <button
                onClick={() => setUnitsOpen(!unitsOpen)}
                className="flex items-center justify-between w-full text-sm font-medium text-foreground py-2"
              >
                <span>Nossas Unidades</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    unitsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {unitsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    to="/unidade-1"
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-muted-foreground hover:text-primary py-2"
                  >
                    Unidade 1: Itapuã (Curitiba)
                  </Link>
                  <Link
                    to="/unidade-2"
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-muted-foreground hover:text-primary py-2"
                  >
                    Unidade 2: Itapuã (Goiana)
                  </Link>
                  <Link
                    to="/unidade-3"
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-muted-foreground hover:text-primary py-2"
                  >
                    Unidade 3: Itaparica (Muqui)
                  </Link>
                </div>
              )}
            </div>

            <a
              href="https://wa.me/5527996284485?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+Sala+VIP+Exclusiva."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Sala VIP Exclusiva
            </a>

            <Button
              asChild
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              <a
                href="https://wa.me/5527996284485"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
