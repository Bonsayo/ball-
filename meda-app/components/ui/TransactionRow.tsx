"use client";

import { formatETB, formatDate } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface Transaction {
  id: string;
  date: string;
  customerName: string;
  amount: number;
  method: 'telebirr' | 'cash' | 'bank';
  status: 'completed' | 'refunded';
}

export function TransactionRow({ tx }: { tx: Transaction }) {
  const { t } = useLanguage();
  const isRefund = tx.status === 'refunded';
  
  return (
    <div className="flex items-center justify-between py-3 border-b border-surface-variant last:border-0">
      <div className="flex items-center space-x-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.method === 'telebirr' ? 'bg-[#ff7a1b]/10 text-[#ff7a1b]' : 'bg-primary/10 text-primary'}`}>
          <span className="material-symbols-outlined">
            {tx.method === 'telebirr' ? 'phone_iphone' : tx.method === 'cash' ? 'payments' : 'account_balance'}
          </span>
        </div>
        <div>
          <div className="text-sm font-semibold text-on-surface">{tx.customerName}</div>
          <div className="text-xs text-on-surface-variant">{formatDate(tx.date)}</div>
        </div>
      </div>
      
      <div className="text-right">
        <div className={`text-sm font-bold ${isRefund ? 'text-error' : 'text-on-surface'}`}>
          {isRefund ? '-' : '+'}{formatETB(tx.amount)}
        </div>
        <div className="text-xs text-on-surface-variant capitalize">{t(`status.${tx.status}`)}</div>
      </div>
    </div>
  );
}
