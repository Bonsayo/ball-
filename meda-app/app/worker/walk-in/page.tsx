"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function WorkerWalkInPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const [selectedTime, setSelectedTime] = useState<string>("4:00 PM");
  const [duration, setDuration] = useState<number>(1.5);
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "telebirr">("cash");

  const basePrice = 500;
  const totalPrice = basePrice * duration;

  return (
    <div className="flex flex-col min-h-screen pb-[100px] font-body-lg text-on-background bg-background">
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface-dim w-full top-0 sticky border-b border-outline-variant dark:border-outline z-40">
        <div className="flex items-center justify-between px-md h-[64px] w-full">
          <button
            onClick={() => router.back()}
            aria-label="Close"
            className="text-on-surface-variant hover:bg-surface-container-high transition-colors active:opacity-80 transition-opacity p-sm rounded-full flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
          <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">{t("add.walk.in")}</h1>
          <div className="w-[40px]"></div> {/* Spacer for center alignment */}
        </div>
      </header>

      <main className="px-container-margin pt-md flex flex-col gap-lg max-w-2xl mx-auto w-full flex-1">
        {/* Total Price Card */}
        <section className="bg-primary-container text-on-primary-container rounded-xl p-md flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden">
          {/* Heritage Accent */}
          <div className="absolute top-0 left-0 w-full h-[4px] flex">
            <div className="flex-1 bg-error"></div>
            <div className="flex-1 bg-[#FCE300]"></div>
            <div className="flex-1 bg-primary"></div>
          </div>
          <span className="font-label-lg text-label-lg opacity-90 mt-xs uppercase tracking-wider">{t("total.price")}</span>
          <div className="font-display-lg text-display-lg mt-sm flex items-baseline gap-xs">
            <span>{totalPrice}</span>
            <span className="font-headline-sm text-headline-sm">ETB</span>
          </div>
        </section>

        {/* Step 1: Pick Time */}
        <section className="flex flex-col gap-sm">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">
            {t("step1.time")}
          </h2>
          <div className="flex gap-gutter overflow-x-auto no-scrollbar pb-sm -mx-container-margin px-container-margin snap-x">
            {["3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"].map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`time-pill shrink-0 h-[40px] px-lg rounded-full font-label-lg text-label-lg snap-center active:scale-95 transition-transform ${
                  selectedTime === time
                    ? "bg-primary text-on-primary border border-primary"
                    : "bg-surface border border-outline-variant text-on-surface"
                }`}
              >
                {time}
              </button>
            ))}
            <button
              disabled
              className="time-pill shrink-0 h-[40px] px-lg rounded-full bg-surface-container-highest border border-outline-variant text-on-surface-variant line-through font-label-lg text-label-lg snap-center opacity-60 cursor-not-allowed"
            >
              7:00 PM
            </button>
          </div>
        </section>

        {/* Step 2: Duration */}
        <section className="flex flex-col gap-sm">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">{t("step2.duration")}</h2>
          <div className="flex gap-sm bg-surface-container-low p-sm rounded-lg border border-outline-variant">
            {[
              { label: `1 ${t("hr")}`, val: 1 },
              { label: `1.5 ${t("hr")}`, val: 1.5 },
              { label: `2 ${t("hr")}`, val: 2 },
            ].map((dur) => (
              <button
                key={dur.label}
                onClick={() => setDuration(dur.val)}
                className={`duration-btn flex-1 h-[40px] rounded-DEFAULT font-label-lg text-label-lg active:scale-[0.98] transition-all ${
                  duration === dur.val
                    ? "bg-primary-container text-on-primary-container shadow-sm"
                    : "bg-surface text-on-surface border border-outline-variant"
                }`}
              >
                {dur.label}
              </button>
            ))}
          </div>
        </section>

        {/* Step 3: Customer Info */}
        <section className="flex flex-col gap-sm">
          <div className="flex justify-between items-baseline">
            <h2 className="font-headline-sm text-headline-sm text-on-surface">{t("step3.customer")}</h2>
            <span className="font-body-sm text-body-sm text-on-surface-variant">{t("optional")}</span>
          </div>
          <div className="flex flex-col gap-gutter">
            <div className="relative">
              <label className="sr-only" htmlFor="phone">{t("phone")}</label>
              <div className="absolute inset-y-0 left-0 pl-sm flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-on-surface-variant text-[20px]">call</span>
              </div>
              <input
                className="w-full h-[52px] pl-[40px] pr-md rounded-lg border border-outline-variant bg-surface text-on-surface font-body-lg text-body-lg focus:border-[2px] focus:border-primary focus:ring-0 focus:outline-none transition-colors"
                id="phone"
                placeholder={t("phone")}
                type="tel"
              />
            </div>
            <div className="relative">
              <label className="sr-only" htmlFor="name">{t("name")}</label>
              <div className="absolute inset-y-0 left-0 pl-sm flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-on-surface-variant text-[20px]">person</span>
              </div>
              <input
                className="w-full h-[52px] pl-[40px] pr-md rounded-lg border border-outline-variant bg-surface text-on-surface font-body-lg text-body-lg focus:border-[2px] focus:border-primary focus:ring-0 focus:outline-none transition-colors"
                id="name"
                placeholder={t("name")}
                type="text"
              />
            </div>
          </div>
        </section>

        {/* Step 4: Payment */}
        <section className="flex flex-col gap-sm mb-lg">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">{t("step4.payment")}</h2>
          <div className="grid grid-cols-2 gap-md">
            <label
              className={`payment-card relative flex flex-col items-center justify-center gap-sm p-md rounded-xl cursor-pointer active:scale-95 transition-transform ${
                paymentMethod === "cash"
                  ? "border-[2px] border-primary bg-surface-bright"
                  : "border border-outline-variant bg-surface"
              }`}
            >
              <input
                className="peer sr-only"
                name="payment"
                type="radio"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
              />
              <div
                className={`w-[48px] h-[48px] rounded-full flex items-center justify-center ${
                  paymentMethod === "cash"
                    ? "bg-primary-container text-on-primary-container"
                    : "bg-surface-container-high text-on-surface"
                }`}
              >
                <span className="material-symbols-outlined text-[28px]">payments</span>
              </div>
              <span className="font-label-lg text-label-lg text-on-surface text-center">
                {t("cash.collected")} <br />
                {paymentMethod === "cash" && "✅"}
              </span>
            </label>

            <label
              className={`payment-card relative flex flex-col items-center justify-center gap-sm p-md rounded-xl cursor-pointer active:scale-95 transition-transform ${
                paymentMethod === "telebirr"
                  ? "border-[2px] border-primary bg-surface-bright"
                  : "border border-outline-variant bg-surface"
              }`}
            >
              <input
                className="peer sr-only"
                name="payment"
                type="radio"
                value="telebirr"
                checked={paymentMethod === "telebirr"}
                onChange={() => setPaymentMethod("telebirr")}
              />
              <div
                className={`w-[48px] h-[48px] rounded-full flex items-center justify-center ${
                  paymentMethod === "telebirr"
                    ? "bg-primary-container text-on-primary-container"
                    : "bg-surface-container-high text-on-surface"
                }`}
              >
                <span className="material-symbols-outlined text-[28px]">account_balance_wallet</span>
              </div>
              <span className="font-label-lg text-label-lg text-on-surface text-center">Telebirr</span>
            </label>
          </div>
        </section>
      </main>

      {/* Bottom Sticky Action */}
      <div className="fixed bottom-0 left-0 w-full p-md bg-surface border-t border-outline-variant shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 safe-area-bottom md:max-w-md md:left-auto md:right-auto md:mx-auto">
        <button
          onClick={() => router.push("/worker/dashboard")}
          className="w-full h-[52px] bg-primary text-on-primary font-label-lg text-label-lg rounded-xl flex items-center justify-center gap-sm active:bg-primary-container active:text-on-primary-container transition-colors shadow-sm max-w-2xl mx-auto"
        >
          <span>{t("confirm.booking")}</span>
          <span className="material-symbols-outlined text-[20px]">check_circle</span>
        </button>
      </div>
    </div>
  );
}
