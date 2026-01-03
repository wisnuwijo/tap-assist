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
const breadcrumbs: BreadcrumbItem[] = [{ label: 'User Management' }, { label: 'Add New User' }];

export default function CreateUserPage() {
  const router = useRouter();
  const [passwordType, setPasswordType] = useState<'email' | 'manual'>('email');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('User created');
    router.push('/users');
  };

  const handleCancel = () => {
    router.push('/users');
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
        <a href="/notifications" className="text-[#9da6b9] hover:text-white transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </a>
      }
    >
      <div className="flex-1 overflow-y-auto pb-10">
        <div className="max-w-4xl mx-auto h-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] shadow-sm flex flex-col"
          >
            <div className="p-8">
              {/* Section Header */}
              <div className="mb-8 border-b border-slate-200 dark:border-[#282e39] pb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">User Details</h3>
                <p className="text-sm text-slate-500 dark:text-[#9da6b9] mt-1">
                  Please fill in the information below to create a new user account.
                </p>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Full Name */}
                <div className="col-span-2 md:col-span-1">
                  <label
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    className="block w-full rounded-lg border border-slate-200 dark:border-[#282e39] bg-white dark:bg-[#111318] text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5 px-3"
                    id="name"
                    name="name"
                    placeholder="e.g. Alex Morgan"
                    type="text"
                    required
                  />
                </div>

                {/* Employee ID */}
                <div className="col-span-2 md:col-span-1">
                  <label
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    htmlFor="employee_id"
                  >
                    Employee ID
                  </label>
                  <input
                    className="block w-full rounded-lg border border-slate-200 dark:border-[#282e39] bg-white dark:bg-[#111318] text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5 px-3"
                    id="employee_id"
                    name="employee_id"
                    placeholder="e.g. EMP-2024-001"
                    type="text"
                    required
                  />
                </div>

                {/* Email Address */}
                <div className="col-span-2">
                  <label
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-slate-400" style={{ fontSize: '20px' }}>
                        mail
                      </span>
                    </div>
                    <input
                      className="block w-full pl-10 pr-3 rounded-lg border border-slate-200 dark:border-[#282e39] bg-white dark:bg-[#111318] text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5"
                      id="email"
                      name="email"
                      placeholder="name@company.com"
                      type="email"
                      required
                    />
                  </div>
                </div>

                {/* Department */}
                <div className="col-span-2 md:col-span-1">
                  <label
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    htmlFor="department"
                  >
                    Department
                  </label>
                  <select
                    className="block w-full rounded-lg border border-slate-200 dark:border-[#282e39] bg-white dark:bg-[#111318] text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5 px-3"
                    id="department"
                    name="department"
                    required
                  >
                    <option disabled value="">
                      Select a department
                    </option>
                    <option value="engineering">Engineering</option>
                    <option value="hr">Human Resources</option>
                    <option value="sales">Sales &amp; Marketing</option>
                    <option value="operations">Operations</option>
                    <option value="finance">Finance</option>
                  </select>
                </div>

                {/* Role */}
                <div className="col-span-2 md:col-span-1">
                  <label
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    htmlFor="role"
                  >
                    Role
                  </label>
                  <select
                    className="block w-full rounded-lg border border-slate-200 dark:border-[#282e39] bg-white dark:bg-[#111318] text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5 px-3"
                    id="role"
                    name="role"
                    defaultValue="employee"
                    required
                  >
                    <option disabled value="">
                      Select a role
                    </option>
                    <option value="employee">Employee</option>
                    <option value="manager">Manager</option>
                    <option value="admin">Administrator</option>
                  </select>
                </div>
              </div>

              {/* Password & Access Section */}
              <div className="mt-10 pt-8 border-t border-slate-200 dark:border-[#282e39]">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                  Password &amp; Access
                </h3>
                <div className="space-y-5">
                  {/* Email Option */}
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        checked={passwordType === 'email'}
                        onChange={() => setPasswordType('email')}
                        className="h-4 w-4 border-slate-300 text-primary focus:ring-primary dark:border-[#282e39] dark:bg-[#111318] dark:checked:bg-primary dark:checked:border-primary"
                        id="send-email"
                        name="password-type"
                        type="radio"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label
                        className="font-medium text-slate-900 dark:text-white"
                        htmlFor="send-email"
                      >
                        Send password setup link via email
                      </label>
                      <p className="text-slate-500 dark:text-[#9da6b9]">
                        The user will receive an automated email with a secure link to set their own
                        password.
                      </p>
                    </div>
                  </div>

                  {/* Manual Option */}
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        checked={passwordType === 'manual'}
                        onChange={() => setPasswordType('manual')}
                        className="h-4 w-4 border-slate-300 text-primary focus:ring-primary dark:border-[#282e39] dark:bg-[#111318] dark:checked:bg-primary dark:checked:border-primary"
                        id="set-manual"
                        name="password-type"
                        type="radio"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6 w-full">
                      <label
                        className="font-medium text-slate-900 dark:text-white"
                        htmlFor="set-manual"
                      >
                        Set initial password manually
                      </label>
                      <p className="text-slate-500 dark:text-[#9da6b9] mb-3">
                        Create a temporary password for the user.
                      </p>
                      <div className="max-w-md">
                        <input
                          className="block w-full rounded-lg border border-slate-200 dark:border-[#282e39] bg-slate-50 dark:bg-[#161b26] text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5 px-3 disabled:opacity-50 disabled:cursor-not-allowed"
                          name="password"
                          placeholder="Enter temporary password"
                          type="password"
                          disabled={passwordType !== 'manual'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="px-8 py-5 bg-slate-50 dark:bg-[#161b26] border-t border-slate-200 dark:border-[#282e39] rounded-b-xl flex justify-end items-center gap-3">
              <button
                onClick={handleCancel}
                className="px-5 py-2.5 bg-white dark:bg-[#111318] border border-slate-200 dark:border-[#282e39] rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors font-medium text-sm shadow-sm"
                type="button"
              >
                Cancel
              </button>
              <button
                className="px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm shadow-sm shadow-blue-500/20 flex items-center gap-2"
                type="submit"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  check
                </span>
                Create User
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
