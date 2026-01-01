import { ReactNode } from 'react';

interface ConfigSectionProps {
  icon: string;
  title: string | ReactNode;
  children: ReactNode;
  action?: ReactNode;
}

export default function ConfigSection({ icon, title, children, action }: ConfigSectionProps) {
  return (
    <div className="bg-[#1e232e] border border-[#282e39] rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-[#135bec]/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-[#135bec] text-[24px]">{icon}</span>
        </div>
        <div className="flex-1">
          {typeof title === 'string' ? (
            <h2 className="text-white text-xl font-bold">{title}</h2>
          ) : (
            title
          )}
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}
