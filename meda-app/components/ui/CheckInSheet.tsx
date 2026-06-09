"use client";

import { Booking } from "@/lib/mock-data";
import { formatTime, formatPhone } from "@/lib/utils";
import { StatusPill } from "./StatusPill";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  booking: Booking | null;
  onClose: () => void;
  onAction: (action: 'check-in' | 'no-show' | 'late' | 'extend') => void;
}

export function CheckInSheet({ booking, onClose, onAction }: Props) {
  const { t } = useLanguage();
  if (!booking) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex flex-col justify-end">
      <div className="bg-surface w-full max-w-[430px] mx-auto rounded-t-3xl p-6 pb-safe animate-in slide-in-from-bottom">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="text-xl font-bold mb-1">{booking.customerName || t("walk.in")}</div>
            <div className="flex items-center text-sm font-medium text-on-surface-variant">
              {formatTime(booking.startTime)} - {formatTime(booking.endTime)}
              <span className="mx-2">•</span>
              <StatusPill status={booking.status} />
            </div>
          </div>
          <button onClick={onClose} className="p-2 -mr-2 bg-surface-variant rounded-full">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {booking.customerPhone && (
          <button className="w-full flex items-center justify-center space-x-2 border-2 border-surface-variant p-4 rounded-xl mb-6 text-on-surface font-bold text-lg active:bg-surface-variant">
            <span className="material-symbols-outlined text-primary">call</span>
            <span>{t("call")} {formatPhone(booking.customerPhone)}</span>
          </button>
        )}

        <div className="space-y-3">
          <button 
            className="w-full bg-primary-container text-on-primary-container font-bold text-lg py-4 rounded-xl flex items-center justify-center space-x-2"
            onClick={() => onAction('check-in')}
          >
            <span className="material-symbols-outlined">how_to_reg</span>
            <span>{t("check.in.now")}</span>
          </button>
          
          <button 
            className="w-full bg-error-container text-on-error-container font-bold text-lg py-4 rounded-xl flex items-center justify-center space-x-2"
            onClick={() => onAction('no-show')}
          >
            <span className="material-symbols-outlined">person_cancel</span>
            <span>{t("mark.no.show")}</span>
          </button>
          
          <div className="flex space-x-3">
            <button 
              className="flex-1 bg-secondary-fixed text-on-secondary-fixed font-bold py-3 rounded-xl flex items-center justify-center space-x-1"
              onClick={() => onAction('late')}
            >
              <span className="material-symbols-outlined text-[20px]">schedule</span>
              <span>{t("running.late")}</span>
            </button>
            <button 
              className="flex-1 border-2 border-surface-variant text-on-surface font-bold py-3 rounded-xl flex items-center justify-center space-x-1"
              onClick={() => onAction('extend')}
            >
              <span className="material-symbols-outlined text-[20px]">more_time</span>
              <span>{t("extend")}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
