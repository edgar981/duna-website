"use client";
import React, { ReactNode } from "react";

type GridBackgroundProps = {
  children: ReactNode;
  className?: string;
};

const GridBackground: React.FC<GridBackgroundProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GridBackground;