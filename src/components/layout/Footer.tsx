import { useLocation } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [location, navigate] = useLocation();

  const handleRouteClick = (e: React.MouseEvent, route: string) => {
    e.preventDefault();
    navigate(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAnchorClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();

    const scrollToSection = () => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    if (location !== "/") {
      navigate("/");
      setTimeout(scrollToSection, 300);
    } else {
      scrollToSection();
    }
  };

  return (
    <footer className="bg-secondary pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-2">
            <a
              href="/"
              onClick={(e) => handleRouteClick(e, "/")}
              className="flex items-center gap-2 mb-4 cursor-pointer"
            >
              <div className="w-6 h-6 bg-brand rounded-sm rotate-45 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-sm -rotate-45" />
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">
                Cota<span className="text-brand">Zero</span>
              </span>
            </a>
            <p className="text-text-gray max-w-md text-sm leading-relaxed mb-6">
              Estudio de ingeniería y proyectos en Almería. Aportamos soluciones técnicas rigurosas y gestión integral para garantizar el éxito de cada obra.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleRouteClick(e, "/")}
                  className="text-sm text-text-gray hover:text-brand transition-colors cursor-pointer"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/proyectos"
                  onClick={(e) => handleRouteClick(e, "/proyectos")}
                  className="text-sm text-text-gray hover:text-brand transition-colors cursor-pointer"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => handleAnchorClick(e, "servicios")}
                  className="text-sm text-text-gray hover:text-brand transition-colors cursor-pointer"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#sobre-nosotros"
                  onClick={(e) => handleAnchorClick(e, "sobre-nosotros")}
                  className="text-sm text-text-gray hover:text-brand transition-colors cursor-pointer"
                >
                  Sobre nosotros
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-text-gray">
              <li>C/ Arquitecto Sáinz de Vicuña, 4</li>
              <li>04004 Almería, España</li>
              <li className="pt-2">
                <a href="mailto:info@cotazero.es" className="hover:text-brand transition-colors">
                  info@cotazero.es
                </a>
              </li>
              <li>
                <a href="tel:+34950123456" className="hover:text-brand transition-colors">
                  +34 950 123 456
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-gray">
            © {currentYear} CotaZero Ingeniería. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-text-gray cursor-default">Aviso Legal</span>
            <span className="text-xs text-text-gray cursor-default">Política de Privacidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
