"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function OwnerTodayPage() {
  const { t } = useLanguage();
  return (
    <div className="px-container-margin py-md flex flex-col gap-xl max-w-4xl mx-auto pt-6">
      {/* KPI Cards Horizontal Scroll */}
      <section>
        <div className="flex gap-gutter overflow-x-auto pb-sm snap-x snap-mandatory no-scrollbar -mx-container-margin px-container-margin md:mx-0 md:px-0">
          {/* KPI 1 */}
          <div className="snap-center shrink-0 w-[140px] bg-surface rounded-xl p-md border border-outline-variant shadow-sm flex flex-col justify-between h-32">
            <span className="material-symbols-outlined text-primary mb-sm">event_available</span>
            <div>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">{t("todays.bookings.kpi")}</p>
              <p className="font-display-lg text-display-lg text-on-surface">7</p>
            </div>
          </div>
          {/* KPI 2 */}
          <div className="snap-center shrink-0 w-[160px] bg-surface rounded-xl p-md border border-outline-variant shadow-sm flex flex-col justify-between h-32">
            <span className="material-symbols-outlined text-primary mb-sm">payments</span>
            <div>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">{t("revenue")}</p>
              <p className="font-headline-sm text-headline-sm text-on-surface font-bold">
                3,500 <span className="text-sm font-normal text-on-surface-variant">ETB</span>
              </p>
            </div>
          </div>
          {/* KPI 3 */}
          <div className="snap-center shrink-0 w-[140px] bg-surface rounded-xl p-md border border-outline-variant shadow-sm flex flex-col justify-between h-32">
            <span className="material-symbols-outlined text-primary mb-sm">pie_chart</span>
            <div>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">{t("occupancy")}</p>
              <p className="font-display-lg text-display-lg text-on-surface">78%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule List */}
      <section className="flex flex-col gap-gutter">
        <div className="flex justify-between items-center mb-xs">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">{t("todays.schedule")}</h2>
          <button className="text-primary font-label-lg text-label-lg hover:underline">{t("view.all")}</button>
        </div>
        {/* List Items */}
        <div className="flex flex-col gap-sm">
          {/* Booking Row 1 (Paid) */}
          <div className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col sm:flex-row sm:items-center justify-between gap-md relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-md items-center ml-2">
              <div>
                <p className="font-label-lg text-label-lg text-on-surface">4:00 PM - 5:00 PM</p>
                <span className="inline-block mt-1 px-2 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium">
                  Pitch A
                </span>
              </div>
              <div className="flex items-center gap-sm">
                <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-bold text-sm">
                  DT
                </div>
                <div>
                  <p className="font-label-lg text-label-lg text-on-surface">Dawit Tesfaye</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">500 ETB</p>
                </div>
              </div>
              <div className="flex items-center sm:justify-end gap-md">
                <span className="px-3 py-1 rounded-full bg-[#E6F4EA] text-[#137333] font-label-lg text-xs">{t("status.paid")}</span>
                <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-primary-container transition-colors active:scale-95">
                  <span className="material-symbols-outlined">call</span>
                </button>
              </div>
            </div>
          </div>

          {/* Booking Row 2 (Pending) */}
          <div className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col sm:flex-row sm:items-center justify-between gap-md relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-container"></div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-md items-center ml-2">
              <div>
                <p className="font-label-lg text-label-lg text-on-surface">5:00 PM - 6:00 PM</p>
                <span className="inline-block mt-1 px-2 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium">
                  Pitch B
                </span>
              </div>
              <div className="flex items-center gap-sm">
                <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-bold text-sm">
                  BT
                </div>
                <div>
                  <p className="font-label-lg text-label-lg text-on-surface">Biniam Tadesse</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">500 ETB</p>
                </div>
              </div>
              <div className="flex items-center sm:justify-end gap-md">
                <span className="px-3 py-1 rounded-full bg-[#FFF3E0] text-[#E65100] font-label-lg text-xs">{t("status.pending")}</span>
                <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-primary-container transition-colors active:scale-95">
                  <span className="material-symbols-outlined">call</span>
                </button>
              </div>
            </div>
          </div>

          {/* Booking Row 3 (Checked-in) */}
          <div className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col sm:flex-row sm:items-center justify-between gap-md relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1976D2]"></div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-md items-center ml-2">
              <div>
                <p className="font-label-lg text-label-lg text-on-surface">6:30 PM - 8:00 PM</p>
                <span className="inline-block mt-1 px-2 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium">
                  Pitch A
                </span>
              </div>
              <div className="flex items-center gap-sm">
                <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-bold text-sm">
                  KG
                </div>
                <div>
                  <p className="font-label-lg text-label-lg text-on-surface">Kaleb Getahun</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">750 ETB</p>
                </div>
              </div>
              <div className="flex items-center sm:justify-end gap-md">
                <span className="px-3 py-1 rounded-full bg-[#E3F2FD] text-[#1976D2] font-label-lg text-xs">{t("status.checked.in")}</span>
                <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-primary-container transition-colors active:scale-95">
                  <span className="material-symbols-outlined">call</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
