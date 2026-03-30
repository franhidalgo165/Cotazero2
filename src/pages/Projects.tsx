import { useState, useEffect } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

const CATEGORIES: ("Todos" | ProjectCategory)[] = [
  "Todos",
  "Obra nueva",
  "Rehabilitación",
  "Industrial",
  "Urbanismo"
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"Todos" | ProjectCategory>("Todos");
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    setActiveFilter("Todos");

    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        setHighlightedId(hash);
        setTimeout(() => setHighlightedId(null), 2500);
      }
    }, 300);
  }, []);

  const filteredProjects = activeFilter === "Todos"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <main className="w-full pt-28 pb-24 min-h-screen bg-secondary/30">

      <section className="pt-12 pb-16 bg-white border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Nuestros <span className="text-brand">Proyectos</span>
            </h1>
            <p className="text-lg text-text-gray max-w-2xl mx-auto">
              Explora nuestro portfolio de trabajos de ingeniería y arquitectura. Aplicamos el máximo rigor técnico en cada actuación.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">

          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                    activeFilter === category
                      ? "bg-brand text-white shadow-md shadow-brand/20"
                      : "bg-white text-text-gray border border-border hover:border-brand/50 hover:text-brand"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.05}>
                <div id={project.id}>
                  <ProjectCard
                    project={project}
                    highlighted={highlightedId === project.id}
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-24">
              <p className="text-text-gray text-lg">No se encontraron proyectos en esta categoría.</p>
              <button
                onClick={() => setActiveFilter("Todos")}
                className="mt-4 text-brand font-semibold hover:underline"
              >
                Ver todos los proyectos
              </button>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
