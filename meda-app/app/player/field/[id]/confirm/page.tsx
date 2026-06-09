"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function ConfirmBookingPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [paymentMethod, setPaymentMethod] = useState("telebirr");

  const handlePayment = () => {
    // In a real app, process payment here.
    // For now, redirect to success page.
    router.push("/player/success");
  };

  return (
    <main className="bg-background text-on-background antialiased pb-32 min-h-screen">
      {/* Header (Transactional - No Navigation Shell) */}
      <header className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant h-14 flex items-center justify-between px-container-margin">
        <div className="flex items-center gap-xs">
          <button
            onClick={() => router.back()}
            aria-label="Go back"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high active:opacity-80 transition-colors"
          >
            <span className="material-symbols-outlined text-primary font-bold">arrow_back</span>
          </button>
          <h1 className="font-headline-sm text-headline-sm text-on-surface">{t("confirm.your.booking")}</h1>
        </div>
        <div className="w-10 h-10"></div> {/* Spacer to center title */}
      </header>

      <div className="pt-[72px] px-container-margin max-w-md mx-auto">
        {/* Summary Card */}
        <section className="bg-[#FFFFFF] border border-[#E5E5E0] rounded-[16px] p-md mb-lg">
          <div className="flex gap-md mb-md border-b border-surface-variant pb-md">
            <div className="w-[80px] h-[80px] rounded-lg overflow-hidden flex-shrink-0 bg-surface-variant">
              <img
                alt="Bole Mini-Pitch"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgfYM6VfisGzI9---wUtH_EeMmWXYLjFMWDQAIdodZN3Y14ud3hUo6QcOtkaELpKjRPHofKdrLt_gGQRM1WlpXVAoiyR70lFTa1ZQ2E-fuFHAHbQyMg8rWEeHFx6rv466dxo7ByjE8KWAWGzbqaLodb0ENIr6QxDl8auE5eypoYS5h4hm2n7bvZryuhwuqno2h3uz99TyDUcFfUo6Fq6fGoCk1wHbolL5VL6UkNKvXuFnglkyXv-wp7oqACrSpcR6iHOTF6WwUKRM"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Bole Mini-Pitch</h2>
              <div className="flex items-center gap-xs text-on-surface-variant mt-1">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>
                  calendar_month
                </span>
                <span className="font-body-sm text-body-sm">Oct 24, 2024</span>
              </div>
              <div className="flex items-center gap-xs text-on-surface-variant mt-1">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>
                  schedule
                </span>
                <span className="font-body-sm text-body-sm">7:00 PM - 8:00 PM (1 hour)</span>
              </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="space-y-sm">
            <h3 className="font-label-lg text-label-lg text-on-surface mb-xs">{t("price.breakdown")}</h3>
            <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
              <span>{t("field.fee")}</span>
              <span>400 ETB</span>
            </div>
            <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
              <span>{t("bibs.optional")}</span>
              <span>+50 ETB</span>
            </div>
            <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
              <span>{t("service.fee")}</span>
              <span>50 ETB</span>
            </div>
            <div className="flex justify-between font-label-lg text-label-lg text-on-surface pt-sm border-t border-surface-variant mt-sm">
              <span>{t("total")}</span>
              <span>500 ETB</span>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="mb-lg">
          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-md">Payment Method</h3>
          <div className="space-y-gutter">
            {/* Option 1: Telebirr */}
            <label className="block cursor-pointer">
              <input
                className="peer sr-only"
                name="payment"
                type="radio"
                value="telebirr"
                checked={paymentMethod === "telebirr"}
                onChange={() => setPaymentMethod("telebirr")}
              />
              <div className="flex items-center p-md bg-[#FFFFFF] border border-[#E5E5E0] rounded-[12px] peer-checked:border-[2px] peer-checked:border-primary peer-checked:bg-primary-container/5 transition-all">
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center mr-md overflow-hidden">
                  <img
                    alt="Telebirr"
                    className="w-full h-full object-contain p-1"
                    src="/telebirr.jpg"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <span className="font-label-lg text-label-lg text-on-surface">Telebirr</span>
                    <span className="px-2 py-0.5 bg-[#FF7A1B] text-[#FFFFFF] text-[10px] uppercase font-bold rounded-full tracking-wider">
                      {t("recommended")}
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{t("fast.secure")}</span>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-outline-variant peer-checked:border-primary flex items-center justify-center">
                  <div className={`w-3 h-3 rounded-full bg-primary transition-opacity ${paymentMethod === 'telebirr' ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>
              </div>
            </label>

            {/* Option 2: CBE Birr */}
            <label className="block cursor-pointer">
              <input
                className="peer sr-only"
                name="payment"
                type="radio"
                value="cbe"
                checked={paymentMethod === "cbe"}
                onChange={() => setPaymentMethod("cbe")}
              />
              <div className="flex items-center p-md bg-[#FFFFFF] border border-[#E5E5E0] rounded-[12px] peer-checked:border-[2px] peer-checked:border-primary peer-checked:bg-primary-container/5 transition-all">
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center mr-md overflow-hidden">
                  <img
                    alt="CBE"
                    className="w-full h-full object-contain p-1"
                    src="/cbebirr.png"
                  />
                </div>
                <div className="flex-grow">
                  <span className="font-label-lg text-label-lg text-on-surface block">CBE Birr</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{t("bank.transfer")}</span>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-outline-variant peer-checked:border-primary flex items-center justify-center">
                  <div className={`w-3 h-3 rounded-full bg-primary transition-opacity ${paymentMethod === 'cbe' ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>
              </div>
            </label>

            {/* Option 3: Pay at Gate */}
            <label className="block cursor-pointer">
              <input
                className="peer sr-only"
                name="payment"
                type="radio"
                value="gate"
                checked={paymentMethod === "gate"}
                onChange={() => setPaymentMethod("gate")}
              />
              <div className="flex items-center p-md bg-[#FFFFFF] border border-[#E5E5E0] rounded-[12px] peer-checked:border-[2px] peer-checked:border-primary peer-checked:bg-primary-container/5 transition-all">
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center mr-md text-on-surface-variant">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>payments</span>
                </div>
                <div className="flex-grow">
                  <span className="font-label-lg text-label-lg text-on-surface block">{t("pay.at.the.gate")}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{t("cash.or.card")}</span>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-outline-variant peer-checked:border-primary flex items-center justify-center">
                  <div className={`w-3 h-3 rounded-full bg-primary transition-opacity ${paymentMethod === 'gate' ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>
              </div>
            </label>
          </div>
        </section>

        {/* Cancellation Policy */}
        <p className="font-body-sm text-body-sm text-on-surface-variant text-center mb-xl">
          <span className="material-symbols-outlined text-[16px] align-middle mr-1">info</span>
          {t("free.cancel.policy")}
        </p>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 w-full bg-[#FFFFFF] border-t border-[#E5E5E0] p-container-margin z-50">
        <div className="max-w-md mx-auto">
          <button
            onClick={handlePayment}
            className="w-full h-[52px] bg-primary text-[#FFFFFF] font-label-lg text-label-lg rounded-[12px] active:bg-[#005320] transition-colors flex items-center justify-center shadow-sm"
          >
            {t("pay")} 500 ETB
          </button>
        </div>
      </div>
    </main>
  );
}
