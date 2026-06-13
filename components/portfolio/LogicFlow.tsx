"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, PenTool, Code2, TrendingUp, LucideIcon } from "lucide-react";

type Phase = {
  number: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
};

const PHASES: Phase[] = [
  {
    number: "01",
    icon: Search,
    title: "Diagnosticamos",
    subtitle: "Entendemos tu operación",
    description:
      "Analizamos cómo funciona actualmente tu negocio, qué herramientas utilizas y dónde existen tareas manuales, reprocesos o pérdida de información. Buscamos entender el flujo real antes de proponer cualquier solución.",
    techStack: [
      "Procesos Operativos",
      "Flujos Actuales",
      "Puntos Críticos",
      "Oportunidades de Mejora",
    ],
  },
  {
    number: "02",
    icon: PenTool,
    title: "Diseñamos",
    subtitle: "Soluciones ajustadas a tu negocio",
    description:
      "Definimos una solución práctica según las necesidades de tu operación: automatización, dashboards, apps internas, integraciones o centralización de información.",
    techStack: [
      "Automatización",
      "Apps Internas",
      "Integraciones",
      "Arquitectura de Flujo",
    ],
  },
  {
    number: "03",
    icon: Code2,
    title: "Construimos",
    subtitle: "Implementación y conexión",
    description:
      "Desarrollamos los flujos, herramientas y procesos digitales necesarios para reducir trabajo manual, mejorar la trazabilidad y conectar la información de tu operación.",
    techStack: [
      "Dashboards",
      "Bases de Datos",
      "APIs",
      "Flujos Automatizados",
    ],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimizamos",
    subtitle: "Medición y mejora continua",
    description:
      "Monitoreamos resultados, ajustamos procesos y dejamos indicadores claros para que puedas medir el impacto de la solución y seguir mejorando tu operación.",
    techStack: [
      "Indicadores",
      "Reportes",
      "Trazabilidad",
      "Mejora Continua",
    ],
  },
];

const LogicFlow = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="px-6 lg:px-10 py-20 lg:py-32 max-w-350 mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-4">
          Cómo Trabajamos
        </div>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight max-w-2xl">
          Flujo Operativo
        </h2>

        <p className="text-muted-foreground text-lg mt-4 max-w-xl leading-relaxed">
          Entendemos cómo funciona tu operación actual, detectamos oportunidades
          de mejora y construimos soluciones digitales pensadas para procesos reales.
        </p>
      </motion.div>

      <div className="relative">
        {/* Vertical connecting line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.3,
          }}
          className="absolute left-6 lg:left-10 top-0 bottom-0 w-px bg-border origin-top hidden md:block"
        />

        <div className="space-y-16 lg:space-y-24">
          {PHASES.map((phase, i) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
              className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10"
            >
              {/* Node dot */}
              <div className="hidden md:flex md:col-span-1 justify-center pt-2">
                <div className="w-5 h-5 border-2 border-primary bg-background flex items-center justify-center z-10 relative">
                  <div className="w-1.5 h-1.5 bg-primary" />
                </div>
              </div>

              {/* Phase header */}
              <div className="md:col-span-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-primary">
                    {phase.number}
                  </span>
                  <phase.icon className="w-4 h-4 text-primary" />
                </div>

                <h3 className="font-heading text-2xl lg:text-3xl font-medium tracking-tight">
                  {phase.title}
                </h3>

                <span className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase mt-1 block">
                  {phase.subtitle}
                </span>
              </div>

              <div className="md:col-span-4">
                <p className="text-muted-foreground leading-relaxed text-base">
                  {phase.description}
                </p>
              </div>

              <div className="md:col-span-3">
                <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-3">
                  Componentes de la Solución
                </div>

                <div className="flex flex-wrap gap-2">
                  {phase.techStack.map((tech: string) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] tracking-wider px-3 py-1.5 border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogicFlow;