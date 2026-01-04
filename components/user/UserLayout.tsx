import { ReactNode } from 'react';
import UserSidebar from './UserSidebar';
import UserNavbar from './UserNavbar';

export interface UserSidebarNavItem {
  label: string;
  href: string;
  icon: string;
  isFilled?: boolean;
}

export interface UserInfo {
  name: string;
  role: string;
  avatarUrl?: string;
}

interface UserLayoutProps {
  children: ReactNode;
  navItems?: UserSidebarNavItem[];
  userInfo: UserInfo;
  currentDate?: string;
  showNewRequestButton?: boolean;
  onNewRequest?: () => void;
  activePage?: string;
}

export default function UserLayout({
  children,
  navItems,
  userInfo,
  currentDate,
  showNewRequestButton = true,
  onNewRequest,
  activePage,
}: UserLayoutProps) {
  return (
    <div className="flex h-screen w-full">
      <UserSidebar navItems={navItems} userInfo={userInfo} activePage={activePage} />
      <main className="flex-1 flex flex-col h-full relative overflow-hidden bg-[#101622]">
        <UserNavbar
          currentDate={currentDate}
          showNewRequestButton={showNewRequestButton}
          onNewRequest={onNewRequest}
        />
        <div className="flex-1 overflow-y-auto px-8 lg:px-12 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
