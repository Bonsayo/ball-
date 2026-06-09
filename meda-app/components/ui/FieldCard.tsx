import { Field } from "@/lib/mock-data";
import { formatETB } from "@/lib/utils";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  field: Field;
  availableNow?: boolean;
}

export function FieldCard({ field, availableNow }: Props) {
  const { t } = useLanguage();

  return (
    <Link href={`/player/field/${field.id}`} className="block min-w-0">
      <div className="bg-white rounded-xl overflow-hidden border border-surface-variant shadow-sm transition-transform active:scale-[0.98]">
        <div className="h-[140px] bg-surface-container relative">
          {/* Mock image - would use next/image in prod */}
          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center px-3 text-center text-primary font-bold">
            {t("field.photo")}
          </div>
          {availableNow && (
            <div className="absolute top-3 right-3 max-w-[calc(100%-24px)] bg-white px-2 py-1 rounded-full text-[10px] font-bold flex items-center shadow-sm">
              <div className="w-2 h-2 flex-shrink-0 bg-green-500 rounded-full mr-1 animate-pulse" />
              <span className="truncate">{t("available.now")}</span>
            </div>
          )}
        </div>
        
        <div className="p-3">
          <div className="flex justify-between items-start gap-2 mb-1">
            <h3 className="min-w-0 flex-1 truncate font-bold text-base text-on-surface">{field.name}</h3>
            <div className="flex flex-shrink-0 items-center text-sm font-bold text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded-md">
              <span className="material-symbols-outlined text-[14px] text-secondary mr-0.5 flex-shrink-0" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              {field.rating}
            </div>
          </div>
          
          <div className="flex min-w-0 items-center text-xs text-on-surface-variant mb-2">
            <span className="material-symbols-outlined text-[14px] mr-1">location_on</span>
            {field.area}
          </div>
          
          <div className="flex justify-between items-end gap-3 mt-2 pt-2 border-t border-surface-variant">
            <div className="min-w-0 truncate text-sm font-semibold text-on-surface">
              {t(field.size)} / {t(field.turf.split(' ')[0])}
            </div>
            <div className="flex-shrink-0 text-right">
              <div className="text-xs text-on-surface-variant">{t("from")}</div>
              <div className="whitespace-nowrap font-bold text-primary">{formatETB(field.priceOffPeak)} {t("etb.hr")}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
