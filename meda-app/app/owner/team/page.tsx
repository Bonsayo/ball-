"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function OwnerTeamPage() {
  const { t } = useLanguage();
  return (
    <div className="pt-6 px-container-margin max-w-4xl mx-auto space-y-md pb-24">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-md mb-xl">
        <div>
          <h2 className="text-display-lg font-display-lg text-on-surface">{t("workers.at.field")}</h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant mt-2">{t("manage.roles.prompt")}</p>
        </div>
        <button className="bg-secondary-container text-on-secondary-container hover:bg-[#e66e18] transition-colors duration-200 h-[52px] px-lg rounded-xl text-label-lg font-label-lg flex items-center justify-center gap-sm shrink-0">
          <span className="material-symbols-outlined">person_add</span>
          {t("invite.worker")}
        </button>
      </div>

      {/* Workers List (Bento-style Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
        {/* Worker Card 1 */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-md relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-md hover:border-primary-container/30">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-md">
              <div className="w-14 h-14 rounded-full bg-surface-variant flex items-center justify-center border-2 border-surface">
                <span className="material-symbols-outlined text-3xl text-on-surface-variant">person</span>
              </div>
              <div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface group-hover:text-primary-container transition-colors">
                  Kassahun Tadesse
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-label-lg font-label-lg rounded-full text-xs">
                    {t("role.manager")}
                  </span>
                  <div className="flex items-center gap-1 text-primary-container text-body-sm font-body-sm">
                    <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                    {t("status.on.duty")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact & Stats */}
          <div className="bg-surface-container-low rounded-lg p-3 flex flex-col gap-2">
            <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container text-lg">call</span>
                +251 91 123 4567
              </div>
            </div>
            <div className="h-px w-full bg-outline-variant/30 my-1"></div>
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              <span className="font-bold text-on-surface">{t("todays.stats")}</span> {t("checked.in.stats")}: 12 bookings • {t("cash.collected")}: 1,800 ETB
            </p>
          </div>
          {/* Footer Actions */}
          <div className="flex justify-between items-center mt-auto pt-2">
            <span className="text-body-sm font-body-sm text-outline italic opacity-0 group-hover:opacity-100 transition-opacity">
              {t("tap.to.see.log")}
            </span>
            <div className="flex gap-2">
              <button
                className="p-2 rounded-full text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="material-symbols-outlined">edit</span>
              </button>
              <button
                className="p-2 rounded-full text-on-surface-variant hover:bg-error-container hover:text-error transition-colors z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        </div>

        {/* Worker Card 2 */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-md relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-md hover:border-primary-container/30">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-md">
              <div className="w-14 h-14 rounded-full bg-surface-variant flex items-center justify-center border-2 border-surface grayscale opacity-80">
                <span className="material-symbols-outlined text-3xl text-on-surface-variant">person</span>
              </div>
              <div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface group-hover:text-primary-container transition-colors">
                  Abebe Bikila
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-label-lg font-label-lg rounded-full text-xs">
                    {t("role.gatekeeper")}
                  </span>
                  <div className="flex items-center gap-1 text-on-surface-variant text-body-sm font-body-sm">
                    <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                    {t("status.off.duty")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact & Stats */}
          <div className="bg-surface-container-low rounded-lg p-3 flex flex-col gap-2 opacity-80">
            <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline text-lg">call</span>
                +251 92 987 6543
              </div>
            </div>
            <div className="h-px w-full bg-outline-variant/30 my-1"></div>
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              <span className="font-bold text-on-surface">{t("todays.stats")}</span> {t("checked.in.stats")}: 0 bookings • {t("cash.collected")}: 0 ETB
            </p>
          </div>
          {/* Footer Actions */}
          <div className="flex justify-between items-center mt-auto pt-2">
            <span className="text-body-sm font-body-sm text-outline italic opacity-0 group-hover:opacity-100 transition-opacity">
              {t("tap.to.see.log")}
            </span>
            <div className="flex gap-2">
              <button
                className="p-2 rounded-full text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="material-symbols-outlined">edit</span>
              </button>
              <button
                className="p-2 rounded-full text-on-surface-variant hover:bg-error-container hover:text-error transition-colors z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
