"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function BookingSuccessPage() {
  const { t } = useLanguage();
  return (
    <main className="bg-background text-on-background font-body-lg antialiased min-h-screen flex flex-col items-center pb-xl relative">
      {/* Heritage Accent Strip (Top of Splash/Success Screen) */}
      <div className="absolute top-0 w-full h-[4px] flex z-50">
        <div className="flex-1 bg-error"></div>
        <div className="flex-1 bg-secondary-container"></div>
        <div className="flex-1 bg-primary"></div>
      </div>

      <div className="w-full max-w-md mx-auto flex flex-col gap-lg px-container-margin pt-xl mt-8">
        {/* Success Header */}
        <header className="flex flex-col items-center text-center gap-sm mt-md animate-[popIn_0.6s_cubic-bezier(0.175,0.885,0.32,1.275)_forwards]">
          <div className="w-24 h-24 rounded-full bg-primary-container/20 flex items-center justify-center mb-sm">
            <span className="material-symbols-outlined text-[64px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
          </div>
          <h1 className="font-headline-md text-headline-md text-on-surface">
            {t("booked.see.you")} <span aria-hidden="true">🎉</span>
          </h1>
          <p className="font-ethiopic-body text-ethiopic-body text-on-surface-variant">{t("booked.subtext")}</p>
        </header>

        {/* Ticket Card */}
        <article className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm flex flex-col relative overflow-hidden mt-sm" style={{
          maskImage: "radial-gradient(circle at 0 50%, transparent 8px, black 9px), radial-gradient(circle at 100% 50%, transparent 8px, black 9px)",
          maskSize: "51% 100%",
          maskRepeat: "no-repeat",
          maskPosition: "left, right"
        }}>
          {/* QR Section */}
          <div className="flex flex-col items-center p-md pb-lg bg-surface-container-lowest border-b border-dashed border-outline-variant relative">
            {/* Inner ticket notches simulation via borders/spacing */}
            <div className="w-48 h-48 bg-surface-container-high rounded-lg mb-md flex items-center justify-center border border-outline-variant overflow-hidden">
              <img
                alt="QR Code for Check-in"
                className="w-full h-full object-cover mix-blend-multiply opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhZyDjEi2QF_uvoONTpN2SgUyPVh_pFRDY9GUm0qqV2oY-bLEh8EmRD5-KctXii29HFyAkJUqj1IKxoeNmbpFYrrbjAoa3qfCe0bBaVOaCSBIYcMdOadonmuKTRoI6drIjgp1OjcbusyMPb_gHwCEksjS6T5S20PNT9S4ad-R0k5JiubOyin90WayP0HGa9d2jKjqsWM9k5sEZ5lPLAgwhXn3ATa7ugxHs64Q4Oqvt91o-eJZP9PEgszizDjc1QI6gVOX1hd_Q3O8"
              />
            </div>
            <p className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest">{t("booking.id")}: MEDA-98721</p>
          </div>
          
          {/* Details Section */}
          <div className="p-md bg-surface-container-lowest flex flex-col gap-gutter pt-lg">
            <div className="flex flex-col gap-xs">
              <span className="font-body-sm text-body-sm text-on-surface-variant">{t("field.name")}</span>
              <span className="font-headline-sm text-headline-sm text-on-surface">Bole Mini-Pitch</span>
            </div>
            <div className="grid grid-cols-2 gap-gutter border-t border-outline-variant/30 pt-gutter mt-xs">
              <div className="flex flex-col gap-xs">
                <span className="font-body-sm text-body-sm text-on-surface-variant">{t("date")}</span>
                <span className="font-label-lg text-label-lg text-on-surface">Oct 24, 2024</span>
              </div>
              <div className="flex flex-col gap-xs">
                <span className="font-body-sm text-body-sm text-on-surface-variant">{t("time")}</span>
                <span className="font-label-lg text-label-lg text-on-surface">7:00 PM - 8:00 PM</span>
              </div>
            </div>
            <div className="flex flex-col gap-xs border-t border-outline-variant/30 pt-gutter mt-xs">
              <span className="font-body-sm text-body-sm text-on-surface-variant">{t("address")}</span>
              <span className="font-label-lg text-label-lg text-on-surface">Bole, Addis Ababa</span>
              <a className="font-label-lg text-label-lg text-primary flex items-center gap-xs mt-xs hover:underline" href="#">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                {t("open.in.map")}
              </a>
            </div>
          </div>
        </article>

        {/* Tip Card */}
        <div className="bg-primary-container text-on-primary-container rounded-xl p-md flex items-start gap-sm mt-xs shadow-sm">
          <span className="material-symbols-outlined text-[20px] mt-[2px]" style={{ fontVariationSettings: "'FILL' 1" }}>qr_code_scanner</span>
          <p className="font-body-sm text-body-sm">{t("show.qr")}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-sm w-full mt-sm">
          <button className="w-full h-[52px] rounded-xl border border-primary text-primary font-label-lg text-label-lg flex items-center justify-center gap-sm hover:bg-primary-container/10 active:bg-primary-container/20 transition-colors">
            <span className="material-symbols-outlined text-[20px]">calendar_add_on</span>
            {t("add.to.calendar")}
          </button>
          <button className="w-full h-[52px] rounded-xl border border-primary text-primary font-label-lg text-label-lg flex items-center justify-center gap-sm hover:bg-primary-container/10 active:bg-primary-container/20 transition-colors">
            <span className="material-symbols-outlined text-[20px]">share</span>
            {t("share.with.team")}
          </button>
          
          <Link href="/player/home" className="w-full mt-4">
             <button className="w-full h-[52px] rounded-xl bg-primary text-white font-label-lg text-label-lg flex items-center justify-center hover:bg-primary/90 transition-colors">
                {t("back.to.home")}
             </button>
          </Link>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
      `}} />
    </main>
  );
}
