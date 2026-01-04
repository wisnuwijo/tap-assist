'use client';

import Link from 'next/link';

interface UserNavbarProps {
  currentDate?: string;
  showNewRequestButton?: boolean;
  onNewRequest?: () => void;
}

export default function UserNavbar({
  currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }),
  showNewRequestButton = true,
  onNewRequest,
}: UserNavbarProps) {
  const handleNewRequest = () => {
    if (onNewRequest) {
      onNewRequest();
    }
  };

  return (
    <header className="h-20 flex items-center justify-between px-8 lg:px-12 border-b border-[#2d3544] bg-[#101622]/80 backdrop-blur-md sticky top-0 z-10">
      <div className="text-slate-400 text-sm flex items-center gap-1">
        <span className="material-symbols-outlined align-middle text-lg">today</span>
        <span>Today is {currentDate}</span>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/notifications" className="text-slate-400 hover:text-white relative transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-0 right-0 size-2 bg-red-500 rounded-full border-2 border-[#101622]"></span>
        </Link>
        {showNewRequestButton && (
          <button
            onClick={handleNewRequest}
            className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">add</span>
            New Request
          </button>
        )}
      </div>
    </header>
  );
}
