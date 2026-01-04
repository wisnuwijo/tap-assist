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

// Chatbot categories
const categories = [
  { label: 'All', value: 'all', active: true },
  { label: 'Human Resources', value: 'hr', active: false },
  { label: 'Information Technology', value: 'it', active: false },
  { label: 'Operations', value: 'ops', active: false },
  { label: 'Finance', value: 'finance', active: false },
  { label: 'Legal', value: 'legal', active: false },
];

// Chatbots data
const chatbots = [
  {
    id: 1,
    name: 'HR Policy Bot',
    category: 'HR',
    categoryValue: 'hr',
    icon: 'diversity_3',
    iconColor: 'text-pink-500',
    iconBg: 'bg-pink-500/10',
    description:
      'Your go-to source for employee handbook queries, benefits enrollment, holiday calendars, and workplace conduct policies.',
  },
  {
    id: 2,
    name: 'IT Support Bot',
    category: 'IT',
    categoryValue: 'it',
    icon: 'dns',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10',
    description:
      'Troubleshoot hardware issues, request software access, reset passwords, and fix VPN connectivity problems instantly.',
  },
  {
    id: 3,
    name: 'SOP Master',
    category: 'Ops',
    categoryValue: 'ops',
    icon: 'menu_book',
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-500/10',
    description:
      'Step-by-step guides for internal operational procedures, safety protocols, and daily workflow management.',
  },
  {
    id: 4,
    name: 'Onboarding Buddy',
    category: 'HR',
    categoryValue: 'hr',
    icon: 'handshake',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-500/10',
    description:
      'Helping new hires navigate their first few weeks with office maps, team intros, and culture guides.',
  },
  {
    id: 5,
    name: 'Finance Assistant',
    category: 'Finance',
    categoryValue: 'finance',
    icon: 'payments',
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-500/10',
    description:
      'Submit expense reports, check payroll dates, and get help with departmental budget allocations.',
  },
  {
    id: 6,
    name: 'Legal Advisor',
    category: 'Legal',
    categoryValue: 'legal',
    icon: 'gavel',
    iconColor: 'text-slate-300',
    iconBg: 'bg-slate-500/10',
    description:
      'Preliminary contract reviews, NDA templates, and general compliance questions for your projects.',
  },
];

export default function UserDashboardPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const handleNewRequest = () => {
    // Handle new request action
    console.log('New request clicked');
  };

  const handleChatbotClick = (chatbotId: number) => {
    router.push(`/user/chat/${chatbotId}`);
  };

  const handleRequestTopic = () => {
    // Handle request new topic
    console.log('Request new topic clicked');
  };

  const filteredChatbots =
    activeCategory === 'all'
      ? chatbots
      : chatbots.filter((bot) => bot.categoryValue === activeCategory);

  return (
    <UserLayout userInfo={userInfo} onNewRequest={handleNewRequest} activePage="/user/dashboard">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Page Header */}
        <div className="flex flex-col gap-3 animate-fade-in-up">
          <h2 className="text-white text-4xl font-black leading-tight tracking-tight">
            Select a Chatbot
          </h2>
          <p className="text-slate-400 text-lg font-normal max-w-2xl">
            Choose a specialized AI assistant to answer your questions about company SOPs, HR policies,
            and technical support.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col gap-6">
          {/* Search Bar */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-500 group-focus-within:text-primary transition-colors">
                search
              </span>
            </div>
            <input
              className="w-full bg-[#1e2430] border border-[#2d3544] text-white text-base rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-slate-500 transition-all shadow-lg shadow-black/20"
              placeholder="Search for topics, departments, or specific bots..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`h-9 px-4 rounded-full text-sm font-medium transition-all active:scale-95 ${
                  activeCategory === cat.value
                    ? 'bg-primary text-white'
                    : 'bg-[#1e2430] border border-[#2d3544] text-slate-300 hover:text-white hover:border-slate-500'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Chatbots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-2 pb-12">
          {filteredChatbots.map((bot) => (
            <div
              key={bot.id}
              onClick={() => handleChatbotClick(bot.id)}
              className="group relative bg-[#1e2430] rounded-2xl p-6 border border-[#2d3544] hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 cursor-pointer flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`size-14 rounded-xl ${bot.iconBg} flex items-center justify-center ${bot.iconColor} group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="material-symbols-filled text-3xl">{bot.icon}</span>
                </div>
                <span className="bg-[#2d3544] text-xs font-semibold px-2 py-1 rounded text-slate-300">
                  {bot.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {bot.name}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{bot.description}</p>
              <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                Start Conversation{' '}
                <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </div>
            </div>
          ))}

          {/* Request New Topic Card */}
          <div
            onClick={handleRequestTopic}
            className="group relative border-2 border-dashed border-[#2d3544] rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-primary/50 hover:bg-[#1e2430]/50 transition-all duration-300 cursor-pointer min-h-[240px]"
          >
            <div className="size-16 rounded-full bg-[#2d3544] flex items-center justify-center text-slate-400 mb-4 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-3xl">add</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Request a Topic</h3>
            <p className="text-slate-500 text-sm max-w-[200px]">
              Don't see what you need? Request a new bot training topic.
            </p>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
