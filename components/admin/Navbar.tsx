'use client';

import { ReactNode } from 'react';
import MobileSidebar from './MobileSidebar';
import { SidebarNavItem, SidebarUserInfo } from './Sidebar';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface NavbarProps {
  breadcrumbs?: BreadcrumbItem[];
  actions?: ReactNode;
  // Mobile sidebar props
  brandName?: string;
  brandSubtitle?: string;
  brandIcon?: string;
  navItems?: SidebarNavItem[];
  userInfo?: SidebarUserInfo;
  showLogout?: boolean;
}

export default function Navbar({
  breadcrumbs = [],
  actions,
  brandName,
  brandSubtitle,
  brandIcon,
  navItems = [],
  userInfo,
  showLogout,
}: NavbarProps) {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#282e39] px-4 lg:px-8 py-5 shrink-0 bg-[#111318]">
      <div className="flex items-center gap-4">
        {/* Mobile Sidebar Toggle */}
        <MobileSidebar
          brandName={brandName}
          brandSubtitle={brandSubtitle}
          brandIcon={brandIcon}
          navItems={navItems}
          userInfo={userInfo}
          showLogout={showLogout}
        />

        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <h2 className="text-white text-xl lg:text-2xl font-semibold leading-tight tracking-tight flex gap-2 items-center">
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {index > 0 && <span className="text-[#9da6b9]">/</span>}
                <span className={index === breadcrumbs.length - 1 ? 'text-white' : 'text-[#9da6b9]'}>
                  {item.label}
                </span>
              </div>
            ))}
          </h2>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 lg:gap-6">
        {actions || (
          <button className="text-[#9da6b9] hover:text-white transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        )}
      </div>
    </header>
  );
}
