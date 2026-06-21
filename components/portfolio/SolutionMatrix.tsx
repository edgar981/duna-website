"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ProjectSize = "large" | "medium" | "data";

type Project = {
  title: string;
  category: string;
  metric: string;
  metricLabel: string;
  size: ProjectSize;
  href: string;
};

type SolutionMatrixProps = {
  projectImages: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Bot operativo para gestión y trazabilidad de reportes",
    category: "Automatización de Procesos",
    metric: "10K+",
    metricLabel: "Reportes Gestionados",
    size: "large",
    href: "/casos-de-negocio/automatizacion",
  },
  {
    title: "Registro estructurado en segundos, sin reprocesos",
    category: "Automatización de Procesos",
    metric: "600+",
    metricLabel: "Usuarios Operativos",
    size: "data",
    href: "/casos-de-negocio/automatizacion",
  },
  {
    title: "Reconocimiento de patrones en eventos eléctricos",
    category: "Datos y Analítica",
    metric: "36-72h",
    metricLabel: "Ventanas de Análisis",
    size: "medium",
    href: "/casos-de-negocio/datos-analitica",
  },
  {
    title: "De registros dispersos en Excel a datos estructurados",
    category: "Datos y Analítica",
    metric: "100%",
    metricLabel: "Datos Estructurados",
    size: "data",
    href: "/casos-de-negocio/datos-analitica",
  },
  {
    title: "Sistema centralizado para ventas, pedidos e inventario",
    category: "Apps e Integraciones",
    metric: "8",
    metricLabel: "Módulos Integrados",
    size: "medium",
    href: "/casos-de-negocio/apps-integraciones",
  },
  {
    title: "Trazabilidad completa de pedidos, sin perderse en chats",
    category: "Apps e Integraciones",
    metric: "100%",
    metricLabel: "Trazabilidad de Pedidos",
    size: "large",
    href: "/casos-de-negocio/apps-integraciones",
  },
];

const SolutionMatrix = ({ projectImages }: SolutionMatrixProps) => {
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
        className="mb-16"
      >
        <div className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-4">
          Casos Reales
        </div>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
          Experiencia Aplicada
        </h2>

        <p className="text-muted-foreground mt-6 max-w-2xl leading-relaxed">
          Soluciones desarrolladas para automatizar procesos, estructurar información
          y construir operaciones más trazables, eficientes y conectadas.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((project, i) => {
          const imageIndex = i % projectImages.length;

          if (project.size === "data") {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link
                  href={project.href}
                  className="group relative border border-border hover:border-primary transition-colors duration-500 p-8 flex flex-col justify-between min-h-65 cursor-pointer h-full"
                >
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <div className="font-heading text-5xl lg:text-6xl font-medium text-primary mb-2">
                      {project.metric}
                    </div>

                    <div className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                      {project.metricLabel}
                    </div>

                    <div className="mt-4 text-sm text-muted-foreground leading-snug">
                      {project.title}
                    </div>
                  </div>

                  <ArrowUpRight className="absolute top-6 right-6 w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300" />
                </Link>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`${
                project.size === "large" ? "md:col-span-2" : ""
              }`}
            >
              <Link
                href={project.href}
                className={`group relative overflow-hidden cursor-pointer block ${
                  project.size === "large" ? "min-h-90" : "min-h-65"
                }`}
              >
                <div className="scan-effect absolute inset-0">
                  <img
                    src={projectImages[imageIndex]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Scrim is always dark enough for legibility — but its strength
                      shifts slightly per theme, so toggling still has a visible
                      effect without ever risking contrast like the old `foreground` token did. */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-black/90 dark:via-black/55" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-primary uppercase">
                    {project.category}
                  </span>

                  <h3 className="font-heading text-lg md:text-xl font-medium text-zinc-100 mt-2">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-3 mt-3">
                    <span className="font-heading text-2xl font-medium text-primary">
                      {project.metric}
                    </span>

                    <span className="font-mono text-[10px] tracking-wider text-zinc-100/60 uppercase">
                      {project.metricLabel}
                    </span>
                  </div>
                </div>

                <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-zinc-100 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SolutionMatrix;