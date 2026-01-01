interface TableActionButtonProps {
  icon: string;
  label?: string;
  onClick?: () => void;
}

export default function TableActionButton({ icon, label, onClick }: TableActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-2 bg-[#1e232e] hover:bg-[#282e39] text-[#9da6b9] hover:text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
    >
      <span className="material-symbols-outlined text-[18px]">{icon}</span>
      {label && <span className="hidden sm:inline">{label}</span>}
    </button>
  );
}
