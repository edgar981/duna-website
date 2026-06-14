import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import QueryProvider from "@/components/QueryProvider";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/portfolio/Navbar";
import PageFooter from "@/components/portfolio/PageFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Duna | Automatización, Datos y Apps para tu Negocio",
  description: "Ayudamos a empresas a ordenar su operación mediante automatización, herramientas digitales, integraciones y analítica práctica.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}  
      suppressHydrationWarning >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <QueryProvider>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <PageFooter />
            <Toaster />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}