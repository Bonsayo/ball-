"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSend: (name: string, phone: string, role: string) => void;
}

export function InviteWorkerModal({ isOpen, onClose, onSend }: Props) {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("gatekeeper");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex flex-col justify-end">
      <div className="bg-surface w-full max-w-[430px] mx-auto rounded-t-3xl p-6 pb-safe animate-in slide-in-from-bottom">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">{t("invite.worker")}</h2>
          <button onClick={onClose} className="p-2 -mr-2 text-on-surface-variant">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">{t("name")}</label>
            <input 
              type="text" 
              value={name} 
              onChange={e => setName(e.target.value)}
              className="w-full bg-surface-container p-3 rounded-xl border border-surface-variant focus:border-primary outline-none"
              placeholder="Abebe Kebede"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-1">{t("phone")}</label>
            <div className="flex border border-surface-variant rounded-xl overflow-hidden focus-within:border-primary">
              <div className="bg-surface-container px-3 py-3 font-semibold border-r border-surface-variant">
                +251
              </div>
              <input 
                type="tel" 
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="w-full bg-surface-container p-3 outline-none"
                placeholder="91 234 5678"
                maxLength={9}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-2">{t("role")}</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "manager", label: t("role.manager"), desc: t("full.access") },
                { id: "gatekeeper", label: t("role.gatekeeper"), desc: t("check.in.only") },
                { id: "cashier", label: t("role.cashier"), desc: t("payments.only") }
              ].map(r => (
                <button
                  key={r.id}
                  onClick={() => setRole(r.id)}
                  className={cn(
                    "p-3 rounded-xl text-left border-2 transition-colors",
                    role === r.id ? "border-primary bg-primary/5" : "border-surface-variant bg-surface"
                  )}
                >
                  <div className="font-bold text-sm">{r.label}</div>
                  <div className="text-xs text-on-surface-variant">{r.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <button 
          className="w-full bg-primary-container text-on-primary-container font-bold text-lg py-4 rounded-xl mt-8 mb-4 disabled:opacity-50"
          disabled={!name || phone.length < 9}
          onClick={() => {
            onSend(name, phone, role);
            onClose();
          }}
        >
          {t("send.invite")}
        </button>
      </div>
    </div>
  );
}
