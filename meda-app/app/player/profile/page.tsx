"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProfilePage() {
  const { t } = useLanguage();

  return (
    <main className="px-container-margin py-md max-w-2xl mx-auto space-y-xl pt-[80px] pb-32">
      {/* Profile Header */}
      <section className="flex flex-col items-center pt-md relative">
        <div className="w-full h-1 absolute top-0 left-0 flex overflow-hidden rounded-t-lg">
          <div className="flex-1 bg-[#ba1a1a]"></div>
          <div className="flex-1 bg-[#ff7a1b]"></div>
          <div className="flex-1 bg-[#006428]"></div>
        </div>
        <div className="relative mt-lg">
          <div className="w-24 h-24 rounded-full bg-surface-variant flex items-center justify-center border-4 border-surface shadow-sm">
            <span className="material-symbols-outlined text-6xl text-on-surface-variant">person</span>
          </div>
          <button
            aria-label="Edit Profile"
            className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-md border-2 border-surface hover:bg-primary-fixed-variant active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[16px]">edit</span>
          </button>
        </div>
        <h2 className="font-headline-md text-headline-md text-on-surface mt-sm">Solomon Kebede</h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">+251 911 234 567</p>
      </section>

      {/* Wallet Card */}
      <section>
        <div className="bg-primary text-on-primary rounded-[16px] p-md shadow-lg relative overflow-hidden">
          <div className="absolute -right-10 -top-10 opacity-10">
            <span
              className="material-symbols-outlined text-[120px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              account_balance_wallet
            </span>
          </div>
          <div className="relative z-10 flex flex-col gap-sm">
            <div className="flex justify-between items-center">
              <h3 className="font-label-lg text-label-lg text-on-primary/80 uppercase tracking-wider">Meda Wallet</h3>
              <span className="material-symbols-outlined">account_balance_wallet</span>
            </div>
            <div className="mt-xs mb-md">
              <span className="font-display-lg text-display-lg font-extrabold">350</span>
              <span className="font-body-lg text-body-lg ml-xs font-semibold">ETB</span>
            </div>
            <div className="flex gap-sm">
              <button className="flex-1 bg-surface text-primary font-label-lg text-label-lg h-10 rounded-lg flex items-center justify-center shadow-sm hover:bg-surface-container-low active:bg-surface-container-high transition-colors">
                {t("top.up")}
              </button>
              <button className="flex-1 bg-transparent border border-outline-variant text-on-primary font-label-lg text-label-lg h-10 rounded-lg flex items-center justify-center hover:bg-primary-fixed-variant transition-colors">
                {t("withdraw")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Settings List */}
      <section className="bg-surface rounded-xl border border-surface-variant overflow-hidden">
        <ul className="flex flex-col divide-y divide-surface-variant">
          {/* Saved Fields */}
          <li>
            <button className="w-full flex items-center px-md py-4 hover:bg-surface-container-low active:bg-surface-container-high transition-colors text-left">
              <div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center mr-4 shrink-0">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  favorite
                </span>
              </div>
              <div className="flex-1">
                <span className="font-body-lg text-body-lg text-on-surface font-medium">{t("saved.fields")}</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </button>
          </li>
          {/* Payment Methods */}
          <li>
            <button className="w-full flex items-center px-md py-4 hover:bg-surface-container-low active:bg-surface-container-high transition-colors text-left">
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mr-4 shrink-0">
                <span className="material-symbols-outlined">wallet</span>
              </div>
              <div className="flex-1">
                <span className="font-body-lg text-body-lg text-on-surface font-medium">{t("payment.methods")}</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </button>
          </li>
          {/* Refer a friend */}
          <li>
            <button className="w-full flex items-center px-md py-4 hover:bg-surface-container-low active:bg-surface-container-high transition-colors text-left">
              <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mr-4 shrink-0">
                <span className="material-symbols-outlined">featured_seasonal_and_gifts</span>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <span className="font-body-lg text-body-lg text-on-surface font-medium">{t("refer.friend")}</span>
                <span className="font-body-sm text-body-sm text-secondary font-medium">{t("get.100.etb")}</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </button>
          </li>
          {/* Language Toggle */}
          <li className="px-md py-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center mr-4 shrink-0">
                <span className="material-symbols-outlined">language</span>
              </div>
              <span className="font-body-lg text-body-lg text-on-surface font-medium">{t("language")}</span>
            </div>
            <div className="flex bg-surface-container-low rounded-lg p-1 border border-surface-variant">
              <button className="px-3 py-1.5 font-ethiopic-label text-ethiopic-label rounded-md bg-surface shadow-sm text-on-surface transition-all">
                አማርኛ
              </button>
              <button className="px-3 py-1.5 font-label-lg text-label-lg rounded-md text-on-surface-variant hover:text-on-surface transition-all">
                English
              </button>
            </div>
          </li>
          {/* Help & Support */}
          <li>
            <button className="w-full flex items-center px-md py-4 hover:bg-surface-container-low active:bg-surface-container-high transition-colors text-left">
              <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center mr-4 shrink-0">
                <span className="material-symbols-outlined">help</span>
              </div>
              <div className="flex-1">
                <span className="font-body-lg text-body-lg text-on-surface font-medium">{t("help.support")}</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </button>
          </li>
          {/* Terms & Privacy */}
          <li>
            <button className="w-full flex items-center px-md py-4 hover:bg-surface-container-low active:bg-surface-container-high transition-colors text-left">
              <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center mr-4 shrink-0">
                <span className="material-symbols-outlined">info</span>
              </div>
              <div className="flex-1">
                <span className="font-body-lg text-body-lg text-on-surface font-medium">{t("terms.privacy")}</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </button>
          </li>
          {/* Log out */}
          <li>
            <button className="w-full flex items-center px-md py-4 hover:bg-error-container/20 active:bg-error-container/40 transition-colors text-left group">
              <div className="w-10 h-10 rounded-full bg-error/10 text-error flex items-center justify-center mr-4 shrink-0 group-hover:bg-error/20 transition-colors">
                <span className="material-symbols-outlined">logout</span>
              </div>
              <div className="flex-1">
                <span className="font-body-lg text-body-lg text-error font-semibold">{t("log.out")}</span>
              </div>
            </button>
          </li>
        </ul>
      </section>
      <div className="h-6"></div> {/* Extra spacing for BottomNav */}
    </main>
  );
}
