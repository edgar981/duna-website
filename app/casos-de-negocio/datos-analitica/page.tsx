import ServicePageLayout from "@/components/portfolio/ServicePageLayout";
import { ServicePageLayoutProps } from "@/types/service-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datos y Analítica | KineticLogic",
  description: "Construimos la infraestructura de datos y los tableros que tu equipo necesita para operar con claridad — sin depender de reportes manuales ni de análisis tardíos.",
};

const CONFIG: ServicePageLayoutProps = {
  hero: {
    label: "Datos y Analítica",
    line1: "Convertimos Datos",
    line2: "En Decisiones",
    description: "Construimos la infraestructura de datos y los tableros que tu equipo necesita para operar con claridad — sin depender de reportes manuales ni de análisis tardíos.",
    ctaLabel: "Solicitar Diagnóstico",
  },
  overview: {
    label: "Qué Hacemos",
    headline: "Datos que se leen.\nDecisiones que llegan a tiempo.",
    paragraphs: [
      "La mayoría de los equipos tienen datos dispersos en hojas de cálculo, registros operativos y archivos que no se hablan entre sí. Nosotros centralizamos, estructuramos y analizamos esa información para que sea útil en la toma de decisiones.",
      "Diseñamos procesos de limpieza, modelos analíticos y reportes que responden preguntas reales del negocio — desde patrones de comportamiento hasta indicadores de operación.",
    ],
  },
  capabilities: {
    label: "Capacidades",
    title: "Lo Que Construimos",
    items: [
      {
        title: "Limpieza y Estructuración de Datos",
        description: "Procesamiento de archivos operativos en Excel: fechas, duraciones, comentarios y códigos de evento.",
      },
      {
        title: "Detección de Patrones",
        description: "Identificación de eventos recurrentes y comportamientos repetitivos bajo criterios configurables.",
      },
      {
        title: "Análisis Temporal de Eventos",
        description: "Relación de eventos posteriores dentro de ventanas de tiempo definidas para encontrar causas y efectos.",
      },
      {
        title: "Dashboards Operativos",
        description: "Visualizaciones conectadas a tus fuentes de datos para seguimiento sin actualizaciones manuales.",
      },
      {
        title: "Reportes Automatizados",
        description: "Reportes exportables, agrupados por categoría, zona o unidad de análisis, generados según periodicidad.",
      },
      {
        title: "Modelos Analíticos",
        description: "Segmentación, proyecciones simples y priorización de casos según frecuencia o recurrencia.",
      },
    ],
  },
  metrics: {
    label: "Resultados",
    title: "Experiencia Aplicada",
    metrics: [
      {
        value: "36-72h",
        label: "Ventanas de Análisis",
        context: "Sector Eléctrico",
        description: "Herramienta para relacionar eventos posteriores con una falla inicial dentro de ventanas de tiempo configurables.",
      },
      {
        value: "100%",
        label: "Datos Estructurados",
        context: "Registros Históricos",
        description: "Bases operativas en Excel transformadas en información organizada, lista para análisis y reportes.",
      },
      {
        value: "Por Circuito",
        label: "Agrupación de Eventos",
        context: "Reconocimiento de Patrones",
        description: "Identificación de alimentadores o líneas con alta recurrencia de eventos para priorizar revisión.",
      },
    ],
  },
  process: {
    label: "Metodología",
    title: "Cómo Trabajamos",
    steps: [
      {
        title: "Diagnosticamos",
        description: "Auditamos tus fuentes de datos, identificamos inconsistencias y definimos qué preguntas de negocio debe responder la solución.",
      },
      {
        title: "Diseñamos",
        description: "Modelamos la arquitectura de datos: esquemas, transformaciones, jerarquías y métricas clave. Todo validado con los usuarios del negocio.",
      },
      {
        title: "Construimos",
        description: "Implementamos pipelines, bases de datos y dashboards. Cada capa documentada y probada con datos reales antes del lanzamiento.",
      },
      {
        title: "Optimizamos",
        description: "Monitoreamos la calidad de los datos, el rendimiento de las consultas y la adopción del equipo. Iteramos según el uso real.",
      },
    ],
  },
  cta: {
    label: "Conversemos",
    line1: "Claridad Total",
    line2: "Sobre Tu Operación",
    ctaLabel: "Solicitar Diagnóstico",
  },
};

export default function DatosAnaliticaPage() {
  return <ServicePageLayout {...CONFIG} />;
}