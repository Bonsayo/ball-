"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function OwnerMoneyPage() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="max-w-screen-md mx-auto px-container-margin pt-md pb-24 pt-6">
      {/* Top Section: Available Balance */}
      <section className="bg-surface-container-lowest rounded-xl border border-surface-variant p-md mb-md">
        <div className="flex flex-col items-center text-center space-y-4">
          <div>
            <p className="text-body-sm font-body-sm text-on-surface-variant mb-1">{t("available.withdraw")}</p>
            <h2 className="text-display-lg font-display-lg text-on-surface">12,400 ETB</h2>
          </div>
          <button className="w-full h-[52px] bg-primary-container text-on-primary-container font-label-lg text-label-lg rounded-xl flex items-center justify-center gap-2 active:opacity-80 transition-opacity">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              account_balance
            </span>
            {t("withdraw.telebirr")}
          </button>
        </div>
      </section>

      {/* Middle Section: Statistics & Chart */}
      <section className="grid grid-cols-2 gap-gutter mb-md">
        {/* Stats Cards */}
        <div className="bg-surface-container-lowest rounded-xl border border-surface-variant p-md flex flex-col justify-center">
          <p className="text-body-sm font-body-sm text-on-surface-variant mb-1">{t("this.week")}</p>
          <p className="text-headline-md font-headline-md text-on-surface">
            18,500 <span className="text-body-sm font-body-sm text-on-surface-variant">ETB</span>
          </p>
        </div>
        <div className="bg-surface-container-lowest rounded-xl border border-surface-variant p-md flex flex-col justify-center">
          <p className="text-body-sm font-body-sm text-on-surface-variant mb-1">{t("this.month")}</p>
          <p className="text-headline-md font-headline-md text-on-surface">
            64,200 <span className="text-body-sm font-body-sm text-on-surface-variant">ETB</span>
          </p>
        </div>
      </section>

      {/* Bar Chart Area (Bento Grid Style) */}
      <section className="bg-surface-container-lowest rounded-xl border border-surface-variant p-md mb-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-headline-sm font-headline-sm text-on-surface">{t("revenue")}</h3>
          <span className="text-body-sm font-body-sm text-on-surface-variant">{t("this.week")}</span>
        </div>
        {/* Minimalist Bar Chart visualization */}
        <div className="h-40 flex items-end justify-between gap-2 pt-4 border-b border-surface-variant pb-2">
          {/* Mon */}
          <div className="flex flex-col items-center gap-2 w-full">
            <div
              className="w-full bg-surface-variant rounded-t-sm chart-bar relative group transition-all duration-300 ease-out"
              style={{ height: mounted ? "30%" : "0%" }}
            >
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-inverse-surface text-inverse-on-surface text-xs px-2 py-1 rounded">
                2K
              </div>
            </div>
            <span className="text-[10px] text-on-surface-variant font-medium">Mon</span>
          </div>
          {/* Tue */}
          <div className="flex flex-col items-center gap-2 w-full">
            <div
              className="w-full bg-surface-variant rounded-t-sm chart-bar relative group transition-all duration-300 ease-out delay-75"
              style={{ height: mounted ? "45%" : "0%" }}
            >
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-inverse-surface text-inverse-on-surface text-xs px-2 py-1 rounded">
                3.5K
              </div>
            </div>
            <span className="text-[10px] text-on-surface-variant font-medium">Tue</span>
          </div>
          {/* Wed */}
          <div className="flex flex-col items-center gap-2 w-full">
            <div
              className="w-full bg-surface-variant rounded-t-sm chart-bar relative group transition-all duration-300 ease-out delay-100"
              style={{ height: mounted ? "20%" : "0%" }}
            >
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-inverse-surface text-inverse-on-surface text-xs px-2 py-1 rounded">
                1.5K
              </div>
            </div>
            <span className="text-[10px] text-on-surface-variant font-medium">Wed</span>
          </div>
          {/* Thu */}
          <div className="flex flex-col items-center gap-2 w-full">
            <div
              className="w-full bg-surface-variant rounded-t-sm chart-bar relative group transition-all duration-300 ease-out delay-150"
              style={{ height: mounted ? "60%" : "0%" }}
            >
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-inverse-surface text-inverse-on-surface text-xs px-2 py-1 rounded">
                5K
              </div>
            </div>
            <span className="text-[10px] text-on-surface-variant font-medium">Thu</span>
          </div>
          {/* Fri (Today - Highlighted) */}
          <div className="flex flex-col items-center gap-2 w-full">
            <div
              className="w-full bg-primary-container rounded-t-sm chart-bar relative group transition-all duration-300 ease-out delay-200"
              style={{ height: mounted ? "80%" : "0%" }}
            >
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-inverse-surface text-inverse-on-surface text-xs px-2 py-1 rounded">
                6.5K
              </div>
            </div>
            <span className="text-[10px] text-primary font-bold">Fri</span>
          </div>
          {/* Sat */}
          <div className="flex flex-col items-center gap-2 w-full">
            <div
              className="w-full bg-surface-variant rounded-t-sm chart-bar relative group transition-all duration-300 ease-out delay-300"
              style={{ height: mounted ? "10%" : "0%" }}
            >
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-inverse-surface text-inverse-on-surface text-xs px-2 py-1 rounded">
                0 ETB
              </div>
            </div>
            <span className="text-[10px] text-on-surface-variant font-medium">Sat</span>
          </div>
          {/* Sun */}
          <div className="flex flex-col items-center gap-2 w-full">
            <div
              className="w-full bg-surface-variant rounded-t-sm chart-bar relative group transition-all duration-300 ease-out delay-[400ms]"
              style={{ height: mounted ? "10%" : "0%" }}
            >
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-inverse-surface text-inverse-on-surface text-xs px-2 py-1 rounded">
                0 ETB
              </div>
            </div>
            <span className="text-[10px] text-on-surface-variant font-medium">Sun</span>
          </div>
        </div>
      </section>

      {/* Bottom Section: Transactions */}
      <section className="mb-xl">
        <h3 className="text-headline-sm font-headline-sm text-on-surface mb-sm">{t("transactions")}</h3>
        {/* Filter Chips */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 mb-2">
          <button className="h-8 px-4 rounded-full bg-primary-container text-on-primary-container font-label-lg text-label-lg whitespace-nowrap border border-primary-container">
            {t("all")}
          </button>
          <button className="h-8 px-4 rounded-full bg-surface-container-lowest text-on-surface border border-surface-variant font-label-lg text-label-lg whitespace-nowrap">
            {t("online")}
          </button>
          <button className="h-8 px-4 rounded-full bg-surface-container-lowest text-on-surface border border-surface-variant font-label-lg text-label-lg whitespace-nowrap">
            {t("cash.at.gate")}
          </button>
          <button className="h-8 px-4 rounded-full bg-surface-container-lowest text-on-surface border border-surface-variant font-label-lg text-label-lg whitespace-nowrap">
            {t("refunds")}
          </button>
        </div>
        {/* Transaction List */}
        <div className="space-y-gutter">
          {/* Transaction Item 1 */}
          <div className="bg-surface-container-lowest rounded-xl border border-surface-variant p-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined text-sm">phone_iphone</span>
              </div>
              <div>
                <p className="font-label-lg text-label-lg text-on-surface">Kaleb G.</p>
                <p className="text-body-sm font-body-sm text-on-surface-variant">Oct 24 • Telebirr</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-label-lg text-label-lg text-on-surface">+500 ETB</p>
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-[#E6F4EA] text-[#1E8E3E]">
                {t("status.completed")}
              </span>
            </div>
          </div>
          {/* Transaction Item 2 */}
          <div className="bg-surface-container-lowest rounded-xl border border-surface-variant p-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">payments</span>
              </div>
              <div>
                <p className="font-label-lg text-label-lg text-on-surface">Dawit M.</p>
                <p className="text-body-sm font-body-sm text-on-surface-variant">Oct 24 • Cash</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-label-lg text-label-lg text-on-surface">+1,200 ETB</p>
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-[#E6F4EA] text-[#1E8E3E]">
                {t("status.completed")}
              </span>
            </div>
          </div>
          {/* Transaction Item 3 */}
          <div className="bg-surface-container-lowest rounded-xl border border-surface-variant p-md flex items-center justify-between opacity-70">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">account_balance</span>
              </div>
              <div>
                <p className="font-label-lg text-label-lg text-on-surface">Withdrawal</p>
                <p className="text-body-sm font-body-sm text-on-surface-variant">Oct 23 • Bank Transfer</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-label-lg text-label-lg text-on-surface">-5,000 ETB</p>
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-[#FEF7E0] text-[#B06000]">
                {t("status.pending")}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
