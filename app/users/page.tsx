'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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
const breadcrumbs: BreadcrumbItem[] = [{ label: 'User Management' }, { label: 'Overview' }];

// Users data
const users = [
  {
    id: 1,
    name: 'Elena Smith',
    email: 'elena.smith@tapassist.ai',
    initials: 'ES',
    initialsColor: 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400',
    employeeId: 'EMP-2023-045',
    department: 'Human Resources',
    role: 'Manager',
    roleColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    lastActive: 'Oct 24, 2023',
    isActive: true,
  },
  {
    id: 2,
    name: 'Marcus Kim',
    email: 'marcus.kim@tapassist.ai',
    initials: 'MK',
    initialsColor: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400',
    employeeId: 'EMP-2023-102',
    department: 'Engineering',
    role: 'Employee',
    roleColor: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300',
    lastActive: 'Just now',
    isActive: true,
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    email: 'sarah.j@tapassist.ai',
    initials: 'SJ',
    initialsColor: 'bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400',
    employeeId: 'EMP-2022-089',
    department: 'Operations',
    role: 'Admin',
    roleColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    lastActive: 'Oct 22, 2023',
    isActive: true,
  },
  {
    id: 4,
    name: 'David Liu',
    email: 'david.liu@tapassist.ai',
    initials: 'DL',
    initialsColor: 'bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400',
    employeeId: 'EMP-2023-156',
    department: 'Sales',
    role: 'Employee',
    roleColor: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300',
    lastActive: 'Oct 20, 2023',
    isActive: true,
  },
  {
    id: 5,
    name: 'James Rodriguez',
    email: 'james.r@tapassist.ai',
    initials: 'JR',
    initialsColor: 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400',
    employeeId: 'EMP-2021-012',
    department: 'Logistics',
    role: 'Deactivated',
    roleColor: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    lastActive: 'Sep 15, 2023',
    isActive: false,
  },
];

export default function UserManagementPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

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
      <div className="flex flex-col gap-6 h-full pb-6">
        {/* Search and Actions */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
          <div className="relative w-full sm:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-400" style={{ fontSize: '20px' }}>
                search
              </span>
            </div>
            <input
              className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 dark:border-[#282e39] rounded-lg leading-5 bg-white dark:bg-[#111318] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition duration-150 ease-in-out shadow-sm"
              placeholder="Search users by name, ID or email..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex flex-1 sm:flex-none items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-[#111318] border border-slate-200 dark:border-[#282e39] rounded-lg text-slate-600 dark:text-[#9da6b9] hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors text-sm font-medium shadow-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                filter_list
              </span>
              Filters
            </button>
            <button
              onClick={() => router.push('/users/create')}
              className="flex flex-1 sm:flex-none items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium shadow-sm shadow-blue-500/20"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                add
              </span>
              Add New User
            </button>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] overflow-hidden shadow-sm flex flex-col flex-1 min-h-0">
          <div className="overflow-auto flex-1">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-[#282e39]">
              <thead className="bg-slate-50 dark:bg-[#161b26] sticky top-0 z-10">
                <tr>
                  <th
                    className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                    scope="col"
                  >
                    Name
                  </th>
                  <th
                    className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                    scope="col"
                  >
                    Employee ID
                  </th>
                  <th
                    className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                    scope="col"
                  >
                    Department
                  </th>
                  <th
                    className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                    scope="col"
                  >
                    Role
                  </th>
                  <th
                    className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                    scope="col"
                  >
                    Last Active
                  </th>
                  <th
                    className="px-6 py-4 text-right text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                    scope="col"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-[#282e39] bg-white dark:bg-[#111318]">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    onClick={() => router.push(`/users/${user.id}`)}
                    className={`hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer ${!user.isActive ? 'opacity-70' : ''}`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div
                          className={`size-9 rounded-full ${user.initialsColor} flex items-center justify-center font-semibold text-sm mr-3`}
                        >
                          {user.initials}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">
                            {user.name}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {user.employeeId}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {user.department}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.roleColor}`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {user.lastActive}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors rounded-full p-1 hover:bg-slate-100 dark:hover:bg-white/10"
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-slate-200 dark:border-[#282e39] flex items-center justify-between bg-white dark:bg-[#111318] shrink-0">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Showing <span className="font-medium text-slate-900 dark:text-white">1</span> to{' '}
              <span className="font-medium text-slate-900 dark:text-white">5</span> of{' '}
              <span className="font-medium text-slate-900 dark:text-white">248</span> results
            </div>
            <div className="flex gap-2">
              <button
                className="px-3 py-1.5 border border-slate-200 dark:border-[#282e39] rounded text-sm text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors disabled:opacity-50"
                disabled
              >
                Previous
              </button>
              <button className="px-3 py-1.5 border border-slate-200 dark:border-[#282e39] rounded text-sm text-slate-600 dark:text-white hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
