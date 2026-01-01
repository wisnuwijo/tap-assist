'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/common';
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
const breadcrumbs: BreadcrumbItem[] = [{ label: 'Chatbots' }, { label: 'Knowledge Gaps' }];

// Mock knowledge gaps data
const knowledgeGaps = [
  {
    id: 1,
    question: 'What is the reimbursement limit for team dinners?',
    description: 'Users are repeatedly asking about dining policies not covered in the current handbook.',
    status: 'pending' as const,
    frequency: 42,
    firstSeen: '2 days ago',
    expanded: false,
  },
  {
    id: 2,
    question: 'Guest Wi-Fi password',
    description: 'Common visitor query. IT requested to upload the new policy document.',
    status: 'addressing' as const,
    frequency: 18,
    lastSeen: '4 hours ago',
    assignedTo: 'John',
    expanded: false,
  },
  {
    id: 3,
    question: 'How do I reset my Jira password?',
    description: '',
    status: 'pending' as const,
    frequency: 5,
    firstSeen: 'today',
    expanded: false,
  },
  {
    id: 4,
    question: 'Paternity leave duration',
    description: "Added link to 'Benefits_Summary_2024.pdf'",
    status: 'resolved' as const,
    resolvedBy: 'Jane',
    resolvedWhen: 'yesterday',
    expanded: false,
  },
];

export default function KnowledgeGapsPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [gaps, setGaps] = useState(knowledgeGaps);
  const [activeTab, setActiveTab] = useState<'text' | 'document' | 'link'>('text');

  const toggleExpanded = (id: number) => {
    setGaps(gaps.map((gap) => (gap.id === id ? { ...gap, expanded: !gap.expanded } : gap)));
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: {
        bg: 'bg-orange-100 dark:bg-orange-900/30',
        text: 'text-orange-700 dark:text-orange-300',
        border: 'border-orange-200 dark:border-orange-800',
        label: 'Pending Review',
      },
      addressing: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-700 dark:text-blue-300',
        border: 'border-blue-200 dark:border-blue-800',
        label: 'Being Addressed',
      },
      resolved: {
        bg: 'bg-green-100 dark:bg-green-900/20',
        text: 'text-green-700 dark:text-green-400',
        border: 'border-green-200 dark:border-green-800',
        label: 'Resolved',
      },
    };

    const style = styles[status as keyof typeof styles];
    return (
      <span
        className={`px-2 py-0.5 rounded text-xs font-bold ${style.bg} ${style.text} border ${style.border}`}
      >
        {style.label}
      </span>
    );
  };

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
      <div className="flex flex-col gap-8 pb-20">
        {/* Page Header */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white">Knowledge Gaps Management</h1>
              <p className="text-[#9da6b9] mt-1 text-sm">
                Review unanswered queries and train your chatbot to improve coverage.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" size="md" icon="download" iconPosition="left">
                Export Report
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#1e232e] border border-[#282e39] shadow-sm flex items-center gap-4">
              <div className="p-3 rounded-lg bg-orange-900/20 text-orange-400">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <div>
                <p className="text-sm text-[#9da6b9] font-medium">Pending Review</p>
                <p className="text-2xl font-bold text-white">24</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#1e232e] border border-[#282e39] shadow-sm flex items-center gap-4">
              <div className="p-3 rounded-lg bg-blue-900/20 text-blue-400">
                <span className="material-symbols-outlined">engineering</span>
              </div>
              <div>
                <p className="text-sm text-[#9da6b9] font-medium">Being Addressed</p>
                <p className="text-2xl font-bold text-white">12</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#1e232e] border border-[#282e39] shadow-sm flex items-center gap-4">
              <div className="p-3 rounded-lg bg-green-900/20 text-green-400">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div>
                <p className="text-sm text-[#9da6b9] font-medium">Resolved This Week</p>
                <p className="text-2xl font-bold text-white">58</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="p-4 rounded-xl bg-[#1e232e] border border-[#282e39] shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <span className="absolute left-3 top-2.5 material-symbols-outlined text-[#9da6b9] text-[20px]">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#1a1f2e] border-[#282e39] text-white focus:ring-[#135bec] focus:border-[#135bec] text-sm placeholder-[#9da6b9]"
              placeholder="Search queries or topics..."
              type="text"
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <select className="rounded-lg bg-[#1a1f2e] border-[#282e39] text-white text-sm focus:ring-[#135bec] focus:border-[#135bec] py-2 px-3">
              <option>Status: All</option>
              <option>Pending Review</option>
              <option>Being Addressed</option>
              <option>Resolved</option>
            </select>
            <select className="rounded-lg bg-[#1a1f2e] border-[#282e39] text-white text-sm focus:ring-[#135bec] focus:border-[#135bec] py-2 px-3">
              <option>Sort by: Frequency</option>
              <option>Sort by: Date (Newest)</option>
              <option>Sort by: Date (Oldest)</option>
            </select>
          </div>
        </div>

        {/* Knowledge Gaps List */}
        <div className="flex flex-col gap-4">
          {gaps.map((gap) => (
            <div
              key={gap.id}
              className={`bg-[#1e232e] rounded-xl border border-[#282e39] shadow-sm overflow-hidden ${
                gap.status === 'resolved' ? 'opacity-75 hover:opacity-100' : ''
              } transition-opacity`}
            >
              <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {getStatusBadge(gap.status)}
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-[#282e39] text-[#9da6b9] flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">repeat</span>
                        {gap.frequency} times
                      </span>
                      <span className="text-xs text-[#6b7280]">
                        {gap.status === 'resolved'
                          ? `Resolved ${gap.resolvedWhen} by ${gap.resolvedBy}`
                          : gap.firstSeen
                          ? `First seen ${gap.firstSeen}`
                          : `Last seen ${gap.lastSeen}`}
                      </span>
                    </div>
                    <h3
                      className={`text-lg font-semibold ${
                        gap.status === 'resolved' ? 'text-[#9da6b9]' : 'text-white'
                      }`}
                    >
                      "{gap.question}"
                    </h3>
                    {gap.description && (
                      <p className="text-sm text-[#9da6b9] mt-1">{gap.description}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {gap.status === 'addressing' && gap.assignedTo && (
                      <>
                        <div className="flex items-center -space-x-2">
                          <div className="size-6 rounded-full bg-[#282e39] border border-[#1e232e] flex items-center justify-center text-[10px] font-bold text-[#9da6b9]">
                            {gap.assignedTo.substring(0, 2).toUpperCase()}
                          </div>
                        </div>
                        <span className="text-xs text-[#9da6b9]">Assigned to {gap.assignedTo}</span>
                      </>
                    )}
                    {gap.status === 'resolved' && (
                      <button className="text-xs font-medium text-[#135bec] hover:underline">
                        Edit Solution
                      </button>
                    )}
                    {gap.status === 'pending' && gap.id === 1 && (
                      <button className="p-2 text-[#9da6b9] hover:text-white transition-colors rounded-lg hover:bg-[#282e39]">
                        <span className="material-symbols-outlined">visibility_off</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Expandable Solution Form for First Item */}
                {gap.id === 1 && (
                  <div className="mt-2 bg-[#1a1f2e] rounded-lg p-4 border border-[#282e39]">
                    <div className="flex items-center gap-4 mb-3 border-b border-[#282e39] pb-2">
                      <span className="text-xs font-bold uppercase text-[#9da6b9] tracking-wider">
                        Fill Knowledge Gap
                      </span>
                      <div className="flex gap-4">
                        <button
                          onClick={() => setActiveTab('text')}
                          className={`text-xs font-medium transition-colors ${
                            activeTab === 'text'
                              ? 'text-[#135bec] border-b-2 border-[#135bec] pb-2 -mb-2.5'
                              : 'text-[#9da6b9] hover:text-white'
                          }`}
                        >
                          Text Answer
                        </button>
                        <button
                          onClick={() => setActiveTab('document')}
                          className={`text-xs font-medium transition-colors ${
                            activeTab === 'document'
                              ? 'text-[#135bec] border-b-2 border-[#135bec] pb-2 -mb-2.5'
                              : 'text-[#9da6b9] hover:text-white'
                          }`}
                        >
                          Upload Document
                        </button>
                        <button
                          onClick={() => setActiveTab('link')}
                          className={`text-xs font-medium transition-colors ${
                            activeTab === 'link'
                              ? 'text-[#135bec] border-b-2 border-[#135bec] pb-2 -mb-2.5'
                              : 'text-[#9da6b9] hover:text-white'
                          }`}
                        >
                          Link Resource
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <textarea
                        className="w-full rounded-lg bg-[#0f1419] border-[#282e39] text-white focus:ring-[#135bec] focus:border-[#135bec] placeholder-[#9da6b9] text-sm resize-none p-3"
                        placeholder="Enter the official answer for the chatbot to learn..."
                        rows={3}
                      />
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-[#6b7280]">
                          This answer will be added to the knowledge base immediately.
                        </p>
                        <button className="px-4 py-2 rounded-lg bg-[#135bec] text-white text-sm font-medium hover:bg-[#0e4bce] transition-colors shadow-lg shadow-primary/20">
                          Add Solution
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons for Being Addressed */}
                {gap.status === 'addressing' && (
                  <div className="flex gap-3 mt-2">
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1a1f2e] border border-[#282e39] text-[#9da6b9] text-sm font-medium hover:bg-[#282e39] transition-colors">
                      <span className="material-symbols-outlined text-[18px]">add_circle</span>
                      Add Solution
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1a1f2e] border border-[#282e39] text-[#9da6b9] text-sm font-medium hover:bg-[#282e39] transition-colors">
                      <span className="material-symbols-outlined text-[18px]">person_add</span>
                      Assign
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-transparent text-green-400 text-sm font-medium hover:bg-green-900/10 transition-colors ml-auto">
                      <span className="material-symbols-outlined text-[18px]">check</span>
                      Mark Resolved
                    </button>
                  </div>
                )}

                {/* Quick Answer Form for Third Item */}
                {gap.id === 3 && (
                  <div className="flex gap-3 mt-1">
                    <input
                      className="flex-1 rounded-lg bg-[#1a1f2e] border-[#282e39] text-white focus:ring-[#135bec] focus:border-[#135bec] text-sm py-2 px-3 placeholder-[#9da6b9]"
                      placeholder="Type quick answer here..."
                      type="text"
                    />
                    <button className="px-4 py-2 rounded-lg bg-[#1e232e] border border-[#282e39] text-white text-sm font-medium hover:bg-[#282e39] transition-colors">
                      Link URL
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-[#135bec] text-white text-sm font-medium hover:bg-[#0e4bce] transition-colors">
                      Save
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-[#282e39] pt-6">
          <p className="text-sm text-[#9da6b9]">
            Showing <span className="font-bold text-white">1</span> to{' '}
            <span className="font-bold text-white">4</span> of{' '}
            <span className="font-bold text-white">36</span> gaps
          </p>
          <div className="flex gap-2">
            <button
              className="px-3 py-2 rounded-lg border border-[#282e39] text-[#9da6b9] text-sm font-medium hover:bg-[#1e232e] disabled:opacity-50"
              disabled
            >
              Previous
            </button>
            <button className="px-3 py-2 rounded-lg border border-[#282e39] text-white text-sm font-medium hover:bg-[#1e232e]">
              Next
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
