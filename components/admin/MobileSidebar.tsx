'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarNavItem, SidebarUserInfo } from './Sidebar';

interface MobileSidebarProps {
  brandName?: string;
  brandSubtitle?: string;
  brandIcon?: string;
  navItems: SidebarNavItem[];
  userInfo?: SidebarUserInfo;
  showLogout?: boolean;
}

export default function MobileSidebar({
  brandName = 'Tap Assist',
  brandSubtitle = 'Admin Console',
  brandIcon = 'smart_toy',
  navItems,
  userInfo,
  showLogout,
}: MobileSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-[#9da6b9] hover:text-white transition-colors p-2"
      >
        <span className="material-symbols-outlined text-2xl">menu</span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[280px] bg-[#0b0d12] border-r border-[#282e39] z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } flex flex-col justify-between p-4 overflow-y-auto`}
      >
        <div className="flex flex-col gap-4">
          {/* Close Button */}
          <div className="flex justify-between items-center px-2">
            <div className="flex gap-3 items-center">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-primary/20 flex items-center justify-center text-[#135bec]">
                <span className="material-symbols-outlined text-2xl">{brandIcon}</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-white text-base font-bold leading-normal">{brandName}</h1>
                <p className="text-[#9da6b9] text-xs font-normal leading-normal">{brandSubtitle}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#9da6b9] hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col gap-2 mt-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive
                    ? 'bg-[#135bec] text-white'
                    : 'text-[#9da6b9] hover:bg-[#282e39] hover:text-white'
                    }`}
                >
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                  <p className="text-sm font-medium leading-normal">{item.label}</p>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Info & Logout Section */}
        <div className="flex flex-col gap-2 px-2">
          {userInfo && (
            <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#282e39] cursor-pointer transition-colors">
              {userInfo.avatarUrl ? (
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  style={{ backgroundImage: `url("${userInfo.avatarUrl}")` }}
                />
              ) : (
                <div className="bg-[#282e39] rounded-full size-10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#9da6b9]">person</span>
                </div>
              )}
              <div className="flex flex-col justify-center min-w-0">
                <p className="text-[#6b7280] text-[10px] font-bold uppercase tracking-wider leading-tight mb-0.5">
                  {userInfo.role}
                </p>
                <p className="text-white text-sm font-medium leading-snug truncate">{userInfo.name}</p>
                <p className="text-[#9da6b9] text-xs leading-snug truncate">{userInfo.email}</p>
              </div>
            </div>
          )}
          {showLogout && (
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#9da6b9] hover:bg-[#282e39] hover:text-red-400 transition-colors w-full">
              <span className="material-symbols-outlined text-[24px]">logout</span>
              <p className="text-sm font-medium leading-normal">Logout</p>
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
