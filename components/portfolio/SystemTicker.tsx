"use client";
import React from "react";
import { Activity, Cpu, Zap, BarChart3, Shield, LucideIcon } from "lucide-react";

type TickerItem = {
  icon: LucideIcon;
  label: string;
  value: string;
};

const TICKER_ITEMS: TickerItem[] = [
  { icon: Activity, label: "REPORTES GESTIONADOS", value: "10K+" },
  { icon: Cpu, label: "USUARIOS OPERATIVOS", value: "600+" },
  { icon: Zap, label: "TIEMPO DE REGISTRO", value: "MIN → SEG" },
  { icon: BarChart3, label: "VENTANA DE ANÁLISIS", value: "36-72H" },
  { icon: Shield, label: "DATOS ESTRUCTURADOS", value: "100%" },
  { icon: Activity, label: "MÓDULOS INTEGRADOS", value: "8" },
  { icon: Cpu, label: "TRAZABILIDAD DE PEDIDOS", value: "100%" },
  { icon: Zap, label: "ESTADO DEL SISTEMA", value: "OPERATIVO" },
];

const SystemTicker = () => {
  return (
    <div className="w-full overflow-hidden hairline-border border-b bg-foreground text-background">
      <div className="flex ticker-animate whitespace-nowrap">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="flex items-center gap-2 px-8 py-1 shrink-0"
          >
            <item.icon className="w-3 h-3 text-primary" />
            <span className="font-mono text-[10px] tracking-widest opacity-60">
              {item.label}:
            </span>
            <span className="font-mono text-[10px] tracking-wider font-semibold">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemTicker;