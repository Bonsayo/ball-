"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function OwnerCalendarPage() {
  const { t } = useLanguage();
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [isBlockSheetOpen, setIsBlockSheetOpen] = useState(false);

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden pt-6">
      {/* Calendar Controls Header */}
      <div className="px-container-margin py-md bg-surface sticky top-0 z-30 border-b border-surface-container shrink-0">
        <div className="flex justify-between items-center mb-md">
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-low">
              <span className="material-symbols-outlined text-on-surface">chevron_left</span>
            </button>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">October 2024</h2>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-low">
              <span className="material-symbols-outlined text-on-surface">chevron_right</span>
            </button>
          </div>
          {/* Toggle View */}
          <div className="flex bg-surface-container-highest p-1 rounded-lg">
            <button className="px-3 py-1 bg-surface text-on-surface rounded shadow-sm font-label-lg text-label-lg transition-all">
              {t("week")}
            </button>
            <button className="px-3 py-1 text-on-surface-variant rounded hover:bg-surface-container-low transition-all font-label-lg text-label-lg">
              {t("month")}
            </button>
          </div>
        </div>
        {/* Legend Chips */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-outline-variant rounded-full shrink-0">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="font-body-sm text-body-sm text-on-surface">{t("status.paid")}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-outline-variant rounded-full shrink-0">
            <div className="w-3 h-3 rounded-full bg-secondary-container"></div>
            <span className="font-body-sm text-body-sm text-on-surface">{t("status.pending")}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-outline-variant rounded-full shrink-0">
            <div className="w-3 h-3 rounded-full bg-surface-container-highest border border-outline-variant"></div>
            <span className="font-body-sm text-body-sm text-on-surface">{t("status.blocked")}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-outline-variant rounded-full shrink-0">
            <div className="w-3 h-3 rounded-full bg-surface border border-outline-variant"></div>
            <span className="font-body-sm text-body-sm text-on-surface">{t("status.available")}</span>
          </div>
        </div>
      </div>

      {/* Main Calendar Grid Area */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Time Column */}
        <div className="w-16 flex flex-col shrink-0 border-r border-surface-container bg-surface relative z-20 overflow-y-auto no-scrollbar">
          <div className="h-12 border-b border-surface-container shrink-0"></div> {/* Empty corner */}
          {/* Hours */}
          <div className="h-[60px] relative shrink-0"><span className="absolute -top-3 right-2 text-xs text-on-surface-variant">6 AM</span></div>
          <div className="h-[60px] relative shrink-0"><span className="absolute -top-3 right-2 text-xs text-on-surface-variant">7 AM</span></div>
          <div className="h-[60px] relative shrink-0"><span className="absolute -top-3 right-2 text-xs text-on-surface-variant">8 AM</span></div>
          <div className="h-[60px] relative shrink-0"><span className="absolute -top-3 right-2 text-xs text-on-surface-variant">9 AM</span></div>
          <div className="h-[60px] relative shrink-0"><span className="absolute -top-3 right-2 text-xs text-on-surface-variant">10 AM</span></div>
          <div className="h-[60px] relative shrink-0"><span className="absolute -top-3 right-2 text-xs text-on-surface-variant">11 AM</span></div>
          <div className="h-[60px] relative shrink-0"><span className="absolute -top-3 right-2 text-xs text-on-surface-variant">12 PM</span></div>
          <div className="h-[60px] relative shrink-0"><span className="absolute -top-3 right-2 text-xs text-on-surface-variant">1 PM</span></div>
          <div className="h-[60px] relative shrink-0"><span className="absolute -top-3 right-2 text-xs text-on-surface-variant">2 PM</span></div>
          <div className="h-[60px] relative shrink-0"><span className="absolute -top-3 right-2 text-xs text-on-surface-variant">3 PM</span></div>
          <div className="h-[60px] relative shrink-0"><span className="absolute -top-3 right-2 text-xs text-on-surface-variant">4 PM</span></div>
          <div className="h-[60px] relative shrink-0"><span className="absolute -top-3 right-2 text-xs text-on-surface-variant">5 PM</span></div>
          <div className="h-[60px] relative shrink-0"><span className="absolute -top-3 right-2 text-xs text-on-surface-variant">6 PM</span></div>
        </div>

        {/* Days Scrollable Area */}
        <div className="flex-1 overflow-auto">
          <div className="min-w-[500px]">
            {/* Days Header */}
            <div className="flex border-b border-surface-container sticky top-0 bg-surface z-10">
              <div className="flex-1 h-12 flex flex-col items-center justify-center border-r border-surface-container">
                <span className="text-[10px] text-on-surface-variant uppercase">Mon</span>
                <span className="font-label-lg text-label-lg text-on-surface">14</span>
              </div>
              <div className="flex-1 h-12 flex flex-col items-center justify-center border-r border-surface-container">
                <span className="text-[10px] text-on-surface-variant uppercase">Tue</span>
                <span className="font-label-lg text-label-lg text-on-surface">15</span>
              </div>
              <div className="flex-1 h-12 flex flex-col items-center justify-center border-r border-surface-container bg-primary-container text-on-primary-container rounded-t-sm">
                <span className="text-[10px] uppercase">Wed</span>
                <span className="font-label-lg text-label-lg">16</span>
              </div>
              <div className="flex-1 h-12 flex flex-col items-center justify-center border-r border-surface-container">
                <span className="text-[10px] text-on-surface-variant uppercase">Thu</span>
                <span className="font-label-lg text-label-lg text-on-surface">17</span>
              </div>
              <div className="flex-1 h-12 flex flex-col items-center justify-center border-r border-surface-container">
                <span className="text-[10px] text-on-surface-variant uppercase">Fri</span>
                <span className="font-label-lg text-label-lg text-on-surface">18</span>
              </div>
              <div className="flex-1 h-12 flex flex-col items-center justify-center border-r border-surface-container">
                <span className="text-[10px] text-on-surface-variant uppercase">Sat</span>
                <span className="font-label-lg text-label-lg text-on-surface">19</span>
              </div>
              <div className="flex-1 h-12 flex flex-col items-center justify-center border-r border-surface-container">
                <span className="text-[10px] text-on-surface-variant uppercase">Sun</span>
                <span className="font-label-lg text-label-lg text-on-surface">20</span>
              </div>
            </div>
            
            {/* Grid Cells Area */}
            <div 
              className="relative h-[780px] flex" 
              style={{
                backgroundImage: 'linear-gradient(to right, #E5E5E0 1px, transparent 1px), linear-gradient(to bottom, #E5E5E0 1px, transparent 1px)',
                backgroundSize: '100% 60px'
              }}
            >
              {/* Vertical dividers for days */}
              <div className="flex-1 border-r border-surface-container relative"></div>
              <div className="flex-1 border-r border-surface-container relative">
                {/* Blocked Event (Gray) */}
                <div 
                  className="absolute top-[60px] left-1 right-1 h-[60px] bg-surface-container-highest border border-outline-variant rounded-md p-1 shadow-sm opacity-80 cursor-pointer hover:opacity-100"
                  onClick={() => setIsBlockSheetOpen(true)}
                >
                  <span className="text-[10px] font-label-lg text-on-surface block truncate">Maintenance</span>
                </div>
              </div>
              <div className="flex-1 border-r border-surface-container relative bg-primary-container/10"> 
                {/* Active day background tint */}
                {/* Paid Event (Green) */}
                <div 
                  className="absolute top-[180px] left-1 right-1 h-[120px] bg-primary text-on-primary rounded-md p-1.5 shadow-sm cursor-pointer active:scale-95 transition-transform"
                  onClick={() => setSelectedEvent("Abebe's Team")}
                >
                  <span className="text-xs font-label-lg block truncate">Abebe&apos;s Team</span>
                  <span className="text-[10px] block mt-0.5 truncate">ETB 1,500</span>
                  <span className="text-[10px] block mt-auto absolute bottom-1">9:00 - 11:00</span>
                </div>
                {/* Pending Event (Orange) */}
                <div 
                  className="absolute top-[420px] left-1 right-1 h-[60px] bg-secondary-container text-on-secondary rounded-md p-1 shadow-sm cursor-pointer active:scale-95 transition-transform"
                  onClick={() => setSelectedEvent("Ethio Lions")}
                >
                  <span className="text-[10px] font-label-lg block truncate">Ethio Lions</span>
                  <span className="text-[9px] block">Pending</span>
                </div>
              </div>
              <div className="flex-1 border-r border-surface-container relative"></div>
              <div className="flex-1 border-r border-surface-container relative">
                {/* Paid Event (Green) */}
                <div 
                  className="absolute top-[300px] left-1 right-1 h-[60px] bg-primary text-on-primary rounded-md p-1 shadow-sm cursor-pointer active:scale-95 transition-transform"
                  onClick={() => setSelectedEvent("Tigist FC")}
                >
                  <span className="text-[10px] font-label-lg block truncate">Tigist FC</span>
                </div>
              </div>
              <div className="flex-1 border-r border-surface-container relative"></div>
              <div className="flex-1 border-r border-surface-container relative"></div>
              
              {/* Empty Cell Click Overlay Grid */}
              <div className="absolute inset-0 grid grid-cols-7 grid-rows-13 z-0" style={{ pointerEvents: 'none' }}>
                <div className="col-start-1 row-start-1 h-[60px] w-full" onClick={() => setIsBlockSheetOpen(true)} style={{ pointerEvents: 'auto' }}></div>
                <div className="col-start-4 row-start-2 h-[60px] w-full" onClick={() => setIsBlockSheetOpen(true)} style={{ pointerEvents: 'auto' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Sheet: Booking Details */}
      <div 
        className={`fixed inset-0 z-[100] flex flex-col justify-end transition-transform duration-300 ease-out ${selectedEvent ? 'translate-y-0' : 'translate-y-full'}`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm" 
          onClick={() => setSelectedEvent(null)}
        ></div>
        {/* Sheet Content */}
        <div className="bg-surface w-full rounded-t-xl pt-2 pb-8 px-container-margin relative z-10 shadow-[0_-8px_24px_rgba(0,0,0,0.1)]">
          {/* Drag Handle */}
          <div className="w-12 h-1.5 bg-surface-variant rounded-full mx-auto mb-4"></div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">{selectedEvent}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-sm">schedule</span> Wed, Oct 16 • 9:00 AM - 11:00 AM
              </p>
            </div>
            <div className="px-3 py-1 bg-primary/10 text-primary rounded-full font-label-lg text-label-lg text-sm border border-primary/20">
              Paid
            </div>
          </div>
          <div className="bg-surface-container-low rounded-xl p-4 mb-6 border border-surface-container-high">
            <div className="flex justify-between mb-2">
              <span className="font-body-sm text-body-sm text-on-surface-variant">{t("amount")}</span>
              <span className="font-label-lg text-label-lg text-on-surface">ETB 1,500</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-body-sm text-body-sm text-on-surface-variant">{t("phone")}</span>
              <span className="font-label-lg text-label-lg text-on-surface">+251 911 234 567</span>
            </div>
            <div className="flex justify-between">
              <span className="font-body-sm text-body-sm text-on-surface-variant">{t("booking.id")}</span>
              <span className="font-label-lg text-label-lg text-on-surface">#FB-8842</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button 
              className="flex-1 py-3 border border-outline text-on-surface rounded-xl font-label-lg text-label-lg text-center hover:bg-surface-container-low transition-colors" 
              onClick={() => setSelectedEvent(null)}
            >
              {t("close")}
            </button>
            <button className="flex-1 py-3 bg-primary text-on-primary rounded-xl font-label-lg text-label-lg text-center hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">call</span> {t("call.user")}
            </button>
          </div>
        </div>
      </div>

      {/* Action Sheet: Block Slot */}
      <div 
        className={`fixed inset-0 z-[100] flex flex-col justify-end transition-transform duration-300 ease-out ${isBlockSheetOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm" 
          onClick={() => setIsBlockSheetOpen(false)}
        ></div>
        {/* Sheet Content */}
        <div className="bg-surface w-full rounded-t-xl pt-2 pb-8 px-container-margin relative z-10 shadow-[0_-8px_24px_rgba(0,0,0,0.1)]">
          {/* Drag Handle */}
          <div className="w-12 h-1.5 bg-surface-variant rounded-full mx-auto mb-4"></div>
          <div className="mb-6 text-center">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mx-auto mb-3">
              <span className="material-symbols-outlined text-tertiary-container">block</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{t("available.slot")}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{t("block.slot.prompt")}</p>
          </div>
          <div className="flex flex-col gap-3">
            <button 
              className="w-full py-3 bg-surface-container-highest text-on-surface rounded-xl font-label-lg text-label-lg text-center hover:bg-surface-dim transition-colors" 
              onClick={() => setIsBlockSheetOpen(false)}
            >
              {t("block.this.slot")}
            </button>
            <button 
              className="w-full py-3 border border-outline text-on-surface rounded-xl font-label-lg text-label-lg text-center hover:bg-surface-container-low transition-colors" 
              onClick={() => setIsBlockSheetOpen(false)}
            >
              {t("cancel")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
