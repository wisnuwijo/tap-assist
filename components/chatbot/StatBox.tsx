interface StatBoxProps {
  label: string;
  value: string | number;
}

export default function StatBox({ label, value }: StatBoxProps) {
  return (
    <div className="bg-[#282e39] rounded-lg p-4">
      <p className="text-[#9da6b9] text-xs font-medium mb-2">{label}</p>
      <p className="text-white text-2xl font-bold">{value}</p>
    </div>
  );
}
