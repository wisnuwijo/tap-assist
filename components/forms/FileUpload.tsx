'use client';

import { useState, useRef, DragEvent, ChangeEvent } from 'react';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  status: 'uploading' | 'ready' | 'error';
  progress: number;
  type: string;
}

interface FileUploadProps {
  label?: string;
  helperText?: string;
  acceptedFormats?: string[];
  maxSize?: number; // in MB
  onFilesChange?: (files: UploadedFile[]) => void;
}

export default function FileUpload({
  label = 'Upload Knowledge Base Documents',
  helperText = 'Supported: PDF, DOCX, TXT',
  acceptedFormats = ['.pdf', '.docx', '.txt'],
  maxSize = 50,
  onFilesChange,
}: FileUploadProps) {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getFileIcon = (type: string) => {
    if (type.includes('pdf')) return 'picture_as_pdf';
    if (type.includes('word') || type.includes('document')) return 'description';
    return 'draft';
  };

  const getFileIconColor = (type: string) => {
    if (type.includes('pdf')) return 'text-red-500 bg-red-500/20';
    if (type.includes('word') || type.includes('document')) return 'text-blue-500 bg-blue-500/20';
    return 'text-gray-500 bg-gray-500/20';
  };

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;

    const newFiles: UploadedFile[] = Array.from(fileList).map((file, index) => ({
      id: `${Date.now()}-${index}`,
      name: file.name,
      size: file.size,
      status: 'uploading' as const,
      progress: 0,
      type: file.type,
    }));

    const updatedFiles = [...files, ...newFiles];
    setFiles(updatedFiles);
    onFilesChange?.(updatedFiles);

    // Simulate upload progress
    newFiles.forEach((file) => {
      simulateUpload(file.id);
    });
  };

  const simulateUpload = (fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setFiles((prev) =>
          prev.map((f) => (f.id === fileId ? { ...f, status: 'ready', progress: 100 } : f))
        );
      } else {
        setFiles((prev) => prev.map((f) => (f.id === fileId ? { ...f, progress } : f)));
      }
    }, 300);
  };

  const removeFile = (fileId: string) => {
    const updatedFiles = files.filter((f) => f.id !== fileId);
    setFiles(updatedFiles);
    onFilesChange?.(updatedFiles);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <label className="text-white text-sm font-medium">{label}</label>
        <span className="text-[#9da6b9] text-xs">{helperText}</span>
      </div>

      {/* Drop Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all ${
          isDragging
            ? 'border-[#135bec] bg-[#135bec]/5'
            : 'border-[#3b4354] bg-[#1a1f2e] hover:border-[#4b5364]'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={acceptedFormats.join(',')}
          onChange={handleFileInput}
          className="hidden"
        />
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#282e39] flex items-center justify-center">
            <span className="material-symbols-outlined text-[#9da6b9] text-2xl">
              cloud_upload
            </span>
          </div>
          <div>
            <p className="text-white text-sm font-medium">Click to upload or drag and drop</p>
            <p className="text-[#9da6b9] text-xs mt-1">Maximum file size {maxSize} MB</p>
          </div>
        </div>
      </div>

      {/* Uploaded Files */}
      {files.length > 0 && (
        <div className="flex flex-col gap-2">
          {files.map((file) => (
            <div
              key={file.id}
              className="flex items-center gap-3 p-3 bg-[#1e232e] border border-[#282e39] rounded-lg"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${getFileIconColor(file.type)}`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {getFileIcon(file.type)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">{file.name}</p>
                {file.status === 'uploading' && (
                  <div className="mt-1">
                    <div className="w-full bg-[#282e39] rounded-full h-1.5">
                      <div
                        className="bg-[#135bec] h-1.5 rounded-full transition-all"
                        style={{ width: `${file.progress}%` }}
                      />
                    </div>
                  </div>
                )}
                {file.status === 'ready' && (
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="material-symbols-outlined text-[#0bda5e] text-[14px]">
                      check_circle
                    </span>
                    <span className="text-[#0bda5e] text-xs font-medium">Ready</span>
                  </div>
                )}
              </div>
              {file.status === 'uploading' && (
                <span className="text-[#135bec] text-xs font-medium">
                  {Math.round(file.progress)}%
                </span>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(file.id);
                }}
                className="text-[#9da6b9] hover:text-white transition-colors p-1"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
