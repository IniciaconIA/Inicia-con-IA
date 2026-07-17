import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guías de IA",
  description:
    "Recursos prácticos y descargables para dominar cada herramienta de inteligencia artificial. Guías de ChatGPT, Midjourney, Claude y más.",
  openGraph: {
    title: "Guías de IA | Inicia con IA",
    description:
      "Recursos prácticos y descargables para dominar cada herramienta de inteligencia artificial.",
    images: ["/og-guias.png"],
  },
};

export default function GuiasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
