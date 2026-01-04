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

// Conversation history data
const conversations = [
  {
    id: 1,
    botName: 'IT Support Bot',
    botIcon: 'dns',
    botIconColor: 'text-blue-500',
    botIconBg: 'bg-blue-500/10',
    category: 'IT Support',
    categoryColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    timestamp: 'Today, 10:23 AM',
    lastMessage:
      "I need help resetting my VPN password for the remote access portal. It keeps saying 'Access Denied'.",
  },
  {
    id: 2,
    botName: 'HR Policy Bot',
    botIcon: 'diversity_3',
    botIconColor: 'text-pink-500',
    botIconBg: 'bg-pink-500/10',
    category: 'Human Resources',
    categoryColor: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    timestamp: 'Yesterday, 4:15 PM',
    lastMessage: 'Can you explain the carry-over policy for unused vacation days into 2024?',
  },
  {
    id: 3,
    botName: 'SOP Master',
    botIcon: 'menu_book',
    botIconColor: 'text-emerald-500',
    botIconBg: 'bg-emerald-500/10',
    category: 'Operations',
    categoryColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    timestamp: 'Oct 20, 11:00 AM',
    lastMessage: 'What is the correct procedure for logging a client complaint in Salesforce?',
  },
  {
    id: 4,
    botName: 'Legal Advisor',
    botIcon: 'gavel',
    botIconColor: 'text-slate-300',
    botIconBg: 'bg-slate-500/10',
    category: 'Legal',
    categoryColor: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
    timestamp: 'Oct 18, 2:45 PM',
    lastMessage: 'Do we have a standard NDA template for external graphic design freelancers?',
  },
  {
    id: 5,
    botName: 'Finance Assistant',
    botIcon: 'payments',
    botIconColor: 'text-purple-500',
    botIconBg: 'bg-purple-500/10',
    category: 'Finance',
    categoryColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    timestamp: 'Oct 15, 9:30 AM',
    lastMessage: 'When is the cutoff date for submitting travel expenses for Q3?',
  },
  {
    id: 6,
    botName: 'Onboarding Buddy',
    botIcon: 'handshake',
    botIconColor: 'text-orange-500',
    botIconBg: 'bg-orange-500/10',
    category: 'Onboarding',
    categoryColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    timestamp: 'Oct 10, 3:10 PM',
    lastMessage: 'Where can I find the floor plan for the Seattle office?',
  },
];

export default function UserHistoryPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [timeFilter, setTimeFilter] = useState('any');
  const [botFilter, setBotFilter] = useState('all');

  const handleNewRequest = () => {
    router.push('/user/dashboard');
  };

  const handleViewThread = (conversationId: number) => {
    router.push(`/user/chat/${conversationId}`);
  };

  return (
    <UserLayout userInfo={userInfo} onNewRequest={handleNewRequest} activePage="/user/history">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {/* Page Header */}
        <div className="flex flex-col gap-3 animate-fade-in-up">
          <h2 className="text-white text-4xl font-black leading-tight tracking-tight">
            Conversation History
          </h2>
          <p className="text-slate-400 text-lg font-normal max-w-2xl">
            Browse your past interactions, search for specific answers, or continue where you left off.
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
              placeholder="Search history by keywords, topic, or date..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Time Filter */}
            <div className="relative">
              <select
                className="appearance-none bg-[#1e2430] border border-[#2d3544] text-slate-300 pl-10 pr-10 py-2.5 rounded-lg text-sm font-medium focus:outline-none focus:border-primary cursor-pointer hover:border-slate-500 transition-colors"
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
              >
                <option value="any">Any Time</option>
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="last7">Last 7 Days</option>
                <option value="last30">Last 30 Days</option>
              </select>
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg pointer-events-none">
                calendar_today
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

        {/* Conversation List */}
        <div className="flex flex-col gap-3 pb-12 mt-2">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => handleViewThread(conversation.id)}
              className="group flex flex-col md:flex-row gap-5 p-5 bg-[#1e2430] border border-[#2d3544] rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer"
            >
              {/* Bot Icon */}
              <div
                className={`size-12 rounded-lg ${conversation.botIconBg} ${conversation.botIconColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="material-symbols-filled text-2xl">{conversation.botIcon}</span>
              </div>

              {/* Conversation Info */}
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1.5">
                  <h3 className="font-bold text-white text-base">{conversation.botName}</h3>
                  <span
                    className={`${conversation.categoryColor} text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border`}
                  >
                    {conversation.category}
                  </span>
                  <span className="hidden sm:block text-slate-600">•</span>
                  <span className="text-sm text-slate-500">{conversation.timestamp}</span>
                </div>
                <p className="text-slate-400 text-sm truncate group-hover:text-slate-300 transition-colors pr-4">
                  <span className="font-medium text-slate-300">You:</span> {conversation.lastMessage}
                </p>
              </div>

              {/* View Thread Button */}
              <div className="flex items-center justify-end md:w-32 flex-shrink-0 mt-3 md:mt-0 pt-3 md:pt-0 border-t md:border-t-0 border-[#2d3544]">
                <button className="flex items-center gap-1 text-sm font-medium text-primary hover:text-blue-400 transition-colors">
                  View Thread{' '}
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </UserLayout>
  );
}
