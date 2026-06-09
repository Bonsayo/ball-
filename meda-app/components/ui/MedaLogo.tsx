import Image from "next/image";
import { cn } from "@/lib/utils";

type MedaLogoVariant = "hero" | "header" | "mark";

interface MedaLogoProps {
  variant?: MedaLogoVariant;
  className?: string;
}

const variantClasses: Record<MedaLogoVariant, string> = {
  hero: "h-28 w-28",
  header: "h-12 w-12",
  mark: "h-9 w-9",
};

export function MedaLogo({ variant = "header", className }: MedaLogoProps) {
  const isHero = variant === "hero";

  return (
    <div
      className={cn(
        "relative flex flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-primary/10",
        isHero && "shadow-lg ring-8 ring-primary/5",
        variantClasses[variant],
        className
      )}
    >
      <Image
        src="/meda-logo.png"
        alt="Meda logo"
        fill
        priority={isHero}
        sizes={isHero ? "112px" : "48px"}
        className="object-contain p-1.5"
      />
    </div>
  );
}
