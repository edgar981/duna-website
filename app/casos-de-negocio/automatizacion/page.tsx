import ServicePageLayout from "@/components/portfolio/ServicePageLayout";
import { ServicePageLayoutProps } from "@/types/service-page";

const data: ServicePageLayoutProps = {
  hero: {
    label: "Automatización de Procesos",
    line1: "Automatizamos",
    line2: "Operaciones Reales",
    description:
      "Eliminamos el trabajo manual que frena a tu equipo. Construimos flujos automatizados que operan solos, escalan sin esfuerzo y liberan recursos para lo que importa.",
    ctaLabel: "Solicitar valoración",
    ticker: ["Sector eléctrico", "600+ usuarios operativos", "10K+ reportes gestionados", "Registro en segundos"],
    flowLabels: { trigger: "Evento", process: "Bot", outputA: "Reporte", outputB: "Alerta" },
  },

  problem: {
    label: "El Problema",
    hook: "¿Tu equipo repite las mismas tareas todos los días?",
    intro:
      "Cuando la operación depende de WhatsApp, Excel y procesos manuales, el negocio funciona — pero parte del esfuerzo se pierde. La información se duplica, los procesos dependen de personas específicas y nadie tiene claridad de en qué estado quedó cada cosa.",
    pains: [
      "Solicitudes y novedades que llegan por chat y se pierden entre conversaciones.",
      "Reportes hechos a mano al final del día, la semana o el mes.",
      "Procesos que dependen de copiar y pegar información entre archivos.",
      "Falta de trazabilidad sobre quién hizo qué, cuándo y en qué estado quedó.",
      "Validaciones repetitivas que consumen horas del equipo.",
      "Herramientas desconectadas: formularios, hojas de cálculo, correos y reportes.",
    ],
  },

  caseStudy: {
    label: "Caso Destacado",
    tag: "Caso real",
    title: "Bot operativo para el sector eléctrico",
    context: "Sector eléctrico · Operación en campo",
    challenge:
      "El equipo de campo registraba reportes y novedades por mensajes, con validaciones manuales repetitivas. La información quedaba dispersa, sin estructura y sin trazabilidad, y cada registro tomaba varios minutos.",
    solution:
      "Un bot operativo que guía al usuario paso a paso para registrar cada reporte de forma estructurada, alimenta una base de datos central con seguimiento de estados y dispara notificaciones automáticas a los responsables.",
    metrics: [
      { value: "600+", label: "Usuarios operativos" },
      { value: "10K+", label: "Reportes gestionados" },
      { value: "Min → Seg", label: "Tiempo de registro" },
    ],
    visual: { kind: "flow", labels: { trigger: "Evento", process: "Bot", outputA: "Reporte", outputB: "Alerta" } },
  },

  build: {
    label: "Qué Construimos",
    title: "Soluciones de automatización",
    items: [
      {
        title: "Bots de registro",
        description: "Guían al usuario paso a paso para registrar reportes, novedades, pedidos o tareas de forma estructurada.",
      },
      {
        title: "Automatización de reportes",
        description: "Generación, envío y archivado automático de reportes periódicos. Sin intervención humana.",
      },
      {
        title: "Seguimiento de estados",
        description: "Orquestación de procesos multi-paso: pendiente, en proceso, aprobado, finalizado, rechazado.",
      },
      {
        title: "Alertas multicanal",
        description: "Notificaciones automáticas por correo, WhatsApp, Telegram u otros canales ante condiciones críticas.",
      },
      {
        title: "Integraciones",
        description: "Conexión entre formularios, bases de datos, hojas de cálculo y reportes para eliminar el copiar y pegar.",
      },
      {
        title: "Recordatorios automáticos",
        description: "Avisos a responsables o clientes para que nada se quede sin seguimiento ni respuesta.",
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
          "Entendemos tu proceso actual, tus herramientas y tus principales dolores. Mapeamos dónde se pierde tiempo y cuantificamos el costo del trabajo manual.",
      },
      {
        title: "Diseñamos",
        description:
          "Proponemos una solución ajustada a tu operación real: qué flujos, qué integraciones, qué automatizaciones. Sin ambigüedades.",
      },
      {
        title: "Construimos",
        description:
          "Desarrollamos, probamos e implementamos. Código limpio y bien documentado, sin dependencias innecesarias que tu equipo no pueda mantener.",
      },
      {
        title: "Implementamos",
        description:
          "Acompañamos la puesta en marcha y ajustamos el flujo junto al equipo, para que la adopción sea real y no quede en un piloto.",
      },
      {
        title: "Medimos",
        description:
          "Dejamos indicadores y reportes para que puedas hacer seguimiento al impacto. La automatización mejora con el tiempo.",
      },
    ],
  },

  cta: {
    label: "Hablemos",
    line1: "Ordenemos",
    line2: "tu operación",
    ctaLabel: "Solicitar valoración",
  },
};

export default function AutomatizacionDeProcesosPage() {
  return <ServicePageLayout {...data} />;
}