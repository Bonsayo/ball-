import { cn, formatTime } from "@/lib/utils";

interface Props {
  slots: { time: string; available: boolean }[];
  selectedTime: string | null;
  onSelect: (time: string) => void;
}

export function SlotPicker({ slots, selectedTime, onSelect }: Props) {
  return (
    <div className="flex space-x-3 overflow-x-auto no-scrollbar pb-2 pt-1">
      {slots.map((slot) => {
        const isSelected = selectedTime === slot.time;
        const base = "px-4 py-2 rounded-full border flex-shrink-0 transition-colors text-sm font-semibold";
        let stateClasses = "border-outline-variant text-on-surface-variant bg-surface opacity-50 cursor-not-allowed";
        
        if (slot.available) {
          stateClasses = isSelected 
            ? "bg-primary text-on-primary border-primary"
            : "border-outline text-on-surface bg-surface hover:bg-surface-variant cursor-pointer";
        }

        return (
          <button
            key={slot.time}
            onClick={() => slot.available && onSelect(slot.time)}
            disabled={!slot.available}
            className={cn(base, stateClasses)}
          >
            {formatTime(slot.time)}
          </button>
        );
      })}
    </div>
  );
}
