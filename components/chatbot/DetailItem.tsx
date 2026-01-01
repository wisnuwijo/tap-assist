import { ReactNode } from 'react';

interface DetailItemProps {
  label: string;
  value: ReactNode;
  fullWidth?: boolean;
}

export default function DetailItem({ label, value, fullWidth = false }: DetailItemProps) {
  return (
    <div className={fullWidth ? 'col-span-2' : ''}>
      <p className="text-[#9da6b9] text-xs font-semibold uppercase tracking-wider mb-2">
        {label}
      </p>
      <div className="text-white">{value}</div>
    </div>
  );
}
