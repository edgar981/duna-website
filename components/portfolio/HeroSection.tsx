"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ChevronDown } from "lucide-react";

type HeroSectionProps = {
  heroImage: string;
};

type Coords = {
  x: number;
  y: number;
};

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  const [coords, setCoords] = useState<Coords>({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Coordinate display - desktop only */}
      <div className="hidden lg:block fixed bottom-6 left-6 z-40 font-mono text-[10px] text-muted-foreground tracking-wider">
        X:{String(coords.x).padStart(4, "0")} Y:{String(coords.y).padStart(4, "0")}
      </div>

      {/* Main hero content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 pt-16">
        {/* Left column - text */}
        <div className="lg:col-span-5 flex flex-col justify-end p-6 lg:p-10 lg:pb-20 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-6">
              Automatización • Datos • Eficiencia
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight mb-8">
              Tu Negocio 
              <br />
              <span className="text-primary">Funcionando</span>
              <span>.</span>
              <br />
              Incluso cuando no estás.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-10">
              Ayudamos a empresas a ordenar su operación mediante automatización, herramientas digitales, integraciones y analítica práctica.
              Menos tareas manuales, más control sobre tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center gap-3 bg-foreground text-background px-8 py-4 font-mono text-xs tracking-widest uppercase hover:bg-primary transition-colors duration-300 cursor-pointer"
              >
                Solicitar valoración
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </button>

              <button
                onClick={() =>
                  document
                    .querySelector("#solutions")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-3 px-8 py-4 font-mono text-xs tracking-widest uppercase border border-border hover:border-primary hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                Explorar soluciones
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right column - image */}
        <div className="lg:col-span-7 relative overflow-hidden order-1 lg:order-2 min-h-[50vh] lg:min-h-0">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <img
              src={heroImage}
              alt="Automated industrial systems with precision robotics"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-r from-background via-background/20 to-transparent lg:block hidden" />
            <div className="absolute inset-0 bg-linear-to-t from-background to-transparent lg:hidden" />
          </motion.div>

          {/* Grid overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-0 right-0 h-px bg-primary/20" />
            <div className="absolute top-2/3 left-0 right-0 h-px bg-primary/20" />
            <div className="absolute left-1/3 top-0 bottom-0 w-px bg-primary/20" />
            <div className="absolute left-2/3 top-0 bottom-0 w-px bg-primary/20" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;