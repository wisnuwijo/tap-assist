import { ReactNode } from 'react';

export interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  iconColor?: string;
  iconBgColor?: string;
  badge?: {
    text: string;
    color: string;
    bgColor: string;
  };
}

export default function StatCard({
  title,
  value,
  icon,
  iconColor = 'text-[#135bec]',
  iconBgColor = 'bg-[#282e39]',
  badge,
}: StatCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl p-6 bg-[#1e232e] border border-[#282e39] shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <div className={`p-2 ${iconBgColor} rounded-lg ${iconColor}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        {badge && (
          <span
            className={`text-xs font-bold px-2 py-1 rounded-full ${badge.color} ${badge.bgColor}`}
          >
            {badge.text}
          </span>
        )}
      </div>
      <p className="text-[#9da6b9] text-sm font-medium leading-normal">{title}</p>
      <p className="text-white tracking-tight text-3xl font-bold leading-tight">{value}</p>
    </div>
  );
}
