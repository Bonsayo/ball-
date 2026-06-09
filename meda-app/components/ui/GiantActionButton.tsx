import { cn } from "@/lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  label: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

export function GiantActionButton({ icon, label, variant = "primary", className, ...props }: Props) {
  const baseClasses = "flex items-center justify-center space-x-3 w-full h-[80px] rounded-[12px] text-lg font-bold transition-transform active:scale-[0.98]";
  
  let variantClasses = "";
  if (variant === "primary") {
    variantClasses = "bg-primary-container text-on-primary-container";
  } else if (variant === "secondary") {
    variantClasses = "bg-secondary-container text-on-secondary-container";
  } else if (variant === "outline") {
    variantClasses = "border-2 border-secondary-container text-on-surface bg-transparent";
  } else if (variant === "ghost") {
    variantClasses = "bg-surface-variant text-on-surface-variant";
  }

  return (
    <button className={cn(baseClasses, variantClasses, className)} {...props}>
      <span className="material-symbols-outlined text-3xl">{icon}</span>
      <span>{label}</span>
    </button>
  );
}
