export type StatusType = 'active' | 'inactive' | 'warning' | 'learning' | 'error';

interface StatusBadgeProps {
  status: StatusType;
  label: string;
  icon?: string;
  showDot?: boolean;
  animated?: boolean;
}

const statusStyles: Record<
  StatusType,
  { text: string; bg: string; border: string }
> = {
  active: {
    text: 'text-[#0bda5e]',
    bg: 'bg-[#0bda5e]/10',
    border: 'border-[#0bda5e]/20',
  },
  inactive: {
    text: 'text-[#9da6b9]',
    bg: 'bg-[#282e39]',
    border: 'border-[#3b4354]',
  },
  warning: {
    text: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
  learning: {
    text: 'text-blue-400',
    bg: 'bg-[#135bec]/10',
    border: 'border-[#135bec]/20',
  },
  error: {
    text: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
  },
};

export default function StatusBadge({
  status,
  label,
  icon,
  showDot = false,
  animated = false,
}: StatusBadgeProps) {
  const styles = statusStyles[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${styles.text} ${styles.bg} border ${styles.border}`}
    >
      {showDot && (
        <span className={`w-1.5 h-1.5 rounded-full ${styles.text.replace('text-', 'bg-')}`}></span>
      )}
      {icon && (
        <span className={`material-symbols-outlined text-[14px] ${animated ? 'animate-spin' : ''}`}>
          {icon}
        </span>
      )}
      {label}
    </span>
  );
}
