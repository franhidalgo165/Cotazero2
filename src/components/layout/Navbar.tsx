import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Inicio", href: "/", isAnchor: false },
  { label: "Proyectos", href: "/proyectos", isAnchor: false },
  { label: "Servicios", href: "servicios", isAnchor: true },
  { label: "Sobre nosotros", href: "sobre-nosotros", isAnchor: true },
  { label: "Contacto", href: "contacto", isAnchor: true },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRouteClick = (e: React.MouseEvent, route: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigate(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAnchorClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white",
        isScrolled ? "shadow-md py-3" : "py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => handleRouteClick(e, "/")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 bg-brand rounded-sm rotate-45 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
              <div className="w-3 h-3 bg-white rounded-sm -rotate-45" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-foreground">
              Cota<span className="text-brand">Zero</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.isAnchor ? (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="text-sm font-semibold transition-colors duration-200 hover:text-brand text-foreground cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleRouteClick(e, link.href)}
                  className={cn(
                    "text-sm font-semibold transition-colors duration-200 hover:text-brand cursor-pointer",
                    location === link.href ? "text-brand" : "text-foreground"
                  )}
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="#contacto"
              onClick={(e) => handleAnchorClick(e, "contacto")}
              className="px-5 py-2.5 bg-brand text-white text-sm font-bold rounded-lg shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              Hablemos
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-xl py-4 px-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) =>
            link.isAnchor ? (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-base font-semibold text-foreground py-2 border-b border-border/50 hover:text-brand cursor-pointer"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleRouteClick(e, link.href)}
                className="text-base font-semibold text-foreground py-2 border-b border-border/50 hover:text-brand cursor-pointer"
              >
                {link.label}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
}
