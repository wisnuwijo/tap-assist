import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export default function Input({ label, error, helperText, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-white text-sm font-medium">
          {label}
          {props.required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      <input
        className={`w-full bg-[#1e232e] border ${
          error ? 'border-red-500' : 'border-[#282e39]'
        } rounded-lg px-4 py-3 text-white placeholder:text-[#9da6b9] focus:outline-none focus:ring-2 focus:ring-[#135bec] focus:border-transparent transition-all ${className}`}
        {...props}
      />
      {error && <p className="text-red-400 text-xs">{error}</p>}
      {helperText && !error && <p className="text-[#9da6b9] text-xs">{helperText}</p>}
    </div>
  );
}
