"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

type StatusType = "upcoming" | "pending" | "checked-in" | "no-show" | "late" | "cancelled" | "confirmed";

export function StatusPill({ status, label }: { status: StatusType; label?: string }) {
  const { t } = useLanguage();
  let colorClass = "bg-surface-variant text-on-surface-variant";
  
  if (status === "confirmed" || status === "checked-in") {
    colorClass = "bg-primary-container text-on-primary-container";
  } else if (status === "pending" || status === "late") {
    colorClass = "bg-secondary-fixed text-on-secondary-fixed";
  } else if (status === "no-show" || status === "cancelled") {
    colorClass = "bg-error-container text-on-error-container";
  }

  const defaultLabel = t(`status.${status.replace('-', '.')}`);

  return (
    <span className={cn("px-2 py-1 text-[12px] font-semibold rounded-full whitespace-nowrap", colorClass)}>
      {label || defaultLabel || (status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' '))}
    </span>
  );
}
