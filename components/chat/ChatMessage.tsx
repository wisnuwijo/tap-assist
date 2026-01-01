import { ReactNode } from 'react';

interface ChatMessageProps {
  type: 'bot' | 'user';
  message: string | ReactNode;
  timestamp: string;
  senderName?: string;
  avatar?: string;
  showRating?: boolean;
  onRate?: (rating: 'correct' | 'incorrect' | 'irrelevant') => void;
  isThinking?: boolean;
}

export default function ChatMessage({
  type,
  message,
  timestamp,
  senderName = type === 'bot' ? 'Onboarding Assistant' : 'Admin Tester',
  avatar,
  showRating = false,
  onRate,
  isThinking = false,
}: ChatMessageProps) {
  if (type === 'bot') {
    return (
      <div className="flex gap-3 mb-6">
        {/* Bot Avatar */}
        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">
          <span className="material-symbols-outlined text-[20px]">smart_toy</span>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="text-white text-sm font-medium">{senderName}</p>
            <p className="text-[#9da6b9] text-xs">{timestamp}</p>
            {isThinking && (
              <span className="text-[#135bec] text-xs font-medium">Thinking... 0.4s</span>
            )}
          </div>

          {isThinking ? (
            <div className="bg-[#1e232e] border border-[#282e39] rounded-2xl rounded-tl-none px-4 py-3 max-w-2xl">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-[#9da6b9] rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-[#9da6b9] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 bg-[#9da6b9] rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          ) : (
            <>
              <div className="bg-[#1e232e] border border-[#282e39] rounded-2xl rounded-tl-none px-4 py-3 max-w-2xl">
                <div className="text-white text-sm leading-relaxed">{message}</div>
              </div>

              {showRating && onRate && (
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[#9da6b9] text-xs font-medium uppercase tracking-wider">
                    Rate Response:
                  </span>
                  <button
                    onClick={() => onRate('correct')}
                    className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#9da6b9] hover:text-[#0bda5e] hover:bg-[#0bda5e]/10 rounded-full transition-colors border border-[#282e39] hover:border-[#0bda5e]/20"
                  >
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Correct
                  </button>
                  <button
                    onClick={() => onRate('incorrect')}
                    className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#9da6b9] hover:text-orange-400 hover:bg-orange-500/10 rounded-full transition-colors border border-[#282e39] hover:border-orange-500/20"
                  >
                    <span className="material-symbols-outlined text-[14px]">cancel</span>
                    Incorrect
                  </button>
                  <button
                    onClick={() => onRate('irrelevant')}
                    className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#9da6b9] hover:text-gray-400 hover:bg-gray-500/10 rounded-full transition-colors border border-[#282e39] hover:border-gray-500/20"
                  >
                    <span className="material-symbols-outlined text-[14px]">block</span>
                    Irrelevant
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  // User message
  return (
    <div className="flex gap-3 mb-6 justify-end">
      <div className="flex-1 flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <p className="text-[#9da6b9] text-xs">{timestamp}</p>
          <p className="text-white text-sm font-medium">{senderName}</p>
        </div>

        <div className="bg-[#135bec] rounded-2xl rounded-tr-none px-4 py-3 max-w-2xl">
          <div className="text-white text-sm leading-relaxed">{message}</div>
        </div>
      </div>

      {/* User Avatar */}
      <div className="w-10 h-10 rounded-full bg-[#135bec]/20 flex items-center justify-center text-[#135bec] shrink-0">
        <span className="material-symbols-outlined text-[20px]">person</span>
      </div>
    </div>
  );
}
