"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/context/AuthContext";

function VerifyContent() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(false);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone") || "91 X X X X X X";
  const { t, toggleLang, lang } = useLanguage();
  const { login } = useAuth();

  useEffect(() => {
    // Focus first input
    if (inputsRef.current[0]) {
      inputsRef.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    
    const newCode = [...code];
    newCode[index] = value.substring(value.length - 1); // take last char if multiple
    setCode(newCode);
    setError(false);

    // Auto advance
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }

    // Auto submit if complete
    if (value && index === 5 && newCode.every(d => d !== "")) {
      const fullCode = newCode.join("");
      const success = login(fullCode);
      if (success) {
        // Redirection handled by role
        if (fullCode === "111111") router.push("/player/home");
        else if (fullCode === "222222") router.push("/owner/today");
        else if (fullCode === "333333") router.push("/worker/select-field");
      } else {
        setError(true);
        setCode(["", "", "", "", "", ""]);
        inputsRef.current[0]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex-1 flex flex-col p-6 mt-12">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-primary">Meda</h1>
        <button onClick={toggleLang} className="font-semibold text-sm bg-surface-variant px-3 py-1 rounded-full">
          {lang === 'en' ? 'አማርኛ' : 'EN'}
        </button>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-2">{t("enter.code")}</h2>
        <p className="text-on-surface-variant">{t("code.sent")} {phone.length === 9 ? `91***${phone.slice(-3)}` : phone}</p>
      </div>

      <div className="space-y-6 flex-1">
        <div className="flex justify-between space-x-2">
          {code.map((digit, i) => (
            <input
              key={i}
              ref={el => { inputsRef.current[i] = el; }}
              type="tel"
              value={digit}
              onChange={e => handleChange(i, e.target.value)}
              onKeyDown={e => handleKeyDown(i, e)}
              className={`w-12 h-14 text-center text-2xl font-bold rounded-xl border-2 outline-none transition-colors ${
                error 
                  ? 'border-error bg-error-container/20 text-error' 
                  : digit 
                    ? 'border-primary bg-primary/5 text-primary' 
                    : 'border-surface-variant bg-surface-container focus:border-primary'
              }`}
            />
          ))}
        </div>
        
        {error && (
          <div className="text-error font-semibold text-sm text-center animate-in fade-in">
            {t("incorrect.code")}
          </div>
        )}

        <div className="text-center mt-8">
          <p className="text-on-surface-variant text-sm mb-2">00:30</p>
          <button className="text-primary font-semibold underline text-sm">
            {t("resend.code")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyContent />
    </Suspense>
  );
}
