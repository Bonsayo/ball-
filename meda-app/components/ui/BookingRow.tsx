"use client";

import { Booking } from "@/lib/mock-data";
import { formatTime, formatETB, formatPhone } from "@/lib/utils";
import { StatusPill } from "./StatusPill";
import { useLanguage } from "@/context/LanguageContext";

export function BookingRow({ booking, onClick }: { booking: Booking; onClick?: () => void }) {
  const { t } = useLanguage();
  return (
    <div 
      className="bg-white p-3 rounded-xl border border-surface-variant shadow-sm flex items-center gap-3 active:bg-surface-container-low transition-colors"
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center w-[60px] flex-shrink-0 border-r border-surface-variant pr-2">
        <span className="text-sm font-bold text-on-surface">{formatTime(booking.startTime).replace(/(AM|PM)/, '').trim()}</span>
        <span className="text-[10px] text-on-surface-variant uppercase">{booking.startTime >= '12:00' ? 'PM' : 'AM'}</span>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2 mb-1">
          <div className="min-w-0 truncate font-semibold text-sm text-on-surface">
            {booking.customerName || t("walk.in")}
          </div>
          <div className="flex-shrink-0 whitespace-nowrap text-sm font-bold text-on-surface">
            {formatETB(booking.amount)}
          </div>
        </div>
        
        <div className="flex justify-between items-center gap-2">
          <div className="flex min-w-0 items-center text-xs text-on-surface-variant">
            {booking.customerPhone && (
              <>
                <span className="material-symbols-outlined text-[14px] mr-1">call</span>
                {formatPhone(booking.customerPhone)}
              </>
            )}
          </div>
          <StatusPill status={booking.status} />
        </div>
      </div>
    </div>
  );
}
