"use client";

import React, { useState, useRef, useEffect } from "react";
import { useCV } from "@/context/CVContext";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { SummaryForm } from "./SummaryForm";
import { ExperienceForm } from "./ExperienceForm";
import { EducationForm } from "./EducationForm";
import { SkillsForm } from "./SkillsForm";
import { ProjectsLanguagesForm } from "./ProjectsLanguagesForm";
import { SettingsForm } from "./SettingsForm";
import { CustomSectionForm } from "./CustomSectionForm";
import {
  User,
  FileText,
  Briefcase,
  GraduationCap,
  Wrench,
  FolderGit2,
  Sliders,
  ChevronRight,
  ChevronLeft,
  Plus,
  FolderPlus,
  Eye,
} from "lucide-react";
import { cn } from "@/lib/utils";

type StandardTab =
  | "settings"
  | "personal"
  | "summary"
  | "experience"
  | "education"
  | "skills"
  | "projects";

export const FormPanel: React.FC<{
  onGoToPreview?: () => void;
}> = ({ onGoToPreview }) => {
  const { cvData, addCustomSection, t } = useCV();
  const [activeTab, setActiveTab] = useState<string>("settings");
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const standardSections: {
    id: StandardTab;
    labelKey: keyof typeof t.tabs;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    { id: "settings", labelKey: "settings", icon: Sliders },
    { id: "personal", labelKey: "personal", icon: User },
    { id: "summary", labelKey: "summary", icon: FileText },
    { id: "experience", labelKey: "experience", icon: Briefcase },
    { id: "education", labelKey: "education", icon: GraduationCap },
    { id: "skills", labelKey: "skills", icon: Wrench },
    { id: "projects", labelKey: "projects", icon: FolderGit2 },
  ];

  const handleAddNewSection = () => {
    const defaultTitle = `${t.tabs.newSectionDefault} ${cvData.customSections.length + 1}`;
    const newId = addCustomSection(defaultTitle);
    setActiveTab(newId);
  };

  const activeCustomSection = cvData.customSections.find(
    (sec) => sec.id === activeTab
  );

  const allTabs = [
    ...standardSections.map((s) => s.id),
    ...cvData.customSections.map((c) => c.id),
  ];
  const currentIndex = allTabs.indexOf(activeTab);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < allTabs.length - 1;

  // Auto-scroll the active tab into view in horizontal scroll area
  useEffect(() => {
    if (tabsContainerRef.current) {
      const activeEl = tabsContainerRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeTab]);

  return (
    <div className="flex-1 flex flex-col h-full max-h-full min-h-0 w-full overflow-hidden bg-neutral-50/50 dark:bg-neutral-950/60 border-r border-neutral-200 dark:border-neutral-800/80 transition-colors">
      {/* Section Navigation Tabs */}
      <div className="p-2 sm:p-3 border-b border-neutral-200 dark:border-neutral-800/80 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md sticky top-0 z-20 shrink-0">
        <div
          ref={tabsContainerRef}
          className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth py-0.5"
        >
          {/* Standard sections */}
          {standardSections.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeTab === sec.id;
            
            // Dynamic label resolution from sectionOrder
            let dynamicLabel = t.tabs[sec.labelKey] || sec.id;
            if (sec.id !== "settings" && sec.id !== "personal") {
              const foundInOrder = cvData.settings.sectionOrder?.find((s) => s.key === sec.id);
              if (foundInOrder && foundInOrder.label?.trim()) {
                dynamicLabel = foundInOrder.label.trim();
              }
            }

            return (
              <button
                key={sec.id}
                type="button"
                data-active={isActive ? "true" : "false"}
                onClick={() => setActiveTab(sec.id)}
                className={cn(
                  "flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer shrink-0 select-none min-h-[34px]",
                  isActive
                    ? "bg-neutral-900 text-white dark:bg-neutral-800 dark:text-white border border-neutral-800 dark:border-neutral-700 shadow-xs font-semibold"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900/60 border border-transparent"
                )}
              >
                <Icon className={cn("w-3.5 h-3.5 shrink-0", isActive ? "text-white" : "text-neutral-500 dark:text-neutral-400")} />
                <span className="max-w-[130px] sm:max-w-[150px] truncate">{dynamicLabel}</span>
              </button>
            );
          })}

          {/* Dynamic Custom Sections Tabs */}
          {cvData.customSections.map((cSec) => {
            const isActive = activeTab === cSec.id;
            return (
              <button
                key={cSec.id}
                type="button"
                data-active={isActive ? "true" : "false"}
                onClick={() => setActiveTab(cSec.id)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer shrink-0 select-none min-h-[34px]",
                  isActive
                    ? "bg-neutral-900 text-white dark:bg-neutral-800 dark:text-white border border-neutral-800 dark:border-neutral-700 shadow-xs font-semibold"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900/60 border border-transparent"
                )}
              >
                <FolderPlus className="w-3.5 h-3.5 shrink-0" />
                <span className="max-w-[110px] sm:max-w-[130px] truncate">{cSec.title}</span>
              </button>
            );
          })}

          {/* Add Custom Section Button */}
          <button
            type="button"
            onClick={handleAddNewSection}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 border border-dashed border-neutral-300 dark:border-neutral-700 transition-colors cursor-pointer shrink-0 min-h-[34px]"
            title={t.tabs.newSection}
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.tabs.newSection}</span>
          </button>
        </div>
      </div>

      {/* Form Content Area: Scrollable with bounded height and safe mobile padding */}
      <div
        id="form-content-scroll-area"
        className="flex-1 min-h-0 max-h-full overflow-y-auto p-3.5 sm:p-6 space-y-6 pb-36 lg:pb-8 overscroll-contain"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {activeTab === "settings" && <SettingsForm />}
        {activeTab === "personal" && <PersonalInfoForm />}
        {activeTab === "summary" && <SummaryForm />}
        {activeTab === "experience" && <ExperienceForm />}
        {activeTab === "education" && <EducationForm />}
        {activeTab === "skills" && <SkillsForm />}
        {activeTab === "projects" && <ProjectsLanguagesForm />}
        {activeCustomSection && (
          <CustomSectionForm key={activeCustomSection.id} section={activeCustomSection} />
        )}
      </div>

      {/* Bottom Step Navigation Footer */}
      <div className="p-3 sm:p-3.5 border-t border-neutral-200 dark:border-neutral-800/80 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md flex items-center justify-between gap-2 transition-colors shrink-0 z-20">
        <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 min-w-0">
          <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 shrink-0">
            {t.step} {currentIndex + 1} {t.of} {allTabs.length}
          </span>
          <span className="hidden sm:inline text-xs truncate">
            {t.instantSave}
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {hasPrevious && (
            <button
              type="button"
              onClick={() => {
                if (currentIndex > 0) {
                  setActiveTab(allTabs[currentIndex - 1]);
                }
              }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer min-h-[34px]"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>{t.back}</span>
            </button>
          )}

          {hasNext ? (
            <button
              type="button"
              onClick={() => {
                if (currentIndex < allTabs.length - 1) {
                  setActiveTab(allTabs[currentIndex + 1]);
                }
              }}
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-white border border-neutral-900 dark:border-white/20 transition-all cursor-pointer shadow-xs min-h-[34px]"
            >
              <span>{t.next}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                if (onGoToPreview) {
                  onGoToPreview();
                }
              }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-white border border-neutral-900 dark:border-white/20 transition-all cursor-pointer shadow-sm min-h-[34px]"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{t.goToPreview}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
