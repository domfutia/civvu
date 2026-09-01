"use client";

import React, { useState } from "react";
import { useCV } from "@/context/CVContext";
import { Navbar } from "@/components/layout/Navbar";
import { FormPanel } from "@/components/form/FormPanel";
import { PreviewPanel } from "@/components/preview/PreviewPanel";
import { Edit3, Eye, Printer } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const { cvData, t } = useCV();
  const [mobileView, setMobileView] = useState<"form" | "preview">("form");

  const handlePrint = () => {
    // Ensure preview is active on mobile so user sees the preview if print dialog closes
    if (mobileView === "form") {
      setMobileView("preview");
    }

    const fileName =
      cvData.settings.pdfFileName?.trim() ||
      `${cvData.personalInfo.fullName.replace(/\s+/g, "_") || "Curriculum"}_CV`;
    const prevTitle = document.title;
    document.title = fileName;

    // Trigger print
    requestAnimationFrame(() => {
      setTimeout(() => {
        window.print();
        setTimeout(() => {
          document.title = prevTitle;
        }, 1000);
      }, 50);
    });
  };

  return (
    <div id="app-root" className="h-full max-h-full min-h-[100dvh] max-h-[100dvh] w-full flex flex-col overflow-hidden bg-neutral-50 dark:bg-[#09090b] transition-colors duration-200">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Split Screen Layout */}
      <main className="flex-1 min-h-0 w-full flex flex-col lg:flex-row overflow-hidden split-layout relative">
        {/* Left Column: Form Panel */}
        <section
          id="form-panel-section"
          className={cn(
            "no-print w-full lg:w-[46%] xl:w-[44%] 2xl:w-[40%] flex-1 lg:flex-initial h-full max-h-full min-h-0 flex flex-col overflow-hidden",
            mobileView === "form" ? "flex" : "hidden lg:flex"
          )}
        >
          <FormPanel onGoToPreview={() => setMobileView("preview")} />
        </section>

        {/* Right Column: Live Preview Panel */}
        <section
          id="preview-panel-section"
          className={cn(
            "flex-1 w-full h-full max-h-full min-h-0 flex flex-col overflow-hidden",
            mobileView === "preview" ? "flex" : "hidden lg:flex"
          )}
        >
          <PreviewPanel />
        </section>

        {/* Mobile Floating Action Bar (Pill on bottom) */}
        <div className="no-print lg:hidden fixed bottom-safe left-1/2 -translate-x-1/2 z-40 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl p-1.5 rounded-full border border-neutral-300/80 dark:border-neutral-700/80 shadow-2xl shadow-black/25 flex items-center gap-1.5 select-none">
          <button
            type="button"
            onClick={() => setMobileView("form")}
            aria-label={t.mobileViewEdit}
            className={cn(
              "flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer min-h-[36px]",
              mobileView === "form"
                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-xs"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            )}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{t.mobileViewEdit}</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileView("preview")}
            aria-label={t.mobileViewPreview}
            className={cn(
              "flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer min-h-[36px]",
              mobileView === "preview"
                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-xs"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            )}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{t.mobileViewPreview}</span>
          </button>

          <div className="h-4 w-px bg-neutral-300 dark:bg-neutral-700 mx-0.5" />

          <button
            type="button"
            onClick={handlePrint}
            aria-label={t.mobilePrintTitle}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-xs shrink-0"
            title={t.mobilePrintTitle}
          >
            <Printer className="w-3.5 h-3.5" />
          </button>
        </div>
      </main>
    </div>
  );
}
