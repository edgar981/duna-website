import ServicePageLayout from "@/components/portfolio/ServicePageLayout";
import { ServicePageLayoutProps } from "@/types/service-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apps e Integraciones | KineticLogic",
  description: "Construimos aplicaciones internas y conectamos los sistemas que ya usas. Sin herramientas genéricas, sin workarounds — soluciones exactas para cómo opera tu negocio.",
};

const CONFIG: ServicePageLayoutProps = {
  hero: {
    label: "Apps e Integraciones",
    line1: "Herramientas Hechas",
    line2: "Para Tu Equipo",
    description: "Construimos aplicaciones internas y conectamos los sistemas que ya usas. Sin herramientas genéricas, sin workarounds — soluciones exactas para cómo opera tu negocio.",
    ctaLabel: "Solicitar Diagnóstico",
  },
  overview: {
    label: "Qué Hacemos",
    headline: "Software que se ajusta\na tu operación.",
    paragraphs: [
      "Las herramientas genéricas nunca encajan del todo. Construimos apps internas que reflejan exactamente los flujos, roles y lógica de tu negocio — sin compromisos ni funcionalidades que nadie usa.",
      "También conectamos los sistemas que ya tienes: catálogos, inventario, pagos, formularios y canales de venta. Una infraestructura integrada donde la información fluye sin fricciones, desde el pedido hasta el reporte.",
    ],
  },
  capabilities: {
    label: "Capacidades",
    title: "Lo Que Construimos",
    items: [
      {
        title: "Apps Internas",
        description: "Herramientas a medida para gestión de pedidos, inventario, clientes y control de procesos.",
      },
      {
        title: "Catálogos y Sistemas de Pedido",
        description: "Catálogos digitales conectados a inventario y bases de datos, listos para recibir y gestionar pedidos.",
      },
      {
        title: "Paneles Administrativos",
        description: "Tableros para gestionar estados de pedido, inventario, clientes y operación desde un solo lugar.",
      },
      {
        title: "Sistemas de Notificación",
        description: "Flujos de comunicación automáticos: nuevo pedido, bajo inventario, pago pendiente o confirmación de entrega.",
      },
      {
        title: "Mini CRM y Seguimiento",
        description: "Historial de clientes, frecuencia de compra y seguimiento de recurrencia para mejorar retención.",
      },
      {
        title: "Integraciones de Pagos",
        description: "Conexión con pasarelas de pago y confirmación automática de transacciones vía API o webhook.",
      },
    ],
  },
  metrics: {
    label: "Resultados",
    title: "Experiencia Aplicada",
    metrics: [
      {
        value: "8",
        label: "Módulos Integrados",
        context: "Duqna Commerce Ops",
        description: "Catálogo, pedidos, inventario, clientes, pagos, entregas, analítica y automatizaciones, conectados en un solo flujo.",
      },
      {
        value: "100%",
        label: "Trazabilidad de Pedidos",
        context: "Sierra Nativa Coffee",
        description: "Cada pedido pasa por estados claros — pendiente, confirmado, en preparación, entregado — sin perderse entre chats.",
      },
      {
        value: "0",
        label: "Hojas Sueltas",
        context: "Operación Centralizada",
        description: "Catálogo, inventario y clientes salen de Excel y WhatsApp para vivir en un sistema conectado y consultable.",
      },
    ],
  },
  process: {
    label: "Metodología",
    title: "Cómo Trabajamos",
    steps: [
      {
        title: "Diagnosticamos",
        description: "Entendemos los flujos actuales, los sistemas involucrados y las fricciones que frenan al equipo. Definimos alcance y criterios de éxito.",
      },
      {
        title: "Diseñamos",
        description: "Arquitectura técnica, flujos de usuario y modelo de datos. Cada decisión justificada por mantenibilidad, escala y costo.",
      },
      {
        title: "Construimos",
        description: "Desarrollo incremental con entregas funcionales tempranas. Sin big-bang launches — el equipo adopta y ajusta en paralelo.",
      },
      {
        title: "Optimizamos",
        description: "Soporte post-lanzamiento, instrumentación de uso y mejoras continuas. Las herramientas evolucionan con la operación.",
      },
    ],
  },
  cta: {
    label: "Conversemos",
    line1: "Construyamos Las",
    line2: "Herramientas Correctas",
    ctaLabel: "Solicitar Diagnóstico",
  },
};

export default function AppsIntegracionesPage() {
  return <ServicePageLayout {...CONFIG} />;
}