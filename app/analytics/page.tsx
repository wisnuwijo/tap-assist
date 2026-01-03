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
const breadcrumbs: BreadcrumbItem[] = [{ label: 'Analytics' }, { label: 'Overview' }];

// KPI data
const kpiCards = [
  {
    id: 1,
    title: 'Total Questions',
    value: '12,450',
    icon: 'question_answer',
    iconBg: 'bg-primary/20',
    iconColor: 'text-blue-400',
    trend: '+12%',
    trendUp: true,
  },
  {
    id: 2,
    title: 'Answer Rate',
    value: '94.2%',
    icon: 'check_circle',
    iconBg: 'bg-emerald-500/20',
    iconColor: 'text-emerald-400',
    trend: '+1.5%',
    trendUp: true,
  },
  {
    id: 3,
    title: 'Unanswered',
    value: '580',
    icon: 'help',
    iconBg: 'bg-orange-500/20',
    iconColor: 'text-orange-400',
    trend: '-5%',
    trendUp: false,
  },
  {
    id: 4,
    title: 'User Satisfaction',
    value: '4.8',
    valueSubtext: '/5',
    icon: 'thumb_up',
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
    subtitle: 'Based on 3.2k ratings',
  },
];

// Top chatbots data
const topChatbots = [
  { name: 'HR Onboarding', satisfaction: 92, color: 'bg-emerald-500' },
  { name: 'IT Helpdesk', satisfaction: 85, color: 'bg-blue-500' },
  { name: 'Sales Enablement', satisfaction: 78, color: 'bg-purple-500' },
  { name: 'Compliance', satisfaction: 64, color: 'bg-orange-500' },
];

// Frequent queries data
const frequentQueries = [
  {
    id: 1,
    query: '"How do I reset my password?"',
    chatbot: 'IT Support',
    volume: '2,405',
    resolution: '98% Resolved',
    resolutionType: 'high' as const,
  },
  {
    id: 2,
    query: '"Where can I find the holiday calendar?"',
    chatbot: 'HR Onboarding',
    volume: '1,820',
    resolution: '96% Resolved',
    resolutionType: 'high' as const,
  },
  {
    id: 3,
    query: '"How to claim medical insurance?"',
    chatbot: 'HR Onboarding',
    volume: '940',
    resolution: '75% Resolved',
    resolutionType: 'medium' as const,
  },
  {
    id: 4,
    query: '"VPN connection failed error 404"',
    chatbot: 'IT Support',
    volume: '850',
    resolution: '88% Resolved',
    resolutionType: 'high' as const,
  },
];

// Chart data heights (percentages)
const chartData = [40, 55, 45, 70, 90, 60, 30, 50, 65, 80];
const chartLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'];

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState('last30');
  const [selectedChatbot, setSelectedChatbot] = useState('all');

  return (
    <AdminLayout
      brandName="Tap Assist"
      brandSubtitle="Admin Console"
      brandIcon="smart_toy"
      navItems={navItems}
      userInfo={userInfo}
      breadcrumbs={breadcrumbs}
      navbarActions={
        <a href="/notifications" className="text-[#9da6b9] hover:text-white transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </a>
      }
    >
      <div className="flex flex-col gap-8 pb-20">
        {/* Filters & Controls */}
        <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-4">
          <div className="flex flex-1 gap-4 items-end flex-wrap">
            {/* Date Range Picker */}
            <label className="flex flex-col w-48">
              <span className="text-[#9da6b9] text-xs font-medium pb-1.5">Date Range</span>
              <div className="relative">
                <select
                  className="appearance-none w-full bg-[#1e232e] border border-[#282e39] text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 pr-8"
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
            </label>

            {/* Chatbot Picker */}
            <label className="flex flex-col w-48">
              <span className="text-[#9da6b9] text-xs font-medium pb-1.5">Chatbot</span>
              <div className="relative">
                <select
                  className="appearance-none w-full bg-[#1e232e] border border-[#282e39] text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 pr-8"
                  value={selectedChatbot}
                  onChange={(e) => setSelectedChatbot(e.target.value)}
                >
                  <option value="all">All Chatbots</option>
                  <option value="hr">HR Onboarding</option>
                  <option value="it">IT Support</option>
                  <option value="compliance">Compliance Training</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#9da6b9]">
                  <span className="material-symbols-outlined text-lg">expand_more</span>
                </div>
              </div>
            </label>
          </div>

          {/* Action Buttons */}
          <button className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm h-[42px]">
            <span className="material-symbols-outlined text-lg">download</span>
            Export Report
          </button>
        </div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpiCards.map((card) => (
            <div
              key={card.id}
              className="bg-[#1e232e] border border-[#282e39] rounded-xl p-5 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <p className="text-[#9da6b9] text-sm font-medium">{card.title}</p>
                <span className={`${card.iconBg} ${card.iconColor} p-1.5 rounded-lg`}>
                  <span className="material-symbols-outlined text-lg">{card.icon}</span>
                </span>
              </div>
              <div className="flex items-end gap-2">
                <h3 className="text-2xl font-bold text-white">
                  {card.value}
                  {card.valueSubtext && (
                    <span className="text-lg text-[#9da6b9] font-medium">{card.valueSubtext}</span>
                  )}
                </h3>
                {card.trend && (
                  <span className="flex items-center text-xs font-medium text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded mb-1">
                    <span className="material-symbols-outlined text-sm">
                      {card.trendUp ? 'trending_up' : 'trending_down'}
                    </span>
                    {card.trend}
                  </span>
                )}
                {card.subtitle && (
                  <span className="text-xs text-[#9da6b9] mb-1">{card.subtitle}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Bar Chart */}
          <div className="lg:col-span-2 bg-[#1e232e] border border-[#282e39] rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-base font-semibold">Daily Engagement</h3>
              <button className="text-[#9da6b9] hover:text-white transition-colors">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>

            {/* Chart Visualization */}
            <div className="relative h-64 w-full flex items-end justify-between gap-2 px-2 pb-6 border-b border-[#282e39]">
              {/* Background grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6">
                <div className="w-full h-px bg-[#282e39]/50"></div>
                <div className="w-full h-px bg-[#282e39]/50"></div>
                <div className="w-full h-px bg-[#282e39]/50"></div>
                <div className="w-full h-px bg-[#282e39]/50"></div>
              </div>

              {/* Bars */}
              <div className="relative z-10 w-full h-full flex items-end justify-between gap-1">
                {chartData.map((height, index) => (
                  <div
                    key={index}
                    className={`w-full ${
                      height === 90 ? 'bg-primary hover:bg-blue-500' : 'bg-primary/30 hover:bg-primary/50'
                    } rounded-t-sm transition-all relative group cursor-pointer`}
                    style={{ height: `${height}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {Math.round((height / 100) * 1000)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between text-xs text-[#9da6b9] mt-2 px-1">
              {chartLabels.map((label, index) => (
                <span key={index}>{label}</span>
              ))}
            </div>
          </div>

          {/* Top Performing Chatbots */}
          <div className="bg-[#1e232e] border border-[#282e39] rounded-xl p-6 flex flex-col">
            <h3 className="text-white text-base font-semibold mb-6">Top Performing Chatbots</h3>
            <div className="flex flex-col gap-6 flex-1 justify-center">
              {topChatbots.map((chatbot, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white">{chatbot.name}</span>
                    <span className="text-[#9da6b9]">{chatbot.satisfaction}% Satisfaction</span>
                  </div>
                  <div className="h-2 w-full bg-[#282e39] rounded-full overflow-hidden">
                    <div
                      className={`h-full ${chatbot.color} rounded-full transition-all duration-500`}
                      style={{ width: `${chatbot.satisfaction}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Most Frequent Queries Table */}
        <div className="bg-[#1e232e] border border-[#282e39] rounded-xl overflow-hidden">
          <div className="p-6 border-b border-[#282e39] flex items-center justify-between">
            <h3 className="text-white text-base font-semibold">Most Frequent Queries</h3>
            <a className="text-primary text-sm hover:underline" href="/analytics/queries">
              View All
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#161920]">
                <tr>
                  <th className="py-3 px-6 text-xs font-semibold text-[#9da6b9] uppercase tracking-wider">
                    Query
                  </th>
                  <th className="py-3 px-6 text-xs font-semibold text-[#9da6b9] uppercase tracking-wider">
                    Chatbot
                  </th>
                  <th className="py-3 px-6 text-xs font-semibold text-[#9da6b9] uppercase tracking-wider text-center">
                    Volume
                  </th>
                  <th className="py-3 px-6 text-xs font-semibold text-[#9da6b9] uppercase tracking-wider text-right">
                    Avg. Resolution
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#282e39]">
                {frequentQueries.map((query) => (
                  <tr key={query.id} className="hover:bg-[#282e39]/30 transition-colors">
                    <td className="py-4 px-6 text-sm text-white font-medium">{query.query}</td>
                    <td className="py-4 px-6 text-sm text-[#9da6b9]">{query.chatbot}</td>
                    <td className="py-4 px-6 text-sm text-white text-center">{query.volume}</td>
                    <td className="py-4 px-6 text-right">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          query.resolutionType === 'high'
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : 'bg-orange-500/10 text-orange-400'
                        }`}
                      >
                        {query.resolution}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
