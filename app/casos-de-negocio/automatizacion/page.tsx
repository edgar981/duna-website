import ServicePageLayout from "@/components/portfolio/ServicePageLayout";
import { ServicePageLayoutProps } from "@/types/service-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatización de Procesos | KineticLogic",
  description: "Eliminamos el trabajo manual que frena a tu equipo. Construimos flujos automatizados que operan solos, escalan sin esfuerzo y liberan recursos para lo que importa.",
};

const CONFIG: ServicePageLayoutProps = {
  hero: {
    label: "Automatización de Procesos",
    line1: "Automatizamos",
    line2: "Operaciones Reales",
    description: "Eliminamos el trabajo manual que frena a tu equipo. Construimos flujos automatizados que operan solos, escalan sin esfuerzo y liberan recursos para lo que importa.",
    ctaLabel: "Solicitar Diagnóstico",
  },
  overview: {
    label: "Qué Hacemos",
    headline: "Menos trabajo repetitivo.\nMás capacidad real.",
    paragraphs: [
      "Analizamos tus procesos operativos y encontramos qué se puede eliminar, automatizar o conectar. No implementamos herramientas por moda — diseñamos soluciones que encajan exactamente en cómo trabaja tu equipo.",
      "Desde la automatización de reportes y notificaciones hasta flujos complejos que conectan múltiples sistemas, construimos lo que hace falta para que tu operación corra sola.",
    ],
  },
  capabilities: {
    label: "Capacidades",
    title: "Lo Que Construimos",
    items: [
      {
        title: "Bots Operativos",
        description: "Bots que guían al usuario paso a paso para registrar reportes, novedades o solicitudes de forma estructurada.",
      },
      {
        title: "Automatización de Reportes",
        description: "Generación, envío y archivado automático de reportes periódicos. Sin intervención humana.",
      },
      {
        title: "Flujos Operativos",
        description: "Orquestación de procesos multi-paso con seguimiento de estados: pendiente, en proceso, aprobado, finalizado.",
      },
      {
        title: "Notificaciones y Alertas",
        description: "Alertas automáticas por correo, WhatsApp, Telegram u otros canales ante condiciones críticas.",
      },
      {
        title: "RPA y Scripts",
        description: "Automatización de tareas repetitivas en interfaces web, archivos y sistemas legados.",
      },
      {
        title: "Integración de Herramientas",
        description: "Conexión entre formularios, bases de datos, hojas de cálculo y reportes para eliminar copiar y pegar.",
      },
    ],
  },
  metrics: {
    label: "Resultados",
    title: "Experiencia Aplicada",
    metrics: [
      {
        value: "600+",
        label: "Usuarios Operativos",
        context: "Proyecto Sector Eléctrico",
        description: "Bot operativo desarrollado para una empresa del sector energético, usado activamente por el equipo de campo.",
      },
      {
        value: "10K+",
        label: "Reportes Gestionados",
        context: "Bot Operativo en Producción",
        description: "Registro estructurado de reportes que antes se manejaban por mensajes y validaciones repetitivas.",
      },
      {
        value: "Minutos → Segundos",
        label: "Tiempo de Registro",
        context: "Trazabilidad Operativa",
        description: "Reducción del tiempo de registro de varios minutos a segundos, con mejora en estandarización y menos reprocesos.",
      },
    ],
  },
  process: {
    label: "Metodología",
    title: "Cómo Trabajamos",
    steps: [
      {
        title: "Diagnosticamos",
        description: "Mapeamos tus procesos actuales, identificamos cuellos de botella y cuantificamos el costo del trabajo manual. Entregamos un diagnóstico con prioridades claras.",
      },
      {
        title: "Diseñamos",
        description: "Construimos el blueprint de la solución: qué herramientas, qué flujos, qué integraciones. Sin ambigüedades, con criterios técnicos y de negocio alineados.",
      },
      {
        title: "Construimos",
        description: "Desarrollamos, probamos e implementamos. Código limpio, bien documentado, sin dependencias innecesarias. Tu equipo puede entenderlo y mantenerlo.",
      },
      {
        title: "Optimizamos",
        description: "Monitoreamos el rendimiento post-lanzamiento, ajustamos según el uso real y ampliamos lo que funciona. La automatización mejora con el tiempo.",
      },
    ],
  },
  cta: {
    label: "Conversemos",
    line1: "Llevemos Más Lejos",
    line2: "Tu Operación",
    ctaLabel: "Solicitar Diagnóstico",
  },
};

export default function AutomatizacionPage() {
  return <ServicePageLayout {...CONFIG} />;
}