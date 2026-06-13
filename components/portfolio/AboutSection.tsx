"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Stat = {
  value: string;
  label: string;
};

const STATS: Stat[] = [
  { value: "10K+", label: "Reportes Gestionados" },
  { value: "600+", label: "Usuarios Operativos" },
  { value: "3", label: "Líneas de Solución" },
  { value: "24/7", label: "Operación Conectada" },
];

const AboutSection: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="px-6 lg:px-10 py-20 lg:py-32 max-w-350 mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-4">
            Sobre Duna
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-8">
            Convertimos Procesos
            <br />
            En Flujo
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            En Duna ayudamos a empresas a ordenar su operación mediante
  automatización, herramientas digitales y analítica aplicada.
  Diseñamos soluciones pensadas para procesos reales: ventas,
  inventario, reportes, solicitudes, clientes y flujos operativos
  que normalmente dependen de tareas manuales y herramientas dispersas.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
             Nuestro enfoque no consiste únicamente en desarrollar software.
  Primero entendemos cómo funciona el negocio, dónde se pierde
  tiempo o información y qué partes del proceso pueden optimizarse.
  A partir de ahí, construimos soluciones más claras, conectadas
  y fáciles de operar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {STATS.map((stat: Stat, i: number) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="border border-border p-6 lg:p-8 flex flex-col justify-between min-h-40 hover:border-primary transition-colors duration-500"
            >
              <span className="font-heading text-3xl lg:text-4xl font-medium text-primary">
                {stat.value}
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase mt-4">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;