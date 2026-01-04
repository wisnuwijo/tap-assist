'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import UserLayout from '@/components/user/UserLayout';
import type { UserInfo } from '@/components/user';

// User info
const userInfo: UserInfo = {
  name: 'Alex Morgan',
  role: 'Product Manager',
  avatarUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDAmMk59qSMKpRVgwH2-1ZDpW6tKM38LzF_D2PkTMlKp1MRLUYyvBJv6pzs5hmEj_Ms49FXBhTRWNuYd8XcQigCjuI_cRobr6p1uXnLaCpn5XLRHdlVLFwFbQsrrhDTsPlq14duIlIxFoh6jfXb2KKRc4GXTeiQRyEHuVNKRGQK5B_Ns_XRB9ISjjUiK0AGBXqsXLv5H1w1AJUCfJN2RBS12NROZqQGRjEuUBDZS-WbM3q6VY4et6I_O3dEUiu1ePU2ouvHipUnR7g',
};

// Saved threads data
const savedThreads = [
  {
    id: 1,
    botName: 'SOP Master',
    botIcon: 'menu_book',
    botIconColor: 'text-emerald-500',
    botIconBg: 'bg-emerald-500/10',
    category: 'Operations',
    categoryColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    savedDate: 'Today, 11:00 AM',
    summary: 'Correct procedure for logging a client complaint in Salesforce.',
  },
  {
    id: 2,
    botName: 'HR Policy Bot',
    botIcon: 'diversity_3',
    botIconColor: 'text-pink-500',
    botIconBg: 'bg-pink-500/10',
    category: 'Human Resources',
    categoryColor: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    savedDate: 'Yesterday, 4:15 PM',
    summary: 'Carry-over policy details for unused vacation days into 2024.',
  },
  {
    id: 3,
    botName: 'Legal Advisor',
    botIcon: 'gavel',
    botIconColor: 'text-slate-300',
    botIconBg: 'bg-slate-500/10',
    category: 'Legal',
    categoryColor: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
    savedDate: 'Oct 18, 2:45 PM',
    summary: 'Standard NDA template link for external graphic design freelancers.',
  },
  {
    id: 4,
    botName: 'IT Support Bot',
    botIcon: 'dns',
    botIconColor: 'text-blue-500',
    botIconBg: 'bg-blue-500/10',
    category: 'IT Support',
    categoryColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    savedDate: 'Oct 12, 09:15 AM',
    summary: 'Instructions for configuring the office printer on macOS Sonoma.',
  },
];

export default function SavedThreadsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortFilter, setSortFilter] = useState('newest');
  const [botFilter, setBotFilter] = useState('all');
  const [threads, setThreads] = useState(savedThreads);

  const handleNewRequest = () => {
    router.push('/user/dashboard');
  };

  const handleViewThread = (threadId: number) => {
    router.push(`/user/chat/${threadId}`);
  };

  const handleUnsave = (threadId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setThreads(threads.filter((thread) => thread.id !== threadId));
  };

  const handleDelete = (threadId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this saved thread?')) {
      setThreads(threads.filter((thread) => thread.id !== threadId));
    }
  };

  return (
    <UserLayout userInfo={userInfo} onNewRequest={handleNewRequest} activePage="/user/saved">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {/* Page Header */}
        <div className="flex flex-col gap-3 animate-fade-in-up">
          <h2 className="text-white text-4xl font-black leading-tight tracking-tight">
            Saved Threads
          </h2>
          <p className="text-slate-400 text-lg font-normal max-w-2xl">
            Manage your collection of bookmarked conversations for quick access to key information and
            SOPs.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col gap-4">
          {/* Search Bar */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-500 group-focus-within:text-primary transition-colors">
                search
              </span>
            </div>
            <input
              className="w-full bg-[#1e2430] border border-[#2d3544] text-white text-base rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-slate-500 transition-all shadow-lg shadow-black/20"
              placeholder="Search saved threads by keywords, topic, or date..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Sort Filter */}
            <div className="relative">
              <select
                className="appearance-none bg-[#1e2430] border border-[#2d3544] text-slate-300 pl-10 pr-10 py-2.5 rounded-lg text-sm font-medium focus:outline-none focus:border-primary cursor-pointer hover:border-slate-500 transition-colors"
                value={sortFilter}
                onChange={(e) => setSortFilter(e.target.value)}
              >
                <option value="newest">Date Saved: Newest</option>
                <option value="oldest">Date Saved: Oldest</option>
                <option value="name">Name: A-Z</option>
              </select>
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg pointer-events-none">
                sort
              </span>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg pointer-events-none">
                expand_more
              </span>
            </div>

            {/* Bot Filter */}
            <div className="relative">
              <select
                className="appearance-none bg-[#1e2430] border border-[#2d3544] text-slate-300 pl-10 pr-10 py-2.5 rounded-lg text-sm font-medium focus:outline-none focus:border-primary cursor-pointer hover:border-slate-500 transition-colors"
                value={botFilter}
                onChange={(e) => setBotFilter(e.target.value)}
              >
                <option value="all">All Chatbots</option>
                <option value="hr">HR Policy Bot</option>
                <option value="it">IT Support Bot</option>
                <option value="sop">SOP Master</option>
                <option value="finance">Finance Assistant</option>
                <option value="legal">Legal Advisor</option>
              </select>
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg pointer-events-none">
                smart_toy
              </span>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg pointer-events-none">
                expand_more
              </span>
            </div>
          </div>
        </div>

        {/* Saved Threads List */}
        <div className="flex flex-col gap-3 pb-12 mt-2">
          {threads.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="size-20 rounded-full bg-[#1e2430] border border-[#2d3544] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-slate-500 text-4xl">bookmark</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">No saved threads</h3>
              <p className="text-slate-400 text-sm max-w-sm">
                Save important conversations by clicking the bookmark icon during your chats.
              </p>
            </div>
          ) : (
            threads.map((thread) => (
              <div
                key={thread.id}
                onClick={() => handleViewThread(thread.id)}
                className="group flex flex-col md:flex-row gap-5 p-5 bg-[#1e2430] border border-[#2d3544] rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer"
              >
                {/* Bot Icon */}
                <div
                  className={`size-12 rounded-lg ${thread.botIconBg} ${thread.botIconColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="material-symbols-filled text-2xl">{thread.botIcon}</span>
                </div>

                {/* Thread Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1.5">
                    <h3 className="font-bold text-white text-base">{thread.botName}</h3>
                    <span
                      className={`${thread.categoryColor} text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border`}
                    >
                      {thread.category}
                    </span>
                    <span className="hidden sm:block text-slate-600">•</span>
                    <span className="text-sm text-slate-500">Saved: {thread.savedDate}</span>
                  </div>
                  <p className="text-slate-400 text-sm truncate group-hover:text-slate-300 transition-colors pr-4">
                    <span className="font-medium text-slate-300">Summary:</span> {thread.summary}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end md:w-auto gap-3 flex-shrink-0 mt-3 md:mt-0 pt-3 md:pt-0 border-t md:border-t-0 border-[#2d3544]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewThread(thread.id);
                    }}
                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors bg-[#1e2430] border border-[#2d3544] hover:border-slate-500 rounded-lg px-3 py-1.5"
                  >
                    View Thread
                  </button>
                  <div className="h-4 w-px bg-[#2d3544] hidden md:block"></div>
                  <button
                    onClick={(e) => handleUnsave(thread.id, e)}
                    className="p-2 text-primary hover:text-primary/80 transition-colors rounded-lg bg-primary/10 hover:bg-primary/20"
                    title="Unsave"
                  >
                    <span className="material-symbols-filled text-xl">bookmark</span>
                  </button>
                  <button
                    onClick={(e) => handleDelete(thread.id, e)}
                    className="p-2 text-slate-500 hover:text-red-400 transition-colors rounded-lg hover:bg-red-500/10"
                    title="Delete"
                  >
                    <span className="material-symbols-outlined text-xl">delete</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </UserLayout>
  );
}
