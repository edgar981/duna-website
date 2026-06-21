import ServicePageLayout from "@/components/portfolio/ServicePageLayout";
import { ServicePageLayoutProps } from "@/types/service-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datos y Analítica | Duna",
  description:
    "Construimos la infraestructura de datos y los tableros que tu equipo necesita para operar con claridad — sin depender de reportes manuales ni de análisis tardíos.",
};

const CONFIG: ServicePageLayoutProps = {
  hero: {
    label: "Datos y Analítica",
    line1: "Convertimos Datos",
    line2: "En Decisiones",
    description:
      "Construimos la infraestructura de datos y los tableros que tu equipo necesita para operar con claridad — sin depender de reportes manuales ni de análisis tardíos.",
    ctaLabel: "Solicitar valoración",
    ticker: ["Sector eléctrico", "Ventanas 36–72h", "Análisis por circuito", "Datos estructurados"],
    flowLabels: { trigger: "Datos", process: "Análisis", outputA: "Dashboard", outputB: "Reporte" },
  },

  problem: {
    label: "El Problema",
    hook: "Tu negocio genera datos todos los días. ¿Los estás aprovechando?",
    intro:
      "La mayoría de los equipos tienen información dispersa en hojas de cálculo, registros operativos y archivos que no se hablan entre sí. El dato existe, pero llega tarde, incompleto o sin contexto — y las decisiones terminan tomándose sin indicadores claros.",
    pains: [
      "Datos repartidos en hojas de cálculo que no se conectan.",
      "Reportes armados a mano al final del día, la semana o el mes.",
      "Falta de claridad sobre productos más vendidos, clientes frecuentes o márgenes.",
      "Información duplicada o incompleta que nadie alcanza a depurar.",
      "Decisiones tomadas por intuición, sin indicadores de seguimiento.",
      "Análisis que llega tarde, cuando el problema ya ocurrió.",
    ],
  },

  caseStudy: {
    label: "Caso Destacado",
    tag: "Caso real",
    title: "Análisis de fallas eléctricas",
    context: "Sector eléctrico · Operación y mantenimiento",
    challenge:
      "Los registros de fallas vivían en Excel, sin estructura. Relacionar una falla inicial con los eventos que venían después era manual y tardío, y no había forma de detectar qué circuitos concentraban la mayor recurrencia.",
    solution:
      "Una herramienta que limpia y estructura los registros operativos, relaciona los eventos posteriores a cada falla dentro de ventanas de tiempo configurables (36–72h) y agrupa por circuito para priorizar las líneas con mayor recurrencia.",
    metrics: [
      { value: "36–72h", label: "Ventanas de análisis" },
      { value: "100%", label: "Datos estructurados" },
      { value: "Por circuito", label: "Agrupación de eventos" },
    ],
    visual: {
      kind: "dashboard",
      tiles: [
        { label: "Ventana de análisis", value: "36–72h" },
        { label: "Registros estructurados", value: "100%" },
        { label: "Agrupación", value: "Por circuito" },
      ],
      series: [40, 62, 30, 96, 52, 74, 38],
      caption: "Eventos por circuito · ventana 36–72h",
    },
  },

  build: {
    label: "Qué Construimos",
    title: "Datos, análisis y tableros",
    items: [
      {
        title: "Limpieza y Estructuración",
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

  process: {
    label: "Metodología",
    title: "Cómo Trabajamos",
    steps: [
      {
        title: "Diagnosticamos",
        description:
          "Auditamos tus fuentes de datos, identificamos inconsistencias y definimos qué preguntas de negocio debe responder la solución.",
      },
      {
        title: "Diseñamos",
        description:
          "Modelamos la arquitectura de datos: esquemas, transformaciones, jerarquías y métricas clave. Todo validado con los usuarios del negocio.",
      },
      {
        title: "Construimos",
        description:
          "Implementamos pipelines, bases de datos y dashboards. Cada capa documentada y probada con datos reales antes del lanzamiento.",
      },
      {
        title: "Implementamos",
        description:
          "Conectamos la solución con la operación real y acompañamos al equipo en la adopción, para que los indicadores se usen de verdad.",
      },
      {
        title: "Medimos",
        description:
          "Monitoreamos la calidad de los datos, el rendimiento de las consultas y la adopción del equipo. Iteramos según el uso real.",
      },
    ],
  },

  cta: {
    label: "Conversemos",
    line1: "Claridad Total",
    line2: "Sobre Tu Operación",
    ctaLabel: "Solicitar valoración",
  },
};

export default function DatosAnaliticaPage() {
  return <ServicePageLayout {...CONFIG} />;
}