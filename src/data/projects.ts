export type ProjectCategory = "Obra nueva" | "Rehabilitación" | "Industrial" | "Urbanismo";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  description: string;
  pattern: "grid" | "dots" | "lines";
  color: string;
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "Parque Empresarial Las Marismas",
    category: "Obra nueva",
    location: "Almería",
    description: "Diseño y ejecución de un complejo empresarial de 15.000m² con criterios de alta eficiencia energética.",
    pattern: "grid",
    color: "bg-slate-100"
  },
  {
    id: "p2",
    title: "Rehabilitación Centro Histórico",
    category: "Rehabilitación",
    location: "Roquetas de Mar",
    description: "Proyecto integral de consolidación estructural y restauración de fachadas protegidas del siglo XIX.",
    pattern: "dots",
    color: "bg-brand-light"
  },
  {
    id: "p3",
    title: "Urbanización Sierra de Gádor",
    category: "Urbanismo",
    location: "Berja, Almería",
    description: "Desarrollo del plan parcial y proyecto de urbanización para nueva zona residencial con integración paisajística.",
    pattern: "lines",
    color: "bg-gray-100"
  },
  {
    id: "p4",
    title: "Nave Logística Portuaria",
    category: "Industrial",
    location: "Puerto de Almería",
    description: "Cálculo y dirección de obra de estructura metálica de grandes luces para almacenamiento logístico.",
    pattern: "grid",
    color: "bg-zinc-100"
  },
  {
    id: "p5",
    title: "Edificio Residencial Alborán",
    category: "Obra nueva",
    location: "Almería",
    description: "Bloque de 40 viviendas plurifamiliares con garaje subterráneo y zonas comunes.",
    pattern: "lines",
    color: "bg-slate-50"
  },
  {
    id: "p6",
    title: "Adecuación Plaza del Ayuntamiento",
    category: "Urbanismo",
    location: "El Ejido",
    description: "Remodelación de espacio público priorizando la accesibilidad peatonal y zonas verdes.",
    pattern: "dots",
    color: "bg-brand/10"
  },
  {
    id: "p7",
    title: "Ampliación Planta Agroalimentaria",
    category: "Industrial",
    location: "Níjar",
    description: "Proyecto de ampliación de instalaciones frigoríficas y líneas de envasado.",
    pattern: "grid",
    color: "bg-neutral-100"
  },
  {
    id: "p8",
    title: "Restauración Antiguo Mercado",
    category: "Rehabilitación",
    location: "Almería",
    description: "Estudio patológico y proyecto de intervención para cambio de uso a centro cultural.",
    pattern: "lines",
    color: "bg-stone-100"
  },
  {
    id: "p9",
    title: "Vivienda Unifamiliar Aislada",
    category: "Obra nueva",
    location: "Aguadulce",
    description: "Proyecto básico y de ejecución de vivienda de diseño contemporáneo con piscina.",
    pattern: "dots",
    color: "bg-gray-50"
  },
  {
    id: "p10",
    title: "Polígono Industrial Poniente",
    category: "Urbanismo",
    location: "Vícar",
    description: "Proyecto de reparcelación y dotación de infraestructuras para suelo industrial.",
    pattern: "grid",
    color: "bg-slate-100"
  }
];

export const featuredProjects = projects.slice(0, 3);
