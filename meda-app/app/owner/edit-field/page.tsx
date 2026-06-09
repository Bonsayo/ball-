"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function EditFieldPage() {
  const { t } = useLanguage();
  const [expandedSections, setExpandedSections] = useState({
    photos: true,
    basic: true,
    amenities: false,
    pricing: false,
    hours: false,
    policy: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="pt-6 px-container-margin max-w-2xl mx-auto pb-24 space-y-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-xl hidden md:flex">
        <h2 className="text-display-lg font-display-lg text-on-surface">{t("edit.your.field")}</h2>
        <button className="bg-primary text-on-primary h-12 px-6 rounded-xl font-label-lg shadow-sm hover:bg-primary/90 transition-colors">
          {t("save.changes")}
        </button>
      </div>

      {/* Photos Section */}
      <section className="bg-surface-container-lowest rounded-xl border border-surface-variant overflow-hidden">
        <button
          onClick={() => toggleSection("photos")}
          className="w-full flex items-center justify-between p-md bg-surface-container-low hover:bg-surface-container-highest transition-colors"
        >
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">photo_camera</span>
            <span className="font-headline-sm text-headline-sm text-on-surface">{t("photos")}</span>
          </div>
          <span
            className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${
              expandedSections.photos ? "rotate-180" : ""
            }`}
          >
            expand_more
          </span>
        </button>
        {expandedSections.photos && (
          <div className="p-md space-y-sm border-t border-surface-variant">
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {t("drag.to.reorder")}
            </p>
            <div className="grid grid-cols-2 gap-sm">
              {/* Photo 1 (Cover) */}
              <div className="relative aspect-video rounded-lg overflow-hidden border border-outline-variant group">
                <img
                  alt="Football pitch"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLuCOTnLhsaD0Cha69yp22-0h_Sef968NHnyohy5s6CoHNdcYTYC7L6aPfFB79Grf2CCjiZObuM1-lHFVUly5TRFPQl_q9S_fxPoBT0CIovbFxWO7cgkM1P5BU0az9_6kfhCmvMn8PpgpPTSJLRxyejqivjQeAU5xVHOG_biT9NpC8ySIS2iwy_kbolWTYj8ERWtUImiHZS7JN2omGOPFV0-We8TlmP4hD2iMgODbw2kOQ9kdirpE2xdnQ"
                />
                <div className="absolute top-2 left-2 bg-primary text-on-primary font-label-lg text-label-lg px-2 py-0.5 rounded text-[10px]">
                  {t("cover")}
                </div>
              </div>
              {/* Photo 2 */}
              <div className="relative aspect-video rounded-lg overflow-hidden border border-outline-variant">
                <img
                  alt="Football pitch close up"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLshDZVKNJZvdprMHm3D9LILbrbbtAL96DPj3tXWKczHwKQeUYEjrd3ridqDLNvilTpXtDctermwRmFBzZmxtOGJQt2YFY9Irz5_laajqOG1J9JdrJwInhrIsPBCC_o_8Qp3JJAMzEphZ0JhKHLp1ipmq940VBU3D72xm0i_wu745YTKvTM5DQCjNs_oe55VTGDQz0D1zH92xFlMv7cnbSqgFNWiMrUSmXcXM7eLXzCqmCW5yV1z6sqnYQ"
                />
              </div>
              {/* Add Photo */}
              <button className="aspect-video rounded-lg border-2 border-dashed border-outline-variant flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors bg-surface">
                <span className="material-symbols-outlined mb-1">add</span>
                <span className="font-body-sm text-body-sm">{t("add.photo")}</span>
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Basic Info Section */}
      <section className="bg-surface-container-lowest rounded-xl border border-surface-variant overflow-hidden">
        <button
          onClick={() => toggleSection("basic")}
          className="w-full flex items-center justify-between p-md bg-surface-container-low hover:bg-surface-container-highest transition-colors"
        >
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">info</span>
            <span className="font-headline-sm text-headline-sm text-on-surface">{t("basic.info")}</span>
          </div>
          <span
            className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${
              expandedSections.basic ? "rotate-180" : ""
            }`}
          >
            expand_more
          </span>
        </button>
        {expandedSections.basic && (
          <div className="p-md space-y-md border-t border-surface-variant">
            <div className="space-y-1">
              <label className="font-label-lg text-label-lg text-on-surface">{t("edit.field.name")}</label>
              <input
                className="w-full h-12 px-3 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary font-body-lg text-body-lg text-on-surface"
                type="text"
                defaultValue="Bole Mini Pitch 1"
              />
            </div>
            <div className="space-y-1">
              <label className="font-label-lg text-label-lg text-on-surface">{t("edit.area")}</label>
              <select className="w-full h-12 px-3 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary font-body-lg text-body-lg text-on-surface appearance-none">
                <option value="bole">Bole, Addis Ababa</option>
                <option value="piassa">Piassa</option>
                <option value="mexico">Mexico</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-sm">
              <div className="space-y-1">
                <label className="font-label-lg text-label-lg text-on-surface">{t("edit.pitch.size")}</label>
                <select className="w-full h-12 px-3 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary font-body-lg text-body-lg text-on-surface appearance-none">
                  <option value="5">5-a-side</option>
                  <option value="7" selected>7-a-side</option>
                  <option value="11">11-a-side</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="font-label-lg text-label-lg text-on-surface">{t("edit.turf.type")}</label>
                <select className="w-full h-12 px-3 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary font-body-lg text-body-lg text-on-surface appearance-none">
                  <option value="artificial" selected>Artificial Grass</option>
                  <option value="natural">Natural Turf</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Pricing Section */}
      <section className="bg-surface-container-lowest rounded-xl border border-surface-variant overflow-hidden">
        <button
          onClick={() => toggleSection("pricing")}
          className="w-full flex items-center justify-between p-md bg-surface-container-low hover:bg-surface-container-highest transition-colors"
        >
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">payments</span>
            <span className="font-headline-sm text-headline-sm text-on-surface">{t("pricing")}</span>
          </div>
          <span
            className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${
              expandedSections.pricing ? "rotate-180" : ""
            }`}
          >
            expand_more
          </span>
        </button>
        {expandedSections.pricing && (
          <div className="p-md space-y-md border-t border-surface-variant">
            <div className="grid grid-cols-2 gap-sm">
              <div className="space-y-1">
                <label className="font-label-lg text-label-lg text-on-surface">{t("peak.start")}</label>
                <input
                  className="w-full h-12 px-3 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary font-body-lg text-body-lg text-on-surface"
                  type="time"
                  defaultValue="17:00"
                />
              </div>
              <div className="space-y-1">
                <label className="font-label-lg text-label-lg text-on-surface">{t("peak.end")}</label>
                <input
                  className="w-full h-12 px-3 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary font-body-lg text-body-lg text-on-surface"
                  type="time"
                  defaultValue="22:00"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="font-label-lg text-label-lg text-on-surface">{t("peak.price")}</label>
              <input
                className="w-full h-12 px-3 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary font-body-lg text-body-lg text-on-surface"
                type="number"
                defaultValue="1500"
              />
            </div>
            <div className="space-y-1">
              <label className="font-label-lg text-label-lg text-on-surface">{t("off.peak.price")}</label>
              <input
                className="w-full h-12 px-3 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary font-body-lg text-body-lg text-on-surface"
                type="number"
                defaultValue="1000"
              />
            </div>
          </div>
        )}
      </section>

      {/* Sticky Bottom Bar (Mobile Only) */}
      <div className="md:hidden fixed bottom-20 left-0 w-full z-50 p-4 bg-gradient-to-t from-background to-transparent pointer-events-none">
        <button className="w-full h-[52px] bg-primary text-on-primary font-headline-sm text-headline-sm rounded-xl active:scale-95 transition-transform flex items-center justify-center gap-2 shadow-md pointer-events-auto">
          <span className="material-symbols-outlined text-[20px]">save</span>
          {t("save.changes")}
        </button>
      </div>
    </div>
  );
}
