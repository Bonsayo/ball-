export function KPICard({ title, value, icon, trend }: { title: string; value: string; icon: string; trend?: "up" | "down" }) {
  return (
    <div className="bg-white p-3 rounded-xl shadow-sm border border-surface-variant flex-1 min-w-0">
      <div className="flex min-w-0 items-center gap-2 text-on-surface-variant mb-1">
        <span className="material-symbols-outlined text-[18px] flex-shrink-0">{icon}</span>
        <span className="text-[12px] font-medium truncate">{title}</span>
      </div>
      <div className="flex items-end justify-between gap-2">
        <div className="min-w-0 truncate text-lg font-bold text-on-surface">{value}</div>
        {trend && (
          <span className={`material-symbols-outlined text-[16px] ${trend === 'up' ? 'text-primary' : 'text-error'}`}>
            {trend === 'up' ? 'trending_up' : 'trending_down'}
          </span>
        )}
      </div>
    </div>
  );
}
