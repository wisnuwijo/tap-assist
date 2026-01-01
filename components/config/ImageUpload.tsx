'use client';

import { useState, useRef } from 'react';

interface ImageUploadProps {
  label: string;
  helperText?: string;
  currentImage?: string;
  onImageChange?: (file: File) => void;
}

export default function ImageUpload({
  label,
  helperText = 'JPG, PNG up to 2MB',
  currentImage,
  onImageChange,
}: ImageUploadProps) {
  const [preview, setPreview] = useState(currentImage || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onImageChange?.(file);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-white text-sm font-medium">{label}</p>
        <p className="text-[#9da6b9] text-xs mt-0.5">{helperText}</p>
      </div>

      <div className="flex items-center gap-4">
        {preview ? (
          <div className="w-20 h-20 rounded-full overflow-hidden bg-[#282e39] flex items-center justify-center">
            <img src={preview} alt="Avatar preview" className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-20 h-20 rounded-full bg-[#282e39] flex items-center justify-center">
            <span className="material-symbols-outlined text-[#9da6b9] text-3xl">person</span>
          </div>
        )}

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 bg-[#282e39] hover:bg-[#3b4354] text-white rounded-lg text-sm font-medium transition-colors"
          >
            Upload New
          </button>
          {preview && (
            <button
              type="button"
              onClick={() => setPreview('')}
              className="px-4 py-2 bg-transparent hover:bg-[#282e39] text-[#9da6b9] hover:text-white rounded-lg text-sm font-medium transition-colors border border-[#282e39]"
            >
              Remove
            </button>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
}
