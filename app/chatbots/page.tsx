'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { StatusBadge } from '@/components/dashboard';
import { SearchBar, Dropdown, Button, Pagination } from '@/components/common';
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

// Mock chatbot data
const chatbots = [
  {
    id: 1,
    name: 'Onboarding Assistant',
    version: 'v2.4.0',
    icon: 'school',
    iconColor: 'text-green-500',
    iconBg: 'bg-green-500/20',
    status: 'active' as const,
    lastUpdate: '2 hours ago',
    updatedBy: 'Sarah Jenkins',
    description: 'Helps new hires navigate co...',
  },
  {
    id: 2,
    name: 'Benefits FAQ',
    version: 'v1.1.2',
    icon: 'grade',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-500/20',
    status: 'learning' as const,
    lastUpdate: '5 mins ago',
    updatedBy: 'System Auto-update',
    description: 'Answers questions regardin...',
  },
  {
    id: 3,
    name: 'Holiday Policy',
    version: 'v1.0.0',
    icon: 'wb_twilight',
    iconColor: 'text-gray-400',
    iconBg: 'bg-gray-500/20',
    status: 'inactive' as const,
    lastUpdate: 'Oct 12, 2023',
    updatedBy: 'Tom Cook',
    description: 'Guidance on PTO requests a...',
  },
  {
    id: 4,
    name: 'IT Support Bot',
    version: 'v3.0.1',
    icon: 'warning',
    iconColor: 'text-red-400',
    iconBg: 'bg-red-500/20',
    status: 'error' as const,
    lastUpdate: '10 mins ago',
    updatedBy: 'API Timeout',
    description: 'Technical troubleshooting fo...',
  },
  {
    id: 5,
    name: 'Culture Code',
    version: 'v1.5.0',
    icon: 'encrypted',
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-500/20',
    status: 'active' as const,
    lastUpdate: '1 day ago',
    updatedBy: 'Sarah Jenkins',
    description: 'Company values, mission st...',
  },
];

const statusOptions = [
  { label: 'All Statuses', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Learning', value: 'learning' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Error', value: 'error' },
];

const sortOptions = [
  { label: 'Newest First', value: 'newest' },
  { label: 'Oldest First', value: 'oldest' },
  { label: 'Name A-Z', value: 'name-asc' },
  { label: 'Name Z-A', value: 'name-desc' },
];

// Breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [{ label: 'Chatbot Management' }];

export default function ChatbotsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const totalItems = 12;
  const showingStart = (currentPage - 1) * itemsPerPage + 1;
  const showingEnd = Math.min(currentPage * itemsPerPage, totalItems);

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
      <div className="flex flex-col gap-6 pb-24">
        {/* Page Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-3xl font-bold">Chatbot Management</h1>
          <p className="text-[#9da6b9] text-base">
            Manage, monitor, and configure your AI training assistants.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <SearchBar
            placeholder="Search by name or description..."
            onSearch={setSearchQuery}
            className="flex-1"
          />
          <div className="flex gap-2">
            <Dropdown
              label="All Statuses"
              options={statusOptions}
              value={statusFilter}
              onChange={setStatusFilter}
            />
            <Dropdown
              label="Newest First"
              options={sortOptions}
              value={sortBy}
              onChange={setSortBy}
              icon="filter_list"
            />
          </div>
        </div>

        {/* Chatbots Table */}
        <div className="flex flex-col bg-[#1e232e] border border-[#282e39] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#282e39] border-b border-[#3b4354]">
                <tr>
                  <th className="px-6 py-4 text-left text-[#9da6b9] text-xs font-semibold uppercase tracking-wider">
                    Chatbot Name
                  </th>
                  <th className="px-6 py-4 text-left text-[#9da6b9] text-xs font-semibold uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-[#9da6b9] text-xs font-semibold uppercase tracking-wider hidden md:table-cell">
                    Last Update
                  </th>
                  <th className="px-6 py-4 text-left text-[#9da6b9] text-xs font-semibold uppercase tracking-wider hidden lg:table-cell">
                    Description
                  </th>
                  <th className="px-6 py-4 text-right text-[#9da6b9] text-xs font-semibold uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#282e39]">
                {chatbots.map((chatbot) => (
                  <tr
                    key={chatbot.id}
                    className="hover:bg-[#232936] transition-colors cursor-pointer"
                    onClick={() => router.push(`/chatbots/${chatbot.id}`)}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg ${chatbot.iconBg} flex items-center justify-center ${chatbot.iconColor}`}
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            {chatbot.icon}
                          </span>
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">{chatbot.name}</p>
                          <p className="text-[#9da6b9] text-xs">{chatbot.version}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {chatbot.status === 'active' && (
                        <StatusBadge status="active" label="Active" showDot />
                      )}
                      {chatbot.status === 'learning' && (
                        <StatusBadge status="learning" label="Learning" icon="sync" animated />
                      )}
                      {chatbot.status === 'inactive' && (
                        <StatusBadge status="inactive" label="Paused" icon="pause" />
                      )}
                      {chatbot.status === 'error' && (
                        <StatusBadge status="error" label="Error" icon="error" />
                      )}
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <p className="text-white text-sm">{chatbot.lastUpdate}</p>
                      <p className="text-[#9da6b9] text-xs">by {chatbot.updatedBy}</p>
                    </td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <p className="text-[#9da6b9] text-sm">{chatbot.description}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            router.push(`/chatbots/${chatbot.id}`);
                          }}
                          className="p-2 text-[#9da6b9] hover:text-white hover:bg-[#282e39] rounded-lg transition-colors"
                          title="View"
                        >
                          <span className="material-symbols-outlined text-[20px]">visibility</span>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            router.push(`/chatbots/${chatbot.id}/config`);
                          }}
                          className="p-2 text-[#9da6b9] hover:text-white hover:bg-[#282e39] rounded-lg transition-colors"
                          title="Settings"
                        >
                          <span className="material-symbols-outlined text-[20px]">settings</span>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle delete
                          }}
                          className="p-2 text-[#9da6b9] hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            showingStart={showingStart}
            showingEnd={showingEnd}
          />
        </div>

        {/* Create Button - Fixed Position */}
        <div className="fixed bottom-8 right-8">
          <Button
            variant="primary"
            size="lg"
            icon="add"
            iconPosition="left"
            onClick={() => router.push('/chatbots/create')}
          >
            Create New Chatbot
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
}
