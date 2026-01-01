interface PerformanceMetricProps {
  label: string;
  value: string;
  subValue?: string;
  color?: string;
  showBar?: boolean;
  percentage?: number;
}

export default function PerformanceMetric({
  label,
  value,
  subValue,
  color = 'text-white',
  showBar = false,
  percentage = 0,
}: PerformanceMetricProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <p className="text-[#9da6b9] text-sm">{label}</p>
        {subValue && <p className="text-[#0bda5e] text-xs font-bold">{subValue}</p>}
      </div>
      <p className={`text-3xl font-bold ${color}`}>{value}</p>
      {showBar && (
        <div className="w-full bg-[#282e39] rounded-full h-2 mt-1">
          <div
            className="bg-[#0bda5e] h-2 rounded-full transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>
      )}
    </div>
  );
}
