"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function WorkerDashboardPage() {
  const { t } = useLanguage();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const toggleBottomSheet = () => {
    setIsBottomSheetOpen(!isBottomSheetOpen);
    if (!isBottomSheetOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <div className="flex flex-col min-h-screen pb-[100px]">
      {/* Header */}
      <header className="px-md py-lg flex justify-between items-start bg-surface sticky top-1 z-10 border-b border-outline-variant/30 mt-1">
        <div className="flex flex-col gap-xs">
          <h1 className="font-headline-sm text-headline-sm text-primary">{t("today.at.stadium")}</h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">person</span>
            {t("worker.on.duty")}
          </p>
        </div>
        <Link href="/worker/select-field" className="font-label-lg text-label-lg text-error hover:opacity-80 active:opacity-60 transition-opacity">
          {t("end.shift")}
        </Link>
      </header>

      {/* Main Content */}
      <main className="p-md flex flex-col gap-lg flex-1">
        {/* Primary Actions */}
        <section className="flex flex-col gap-gutter">
          <button className="w-full h-[80px] bg-primary-container text-on-primary-container rounded-xl flex items-center justify-center gap-sm font-headline-sm text-headline-sm shadow-sm active:bg-primary active:text-on-primary transition-colors">
            <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>qr_code_scanner</span>
            {t("scan.qr.checkin")}
          </button>
          <Link href="/worker/walk-in" className="w-full h-[80px] bg-secondary-container text-on-secondary-container rounded-xl flex items-center justify-center gap-sm font-headline-sm text-headline-sm shadow-sm active:opacity-80 transition-opacity">
            <span className="material-symbols-outlined text-[28px]">add_circle</span>
            {t("add.walk.in")}
          </Link>
          <Link href="/worker/report-issue" className="w-full h-[80px] bg-transparent border border-outline text-on-surface rounded-xl flex items-center justify-center gap-sm font-headline-sm text-headline-sm active:bg-surface-variant transition-colors">
            <span className="material-symbols-outlined text-[28px]">warning</span>
            {t("report.issue")}
          </Link>
        </section>

        {/* Booking List Section */}
        <section className="flex flex-col gap-md">
          <h2 className="font-headline-sm text-headline-sm text-on-surface pb-sm border-b border-outline-variant/30">
            {t("todays.bookings")}
          </h2>
          <div className="flex flex-col gap-sm">
            {/* Booking Row 1 */}
            <button
              onClick={toggleBottomSheet}
              className="w-full text-left bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex items-center justify-between active:bg-surface-variant transition-colors group"
            >
              <div className="flex flex-col">
                <span className="font-label-lg text-label-lg text-on-surface-variant">10:00 AM</span>
                <span className="font-body-lg text-body-lg font-semibold text-on-surface">Abebe B.</span>
              </div>
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label-lg text-label-lg flex items-center gap-1 border border-primary/20">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                {t("status.checked.in")}
              </div>
            </button>

            {/* Booking Row 2 */}
            <button
              onClick={toggleBottomSheet}
              className="w-full text-left bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex items-center justify-between active:bg-surface-variant transition-colors group"
            >
              <div className="flex flex-col">
                <span className="font-label-lg text-label-lg text-on-surface-variant">11:30 AM</span>
                <span className="font-body-lg text-body-lg font-semibold text-on-surface">Kassahun T.</span>
              </div>
              <div className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full font-label-lg text-label-lg flex items-center gap-1 border border-outline-variant">
                <span className="material-symbols-outlined text-[16px]">hourglass_empty</span>
                {t("upcoming")}
              </div>
            </button>

            {/* Booking Row 3 */}
            <button
              onClick={toggleBottomSheet}
              className="w-full text-left bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex items-center justify-between active:bg-surface-variant transition-colors group"
            >
              <div className="flex flex-col">
                <span className="font-label-lg text-label-lg text-error">1:00 PM</span>
                <span className="font-body-lg text-body-lg font-semibold text-on-surface">Dawit G.</span>
              </div>
              <div className="bg-secondary-container/20 text-secondary px-3 py-1 rounded-full font-label-lg text-label-lg flex items-center gap-1 border border-secondary/20">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                {t("status.late")}
              </div>
            </button>

            {/* Booking Row 4 */}
            <button
              onClick={toggleBottomSheet}
              className="w-full text-left bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex items-center justify-between active:bg-surface-variant transition-colors group"
            >
              <div className="flex flex-col">
                <span className="font-label-lg text-label-lg text-on-surface-variant line-through">2:30 PM</span>
                <span className="font-body-lg text-body-lg font-semibold text-on-surface-variant">Samuel L.</span>
              </div>
              <div className="bg-error-container text-on-error-container px-3 py-1 rounded-full font-label-lg text-label-lg flex items-center gap-1 border border-error-container">
                <span className="material-symbols-outlined text-[16px]">cancel</span>
                {t("status.no.show")}
              </div>
            </button>
          </div>
        </section>
      </main>

      {/* Footer Pinned Pill */}
      <div className="fixed bottom-lg left-0 right-0 flex justify-center pointer-events-none z-20 md:max-w-md md:mx-auto">
        <div className="bg-inverse-surface text-inverse-on-surface px-lg py-sm rounded-full shadow-lg font-label-lg text-label-lg flex items-center gap-2 pointer-events-auto border border-white/10 backdrop-blur-md">
          <span className="material-symbols-outlined text-[20px] text-inverse-primary">payments</span>
          {t("cash.collected.today")}: 1,800 ETB
        </div>
      </div>

      {/* Bottom Sheet Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:max-w-md md:mx-auto ${
          isBottomSheetOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleBottomSheet}
      ></div>

      {/* Bottom Sheet Content */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-surface rounded-t-xl z-50 shadow-[0_-8px_24px_rgba(0,0,0,0.12)] md:max-w-md md:mx-auto border-t border-x border-outline-variant/30 flex flex-col pb-safe transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isBottomSheetOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Drag Handle */}
        <div className="w-full flex justify-center pt-3 pb-1 cursor-pointer" onClick={toggleBottomSheet}>
          <div className="w-8 h-1 bg-outline-variant rounded-full"></div>
        </div>
        <div className="p-md flex flex-col gap-lg">
          {/* Customer Info */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Kassahun T.</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">11:30 AM • 90 mins</p>
            </div>
            <a
              className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center active:bg-primary/20 transition-colors"
              href="tel:+251911234567"
            >
              <span className="material-symbols-outlined text-[24px]">call</span>
            </a>
          </div>
          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-gutter">
            <button className="col-span-2 h-[52px] bg-primary text-on-primary rounded-lg font-label-lg text-label-lg flex items-center justify-center gap-2 active:bg-surface-tint transition-colors">
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
              {t("mark.check.in")}
            </button>
            <button className="h-[52px] border border-secondary text-secondary rounded-lg font-label-lg text-label-lg flex items-center justify-center gap-2 active:bg-secondary/10 transition-colors">
              <span className="material-symbols-outlined text-[20px]">schedule</span>
              {t("mark.late")}
            </button>
            <button className="h-[52px] border border-error text-error rounded-lg font-label-lg text-label-lg flex items-center justify-center gap-2 active:bg-error/10 transition-colors">
              <span className="material-symbols-outlined text-[20px]">cancel</span>
              {t("mark.no.show")}
            </button>
            <button className="col-span-2 h-[52px] bg-surface-container-high text-on-surface rounded-lg font-label-lg text-label-lg flex items-center justify-center gap-2 active:bg-surface-variant transition-colors mt-2">
              <span className="material-symbols-outlined text-[20px]">more_time</span>
              {t("extend.slot")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
