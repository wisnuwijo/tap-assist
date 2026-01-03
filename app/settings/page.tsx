'use client';

import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import type { SidebarNavItem, SidebarUserInfo, BreadcrumbItem } from '@/components/admin';
import GeneralSettings from './components/GeneralSettings';
import NotificationPreferences from './components/NotificationPreferences';
import IntegrationsSettings from './components/IntegrationsSettings';
import SecuritySettings from './components/SecuritySettings';
import AccountBilling from './components/AccountBilling';

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
  email: 'jane.admin@tapassist.ai',
  role: 'Super Admin',
  avatarUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBdliPYJP-ODwe6wAjROyzTBP2v93Z0Kt-eXlq3acf6jDiampNw_pXmZCQ4x25AzHLWM_NEhqlur521TWrxTc74JE3I7QrC-TATsbCGdzRlPwus6ymdT5hJBdjXqzMAsRafgzwMl2EG_6mmIlML1EefPoty_kEpgKfXjk09J9Wuc0Nh-j6ve_cBKSiJqaQXufljI-Msi5TJdb480LoC50EY2tNRAQs03IYVVOCV9y2akQthI22L9mi0NR9Wi9cTmQSdyz6NbYwgU6g',
};

// Breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [{ label: 'Settings' }, { label: 'Overview' }];

const tabs = [
  { id: 'general', label: 'General Settings' },
  { id: 'notifications', label: 'Notification Preferences' },
  { id: 'integrations', label: 'Integrations' },
  { id: 'security', label: 'Security Settings' },
  { id: 'billing', label: 'Account & Billing' },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');

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
      <div className="flex-1 overflow-y-auto relative">
        <div className="max-w-6xl mx-auto w-full px-8 py-8">
          {/* Tabs */}
          <div className="flex items-center gap-1 mb-8 border-b border-slate-200 dark:border-[#282e39] overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab.id
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-slate-600 dark:text-[#9da6b9] hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-[#111318]/50 rounded-t-lg'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'general' && <GeneralSettings />}
          {activeTab === 'notifications' && <NotificationPreferences />}
          {activeTab === 'integrations' && <IntegrationsSettings />}
          {activeTab === 'security' && <SecuritySettings />}
          {activeTab === 'billing' && <AccountBilling />}

          {/* Other tabs placeholders */}
          {activeTab !== 'general' &&
            activeTab !== 'notifications' &&
            activeTab !== 'integrations' &&
            activeTab !== 'security' &&
            activeTab !== 'billing' && (
              <div className="max-w-4xl">
                <div className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] p-12 text-center">
                  <p className="text-slate-500 dark:text-[#9da6b9]">
                    Content for {tabs.find((t) => t.id === activeTab)?.label} coming soon...
                  </p>
                </div>
              </div>
            )}

          {/* Footer Actions */}
          <div className="sticky bottom-0 mt-8 pt-4 pb-8 bg-background-light dark:bg-[#101622] border-t border-slate-200 dark:border-[#282e39] flex items-center justify-end gap-3 z-10">
            <button className="px-4 py-2 rounded-lg bg-white dark:bg-[#111318] border border-slate-300 dark:border-[#282e39] text-slate-700 dark:text-white text-sm font-medium hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors">
              Cancel
            </button>
            <button className="px-6 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-colors shadow-sm shadow-primary/20">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
