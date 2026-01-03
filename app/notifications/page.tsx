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
const breadcrumbs: BreadcrumbItem[] = [{ label: 'Notifications' }];

// Notification data
const notifications = [
  {
    id: 1,
    title: "Chatbot 'HR Policy Bot' learning complete.",
    description:
      'The bot has finished processing the 12 uploaded PDF documents and is ready for deployment.',
    time: '10 mins ago',
    icon: 'smart_toy',
    iconBg: 'bg-primary/20',
    iconColor: 'text-primary',
    isUnread: true,
    actionLabel: 'View Chatbot',
    actionStyle: 'primary',
  },
  {
    id: 2,
    title: "New knowledge gap identified in 'Onboarding Bot'.",
    description:
      'Multiple users asked about "Parking Allowances" which is not covered in current training data.',
    time: '1 hour ago',
    icon: 'lightbulb',
    iconBg: 'bg-orange-500/20',
    iconColor: 'text-orange-400',
    isUnread: true,
    actionLabel: 'Review Gap',
    actionStyle: 'secondary',
  },
  {
    id: 3,
    title: "User 'John Doe' reset password.",
    description: 'Security alert: Password reset initiated from new IP address.',
    time: '2 hours ago',
    icon: 'person',
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
    isUnread: true,
  },
  {
    id: 4,
    title: 'Weekly Analytics Report is ready.',
    description: 'Your summary for Oct 24 - Oct 31 is available for download.',
    time: 'Yesterday',
    icon: 'bar_chart',
    iconBg: 'bg-[#282e39]',
    iconColor: 'text-[#9da6b9]',
    isUnread: false,
    actionLabel: 'Download',
    actionStyle: 'ghost',
    actionIcon: 'download',
  },
  {
    id: 5,
    title: 'System maintenance scheduled.',
    description: 'Tap Assist will undergo scheduled maintenance on Saturday at 10:00 PM EST.',
    time: '2 days ago',
    icon: 'build',
    iconBg: 'bg-[#282e39]',
    iconColor: 'text-[#9da6b9]',
    isUnread: false,
  },
];

export default function NotificationsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const unreadCount = notifications.filter((n) => n.isUnread).length;

  const handleMarkAllAsRead = () => {
    console.log('Mark all as read');
  };

  const handleDismiss = (id: number) => {
    console.log('Dismiss notification', id);
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
        <a href="/notifications" className="text-[#9da6b9] hover:text-white transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-primary rounded-full border-2 border-white dark:border-[#111318]"></span>
        </a>
      }
    >
      <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:px-12">
        <div className="max-w-[1000px] mx-auto flex flex-col gap-8">
          {/* Page Heading */}
          <div className="flex flex-wrap justify-between items-end gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                Inbox
              </h1>
              <p className="text-[#9da6b9] text-base font-normal leading-normal">
                You have <span className="text-white font-medium">{unreadCount} unread</span>{' '}
                notifications requiring your attention.
              </p>
            </div>
          </div>

          {/* Controls: Filters & Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-2">
            {/* Filter Chips */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setActiveFilter('all')}
                className={`flex h-9 items-center justify-center gap-x-2 rounded-full px-4 transition-colors cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-primary hover:bg-primary/90'
                    : 'bg-[#282e39] hover:bg-[#323945] border border-transparent hover:border-[#4b5563]'
                }`}
              >
                <span
                  className={`text-sm font-${activeFilter === 'all' ? 'bold' : 'medium'} leading-normal ${
                    activeFilter === 'all' ? 'text-white' : 'text-[#9da6b9]'
                  }`}
                >
                  All
                </span>
              </button>
              <button
                onClick={() => setActiveFilter('unread')}
                className={`flex h-9 items-center justify-center gap-x-2 rounded-full px-4 transition-colors cursor-pointer ${
                  activeFilter === 'unread'
                    ? 'bg-primary hover:bg-primary/90'
                    : 'bg-[#282e39] hover:bg-[#323945] border border-transparent hover:border-[#4b5563]'
                }`}
              >
                <span
                  className={`text-sm font-${activeFilter === 'unread' ? 'bold' : 'medium'} leading-normal ${
                    activeFilter === 'unread' ? 'text-white' : 'text-[#9da6b9]'
                  }`}
                >
                  Unread
                </span>
              </button>
              <button
                onClick={() => setActiveFilter('system')}
                className={`flex h-9 items-center justify-center gap-x-2 rounded-full px-4 transition-colors cursor-pointer ${
                  activeFilter === 'system'
                    ? 'bg-primary hover:bg-primary/90'
                    : 'bg-[#282e39] hover:bg-[#323945] border border-transparent hover:border-[#4b5563]'
                }`}
              >
                <span
                  className={`text-sm font-${activeFilter === 'system' ? 'bold' : 'medium'} leading-normal ${
                    activeFilter === 'system' ? 'text-white' : 'text-[#9da6b9]'
                  }`}
                >
                  System
                </span>
              </button>
              <button
                onClick={() => setActiveFilter('user')}
                className={`flex h-9 items-center justify-center gap-x-2 rounded-full px-4 transition-colors cursor-pointer ${
                  activeFilter === 'user'
                    ? 'bg-primary hover:bg-primary/90'
                    : 'bg-[#282e39] hover:bg-[#323945] border border-transparent hover:border-[#4b5563]'
                }`}
              >
                <span
                  className={`text-sm font-${activeFilter === 'user' ? 'bold' : 'medium'} leading-normal ${
                    activeFilter === 'user' ? 'text-white' : 'text-[#9da6b9]'
                  }`}
                >
                  User Activity
                </span>
              </button>
            </div>

            {/* Mark All as Read */}
            <button
              onClick={handleMarkAllAsRead}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-lg h-9 px-4 text-primary hover:text-white hover:bg-primary/10 transition-colors text-sm font-bold tracking-[0.015em]"
            >
              <span className="material-symbols-outlined text-[20px]">done_all</span>
              <span className="whitespace-nowrap">Mark All as Read</span>
            </button>
          </div>

          {/* Notification List */}
          <div className="flex flex-col gap-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`group flex flex-col md:flex-row md:items-center gap-4 rounded-xl p-5 hover:bg-[#252b38] transition-all cursor-pointer shadow-sm ${
                  notification.isUnread
                    ? 'bg-[#1e232e] border-l-4 border-primary rounded-r-xl'
                    : 'bg-[#111318] border border-[#282e39] opacity-80 hover:opacity-100'
                }`}
              >
                {/* Unread Dot (Mobile) */}
                {notification.isUnread && (
                  <div className="absolute top-5 right-5 md:hidden size-2.5 bg-primary rounded-full"></div>
                )}

                <div className="flex items-start gap-4 flex-1">
                  <div
                    className={`flex items-center justify-center rounded-xl ${notification.iconBg} ${notification.iconColor} shrink-0 size-12 mt-1 md:mt-0`}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                      {notification.icon}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p
                      className={`text-base font-semibold leading-normal ${
                        notification.isUnread ? 'text-white' : 'text-[#cfd4dd]'
                      }`}
                    >
                      {notification.title}
                    </p>
                    <p
                      className={`text-sm font-normal leading-normal ${
                        notification.isUnread ? 'text-[#9da6b9]' : 'text-[#64748b]'
                      }`}
                    >
                      {notification.description}
                    </p>
                    <p
                      className={`text-xs font-${notification.isUnread ? 'medium' : 'normal'} mt-1 md:hidden ${
                        notification.isUnread ? 'text-primary' : 'text-[#64748b]'
                      }`}
                    >
                      {notification.time}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 shrink-0 mt-3 md:mt-0 ml-16 md:ml-0">
                  <p
                    className={`text-sm font-normal hidden md:block ${
                      notification.isUnread ? 'text-[#9da6b9]' : 'text-[#64748b]'
                    }`}
                  >
                    {notification.time}
                  </p>

                  {notification.actionLabel && (
                    <button
                      className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg h-${
                        notification.actionStyle === 'ghost' ? '8' : '9'
                      } px-${notification.actionStyle === 'ghost' ? '3' : '4'} text-sm font-medium transition-colors w-full md:w-auto ${
                        notification.actionStyle === 'primary'
                          ? 'bg-primary text-white hover:bg-blue-600'
                          : notification.actionStyle === 'secondary'
                            ? 'bg-[#282e39] border border-white/10 text-white hover:bg-[#323945]'
                            : 'text-[#9da6b9] hover:text-white hover:bg-[#282e39]'
                      }`}
                    >
                      {notification.actionIcon && (
                        <span className="material-symbols-outlined text-[18px]">
                          {notification.actionIcon}
                        </span>
                      )}
                      {notification.actionLabel}
                    </button>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDismiss(notification.id);
                    }}
                    className="hidden group-hover:flex items-center justify-center size-9 rounded-full hover:bg-white/10 text-[#9da6b9] hover:text-white transition-colors"
                    title="Dismiss"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center py-4">
            <button className="text-[#9da6b9] text-sm font-medium hover:text-white transition-colors">
              Load older notifications
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
