import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CVProvider } from "@/context/CVContext";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CIVVU — Minimalist CV Builder",
  description: "Crea il tuo Curriculum Vitae professionale con anteprima live in tempo reale, layout a doppia verticalità, stili curati ed esportazione in PDF A4 vettoriale.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" suppressHydrationWarning className={`${inter.variable} h-full min-h-[100dvh] max-h-[100dvh] overflow-hidden antialiased`}>
      <body className="h-full min-h-[100dvh] max-h-[100dvh] w-full flex flex-col overflow-hidden bg-neutral-50 dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800 transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CVProvider>{children}</CVProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
