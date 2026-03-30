import { useLocation } from "wouter";
import { ArrowRight, MapPin, Phone, Mail, Map as MapIcon, HardHat, Compass, FileCheck, Building, Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { FadeIn } from "@/components/animations/FadeIn";
import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre es obligatorio"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(9, "Teléfono inválido"),
  message: z.string().min(10, "El mensaje es demasiado corto"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Home() {
  const [, navigate] = useLocation();
  const { toast } = useToast();

  const goToProyectos = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/proyectos");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Form data:", data);
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo lo antes posible.",
      variant: "default",
    });
    reset();
  };

  const services = [
    {
      icon: <Building className="w-8 h-8 text-brand" />,
      title: "Ingeniería Civil",
      desc: "Diseño y cálculo de estructuras e infraestructuras con precisión técnica y cumplimiento normativo."
    },
    {
      icon: <Compass className="w-8 h-8 text-brand" />,
      title: "Topografía",
      desc: "Levantamientos, replanteos y cartografía con tecnología de alta precisión para todo tipo de terrenos."
    },
    {
      icon: <HardHat className="w-8 h-8 text-brand" />,
      title: "Dirección de Obra",
      desc: "Supervisión y coordinación integral de proyectos de construcción desde el inicio hasta la entrega."
    },
    {
      icon: <FileCheck className="w-8 h-8 text-brand" />,
      title: "Proyectos y Licencias",
      desc: "Redacción de proyectos técnicos, expedientes y tramitación ágil de licencias urbanísticas."
    },
    {
      icon: <Search className="w-8 h-8 text-brand" />,
      title: "Consultoría Técnica",
      desc: "Asesoramiento especializado, peritajes e informes técnicos en todas las fases del proyecto."
    }
  ];

  return (
    <main className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/50 -z-10 rounded-bl-[100px] hidden lg:block" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <FadeIn>
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-bold mb-6">
                  <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                  Estudio de Ingeniería en Almería
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6">
                  Ingeniería y proyectos <span className="text-brand">integrales</span>
                </h1>
                <p className="text-lg md:text-xl text-text-gray mb-8 leading-relaxed">
                  Soluciones técnicas rigurosas adaptadas a cada necesidad. Acompañamos a nuestros clientes desde el primer trazo hasta la entrega final de la obra.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/proyectos"
                    onClick={goToProyectos}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand text-white font-bold rounded-xl shadow-lg shadow-brand/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    Ver proyectos <ArrowRight className="w-5 h-5" />
                  </a>
                  <a 
                    href="#contacto" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-foreground border-2 border-border font-bold rounded-xl hover:border-brand hover:text-brand transition-all duration-300"
                  >
                    Contactar
                  </a>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-brand/30 rounded-tl-3xl" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-brand/30 rounded-br-3xl" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-secondary">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/hero-visual.png`}
                    alt="CotaZero Ingeniería Arquitectura" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent mix-blend-overlay" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="servicios" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
            <p className="text-text-gray text-lg">Cobertura técnica completa para garantizar la viabilidad y ejecución de cualquier actuación constructiva.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="group bg-white border border-border/60 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand to-brand-light transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-text-gray leading-relaxed">{service.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS */}
      <section id="proyectos-home" className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Proyectos destacados</h2>
              <p className="text-text-gray text-lg max-w-2xl">Una muestra representativa de nuestro compromiso con la calidad y la excelencia técnica en Almería y provincia.</p>
            </FadeIn>
            <FadeIn direction="left">
              <a
                href="/proyectos"
                onClick={goToProyectos}
                className="hidden md:inline-flex items-center gap-2 text-brand font-bold hover:gap-4 transition-all cursor-pointer"
              >
                Ver todos los proyectos <ArrowRight className="w-5 h-5" />
              </a>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 md:mb-0">
            {featuredProjects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.1}>
                <ProjectCard project={project} link={`/proyectos#${project.id}`} />
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-8 md:hidden text-center">
            <a
              href="/proyectos"
              onClick={goToProyectos}
              className="inline-flex items-center gap-2 text-brand font-bold border-b-2 border-brand pb-1 cursor-pointer"
            >
              Ver todos los proyectos <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. ABOUT US */}
      <section id="sobre-nosotros" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-brand/5 translate-x-4 translate-y-4 rounded-2xl -z-10" />
                <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-lg">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/about-visual.png`}
                    alt="Plano arquitectónico CotaZero" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
                    <div className="text-4xl font-extrabold text-brand mb-1">+10</div>
                    <div className="text-sm font-bold text-foreground">Años de experiencia</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Sobre nosotros</h2>
              <div className="space-y-6 text-lg text-text-gray leading-relaxed">
                <p>
                  En <strong className="text-foreground">CotaZero</strong> llevamos más de una década acompañando a nuestros clientes en cada fase de sus proyectos. Desde el primer trazo hasta la entrega final, nuestro equipo técnico garantiza soluciones de ingeniería rigurosas, adaptadas a cada necesidad y contexto.
                </p>
                <p>
                  Creemos en la coordinación integral como base de un proyecto exitoso: uniendo criterio técnico, cumplimiento normativo y comunicación fluida con el cliente.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center text-brand">✓</div>
                    <span className="font-semibold text-foreground">Rigor Técnico</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center text-brand">✓</div>
                    <span className="font-semibold text-foreground">Cumplimiento Plazos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center text-brand">✓</div>
                    <span className="font-semibold text-foreground">Gestión Integral</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. CONTACT */}
      <section id="contacto" className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contacto</h2>
            <p className="text-text-gray text-lg">¿Tienes un proyecto en mente? Cuéntanos qué necesitas y te asesoraremos sin compromiso.</p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white rounded-3xl shadow-xl border border-border/50 overflow-hidden">
            
            {/* Form */}
            <div className="p-8 md:p-12 lg:col-span-3">
              <h3 className="text-2xl font-bold text-foreground mb-6">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Nombre completo</label>
                    <input 
                      {...register("name")}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                      placeholder="Tu nombre"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Teléfono</label>
                    <input 
                      {...register("phone")}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                      placeholder="Tu teléfono"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Correo electrónico</label>
                  <input 
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                    placeholder="tu@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Mensaje</label>
                  <textarea 
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all resize-none"
                    placeholder="Detalles de tu proyecto o consulta..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand text-white font-bold rounded-xl shadow-lg shadow-brand/25 hover:shadow-xl hover:bg-brand-dark hover:-translate-y-0.5 disabled:opacity-70 disabled:transform-none transition-all duration-200"
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            </div>

            {/* Info & Map */}
            <div className="bg-foreground text-white p-8 md:p-12 lg:col-span-2 flex flex-col">
              <h3 className="text-2xl font-bold mb-8">Información</h3>
              
              <div className="space-y-6 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dirección</h4>
                    <p className="text-white/70 text-sm">Calle Arquitecto Sáinz de Vicuña, 4<br/>04004 Almería, España</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:info@cotazero.es" className="text-white/70 text-sm hover:text-brand transition-colors">info@cotazero.es</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Teléfono</h4>
                    <a href="tel:+34950123456" className="text-white/70 text-sm hover:text-brand transition-colors">+34 950 123 456</a>
                  </div>
                </div>
              </div>

              <div className="mt-10 h-48 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group">
                <MapIcon className="w-8 h-8 text-white/40 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-white/60">Mapa de ubicación</span>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')] opacity-20 bg-cover bg-center mix-blend-luminosity"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-20 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
              ¿Tienes un proyecto en mente? Cuéntanos.
            </h2>
            <a 
              href="#contacto"
              className="inline-block px-8 py-4 bg-white text-brand font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Solicitar presupuesto
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
