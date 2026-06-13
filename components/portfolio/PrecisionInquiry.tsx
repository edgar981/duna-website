"use client";
import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Send, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

const SECTORES = [
  "Comercio minorista",
  "Alimentos y bebidas",
  "Servicios profesionales",
  "Sector energético",
  "Logística y distribución",
  "Salud y bienestar",
  "Manufactura",
  "Otro",
] as const;

const NECESIDADES = [
  "Automatización de tareas repetitivas",
  "Dashboards e indicadores",
  "App o panel interno",
  "Integración de herramientas",
  "Análisis de datos operativos",
  "Bot de reportes o solicitudes",
] as const;

const TAMANOS = [
  "1 – 5 personas",
  "6 – 20 personas",
  "21 – 100 personas",
  "Más de 100 personas",
] as const;

type Sector = (typeof SECTORES)[number];
type Necesidad = (typeof NECESIDADES)[number];
type Tamano = (typeof TAMANOS)[number];

type FormData = {
  sector: Sector | "";
  necesidades: Necesidad[];
  tamano: Tamano | "";
  nombre: string;
  correo: string;
  empresa: string;
  detalle: string;
};

type Step = {
  label: string;
  title: string;
  content: React.ReactNode;
};

export default function DuqnaInquiry() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    sector: "",
    necesidades: [],
    tamano: "",
    nombre: "",
    correo: "",
    empresa: "",
    detalle: "",
  });

  const toggleNecesidad = (n: Necesidad) => {
    setFormData((prev) => ({
      ...prev,
      necesidades: prev.necesidades.includes(n)
        ? prev.necesidades.filter((x) => x !== n)
        : [...prev.necesidades, n],
    }));
  };

  const canProceed = (): boolean => {
    if (step === 0) return !!formData.sector;
    if (step === 1) return formData.necesidades.length > 0;
    if (step === 2) return !!formData.tamano;
    if (step === 3) return !!formData.nombre && !!formData.correo;
    return false;
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          correo: formData.correo,
          empresa: formData.empresa,
          detalle: formData.detalle,
          sector: formData.sector,
          necesidades: formData.necesidades,
          tamano: formData.tamano,
        }),
      });

      if (!res.ok) throw new Error("Error al enviar");

      setSubmitted(true);
      toast.success("¡Solicitud enviada! Te contactaremos en menos de 24 horas.");
    } catch {
      toast.error("Algo salió mal. Por favor intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const steps: Step[] = [
    {
      label: "Sector",
      title: "¿En qué sector opera tu negocio?",
      content: (
        <div className="grid grid-cols-2 gap-3">
          {SECTORES.map((s) => (
            <button
              key={s}
              onClick={() => setFormData({ ...formData, sector: s })}
              className={`p-4 border text-left font-mono text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                formData.sector === s
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border hover:border-primary/50 text-muted-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      ),
    },
    {
      label: "Necesidad",
      title: "¿Qué necesita resolver?",
      content: (
        <div className="grid grid-cols-1 gap-3">
          {NECESIDADES.map((n) => (
            <button
              key={n}
              onClick={() => toggleNecesidad(n)}
              className={`p-4 border text-left font-mono text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                formData.necesidades.includes(n)
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border hover:border-primary/50 text-muted-foreground"
              }`}
            >
              <div
                className={`w-3 h-3 border flex items-center justify-center transition-colors ${
                  formData.necesidades.includes(n)
                    ? "border-primary bg-primary"
                    : "border-muted-foreground"
                }`}
              >
                {formData.necesidades.includes(n) && (
                  <div className="w-1.5 h-1.5 bg-background" />
                )}
              </div>
              {n}
            </button>
          ))}
        </div>
      ),
    },
    {
      label: "Tamaño",
      title: "¿Cuántas personas trabajan en tu empresa?",
      content: (
        <div className="grid grid-cols-2 gap-3">
          {TAMANOS.map((t) => (
            <button
              key={t}
              onClick={() => setFormData({ ...formData, tamano: t })}
              className={`p-6 border text-left transition-all duration-300 cursor-pointer ${
                formData.tamano === t
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <span
                className={`font-heading text-base font-medium ${
                  formData.tamano === t ? "text-primary" : "text-foreground"
                }`}
              >
                {t}
              </span>
            </button>
          ))}
        </div>
      ),
    },
    {
      label: "Contacto",
      title: "Tus datos de contacto",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nombre completo *"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className="w-full px-4 py-3 border border-border bg-transparent font-mono text-sm tracking-wider placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Correo electrónico *"
              value={formData.correo}
              onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
              className="w-full px-4 py-3 border border-border bg-transparent font-mono text-sm tracking-wider placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          <input
            type="text"
            placeholder="Empresa (opcional)"
            value={formData.empresa}
            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
            className="w-full px-4 py-3 border border-border bg-transparent font-mono text-sm tracking-wider placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
          />
          <textarea
            placeholder="¿Qué proceso o problema quieres resolver? (opcional)"
            rows={4}
            value={formData.detalle}
            onChange={(e) => setFormData({ ...formData, detalle: e.target.value })}
            className="w-full px-4 py-3 border border-border bg-transparent font-mono text-sm tracking-wider placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none"
          />
        </div>
      ),
    },
  ];

  if (submitted) {
    return (
      <section ref={ref} className="px-6 lg:px-10 py-20 lg:py-32 max-w-350 mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="border border-primary p-12 lg:p-20 text-center"
        >
          <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-6" />
          <h3 className="font-heading text-3xl font-medium mb-4">¡Solicitud recibida!</h3>
          <p className="text-muted-foreground font-mono text-sm max-w-md mx-auto">
            Gracias por compartir tu información. Nos pondremos en contacto contigo
            para conocer mejor tu operación y explorar posibles oportunidades de mejora.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section ref={ref} className="px-6 lg:px-10 py-20 lg:py-32 max-w-350 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Columna izquierda */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4"
        >
          <div className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-4">
            Iniciar proyecto
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight mb-6">
            Cuéntanos sobre tu negocio
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            Antes de proponer una solución, entendemos tu operación, tus herramientas y dónde puedes ganar más eficiencia.
          </p>

          {/* Progreso */}
          <div className="space-y-3">
            {steps.map((s, i) => (
              <div key={s.label} className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 border flex items-center justify-center font-mono text-[10px] transition-colors duration-300 ${
                    i === step
                      ? "border-primary text-primary bg-primary/5"
                      : i < step
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {i < step ? "✓" : i + 1}
                </div>
                <span
                  className={`font-mono text-[11px] tracking-wider uppercase transition-colors ${
                    i === step ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Columna derecha */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-8"
        >
          <div className="border border-border p-6 lg:p-10">
            <h3 className="font-heading text-xl font-medium mb-6">
              {steps[step].title}
            </h3>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {steps[step].content}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className={`flex items-center gap-2 font-mono text-xs tracking-wider uppercase transition-colors cursor-pointer ${
                  step === 0
                    ? "opacity-0 pointer-events-none"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <ArrowLeft className="w-4 h-4" /> Atrás
              </button>

              {step < steps.length - 1 ? (
                <button
                  onClick={() => canProceed() && setStep((s) => s + 1)}
                  disabled={!canProceed()}
                  className={`flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                    canProceed()
                      ? "bg-foreground text-background hover:bg-primary"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  Continuar <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed() || loading}
                  className={`flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-300 ${
                    canProceed() && !loading
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  {loading ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</>
                  ) : (
                    <>Solicitar valoración <Send className="w-4 h-4" /></>
                  )}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}