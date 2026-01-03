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
const breadcrumbs: BreadcrumbItem[] = [{ label: 'Chatbots' }, { label: 'Knowledge Base Logs' }];

// Mock log data
const logs = [
  {
    id: 1,
    timestamp: 'Oct 24, 2023',
    time: '14:32:05',
    eventType: 'AI Learning Started',
    eventIcon: 'model_training',
    eventColor: 'blue',
    documentName: 'Employee_Handbook_2024.pdf',
    documentId: 'doc_8829a7f',
    userType: 'system' as const,
    userName: 'System (Auto)',
    status: 'processing' as const,
  },
  {
    id: 2,
    timestamp: 'Oct 24, 2023',
    time: '14:30:12',
    eventType: 'Document Uploaded',
    eventIcon: 'cloud_upload',
    eventColor: 'purple',
    documentName: 'Employee_Handbook_2024.pdf',
    documentId: 'doc_8829a7f',
    userType: 'user' as const,
    userName: 'Jane Administrator',
    userAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuABHdmjjP1erYLp7Pw11zg5KKSYdzcq6HEtSzLNdQ2zg71-D4VNjG2HOjVAU3sfK05qyDpqlpwtQYmsG2Lv22VHORSL7ZSRCbEOEpeHNp8fvQ0IGLMMnvK_womtT6zZjKTPfE5bs67ed0p7hPnrR53zfxYi7hzXNJwfrhXBqAiKl6RFHOhbYLsJpdXEHURhaqZuGA-SAblF9PHdlBaX-D_o5lt_ifOjvnw68L0vXnbxRIhLcr36IbpwNFUyBGuN-xnbpwWVD2apQwU',
    status: 'success' as const,
  },
  {
    id: 3,
    timestamp: 'Oct 23, 2023',
    time: '09:15:44',
    eventType: 'Version Created',
    eventIcon: 'history',
    eventColor: 'orange',
    documentName: 'Safety_Protocols_v3.docx',
    documentId: 'doc_b219c4d',
    userType: 'user' as const,
    userName: 'Jane Administrator',
    userAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuABHdmjjP1erYLp7Pw11zg5KKSYdzcq6HEtSzLNdQ2zg71-D4VNjG2HOjVAU3sfK05qyDpqlpwtQYmsG2Lv22VHORSL7ZSRCbEOEpeHNp8fvQ0IGLMMnvK_womtT6zZjKTPfE5bs67ed0p7hPnrR53zfxYi7hzXNJwfrhXBqAiKl6RFHOhbYLsJpdXEHURhaqZuGA-SAblF9PHdlBaX-D_o5lt_ifOjvnw68L0vXnbxRIhLcr36IbpwNFUyBGuN-xnbpwWVD2apQwU',
    status: 'success' as const,
  },
  {
    id: 4,
    timestamp: 'Oct 22, 2023',
    time: '11:20:01',
    eventType: 'Document Upload Failed',
    eventIcon: 'error',
    eventColor: 'red',
    documentName: 'Q3_Financials_Draft.pdf',
    documentId: 'N/A',
    userType: 'initials' as const,
    userName: 'Mark Developer',
    userInitials: 'MD',
    status: 'failed' as const,
  },
  {
    id: 5,
    timestamp: 'Oct 20, 2023',
    time: '16:45:22',
    eventType: 'Metadata Updated',
    eventIcon: 'edit_document',
    eventColor: 'teal',
    documentName: 'Benefits_Summary_2023.pdf',
    documentId: 'doc_a449d2e',
    userType: 'user' as const,
    userName: 'Jane Administrator',
    userAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuABHdmjjP1erYLp7Pw11zg5KKSYdzcq6HEtSzLNdQ2zg71-D4VNjG2HOjVAU3sfK05qyDpqlpwtQYmsG2Lv22VHORSL7ZSRCbEOEpeHNp8fvQ0IGLMMnvK_womtT6zZjKTPfE5bs67ed0p7hPnrR53zfxYi7hzXNJwfrhXBqAiKl6RFHOhbYLsJpdXEHURhaqZuGA-SAblF9PHdlBaX-D_o5lt_ifOjvnw68L0vXnbxRIhLcr36IbpwNFUyBGuN-xnbpwWVD2apQwU',
    status: 'success' as const,
  },
];

const eventColorClasses = {
  blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
  red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
  teal: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
};

const getStatusBadge = (status: 'processing' | 'success' | 'failed') => {
  switch (status) {
    case 'processing':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
          <span className="block size-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
          Processing
        </span>
      );
    case 'success':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-900/50">
          <span className="material-symbols-outlined text-[14px]">check</span>
          Success
        </span>
      );
    case 'failed':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900/50">
          <span className="material-symbols-outlined text-[14px]">close</span>
          Failed
        </span>
      );
  }
};

export default function KnowledgeBaseLogsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [eventTypeFilter, setEventTypeFilter] = useState('all');
  const [userFilter, setUserFilter] = useState('all');

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
      <div className="flex flex-col gap-6 pb-20">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Knowledge Base Logs</h1>
            <p className="text-slate-500 dark:text-[#9da6b9] mt-1 text-sm">
              Audit trail of document interactions, version history, and AI learning events.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#282e39] text-slate-700 dark:text-white font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Export CSV
            </button>
            <button className="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-blue-600 transition-colors text-sm flex items-center gap-2 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-[18px]">refresh</span>
              Refresh
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-[#1e232e] rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-50 dark:bg-[#282e39] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-primary focus:border-primary text-sm transition-shadow"
              placeholder="Search by Document Name or ID..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-48">
              <select
                className="w-full py-2.5 px-3 rounded-lg bg-slate-50 dark:bg-[#282e39] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white focus:ring-primary focus:border-primary text-sm cursor-pointer"
                value={eventTypeFilter}
                onChange={(e) => setEventTypeFilter(e.target.value)}
              >
                <option value="all">All Event Types</option>
                <option value="uploaded">Document Uploaded</option>
                <option value="updated">Document Updated</option>
                <option value="learning">AI Learning Started</option>
                <option value="version">Version Created</option>
                <option value="deletion">Deletion</option>
              </select>
            </div>
            <div className="w-full sm:w-48">
              <select
                className="w-full py-2.5 px-3 rounded-lg bg-slate-50 dark:bg-[#282e39] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white focus:ring-primary focus:border-primary text-sm cursor-pointer"
                value={userFilter}
                onChange={(e) => setUserFilter(e.target.value)}
              >
                <option value="all">All Users</option>
                <option value="jane">Jane Administrator</option>
                <option value="system">System (AI)</option>
                <option value="mark">Mark Developer</option>
              </select>
            </div>
            <div className="w-full sm:w-auto relative group">
              <button className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#282e39] text-slate-700 dark:text-white text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                <span>Last 30 Days</span>
                <span className="material-symbols-outlined text-[16px] text-slate-400">expand_more</span>
              </button>
            </div>
          </div>
        </div>

        {/* Logs Table */}
        <div className="bg-white dark:bg-[#1e232e] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 dark:bg-[#282e39] border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Event Type
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Document Name / ID
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    User Responsible
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {logs.map((log) => (
                  <tr
                    key={log.id}
                    className="group hover:bg-slate-50 dark:hover:bg-[#282e39]/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap">
                      {log.timestamp}{' '}
                      <span className="text-xs text-slate-400 ml-1">{log.time}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div
                          className={`p-1.5 rounded-full ${eventColorClasses[log.eventColor as keyof typeof eventColorClasses]}`}
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            {log.eventIcon}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-slate-900 dark:text-white">
                          {log.eventType}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm text-slate-900 dark:text-white font-medium">
                          {log.documentName}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">
                          ID: {log.documentId}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {log.userType === 'system' ? (
                          <div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">
                            SYS
                          </div>
                        ) : log.userType === 'initials' ? (
                          <div className="size-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xs font-bold text-indigo-600 dark:text-indigo-300">
                            {log.userInitials}
                          </div>
                        ) : (
                          <div
                            className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center"
                            style={{ backgroundImage: `url("${log.userAvatar}")` }}
                          ></div>
                        )}
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          {log.userName}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(log.status)}</td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <button
                        className="text-slate-400 hover:text-primary transition-colors p-1"
                        title={log.status === 'failed' ? 'View Error Details' : 'View Details'}
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          {log.status === 'failed' ? 'info' : 'visibility'}
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#282e39]/30">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Showing <span className="font-medium text-slate-900 dark:text-white">1</span> to{' '}
              <span className="font-medium text-slate-900 dark:text-white">5</span> of{' '}
              <span className="font-medium text-slate-900 dark:text-white">128</span> logs
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#282e39] text-slate-400 cursor-not-allowed text-sm">
                Previous
              </button>
              <button className="px-3 py-1.5 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#282e39] hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-white text-sm transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
