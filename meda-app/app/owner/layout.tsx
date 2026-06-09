"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { useLanguage } from "@/context/LanguageContext";

export default function OwnerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <div className="bg-background text-on-background font-body-lg min-h-screen flex flex-col antialiased">
      {/* Top App Bar */}
      <header className="w-full top-0 sticky bg-background dark:bg-on-tertiary-fixed border-b border-outline-variant z-40">
        <div className="flex justify-between items-center px-container-margin py-sm w-full">
          <div className="flex items-center gap-md">
            <Logo className="w-16 h-auto" />
          </div>
          <button className="p-2 rounded-full hover:bg-surface-container-low transition-colors active:scale-95 duration-150 text-on-surface-variant">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
        {/* Heritage Accent */}
        <div className="w-full h-1 flex">
          <div className="flex-1 bg-error"></div>
          <div className="flex-1 bg-[#FCE300]"></div>
          <div className="flex-1 bg-primary"></div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto pb-[100px] md:pb-lg md:flex md:flex-row">
        {/* Web Side Nav (Hidden on Mobile) */}
        <aside className="hidden md:flex h-full w-80 rounded-r-xl bg-surface dark:bg-surface-container-lowest shadow-md flex-col py-lg border-r border-surface-container-low fixed left-0 top-[65px] z-30">
          <div className="px-lg mb-xl">
            <div className="flex items-center gap-md">
              <Logo className="w-16 h-auto" />
              <div>
                <h2 className="font-label-lg text-label-lg text-primary">Abebe Balcha</h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{t("stadium.manager")}</p>
                <span className="text-xs text-secondary-container font-semibold">{t("premium.partner")}</span>
              </div>
            </div>
          </div>
          <nav className="flex flex-col gap-sm px-sm">
            <Link
              href="/owner/today"
              className={`flex items-center gap-md rounded-full mx-2 px-4 py-3 transition-colors ${
                pathname.includes("/owner/today")
                  ? "bg-primary-container text-on-primary-container font-bold"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              <span className="material-symbols-outlined">today</span>
              <span className="font-label-lg text-label-lg">{t("nav.today")}</span>
            </Link>
            <Link
              href="/owner/calendar"
              className={`flex items-center gap-md rounded-full mx-2 px-4 py-3 transition-colors ${
                pathname.includes("/owner/calendar")
                  ? "bg-primary-container text-on-primary-container font-bold"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              <span className="material-symbols-outlined">calendar_month</span>
              <span className="font-label-lg text-label-lg">{t("nav.calendar")}</span>
            </Link>
            <Link
              href="/owner/money"
              className={`flex items-center gap-md rounded-full mx-2 px-4 py-3 transition-colors ${
                pathname.includes("/owner/money")
                  ? "bg-primary-container text-on-primary-container font-bold"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              <span className="material-symbols-outlined">payments</span>
              <span className="font-label-lg text-label-lg">{t("nav.money")}</span>
            </Link>
            <Link
              href="/owner/team"
              className={`flex items-center gap-md rounded-full mx-2 px-4 py-3 transition-colors ${
                pathname.includes("/owner/team")
                  ? "bg-primary-container text-on-primary-container font-bold"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              <span className="material-symbols-outlined">group</span>
              <span className="font-label-lg text-label-lg">{t("nav.team")}</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="w-full md:ml-80">
          {children}
        </div>
      </div>

      {/* Floating Action Button (FAB) */}
      <button className="fixed bottom-[100px] md:bottom-lg right-container-margin md:right-lg z-40 bg-secondary-container text-[#FFFFFF] shadow-lg hover:shadow-xl transition-all rounded-2xl p-4 flex items-center gap-sm active:scale-95">
        <span className="material-symbols-outlined">add</span>
        <span className="font-label-lg font-bold pr-2">{t("add.walk.in")}</span>
      </button>

      {/* Bottom Nav Bar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 rounded-t-xl bg-surface dark:bg-surface-container-highest border-t border-outline-variant shadow-lg">
        <div className="flex justify-around items-center w-full px-md pb-safe h-20 pt-2">
          <Link
            href="/owner/today"
            className={`flex flex-col items-center justify-center p-2 min-w-[64px] rounded-xl transition-all ${
              pathname.includes("/owner/today")
                ? "bg-primary-container text-on-primary-container"
                : "text-on-surface-variant hover:bg-surface-container"
            }`}
          >
            <span className="material-symbols-outlined mb-1">sports_soccer</span>
            <span className="font-label-lg text-[10px] leading-tight">{t("nav.today")}</span>
          </Link>
          <Link
            href="/owner/calendar"
            className={`flex flex-col items-center justify-center p-2 min-w-[64px] rounded-xl transition-all ${
              pathname.includes("/owner/calendar")
                ? "bg-primary-container text-on-primary-container"
                : "text-on-surface-variant hover:bg-surface-container"
            }`}
          >
            <span className="material-symbols-outlined mb-1">stadium</span>
            <span className="font-label-lg text-[10px] leading-tight">{t("nav.calendar")}</span>
          </Link>
          <Link
            href="/owner/money"
            className={`flex flex-col items-center justify-center p-2 min-w-[64px] rounded-xl transition-all ${
              pathname.includes("/owner/money")
                ? "bg-primary-container text-on-primary-container"
                : "text-on-surface-variant hover:bg-surface-container"
            }`}
          >
            <span className="material-symbols-outlined mb-1">leaderboard</span>
            <span className="font-label-lg text-[10px] leading-tight">{t("nav.money")}</span>
          </Link>
          <Link
            href="/owner/team"
            className={`flex flex-col items-center justify-center p-2 min-w-[64px] rounded-xl transition-all ${
              pathname.includes("/owner/team")
                ? "bg-primary-container text-on-primary-container"
                : "text-on-surface-variant hover:bg-surface-container"
            }`}
          >
            <span className="material-symbols-outlined mb-1">group</span>
            <span className="font-label-lg text-[10px] leading-tight">{t("nav.team")}</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
