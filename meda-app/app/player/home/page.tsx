"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { mockFields } from "@/lib/mock-data";
import { FieldCard } from "@/components/ui/FieldCard";
import { Logo } from "@/components/ui/Logo";

export default function PlayerHomePage() {
  const { t, toggleLang, lang } = useLanguage();
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Available now");

  const filters = [
    { key: "filter.available.now", val: "Available now" },
    { key: "filter.tonight", val: "Tonight" },
    { key: "filter.under.500", val: "Under 500 ETB" },
    { key: "filter.has.lights", val: "Has lights" },
    { key: "filter.near.me", val: "Near me" }
  ];

  const filteredFields = mockFields.filter(f => 
    f.name.toLowerCase().includes(search.toLowerCase()) || 
    f.area.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 pb-24">
      <div className="flex justify-between items-center mb-6 mt-2">
        <div className="flex items-center gap-3">
          <Logo className="w-14 h-auto" />
          <h1 className="text-2xl font-bold text-primary">
            {lang === 'am' ? 'ሜዳ ፈልግ' : 'Find a Field'}
          </h1>
        </div>
        <button onClick={toggleLang} className="font-semibold text-sm bg-surface-variant px-3 py-1 rounded-full">
          {lang === 'en' ? 'አማርኛ' : 'EN'}
        </button>
      </div>

      <div className="mb-6 relative">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
        <input 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("search.placeholder")}
          className="w-full bg-surface-container py-3 pl-10 pr-4 rounded-xl border border-surface-variant focus:border-primary outline-none text-sm font-medium"
        />
      </div>

      <div className="flex space-x-2 overflow-x-auto no-scrollbar mb-8 pb-1">
        {filters.map(filter => (
          <button
            key={filter.val}
            onClick={() => setActiveFilter(filter.val)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeFilter === filter.val 
                ? 'bg-primary text-on-primary' 
                : 'bg-surface-container text-on-surface-variant border border-surface-variant'
            }`}
          >
            {t(filter.key)}
          </button>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">{t("available.now")}</h2>
        <div className="flex space-x-4 overflow-x-auto no-scrollbar pb-2">
          {filteredFields.slice(0, 3).map(field => (
            <div key={field.id} className="w-[280px] flex-shrink-0">
              <FieldCard field={field} availableNow />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">{t("tonight")}</h2>
        <div className="flex flex-col space-y-4">
          {filteredFields.slice(0, 4).map(field => (
            <FieldCard key={field.id} field={field} />
          ))}
        </div>
      </div>
    </div>
  );
}
