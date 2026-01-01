'use client';

import { useState, KeyboardEvent } from 'react';

interface ChatInputProps {
  onSend: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function ChatInput({
  onSend,
  placeholder = 'Type a message to test the chatbot...',
  disabled = false,
}: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-center gap-3 p-4 bg-[#1e232e] border-t border-[#282e39]">
      <button
        className="text-[#9da6b9] hover:text-white transition-colors p-2"
        title="Attach file"
      >
        <span className="material-symbols-outlined text-[24px]">attach_file</span>
      </button>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        disabled={disabled}
        className="flex-1 bg-transparent text-white placeholder:text-[#9da6b9] focus:outline-none text-sm"
      />

      <button
        onClick={handleSend}
        disabled={!message.trim() || disabled}
        className="w-10 h-10 rounded-lg bg-[#135bec] hover:bg-[#0e4bce] disabled:bg-[#282e39] disabled:cursor-not-allowed flex items-center justify-center transition-colors"
      >
        <span className="material-symbols-outlined text-white text-[24px]">send</span>
      </button>
    </div>
  );
}
