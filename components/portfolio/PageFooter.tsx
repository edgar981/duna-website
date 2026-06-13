"use client"
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type FooterLink = {
  label: string;
  href?: string;
};

const SERVICE_LINKS: FooterLink[] = [
  { label: "Automatización de Procesos", href: "/casos-de-negocio/automatizacion" },
  { label: "Datos y Analítica", href: "/casos-de-negocio/datos-analitica" },
  { label: "Apps e Integraciones", href: "/casos-de-negocio/apps-integraciones" },
];

const CONTACT_LINKS: FooterLink[] = [
  { label: "Correo" },
  { label: "LinkedIn" },
  { label: "WhatsApp" },
  { label: "Instagram" },
];

const PageFooter = () => {
  return (
    <footer className="relative bg-foreground text-background">
      {/* Circuit pattern top border */}
      <div className="h-px bg-primary w-full" />

      <div className="max-w-350 mx-auto px-6 lg:px-10">
        {/* Main CTA */}
        <div className="py-20 lg:py-32 border-b border-background/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="font-mono text-[10px] tracking-[0.4em] text-primary uppercase mb-6">
              El primer paso es entender el proceso
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-10">
              Llevemos Más Lejos
              <br />
              <span className="text-primary">Tu Operación</span>
            </h2>

            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center gap-3 border border-primary text-primary px-10 py-5 font-mono text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500 cursor-pointer"
            >
              <div className="w-3 h-3 rounded-full bg-primary group-hover:bg-primary-foreground transition-colors animate-pulse" />
              Hablemos
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Links grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 border border-background/40 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-primary" />
              </div>
              <span className="font-heading text-sm font-medium tracking-wider uppercase">
                Duna<span className="text-primary">Studio</span>
              </span>
            </div>

            <p className="font-mono text-[11px] text-background/40 leading-relaxed">
              Soluciones desarrolladas para
              <br />
              tu caso de uso específico.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-background/50 mb-6">
              Servicios
            </h4>

            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href!}
                    className="font-mono text-[11px] tracking-wider text-background/60 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-background/50 mb-6">
              Contacto
            </h4>

            <ul className="space-y-3">
              {CONTACT_LINKS.map((link) => (
                <li key={link.label}>
                  <span className="font-mono text-[11px] tracking-wider text-background/40 cursor-default">
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-[10px] tracking-wider text-background/30">
            © 2026 DUNASTUDIO. Todos los derechos reservados.
          </span>

          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Compliance"].map((item: string) => (
              <button
                key={item}
                className="font-mono text-[10px] tracking-wider text-background/30 hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;