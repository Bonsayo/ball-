"use client";

import { Worker } from "@/lib/mock-data";
import { formatPhone } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export function WorkerCard({ worker, stats }: { worker: Worker; stats: string }) {
  const { t } = useLanguage();
  const initials = worker.name.substring(0, 2).toUpperCase();
  
  let roleColor = "bg-surface-variant text-on-surface-variant";
  if (worker.role === "manager") roleColor = "bg-primary-container text-on-primary-container";
  else if (worker.role === "gatekeeper") roleColor = "bg-secondary-container text-on-secondary-container";

  return (
    <div className="bg-white p-4 rounded-xl border border-surface-variant shadow-sm flex items-start gap-4">
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-lg font-bold">
          {initials}
        </div>
        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${worker.onDuty ? 'bg-green-500' : 'bg-gray-400'}`} />
      </div>
      
      <div className="min-w-0 flex-1">
        <div className="flex justify-between items-start gap-2 mb-1">
          <div className="min-w-0 truncate font-bold text-on-surface text-base">{worker.name}</div>
          <span className={`flex-shrink-0 px-2 py-0.5 text-[10px] uppercase font-bold rounded-full ${roleColor}`}>
            {t(`role.${worker.role}`)}
          </span>
        </div>
        
        <div className="flex min-w-0 items-center text-sm text-on-surface-variant mb-2">
          <span className="material-symbols-outlined text-[16px] mr-1">call</span>
          {formatPhone(worker.phone)}
        </div>
        
        <div className="max-w-full truncate text-xs font-medium text-on-surface bg-surface-container-low px-2 py-1 rounded-md inline-block">
          {stats}
        </div>
      </div>
    </div>
  );
}
