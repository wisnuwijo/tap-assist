'use client';

import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import type { SidebarNavItem, SidebarUserInfo, BreadcrumbItem } from '@/components/admin';

// Navigation items
const navItems: SidebarNavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
  { label: 'Chatbots', href: '/chatbots', icon: 'smart_toy' },
  { label: 'Analytics', href: '/analytics', icon: 'analytics' },
  { label: 'User Management', href: '/users', icon: 'group' },
  { label: 'Settings', href: '/settings', icon: 'settings' },
];

// User info
const userInfo: SidebarUserInfo = {
  name: 'Jane Administrator',
  email: 'jane.admin@tapatist.ai',
  role: 'Super Admin',
  avatarUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBdliPYJP-ODwe6wAjROyzTBP2v93Z0Kt-eXlq3acf6jDiampNw_pXmZCQ4x25AzHLWM_NEhqlur521TWrxTc74JE3I7QrC-TATsbCGdzRlPwus6ymdT5hJBdjXqzMAsRafgzwMl2EG_6mmIlML1EefPoty_kEpgKfXjk09J9Wuc0Nh-j6ve_cBKSiJqaQXufljI-Msi5TJdb480LoC50EY2tNRAQs03IYVVOCV9y2akQthI22L9mi0NR9Wi9cTmQSdyz6NbYwgU6g',
};

// Breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [
  { label: 'Analytics' },
  { label: 'Most Frequent Queries' },
];

// Query data
const queries = [
  {
    id: 1,
    query: '"How do I reset my password?"',
    chatbot: 'IT Support',
    chatbotColor: 'blue',
    volume: '2,405',
    resolution: 98,
    resolutionText: '98% Resolved',
  },
  {
    id: 2,
    query: '"Where can I find the holiday calendar?"',
    chatbot: 'HR Onboarding',
    chatbotColor: 'purple',
    volume: '1,820',
    resolution: 96,
    resolutionText: '96% Resolved',
  },
  {
    id: 3,
    query: '"How to claim medical insurance?"',
    chatbot: 'HR Onboarding',
    chatbotColor: 'purple',
    volume: '940',
    resolution: 75,
    resolutionText: '75% Resolved',
  },
  {
    id: 4,
    query: '"VPN connection failed error 404"',
    chatbot: 'IT Support',
    chatbotColor: 'blue',
    volume: '850',
    resolution: 88,
    resolutionText: '88% Resolved',
  },
  {
    id: 5,
    query: '"Update direct deposit information"',
    chatbot: 'HR Onboarding',
    chatbotColor: 'purple',
    volume: '720',
    resolution: 92,
    resolutionText: '92% Resolved',
  },
  {
    id: 6,
    query: '"Guest wifi password for visitors"',
    chatbot: 'IT Support',
    chatbotColor: 'blue',
    volume: '650',
    resolution: 99,
    resolutionText: '99% Resolved',
  },
  {
    id: 7,
    query: '"Maternity leave policy details"',
    chatbot: 'HR Onboarding',
    chatbotColor: 'purple',
    volume: '580',
    resolution: 85,
    resolutionText: '85% Resolved',
  },
  {
    id: 8,
    query: '"Slack login issues on mobile"',
    chatbot: 'IT Support',
    chatbotColor: 'blue',
    volume: '490',
    resolution: 91,
    resolutionText: '91% Resolved',
  },
  {
    id: 9,
    query: '"Gym reimbursement forms"',
    chatbot: 'HR Onboarding',
    chatbotColor: 'purple',
    volume: '410',
    resolution: 65,
    resolutionText: '65% Resolved',
  },
  {
    id: 10,
    query: '"Compliance training deadline"',
    chatbot: 'Compliance',
    chatbotColor: 'orange',
    volume: '385',
    resolution: 94,
    resolutionText: '94% Resolved',
  },
];

const getChatbotBadgeClass = (color: string) => {
  const colors = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

const getResolutionBadgeClass = (resolution: number) => {
  if (resolution >= 90) return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
  if (resolution >= 75) return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
  return 'bg-red-500/10 text-red-400 border-red-500/20';
};

const getResolutionBarClass = (resolution: number) => {
  if (resolution >= 90) return 'bg-emerald-500';
  if (resolution >= 75) return 'bg-orange-500';
  return 'bg-red-500';
};

export default function MostFrequentQueriesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState('last30');
  const [selectedChatbot, setSelectedChatbot] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  return (
    <AdminLayout
      brandName="Tap Assist"
      brandSubtitle="Admin Console"
      brandIcon="smart_toy"
      navItems={navItems}
      userInfo={userInfo}
      breadcrumbs={breadcrumbs}
      navbarActions={
        <button className="text-[#9da6b9] hover:text-white transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      }
    >
      <div className="flex flex-col gap-6 pb-20">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-white">Most Frequent Queries</h2>
          <p className="text-[#9da6b9] text-sm">
            Analyze top questions asked by employees to identify gaps in knowledge base and improve
            chatbot performance.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-[#1e232e] border border-[#282e39] rounded-xl p-4 flex flex-col xl:flex-row gap-4 justify-between items-start xl:items-center shadow-sm">
          <div className="w-full xl:w-96 relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="material-symbols-outlined text-[#9da6b9] group-focus-within:text-primary transition-colors">
                search
              </span>
            </div>
            <input
              className="block w-full p-2.5 pl-10 text-sm text-white bg-[#111318] border border-[#282e39] rounded-lg focus:ring-primary focus:border-primary placeholder-[#9da6b9]/60"
              placeholder="Search keywords in query..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-start sm:items-center w-full xl:w-auto">
            {/* Date Range */}
            <div className="relative w-full sm:w-40">
              <select
                className="appearance-none w-full bg-[#111318] border border-[#282e39] text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 pr-8 cursor-pointer"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              >
                <option value="last7">Last 7 Days</option>
                <option value="last30">Last 30 Days</option>
                <option value="quarter">This Quarter</option>
                <option value="year">Last Year</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#9da6b9]">
                <span className="material-symbols-outlined text-lg">calendar_today</span>
              </div>
            </div>

            {/* Chatbot Filter */}
            <div className="relative w-full sm:w-40">
              <select
                className="appearance-none w-full bg-[#111318] border border-[#282e39] text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 pr-8 cursor-pointer"
                value={selectedChatbot}
                onChange={(e) => setSelectedChatbot(e.target.value)}
              >
                <option value="all">All Chatbots</option>
                <option value="hr">HR Onboarding</option>
                <option value="it">IT Support</option>
                <option value="compliance">Compliance</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#9da6b9]">
                <span className="material-symbols-outlined text-lg">smart_toy</span>
              </div>
            </div>

            {/* Status Filter */}
            <div className="relative w-full sm:w-40">
              <select
                className="appearance-none w-full bg-[#111318] border border-[#282e39] text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 pr-8 cursor-pointer"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="high">Resolved (&gt;90%)</option>
                <option value="low">Needs Attention (&lt;70%)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#9da6b9]">
                <span className="material-symbols-outlined text-lg">filter_alt</span>
              </div>
            </div>

            <div className="h-8 w-px bg-[#282e39] mx-1 hidden xl:block"></div>

            {/* Export Button */}
            <button className="flex items-center justify-center gap-2 bg-[#111318] border border-[#282e39] hover:bg-[#282e39] text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm h-[42px] w-full sm:w-auto">
              <span className="material-symbols-outlined text-lg">download</span>
              Export
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#1e232e] border border-[#282e39] rounded-xl overflow-hidden flex flex-col shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#161920] border-b border-[#282e39]">
                <tr>
                  <th className="py-3 px-6 text-xs font-semibold text-[#9da6b9] uppercase tracking-wider cursor-pointer hover:text-white group user-select-none">
                    <div className="flex items-center gap-1">
                      Query
                      <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 text-[#9da6b9]">
                        unfold_more
                      </span>
                    </div>
                  </th>
                  <th className="py-3 px-6 text-xs font-semibold text-[#9da6b9] uppercase tracking-wider cursor-pointer hover:text-white group user-select-none">
                    <div className="flex items-center gap-1">
                      Chatbot
                      <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 text-[#9da6b9]">
                        unfold_more
                      </span>
                    </div>
                  </th>
                  <th className="py-3 px-6 text-xs font-semibold text-[#9da6b9] uppercase tracking-wider cursor-pointer hover:text-white group user-select-none text-right">
                    <div className="flex items-center gap-1 justify-end">
                      Volume
                      <span className="material-symbols-outlined text-sm text-primary">
                        arrow_downward
                      </span>
                    </div>
                  </th>
                  <th className="py-3 px-6 text-xs font-semibold text-[#9da6b9] uppercase tracking-wider cursor-pointer hover:text-white group user-select-none text-right">
                    <div className="flex items-center gap-1 justify-end">
                      Avg. Resolution
                      <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 text-[#9da6b9]">
                        unfold_more
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#282e39]">
                {queries.map((query) => (
                  <tr key={query.id} className="hover:bg-[#111318]/50 transition-colors group">
                    <td className="py-4 px-6 text-sm text-white font-medium">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#9da6b9] text-lg">
                          search
                        </span>
                        {query.query}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-[#9da6b9]">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2 py-1 rounded border text-xs ${getChatbotBadgeClass(query.chatbotColor)}`}
                      >
                        {query.chatbot}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-white text-right font-mono">
                      {query.volume}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex flex-col items-end gap-1">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${getResolutionBadgeClass(query.resolution)}`}
                        >
                          {query.resolutionText}
                        </span>
                        <div className="w-24 h-1 bg-[#282e39] rounded-full overflow-hidden">
                          <div
                            className={`h-full ${getResolutionBarClass(query.resolution)} rounded-full`}
                            style={{ width: `${query.resolution}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-[#282e39] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm text-[#9da6b9]">
              Showing <span className="text-white font-medium">1-10</span> of{' '}
              <span className="text-white font-medium">142</span> results
            </span>
            <div className="flex items-center gap-2">
              <button
                className="flex items-center justify-center size-8 rounded hover:bg-[#111318] text-[#9da6b9] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>
              <button className="flex items-center justify-center size-8 rounded bg-primary text-white text-sm font-medium transition-colors">
                1
              </button>
              <button className="flex items-center justify-center size-8 rounded hover:bg-[#111318] text-[#9da6b9] hover:text-white text-sm font-medium transition-colors">
                2
              </button>
              <button className="flex items-center justify-center size-8 rounded hover:bg-[#111318] text-[#9da6b9] hover:text-white text-sm font-medium transition-colors">
                3
              </button>
              <span className="text-[#9da6b9] px-1">...</span>
              <button className="flex items-center justify-center size-8 rounded hover:bg-[#111318] text-[#9da6b9] hover:text-white text-sm font-medium transition-colors">
                15
              </button>
              <button className="flex items-center justify-center size-8 rounded hover:bg-[#111318] text-[#9da6b9] hover:text-white transition-colors">
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
