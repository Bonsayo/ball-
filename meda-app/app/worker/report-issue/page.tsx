"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function WorkerReportIssuePage() {
  const { t } = useLanguage();
  const router = useRouter();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isBlocked, setIsBlocked] = useState(true);

  const handleSubmit = () => {
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
    router.push("/worker/dashboard");
  };

  return (
    <div className="flex flex-col min-h-screen font-body-lg text-on-background bg-surface">
      {/* Heritage Accent */}
      <div className="w-full h-base flex">
        <div className="flex-1 bg-error"></div>
        <div className="flex-1 bg-[#FCE300]"></div>
        <div className="flex-1 bg-primary"></div>
      </div>

      {/* TopAppBar */}
      <header className="w-full top-0 sticky bg-surface border-b border-outline-variant flex items-center justify-between px-md h-[56px] z-10">
        <button
          onClick={() => router.back()}
          className="text-primary hover:bg-surface-container-low p-sm rounded-full active:opacity-80 transition-opacity flex items-center justify-center"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="font-headline-sm text-headline-sm text-on-surface flex-1 text-center font-bold">
          {t("issue.details")}
        </h1>
        <div className="w-10"></div> {/* Spacer for centering */}
      </header>

      {/* Main Content Canvas */}
      <main className="flex-1 px-md py-lg flex flex-col gap-lg pb-32 max-w-2xl mx-auto w-full">
        {/* Issue Type Grid */}
        <section className="flex flex-col gap-sm">
          <h2 className="font-label-lg text-label-lg text-on-surface-variant">{t("issue.type")}</h2>
          <div className="grid grid-cols-2 gap-sm">
            {/* Net Issue */}
            <label className="relative flex flex-col items-center justify-center gap-xs p-md rounded-xl border border-outline-variant bg-surface cursor-pointer active:scale-95 transition-transform hover:bg-surface-container-low">
              <input type="radio" name="issueType" value="net" className="peer sr-only" defaultChecked />
              <span className="material-symbols-outlined text-[32px] text-on-surface-variant peer-checked:text-primary">sports_soccer</span>
              <span className="font-ethiopic-label text-ethiopic-label text-on-surface peer-checked:text-primary text-center">
                {t("net.goal")}
              </span>
              <div className="absolute inset-0 rounded-xl peer-checked:border-[2px] peer-checked:border-primary peer-checked:bg-primary/5 pointer-events-none transition-all"></div>
            </label>
            {/* Turf Issue */}
            <label className="relative flex flex-col items-center justify-center gap-xs p-md rounded-xl border border-outline-variant bg-surface cursor-pointer active:scale-95 transition-transform hover:bg-surface-container-low">
              <input type="radio" name="issueType" value="turf" className="peer sr-only" />
              <span className="material-symbols-outlined text-[32px] text-on-surface-variant peer-checked:text-primary">grass</span>
              <span className="font-ethiopic-label text-ethiopic-label text-on-surface peer-checked:text-primary text-center">
                {t("turf.damaged")}
              </span>
              <div className="absolute inset-0 rounded-xl peer-checked:border-[2px] peer-checked:border-primary peer-checked:bg-primary/5 pointer-events-none transition-all"></div>
            </label>
            {/* Lights Issue */}
            <label className="relative flex flex-col items-center justify-center gap-xs p-md rounded-xl border border-outline-variant bg-surface cursor-pointer active:scale-95 transition-transform hover:bg-surface-container-low">
              <input type="radio" name="issueType" value="lights" className="peer sr-only" />
              <span className="material-symbols-outlined text-[32px] text-on-surface-variant peer-checked:text-primary">lightbulb</span>
              <span className="font-ethiopic-label text-ethiopic-label text-on-surface peer-checked:text-primary text-center">
                {t("lighting")}
              </span>
              <div className="absolute inset-0 rounded-xl peer-checked:border-[2px] peer-checked:border-primary peer-checked:bg-primary/5 pointer-events-none transition-all"></div>
            </label>
            {/* Other Issue */}
            <label className="relative flex flex-col items-center justify-center gap-xs p-md rounded-xl border border-outline-variant bg-surface cursor-pointer active:scale-95 transition-transform hover:bg-surface-container-low">
              <input type="radio" name="issueType" value="other" className="peer sr-only" />
              <span className="material-symbols-outlined text-[32px] text-on-surface-variant peer-checked:text-primary">help</span>
              <span className="font-ethiopic-label text-ethiopic-label text-on-surface peer-checked:text-primary text-center">
                {t("other")}
              </span>
              <div className="absolute inset-0 rounded-xl peer-checked:border-[2px] peer-checked:border-primary peer-checked:bg-primary/5 pointer-events-none transition-all"></div>
            </label>
          </div>
        </section>

        {/* Photo Upload Section */}
        <section className="flex flex-col gap-sm">
          <h2 className="font-label-lg text-label-lg text-on-surface-variant">{t("evidence")}</h2>
          <div className="w-full h-48 border-2 border-dashed border-outline-variant rounded-xl bg-surface-container-lowest flex flex-col items-center justify-center cursor-pointer hover:bg-surface-container-low transition-colors active:scale-95 duration-150">
            <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center mb-sm text-primary">
              <span className="material-symbols-outlined text-display-lg">photo_camera</span>
            </div>
            <p className="font-ethiopic-body text-ethiopic-body text-on-surface text-center">
              {t("take.photo")}
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">{t("tap.to.open.camera")}</p>
          </div>
        </section>

        {/* Text Input */}
        <section className="flex flex-col gap-sm">
          <label className="font-label-lg text-label-lg text-on-surface-variant" htmlFor="issue-description">
            {t("description")}
          </label>
          <textarea
            className="w-full rounded-xl border border-outline-variant bg-surface-container-lowest p-md font-ethiopic-body text-ethiopic-body text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none transition-shadow"
            id="issue-description"
            placeholder={t("describe.briefly")}
            rows={4}
          ></textarea>
        </section>

        {/* Operational Toggle */}
        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex items-start justify-between shadow-sm">
          <div className="flex-1 pr-md">
            <h3 className="font-ethiopic-label text-ethiopic-label font-bold text-on-surface mb-xs">
              {t("block.affected.slots")}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
              {t("auto.block.calendar.prompt")}
            </p>
          </div>
          <div className="pt-1">
            <label className="relative inline-block w-12 h-6 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isBlocked}
                onChange={() => setIsBlocked(!isBlocked)}
              />
              <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-surface-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </section>
      </main>

      {/* Sticky Bottom Action Area */}
      <div className="fixed bottom-0 w-full p-md bg-surface border-t border-outline-variant z-40 pb-safe md:max-w-md md:mx-auto md:left-auto md:right-auto">
        <button
          onClick={handleSubmit}
          className="w-full h-[52px] bg-primary text-on-primary font-label-lg text-label-lg rounded-xl flex items-center justify-center gap-sm active:opacity-80 transition-opacity shadow-sm"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
          {t("send.to.owner")}
        </button>
      </div>

      {/* Success Overlay */}
      <div
        className={`fixed inset-0 bg-on-surface/40 z-50 flex items-center justify-center backdrop-blur-sm px-md transition-opacity duration-300 md:max-w-md md:mx-auto md:left-auto md:right-auto ${
          isOverlayOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`bg-surface-container-lowest rounded-xl p-lg w-full max-w-sm flex flex-col items-center transform transition-transform duration-300 ${
            isOverlayOpen ? "scale-100" : "scale-95"
          }`}
        >
          <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-md text-primary">
            <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface text-center mb-sm">
            {t("owner.notified")}
          </h3>
          <p className="font-ethiopic-body text-ethiopic-body text-on-surface-variant text-center mb-lg">
            {t("thank.you")}
          </p>
          <button
            onClick={handleCloseOverlay}
            className="w-full h-[52px] bg-surface-container-high text-on-surface font-label-lg text-label-lg rounded-xl flex items-center justify-center active:bg-surface-container-highest transition-colors"
          >
            {t("back.to.dashboard")}
          </button>
        </div>
      </div>
    </div>
  );
}
