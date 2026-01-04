'use client';

import Link from 'next/link';
import { UserSidebarNavItem, UserInfo } from './UserLayout';

const defaultNavItems: UserSidebarNavItem[] = [
  { label: 'Dashboard', href: '/user/dashboard', icon: 'grid_view', isFilled: true },
  { label: 'History', href: '/user/history', icon: 'history' },
  { label: 'Saved Threads', href: '/user/saved', icon: 'bookmark' },
];

interface UserSidebarProps {
  navItems?: UserSidebarNavItem[];
  userInfo: UserInfo;
  activePage?: string;
}

export default function UserSidebar({
  navItems = defaultNavItems,
  userInfo,
  activePage,
}: UserSidebarProps) {
  const menuItems = navItems.filter((item) => !['Settings', 'Help & Support'].includes(item.label));
  const bottomItems = navItems.filter((item) => ['Settings', 'Help & Support'].includes(item.label));

  // Add default bottom items if not provided
  const finalBottomItems =
    bottomItems.length > 0
      ? bottomItems
      : [
          { label: 'Settings', href: '/user/settings', icon: 'settings' },
          { label: 'Help & Support', href: '/user/help', icon: 'help' },
        ];

  return (
    <aside className="w-20 lg:w-72 flex-none flex flex-col border-r border-[#2d3544] bg-[#101622] transition-all duration-300">
      {/* Brand Header */}
      <div className="h-20 flex items-center gap-4 px-6 border-b border-[#2d3544]">
        <div className="size-8 text-primary flex-shrink-0">
          <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h1 className="text-white text-lg font-bold tracking-tight hidden lg:block">Tap Assist</h1>
      </div>

      {/* Navigation Menu */}
      <div className="flex flex-col gap-2 p-4 flex-1 overflow-y-auto no-scrollbar">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 mb-2 hidden lg:block">
            Menu
          </p>
          {menuItems.map((item) => {
            const isActive = activePage ? item.href === activePage : false;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary border border-primary/20'
                    : 'text-slate-400 hover:text-white hover:bg-[#1e2430]'
                }`}
              >
                <span
                  className={
                    isActive || item.isFilled ? 'material-symbols-filled' : 'material-symbols-outlined'
                  }
                >
                  {item.icon}
                </span>
                <span className="font-medium hidden lg:block">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Bottom Items */}
        <div className="mt-auto">
          <div className="h-px bg-[#2d3544] my-4"></div>
          {finalBottomItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-[#1e2430] transition-colors"
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-medium hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-[#2d3544] flex items-center gap-3">
        {userInfo.avatarUrl ? (
          <div
            className="size-10 rounded-full bg-cover bg-center border-2 border-[#1e2430]"
            style={{ backgroundImage: `url("${userInfo.avatarUrl}")` }}
          ></div>
        ) : (
          <div className="size-10 rounded-full bg-primary/20 border-2 border-[#1e2430] flex items-center justify-center text-primary font-semibold text-sm">
            {userInfo.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase()}
          </div>
        )}
        <div className="flex-col hidden lg:flex">
          <p className="text-sm font-medium text-white">{userInfo.name}</p>
          <p className="text-xs text-slate-500">{userInfo.role}</p>
        </div>
      </div>
    </aside>
  );
}
