"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function BookingsPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <main className="max-w-4xl mx-auto px-container-margin py-md space-y-lg pt-[80px] pb-32">
      {/* Page Header */}
      <div className="mb-sm">
        <h2 className="text-display-lg font-display-lg text-on-surface mb-xs">{t("my.bookings")}</h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">{t("manage.reservations")}</p>
      </div>

      {/* Tabbed Interface */}
      <div className="relative mb-lg">
        <div className="flex overflow-x-auto no-scrollbar border-b border-outline-variant">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`flex-1 min-w-max py-sm px-md text-center border-b-2 transition-colors ${
              activeTab === "upcoming" ? "border-primary text-primary" : "border-transparent text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <div className="font-label-lg text-label-lg">{t("upcoming")}</div>
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`flex-1 min-w-max py-sm px-md text-center border-b-2 transition-colors ${
              activeTab === "past" ? "border-primary text-primary" : "border-transparent text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <div className="font-label-lg text-label-lg">{t("past")}</div>
          </button>
          <button
            onClick={() => setActiveTab("cancelled")}
            className={`flex-1 min-w-max py-sm px-md text-center border-b-2 transition-colors ${
              activeTab === "cancelled" ? "border-primary text-primary" : "border-transparent text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <div className="font-label-lg text-label-lg">{t("cancelled")}</div>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-gutter">
        {activeTab === "upcoming" && (
          <>
            {/* Booking Card 1: Confirmed */}
            <article className="bg-surface-container-lowest rounded-xl border border-surface-variant flex flex-col md:flex-row overflow-hidden hover:bg-surface-bright transition-colors active:scale-[0.98] duration-150">
              <div className="md:w-1/3 h-48 md:h-auto relative">
                <img
                  alt="Bole Mini-Pitch football field with green turf"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLuCOTnLhsaD0Cha69yp22-0h_Sef968NHnyohy5s6CoHNdcYTYC7L6aPfFB79Grf2CCjiZObuM1-lHFVUly5TRFPQl_q9S_fxPoBT0CIovbFxWO7cgkM1P5BU0az9_6kfhCmvMn8PpgpPTSJLRxyejqivjQeAU5xVHOG_biT9NpC8ySIS2iwy_kbolWTYj8ERWtUImiHZS7JN2omGOPFV0-We8TlmP4hD2iMgODbw2kOQ9kdirpE2xdnQ"
                />
                <div className="absolute top-sm left-sm bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full border border-surface-variant flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="font-label-lg text-[12px] text-on-surface">{t("confirmed")}</span>
                </div>
              </div>
              <div className="p-md flex-1 flex flex-col justify-between gap-md">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Bole Mini-Pitch</h3>
                  <div className="flex items-center text-on-surface-variant font-body-sm text-body-sm mb-xs">
                    <span className="material-symbols-outlined text-[18px] mr-1">calendar_today</span>
                    Oct 24, 7:00 PM
                  </div>
                  <div className="flex items-center text-on-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-[18px] mr-1">location_on</span>
                    Bole, Addis Ababa
                  </div>
                </div>
                <div className="flex justify-end mt-auto pt-sm border-t border-surface-variant">
                  <button className="h-10 px-md rounded-lg border border-primary text-primary font-label-lg text-label-lg flex items-center justify-center hover:bg-primary-container/10 transition-colors">
                    {t("view.ticket")}
                  </button>
                </div>
              </div>
            </article>

            {/* Booking Card 2: Pending Payment */}
            <article className="bg-surface-container-lowest rounded-xl border border-surface-variant flex flex-col md:flex-row overflow-hidden hover:bg-surface-bright transition-colors active:scale-[0.98] duration-150">
              <div className="md:w-1/3 h-48 md:h-auto relative bg-surface-variant flex items-center justify-center">
                <span className="material-symbols-outlined text-[48px] text-outline-variant">image</span>
                <div className="absolute top-sm left-sm bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[14px]">warning</span>
                  <span className="font-label-lg text-[12px]">{t("pending.payment")}</span>
                </div>
              </div>
              <div className="p-md flex-1 flex flex-col justify-between gap-md">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Kazanchis Turf</h3>
                  <div className="flex items-center text-on-surface-variant font-body-sm text-body-sm mb-xs">
                    <span className="material-symbols-outlined text-[18px] mr-1">calendar_today</span>
                    Oct 26, 6:00 PM
                  </div>
                  <div className="flex items-center text-on-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-[18px] mr-1">location_on</span>
                    Kazanchis, Addis Ababa
                  </div>
                </div>
                <div className="flex justify-end mt-auto pt-sm border-t border-surface-variant">
                  <button className="h-10 px-md rounded-lg bg-secondary-container text-on-secondary-container font-label-lg text-label-lg flex items-center justify-center hover:bg-secondary-container/90 transition-colors shadow-sm">
                    {t("pay.now")}
                  </button>
                </div>
              </div>
            </article>
          </>
        )}

        {activeTab === "past" && (
          <div className="py-xl text-center text-on-surface-variant">
            <span className="material-symbols-outlined text-4xl mb-2">history</span>
            <p>{t("no.past.bookings")}</p>
          </div>
        )}

        {activeTab === "cancelled" && (
          <div className="py-xl text-center text-on-surface-variant">
            <span className="material-symbols-outlined text-4xl mb-2">cancel</span>
            <p>{t("no.cancelled.bookings")}</p>
          </div>
        )}
      </div>
    </main>
  );
}
