'use client';

import { ReactNode } from 'react';
import Sidebar, { SidebarNavItem, SidebarUserInfo } from './Sidebar';
import Navbar from './Navbar';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface AdminLayoutProps {
  children: ReactNode;
  // Sidebar props
  brandName?: string;
  brandSubtitle?: string;
  brandIcon?: string;
  navItems: SidebarNavItem[];
  userInfo?: SidebarUserInfo;
  showLogout?: boolean;
  // Navbar props
  breadcrumbs?: BreadcrumbItem[];
  navbarActions?: ReactNode;
}

export default function AdminLayout({
  children,
  brandName,
  brandSubtitle,
  brandIcon,
  navItems,
  userInfo,
  showLogout,
  breadcrumbs,
  navbarActions,
}: AdminLayoutProps) {
  return (
    <div className="flex h-screen w-full bg-[#101622]">
      {/* Desktop Sidebar */}
      <Sidebar
        brandName={brandName}
        brandSubtitle={brandSubtitle}
        brandIcon={brandIcon}
        navItems={navItems}
        userInfo={userInfo}
        showLogout={showLogout}
      />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 h-full overflow-hidden">
        {/* Navbar */}
        <Navbar
          breadcrumbs={breadcrumbs}
          actions={navbarActions}
          brandName={brandName}
          brandSubtitle={brandSubtitle}
          brandIcon={brandIcon}
          navItems={navItems}
          userInfo={userInfo}
          showLogout={showLogout}
        />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-[#101622]">
          {children}
        </main>
      </div>
    </div>
  );
}
