import { ReactNode } from 'react';

interface InfoBannerProps {
  icon: string;
  title: string;
  description: string;
  action?: ReactNode;
  variant?: 'info' | 'success' | 'warning';
}

export default function InfoBanner({
  icon,
  title,
  description,
  action,
  variant = 'info',
}: InfoBannerProps) {
  const variants = {
    info: 'bg-[#135bec]/10 border-[#135bec]/20',
    success: 'bg-[#0bda5e]/10 border-[#0bda5e]/20',
    warning: 'bg-orange-500/10 border-orange-500/20',
  };

  const iconColors = {
    info: 'text-[#135bec]',
    success: 'text-[#0bda5e]',
    warning: 'text-orange-500',
  };

  return (
    <div className={`${variants[variant]} border rounded-xl p-4 flex items-center gap-4`}>
      <div
        className={`w-12 h-12 rounded-lg bg-[#282e39] flex items-center justify-center shrink-0 ${iconColors[variant]}`}
      >
        <span className="material-symbols-outlined text-[24px]">{icon}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-white text-sm font-bold mb-0.5">{title}</h3>
        <p className="text-[#9da6b9] text-xs">{description}</p>
      </div>
      {action}
    </div>
  );
}
