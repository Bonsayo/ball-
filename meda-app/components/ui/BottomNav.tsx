"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export function BottomNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto w-full max-w-[430px] bg-surface-container-lowest border-t border-surface-variant pb-safe z-50">
      <div className="grid grid-cols-4 items-center h-[64px]">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-w-0 flex-col items-center justify-center w-full h-full gap-1 px-1 relative",
                isActive ? "text-primary" : "text-on-surface-variant"
              )}
            >
              <div
                className={cn(
                  "h-8 min-w-12 px-3 rounded-full flex items-center justify-center transition-colors",
                  isActive ? "bg-primary-container/20" : "bg-transparent"
                )}
              >
                <span className={cn("material-symbols-outlined", isActive ? "font-semibold" : "font-normal")}>
                  {item.icon}
                </span>
              </div>
              <span className="block w-full truncate text-center text-[11px] font-medium leading-tight">
                {t(item.label)}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
