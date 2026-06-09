"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function FieldDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { t, lang } = useLanguage();
  const [selectedTime, setSelectedTime] = useState<string | null>("7:00 PM");

  const amenities = [
    { icon: "lightbulb", labelEn: "Lights", labelAm: "መብራት" },
    { icon: "local_parking", labelEn: "Parking", labelAm: "ፓርኪንግ" },
    { icon: "shower", labelEn: "Shower", labelAm: "ሻወር" },
    { icon: "checkroom", labelEn: "Bibs", labelAm: "ቢብ" },
    { icon: "sports_soccer", labelEn: "Ball", labelAm: "ኳስ" },
    { icon: "water_drop", labelEn: "Water", labelAm: "ውሃ" },
  ];

  const timeSlots = [
    { time: "4:00 PM", status: "available" },
    { time: "5:00 PM", status: "booked" },
    { time: "6:00 PM", status: "available" },
    { time: "7:00 PM", status: "available" },
    { time: "8:00 PM", status: "available" },
  ];

  return (
    <main className="w-full relative bg-surface min-h-screen shadow-sm pb-28">
      {/* Header & Image Carousel Area */}
      <div className="relative w-full h-[280px]">
        {/* Custom Top Bar overlay */}
        <div className="absolute top-0 left-0 w-full p-md z-10 flex justify-between items-center">
          <button
            onClick={() => router.back()}
            aria-label="Go back"
            className="w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-on-surface shadow-sm active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex gap-2">
            <button
              aria-label="Share field"
              className="w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-on-surface shadow-sm active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined">share</span>
            </button>
            <button
              aria-label="Favorite field"
              className="w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-on-surface shadow-sm active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined">favorite_border</span>
            </button>
          </div>
        </div>
        
        {/* Horizontal Scroll Carousel */}
        <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory no-scrollbar">
          <div className="w-full h-full shrink-0 snap-center">
            <img
              alt="Bole Mini-Pitch main view"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida/AP1WRLshDZVKNJZvdprMHm3D9LILbrbbtAL96DPj3tXWKczHwKQeUYEjrd3ridqDLNvilTpXtDctermwRmFBzZmxtOGJQt2YFY9Irz5_laajqOG1J9JdrJwInhrIsPBCC_o_8Qp3JJAMzEphZ0JhKHLp1ipmq940VBU3D72xm0i_wu745YTKvTM5DQCjNs_oe55VTGDQz0D1zH92xFlMv7cnbSqgFNWiMrUSmXcXM7eLXzCqmCW5yV1z6sqnYQ"
            />
          </div>
          <div className="w-full h-full shrink-0 snap-center">
            <img
              alt="Bole Mini-Pitch secondary view"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida/AP1WRLuCOTnLhsaD0Cha69yp22-0h_Sef968NHnyohy5s6CoHNdcYTYC7L6aPfFB79Grf2CCjiZObuM1-lHFVUly5TRFPQl_q9S_fxPoBT0CIovbFxWO7cgkM1P5BU0az9_6kfhCmvMn8PpgpPTSJLRxyejqivjQeAU5xVHOG_biT9NpC8ySIS2iwy_kbolWTYj8ERWtUImiHZS7JN2omGOPFV0-We8TlmP4hD2iMgODbw2kOQ9kdirpE2xdnQ"
            />
          </div>
        </div>
        {/* Carousel Pagination Dots */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-surface"></div>
          <div className="w-2 h-2 rounded-full bg-surface/50"></div>
        </div>
      </div>

      {/* Main Content Canvas */}
      <div className="px-md py-lg rounded-t-2xl -mt-4 relative bg-surface flex flex-col gap-lg">
        {/* Title & Metadata */}
        <div>
          <h1 className="font-headline-md text-on-surface mb-xs flex items-center gap-2">
            Bole Mini-Pitch <span className="font-ethiopic-body text-[20px] text-on-surface-variant">| ቦሌ ሚኒ-ፒች</span>
          </h1>
          <p className="font-body-sm text-on-surface-variant mb-3 flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            Bole, Addis Ababa
          </p>
          <div className="flex items-center gap-1">
            <span
              className="material-symbols-outlined text-secondary-container text-[20px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="font-label-lg text-on-surface">4.8</span>
            <span className="font-body-sm text-on-surface-variant underline decoration-outline-variant underline-offset-2 ml-1">
              (120 {t("reviews")})
            </span>
          </div>
        </div>

        {/* Amenities Bento Grid */}
        <div>
          <h2 className="font-label-lg text-on-surface mb-3">{t("amenities")}</h2>
          <div className="grid grid-cols-3 gap-3">
            {amenities.map((item, index) => (
              <div
                key={index}
                className="bg-surface-container-lowest border border-outline-variant rounded-xl p-3 flex flex-col items-center gap-1"
              >
                <span className="material-symbols-outlined text-primary">{item.icon}</span>
                <span className="font-ethiopic-label text-on-surface-variant text-center text-[11px] leading-tight">
                  {lang === 'en' ? item.labelEn : item.labelAm}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div>
          <h2 className="font-label-lg text-on-surface mb-2">{t("about.this.field")}</h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            {t("field.description")}
          </p>
        </div>

        {/* Pricing Section */}
        <div>
          <h2 className="font-label-lg text-on-surface mb-3">{t("pricing")}</h2>
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex items-center gap-2 bg-secondary-container/20 border border-secondary-container text-on-secondary-container rounded-lg px-3 py-2">
              <span className="material-symbols-outlined text-[18px]">wb_twilight</span>
              <span className="font-label-lg text-[13px]">{t("peak")} 600 {t("etb.hr")}</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-primary-container/20 border border-primary-container text-on-primary-fixed-variant rounded-lg px-3 py-2">
              <span className="material-symbols-outlined text-[18px]">routine</span>
              <span className="font-label-lg text-[13px]">{t("off-peak")} 400 {t("etb.hr")}</span>
            </div>
          </div>
        </div>

        {/* Availability Slider */}
        <div className="pb-4">
          <div className="flex justify-between items-end mb-3">
            <h2 className="font-label-lg text-on-surface">{t("todays.availability")}</h2>
            <span className="font-body-sm text-primary font-medium">Oct 24</span>
          </div>
          <div className="flex overflow-x-auto gap-3 no-scrollbar pb-2 pt-1 -mx-md px-md">
            {timeSlots.map((slot, index) => {
              if (slot.status === "booked") {
                return (
                  <div
                    key={index}
                    className="shrink-0 h-[32px] px-md rounded-xl bg-surface-variant text-on-surface-variant/60 font-label-lg flex items-center justify-center line-through cursor-not-allowed"
                  >
                    {slot.time}
                  </div>
                );
              }
              const isSelected = selectedTime === slot.time;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedTime(slot.time)}
                  className={`shrink-0 h-[32px] px-md rounded-xl font-label-lg transition-transform active:scale-95 ${
                    isSelected
                      ? "bg-[#FF7A1A] text-white border border-[#FF7A1A] shadow-sm"
                      : "bg-surface border border-primary-container text-primary-container hover:bg-primary-container/10"
                  }`}
                >
                  {slot.time}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar (Booking CTA) */}
      <div className="fixed bottom-0 w-full max-w-md mx-auto bg-surface-container-lowest border-t border-surface-variant p-md z-40 pb-safe">
        <Link href={`/player/field/${params.id}/confirm`}>
          <button
            disabled={!selectedTime}
            className="w-full h-[52px] bg-primary-container hover:bg-primary-container/90 text-white rounded-xl font-label-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>
              {t("book")} {selectedTime ? selectedTime : ""} — 500 ETB
            </span>
          </button>
        </Link>
      </div>
    </main>
  );
}
