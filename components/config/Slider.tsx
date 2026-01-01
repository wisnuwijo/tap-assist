'use client';

interface SliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  showValue?: boolean;
  valueLabel?: string;
  labels?: { left: string; center: string; right: string };
}

export default function Slider({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  showValue = true,
  valueLabel,
  labels,
}: SliderProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p className="text-white text-sm font-medium">{label}</p>
        {showValue && (
          <span className="text-[#135bec] text-sm font-bold">
            {valueLabel || `${value}${max === 100 ? '%' : ''}`}
          </span>
        )}
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-[#282e39] rounded-full appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, #135bec 0%, #135bec ${percentage}%, #282e39 ${percentage}%, #282e39 100%)`,
          }}
        />
      </div>
      {labels && (
        <div className="flex items-center justify-between text-[#9da6b9] text-xs">
          <span>{labels.left}</span>
          <span>{labels.center}</span>
          <span>{labels.right}</span>
        </div>
      )}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #135bec;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(19, 91, 236, 0.4);
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #135bec;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(19, 91, 236, 0.4);
        }
      `}</style>
    </div>
  );
}
