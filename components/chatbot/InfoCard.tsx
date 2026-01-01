import { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  children: ReactNode;
  action?: ReactNode;
}

export default function InfoCard({ title, children, action }: InfoCardProps) {
  return (
    <div className="bg-[#1e232e] border border-[#282e39] rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-xl font-bold">{title}</h2>
        {action}
      </div>
      {children}
    </div>
  );
}
