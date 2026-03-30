import { useLocation } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";
import { type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  link?: string;
  highlighted?: boolean;
}

export function ProjectCard({ project, link, highlighted }: ProjectCardProps) {
  const [, navigate] = useLocation();

  const handleClick = () => {
    if (!link) return;
    const [route, hash] = link.split("#");
    navigate(route);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={link ? handleClick : undefined}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white border shadow-sm transition-all duration-300",
        link
          ? "cursor-pointer hover:shadow-xl hover:-translate-y-1 hover:border-brand/30 border-border/50"
          : "hover:shadow-xl hover:-translate-y-1 hover:border-brand/30 border-border/50",
        highlighted && "ring-2 ring-brand ring-offset-2 border-brand/30 shadow-xl"
      )}
    >
      {/* Abstract Geometric Placeholder */}
      <div className={cn("h-48 w-full relative overflow-hidden", project.color)}>
        <div className={cn("absolute inset-0 opacity-40", `pattern-${project.pattern}`)} />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-brand/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
          <h3 className="text-white font-bold text-lg mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {project.title}
          </h3>
          <span className="inline-flex items-center gap-2 text-white/90 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            Ver proyecto <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <span className="inline-block px-3 py-1 bg-brand/10 text-brand text-xs font-semibold rounded-full">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-1 group-hover:text-brand transition-colors">
          {project.title}
        </h3>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3 font-medium">
          <MapPin className="w-4 h-4" /> {project.location}
        </p>
        <p className="text-sm text-text-gray line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}
