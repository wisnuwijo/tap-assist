'use client';

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
const breadcrumbs: BreadcrumbItem[] = [
  { label: 'User Management' },
  { label: 'Elena Smith Details' },
];

// Activity log data
const activityLog = [
  {
    id: 1,
    timestamp: 'Today, 10:30 AM',
    title: 'Queried chatbot',
    description: 'Topic: "Maternity Leave Policy"',
    detail: '"What is the procedure for maternity leave application?"',
    type: 'active' as const,
  },
  {
    id: 2,
    timestamp: 'Yesterday, 2:15 PM',
    title: 'Updated SOP Document',
    description: "Uploaded 'onboarding_sop_v2.pdf' to knowledge base.",
    type: 'normal' as const,
  },
  {
    id: 3,
    timestamp: 'Oct 24, 09:41 AM',
    title: 'Successful Login',
    description: 'IP: 192.168.1.45 (Office Network)',
    type: 'normal' as const,
  },
  {
    id: 4,
    timestamp: 'Oct 23, 11:20 AM',
    title: 'Failed Login Attempt',
    description: 'Incorrect password entered 3 times.',
    type: 'error' as const,
  },
  {
    id: 5,
    timestamp: 'Oct 20, 08:55 AM',
    title: 'Password Changed',
    description: 'User initiated password reset.',
    type: 'normal' as const,
  },
];

export default function UserDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();

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
      <div className="flex flex-col gap-6 h-full pb-6">
        {/* Back Button and Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <button
            onClick={() => router.push('/users')}
            className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors text-sm font-medium group"
          >
            <span
              className="material-symbols-outlined transition-transform group-hover:-translate-x-1"
              style={{ fontSize: '20px' }}
            >
              arrow_back
            </span>
            Back to User List
          </button>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-white dark:bg-[#111318] border border-slate-200 dark:border-[#282e39] rounded-lg text-slate-700 dark:text-white text-sm font-medium hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors shadow-sm">
              Reset Password
            </button>
            <button className="px-4 py-2 bg-white dark:bg-[#111318] border border-slate-200 dark:border-[#282e39] rounded-lg text-slate-700 dark:text-white text-sm font-medium hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors shadow-sm">
              Change Account Status
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm shadow-blue-500/20 flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                edit
              </span>
              Edit User Profile
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 flex-1 min-h-0">
          {/* Left Column (2/3) */}
          <div className="xl:col-span-2 flex flex-col gap-6">
            {/* User Profile Card */}
            <div className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="size-24 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-3xl shrink-0 border-4 border-white dark:border-[#111318] shadow-sm">
                  ES
                </div>
                <div className="flex-1 min-w-0 w-full">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Elena Smith
                      </h3>
                      <p className="text-slate-500 dark:text-[#9da6b9] mt-1">
                        Senior HR Specialist
                      </p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">
                      <span className="size-2 bg-emerald-500 rounded-full mr-2"></span>
                      Active
                    </span>
                  </div>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Employee ID
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                        EMP-2023-045
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Department
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                        Human Resources
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Email Address
                      </p>
                      <div className="mt-1 flex items-center gap-2">
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          elena.smith@tapassist.ai
                        </p>
                        <button
                          className="text-slate-400 hover:text-primary transition-colors"
                          title="Copy Email"
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                            content_copy
                          </span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Contact Number
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                        +1 (555) 123-4567
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Date Hired
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                        January 15, 2021
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Current Role
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                        Manager
                      </p>
                    </div>
                    <div className="sm:col-span-2 pt-4 border-t border-slate-100 dark:border-[#282e39] mt-2">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-400" style={{ fontSize: '20px' }}>
                          schedule
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          Last login:{' '}
                          <span className="font-medium text-slate-900 dark:text-white">
                            October 24, 2023 at 09:41 AM
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] p-6 shadow-sm">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase">
                  Chatbot Queries
                </p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mt-2">1,248</p>
                <p className="text-xs text-green-500 mt-1 flex items-center">
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                    arrow_upward
                  </span>{' '}
                  12% vs last month
                </p>
              </div>
              <div className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] p-6 shadow-sm">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase">
                  Avg. Session Time
                </p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mt-2">4m 32s</p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">Consistent usage</p>
              </div>
              <div className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] p-6 shadow-sm">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase">
                  SOPs Accessed
                </p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mt-2">14</p>
                <p className="text-xs text-green-500 mt-1 flex items-center">
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                    arrow_upward
                  </span>{' '}
                  2 new this week
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (1/3) - Activity Log */}
          <div className="xl:col-span-1">
            <div className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] shadow-sm flex flex-col h-full">
              <div className="p-6 border-b border-slate-200 dark:border-[#282e39] flex justify-between items-center sticky top-0 bg-white dark:bg-[#111318] rounded-t-xl z-10">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Activity Log</h4>
                <button className="text-primary text-sm font-medium hover:underline">
                  View All
                </button>
              </div>
              <div className="p-6 flex-1 overflow-y-auto">
                <div className="relative pl-4 border-l border-slate-200 dark:border-[#282e39] space-y-8">
                  {activityLog.map((activity) => (
                    <div key={activity.id} className="relative group">
                      <span
                        className={`absolute -left-[21px] top-1 bg-white dark:bg-[#111318] border-2 ${
                          activity.type === 'active'
                            ? 'border-primary'
                            : activity.type === 'error'
                              ? 'border-red-300 dark:border-red-900/50'
                              : 'border-slate-300 dark:border-slate-600'
                        } rounded-full size-2.5 group-hover:scale-125 transition-transform`}
                      ></span>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                        {activity.timestamp}
                      </p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">
                        {activity.title}
                      </p>
                      <p
                        className={`text-sm mt-1 ${
                          activity.type === 'error'
                            ? 'text-red-500 dark:text-red-400'
                            : 'text-slate-600 dark:text-slate-300'
                        } ${activity.description.includes('Uploaded') ? 'text-xs text-slate-500 dark:text-slate-400' : ''}`}
                      >
                        {activity.description}
                      </p>
                      {activity.detail && (
                        <div className="mt-2 p-3 bg-slate-50 dark:bg-[#282e39]/30 rounded-lg text-xs text-slate-600 dark:text-slate-300 font-mono border border-slate-100 dark:border-transparent">
                          {activity.detail}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
