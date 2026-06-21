import ServicePageLayout from "@/components/portfolio/ServicePageLayout";
import { ServicePageLayoutProps } from "@/types/service-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apps e Integraciones | Duna",
  description:
    "Construimos aplicaciones internas y conectamos los sistemas que ya usas. Sin herramientas genéricas, sin workarounds — soluciones exactas para cómo opera tu negocio.",
};

const CONFIG: ServicePageLayoutProps = {
  hero: {
    label: "Apps e Integraciones",
    line1: "Herramientas Hechas",
    line2: "Para Tu Equipo",
    description:
      "Construimos aplicaciones internas y conectamos los sistemas que ya usas. Sin herramientas genéricas, sin workarounds — soluciones exactas para cómo opera tu negocio.",
    ctaLabel: "Solicitar valoración",
    ticker: ["Duna Commerce Ops", "Sierra Nativa Coffee", "8 módulos integrados", "100% trazabilidad de pedidos"],
    flowLabels: { trigger: "Pedido", process: "Sistema", outputA: "Inventario", outputB: "Pago" },
  },

  problem: {
    label: "El Problema",
    hook: "¿Tu negocio aún corre sobre WhatsApp, Excel y herramientas que no se hablan?",
    intro:
      "Las herramientas genéricas nunca encajan del todo, y los sistemas sueltos obligan al equipo a copiar y pegar entre archivos. El negocio vende y opera, pero la información vive dispersa y nadie tiene una sola fuente de verdad.",
    pains: [
      "Pedidos que llegan por chat y se pierden entre conversaciones.",
      "Inventario actualizado a mano o manejado “de memoria”.",
      "Pagos que se confirman manualmente, sin registro conectado.",
      "Clientes sin historial: no sabes quién recompra ni con qué frecuencia.",
      "Catálogo, ventas y reportes viviendo en hojas de cálculo separadas.",
      "Herramientas que no se integran: formularios, pagos, inventario y reportes por aparte.",
    ],
  },

  caseStudy: {
    label: "Caso Destacado",
    tag: "Proyecto piloto",
    title: "Sierra Nativa Coffee",
    context: "Venta de café · Canales informales",
    challenge:
      "Las ventas llegaban por WhatsApp y redes, el pago se confirmaba manualmente y el inventario se llevaba aparte. El cliente quedaba perdido entre conversaciones y, al cierre de mes, no había claridad sobre ventas, productos más rentables ni recompra.",
    solution:
      "Un sistema operativo ligero: catálogo digital → pedido → datos del cliente → pago → base de datos central. Desde el panel se gestiona el estado de cada pedido, el inventario se descuenta solo y el negocio consulta reportes y análisis reales.",
    metrics: [
      { value: "100%", label: "Trazabilidad de pedidos" },
      { value: "8", label: "Módulos integrados" },
      { value: "0", label: "Hojas sueltas" },
    ],
    // Drop the real screenshot at public/casos/sierra-nativa-coffee.png
    visual: { kind: "image", src: "/casos/sierra-nativa-coffee.png", alt: "Sistema de pedidos de Sierra Nativa Coffee" },
  },

  build: {
    label: "Qué Construimos",
    title: "Apps, paneles e integraciones",
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
        description: "Flujos automáticos: nuevo pedido, bajo inventario, pago pendiente o confirmación de entrega.",
      },
      {
        title: "Mini CRM y Seguimiento",
        description: "Historial de clientes, frecuencia de compra y seguimiento de recurrencia para mejorar retención.",
      },
      {
        title: "Integraciones de Pagos",
        description: "Conexión con pasarelas y confirmación automática de transacciones vía API o webhook.",
      },
    ],
  },

  demo: {
    label: "Proyecto Demostrativo",
    title: "Duna Commerce Ops",
    description:
      "Una plantilla funcional para digitalizar ventas de negocios pequeños: catálogo, pedidos, inventario, pagos, clientes, entregas y analítica conectados en un solo flujo. Diseñada para adaptarse — café, alimentos de finca, productos artesanales o tiendas locales.",
    modules: [
      "Catálogo",
      "Pedidos",
      "Inventario",
      "Clientes",
      "Pagos",
      "Entregas",
      "Analítica",
      "Automatizaciones",
    ],
    // Drop the real screenshot at public/casos/commerce-ops-panel.png
    image: { src: "/casos/commerce-ops-panel.png", alt: "Panel administrativo de Duna Commerce Ops" },
    
  },

  process: {
    label: "Metodología",
    title: "Cómo Trabajamos",
    steps: [
      {
        title: "Diagnosticamos",
        description:
          "Entendemos los flujos actuales, los sistemas involucrados y las fricciones que frenan al equipo. Definimos alcance y criterios de éxito.",
      },
      {
        title: "Diseñamos",
        description:
          "Arquitectura técnica, flujos de usuario y modelo de datos. Cada decisión justificada por mantenibilidad, escala y costo.",
      },
      {
        title: "Construimos",
        description:
          "Desarrollo incremental con entregas funcionales tempranas. Sin lanzamientos big-bang — el equipo adopta y ajusta en paralelo.",
      },
      {
        title: "Implementamos",
        description:
          "Acompañamos la puesta en marcha y conectamos el sistema con la operación real, para que la adopción no se quede en un piloto.",
      },
      {
        title: "Medimos",
        description:
          "Instrumentación de uso, indicadores y mejoras continuas. Las herramientas evolucionan con la operación.",
      },
    ],
  },

  cta: {
    label: "Conversemos",
    line1: "Construyamos Las",
    line2: "Herramientas Correctas",
    ctaLabel: "Solicitar valoración",
  },
};

export default function AppsIntegracionesPage() {
  return <ServicePageLayout {...CONFIG} />;
}