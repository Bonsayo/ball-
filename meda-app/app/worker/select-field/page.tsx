"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function WorkerSelectFieldPage() {
  const { t } = useLanguage();
  const [selectedField, setSelectedField] = useState<string>("addis-arena");

  return (
    <div className="flex flex-col min-h-screen pb-[100px]">
      {/* Header Section */}
      <header className="pt-xl px-container-margin pb-md sticky top-0 bg-background/90 backdrop-blur-sm z-10 border-b border-surface-variant">
        <h1 className="font-ethiopic-body text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-primary mb-1">
          {t("select.work.location")}
        </h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant">{t("select.your.field")}</p>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-1 px-container-margin py-md space-y-md">
        {/* Field Card 1 - Selected State */}
        <div
          onClick={() => setSelectedField("addis-arena")}
          className={`group relative rounded-xl bg-surface-container-lowest border-2 overflow-hidden cursor-pointer transition-transform duration-200 active:scale-[0.98] hover:border-primary ${
            selectedField === "addis-arena"
              ? "border-primary shadow-[0_8px_16px_-4px_rgba(0,0,0,0.04)]"
              : "border-outline-variant hover:border-outline"
          }`}
        >
          {/* Selection Indicator */}
          {selectedField === "addis-arena" && (
            <div className="absolute top-sm right-sm bg-primary text-on-primary rounded-full p-1 z-10 flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[20px] font-bold">check</span>
            </div>
          )}
          <div className="aspect-video w-full overflow-hidden bg-surface-container relative">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida/AP1WRLshDZVKNJZvdprMHm3D9LILbrbbtAL96DPj3tXWKczHwKQeUYEjrd3ridqDLNvilTpXtDctermwRmFBzZmxtOGJQt2YFY9Irz5_laajqOG1J9JdrJwInhrIsPBCC_o_8Qp3JJAMzEphZ0JhKHLp1ipmq940VBU3D72xm0i_wu745YTKvTM5DQCjNs_oe55VTGDQz0D1zH92xFlMv7cnbSqgFNWiMrUSmXcXM7eLXzCqmCW5yV1z6sqnYQ"
              alt="Addis Arena"
            />
          </div>
          <div className="p-md">
            <div className="flex justify-between items-start mb-xs">
              <h2 className="text-headline-sm font-headline-sm text-on-surface">Addis Arena</h2>
            </div>
            <div className="flex items-center text-on-surface-variant text-body-sm font-body-sm">
              <span className="material-symbols-outlined text-[16px] mr-1">location_on</span>
              <span>Bole, Addis Ababa</span>
            </div>
          </div>
        </div>

        {/* Field Card 2 - Unselected State */}
        <div
          onClick={() => setSelectedField("jan-meda")}
          className={`group relative rounded-xl bg-surface-container-lowest border-2 overflow-hidden cursor-pointer transition-transform duration-200 active:scale-[0.98] hover:border-primary ${
            selectedField === "jan-meda"
              ? "border-primary shadow-[0_8px_16px_-4px_rgba(0,0,0,0.04)]"
              : "border-outline-variant hover:border-outline"
          }`}
        >
          {/* Selection Indicator */}
          {selectedField === "jan-meda" && (
            <div className="absolute top-sm right-sm bg-primary text-on-primary rounded-full p-1 z-10 flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[20px] font-bold">check</span>
            </div>
          )}
          <div className="aspect-video w-full overflow-hidden bg-surface-container relative">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida/AP1WRLuCOTnLhsaD0Cha69yp22-0h_Sef968NHnyohy5s6CoHNdcYTYC7L6aPfFB79Grf2CCjiZObuM1-lHFVUly5TRFPQl_q9S_fxPoBT0CIovbFxWO7cgkM1P5BU0az9_6kfhCmvMn8PpgpPTSJLRxyejqivjQeAU5xVHOG_biT9NpC8ySIS2iwy_kbolWTYj8ERWtUImiHZS7JN2omGOPFV0-We8TlmP4hD2iMgODbw2kOQ9kdirpE2xdnQ"
              alt="Jan Meda Turf"
            />
          </div>
          <div className="p-md">
            <div className="flex justify-between items-start mb-xs">
              <h2 className="text-headline-sm font-headline-sm text-on-surface">Jan Meda Turf</h2>
            </div>
            <div className="flex items-center text-on-surface-variant text-body-sm font-body-sm">
              <span className="material-symbols-outlined text-[16px] mr-1">location_on</span>
              <span>Sidist Kilo, Addis Ababa</span>
            </div>
          </div>
        </div>

        {/* Extra content to show scrolling if needed */}
        <div className="group relative rounded-xl bg-surface-container-lowest border border-outline-variant overflow-hidden cursor-pointer transition-transform duration-200 active:scale-[0.98] hover:border-outline opacity-70">
          <div className="p-md flex items-center justify-center h-24 bg-surface-container-low text-on-surface-variant text-body-lg font-body-lg border-b border-outline-variant">
            <span className="material-symbols-outlined mr-2">add_location_alt</span>
            <span className="font-ethiopic-body text-ethiopic-body">{t("more.places")}</span>
          </div>
        </div>
      </main>

      {/* Fixed Bottom Bar / Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-outline-variant p-container-margin shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 pb-safe md:max-w-md md:left-auto md:right-auto md:mx-auto">
        <Link href="/worker/dashboard" className="w-full h-[52px] bg-secondary-container text-on-primary rounded-xl text-headline-sm font-headline-sm flex items-center justify-center transition-colors duration-200 active:bg-secondary active:scale-[0.98] shadow-sm">
          <span className="font-ethiopic-body font-bold mr-2">{t("start.shift.am")}</span>
          <span className="text-body-lg opacity-90">— {t("start.my.shift")}</span>
        </Link>
      </footer>
    </div>
  );
}
