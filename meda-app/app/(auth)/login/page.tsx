"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Logo } from "@/components/ui/Logo";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const { t, toggleLang, lang } = useLanguage();

  const handleSendCode = () => {
    if (phone.length === 9) {
      router.push(`/verify?phone=${phone}`);
    }
  };

  return (
    <div className="flex-1 flex flex-col p-6 mt-12">
      <div className="flex justify-between items-center mb-12">
        <Logo className="w-32 h-auto" />
        <button onClick={toggleLang} className="font-semibold text-sm bg-surface-variant px-3 py-1 rounded-full">
          {lang === 'en' ? 'አማርኛ' : 'EN'}
        </button>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-2">{t("welcome.back")}</h2>
        <p className="text-on-surface-variant">{t("sign.in.continue")}</p>
      </div>

      <div className="space-y-6 flex-1">
        <div>
          <label className="block text-sm font-semibold mb-2">Phone number</label>
          <div className="flex border-2 border-surface-variant rounded-xl overflow-hidden focus-within:border-primary transition-colors">
            <div className="bg-surface-container px-4 py-4 font-bold border-r-2 border-surface-variant flex items-center justify-center">
              +251
            </div>
            <input 
              type="tel" 
              value={phone}
              onChange={e => setPhone(e.target.value.replace(/\D/g, '').substring(0, 9))}
              className="w-full bg-surface-container p-4 outline-none font-semibold text-lg"
              placeholder="91 234 5678"
            />
          </div>
        </div>
      </div>

      <button 
        className="w-full bg-primary-container text-on-primary-container font-bold text-lg py-4 rounded-xl mt-auto mb-8 disabled:opacity-50 transition-transform active:scale-[0.98]"
        disabled={phone.length < 9}
        onClick={handleSendCode}
      >
        {t("send.code")}
      </button>
    </div>
  );
}
