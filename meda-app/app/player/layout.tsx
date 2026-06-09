"use client";

import { usePathname } from "next/navigation";
import { BottomNav } from "@/components/ui/BottomNav";

const playerNavItems = [
  { label: "find.field", href: "/player/home", icon: "search" },
  { label: "my.bookings", href: "/player/bookings", icon: "event_note" },
  { label: "wallet", href: "/player/wallet", icon: "account_balance_wallet" }, // Wallet wasn't listed with a page, but it's in nav
  { label: "profile", href: "/player/profile", icon: "person" },
];

export default function PlayerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showNav = !pathname.includes("/onboarding") && !pathname.includes("/success") && !pathname.includes("/confirm") && !pathname.includes("/field/");

  return (
    <div className="flex flex-col min-h-screen pb-[80px]">
      <div className="flex-1 flex flex-col">
        {children}
      </div>
      {showNav && <BottomNav items={playerNavItems} />}
    </div>
  );
}
