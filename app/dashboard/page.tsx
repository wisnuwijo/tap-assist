'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import {
  StatCard,
  StatsGrid,
  DataTable,
  TableActionButton,
  StatusBadge,
} from '@/components/dashboard';
import type { SidebarNavItem, SidebarUserInfo, BreadcrumbItem } from '@/components/admin';
import type { TableColumn } from '@/components/dashboard';

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
const breadcrumbs: BreadcrumbItem[] = [{ label: 'Dashboard' }, { label: 'Overview' }];

// Table columns
const tableColumns: TableColumn[] = [
  { key: 'name', label: 'Bot Name', align: 'left' },
  { key: 'sops', label: 'Linked SOPs', align: 'left', hideOnMobile: true },
  { key: 'status', label: 'Status', align: 'left' },
  { key: 'interactions', label: 'Interactions', align: 'left', hideOnTablet: true },
  { key: 'lastActive', label: 'Last Active', align: 'left', hideOnTablet: true },
  { key: 'actions', label: 'Actions', align: 'right' },
];

export default function DashboardPage() {
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
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
        {/* Stats Section */}
        <StatsGrid columns={3}>
          <StatCard
            title="Total Questions Answered"
            value="12,450"
            icon="forum"
            iconColor="text-[#135bec]"
            badge={{
              text: '+12.5%',
              color: 'text-[#0bda5e]',
              bgColor: 'bg-[#0bda5e]/10',
            }}
          />
          <StatCard
            title="Unanswered Questions"
            value="45"
            icon="warning"
            iconColor="text-orange-500"
            badge={{
              text: 'Action Needed',
              color: 'text-orange-500',
              bgColor: 'bg-orange-500/10',
            }}
          />
          <StatCard
            title="Active SOPs"
            value="128"
            icon="description"
            iconColor="text-blue-400"
            badge={{
              text: 'Stable',
              color: 'text-[#9da6b9]',
              bgColor: 'bg-[#282e39]',
            }}
          />
        </StatsGrid>

        {/* Chatbots Table */}
        <DataTable
          title="Your Chatbots"
          columns={tableColumns}
          actions={
            <>
              <TableActionButton icon="filter_list" label="Filter" />
              <TableActionButton icon="download" label="Export" />
            </>
          }
        >
          <tr className="hover:bg-[#232936] transition-colors group">
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <span className="material-symbols-outlined text-[18px]">school</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">New Hire Onboarding</p>
                  <p className="text-[#9da6b9] text-xs sm:hidden">12 Docs</p>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 hidden sm:table-cell">
              <div className="flex items-center gap-2 text-[#9da6b9] text-sm">
                <span className="material-symbols-outlined text-[16px]">description</span>
                12 Docs
              </div>
            </td>
            <td className="px-6 py-4">
              <StatusBadge status="active" label="Active" showDot />
            </td>
            <td className="px-6 py-4 hidden md:table-cell">
              <p className="text-white text-sm font-medium">542</p>
              <p className="text-[#9da6b9] text-xs">Questions</p>
            </td>
            <td className="px-6 py-4 hidden lg:table-cell">
              <p className="text-[#9da6b9] text-sm">2 mins ago</p>
            </td>
            <td className="px-6 py-4 text-right">
              <button className="text-[#9da6b9] hover:text-white p-1 rounded hover:bg-[#3b4354] transition-colors">
                <span className="material-symbols-outlined text-[20px]">more_vert</span>
              </button>
            </td>
          </tr>

          <tr className="hover:bg-[#232936] transition-colors group">
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-500">
                  <span className="material-symbols-outlined text-[18px]">health_and_safety</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Benefits &amp; Comp</p>
                  <p className="text-[#9da6b9] text-xs sm:hidden">15 Docs</p>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 hidden sm:table-cell">
              <div className="flex items-center gap-2 text-[#9da6b9] text-sm">
                <span className="material-symbols-outlined text-[16px]">description</span>
                15 Docs
              </div>
            </td>
            <td className="px-6 py-4">
              <StatusBadge status="learning" label="Learning" icon="sync" animated />
            </td>
            <td className="px-6 py-4 hidden md:table-cell">
              <p className="text-white text-sm font-medium">0</p>
              <p className="text-[#9da6b9] text-xs">Questions</p>
            </td>
            <td className="px-6 py-4 hidden lg:table-cell">
              <p className="text-[#9da6b9] text-sm">Processing...</p>
            </td>
            <td className="px-6 py-4 text-right">
              <button className="text-[#9da6b9] hover:text-white p-1 rounded hover:bg-[#3b4354] transition-colors">
                <span className="material-symbols-outlined text-[20px]">more_vert</span>
              </button>
            </td>
          </tr>

          <tr className="hover:bg-[#232936] transition-colors group">
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-orange-500/20 flex items-center justify-center text-orange-500">
                  <span className="material-symbols-outlined text-[18px]">gavel</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">IT Policy Helper</p>
                  <p className="text-[#9da6b9] text-xs sm:hidden">8 Docs</p>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 hidden sm:table-cell">
              <div className="flex items-center gap-2 text-[#9da6b9] text-sm">
                <span className="material-symbols-outlined text-[16px]">description</span>8 Docs
              </div>
            </td>
            <td className="px-6 py-4">
              <StatusBadge status="warning" label="Needs Attention" icon="priority_high" />
            </td>
            <td className="px-6 py-4 hidden md:table-cell">
              <p className="text-white text-sm font-medium">120</p>
              <p className="text-[#9da6b9] text-xs">Questions</p>
            </td>
            <td className="px-6 py-4 hidden lg:table-cell">
              <p className="text-[#9da6b9] text-sm">1 day ago</p>
            </td>
            <td className="px-6 py-4 text-right">
              <button className="text-[#9da6b9] hover:text-white p-1 rounded hover:bg-[#3b4354] transition-colors">
                <span className="material-symbols-outlined text-[20px]">more_vert</span>
              </button>
            </td>
          </tr>

          <tr className="hover:bg-[#232936] transition-colors group">
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-gray-500/20 flex items-center justify-center text-gray-400">
                  <span className="material-symbols-outlined text-[18px]">badge</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Leave Policy FAQ</p>
                  <p className="text-[#9da6b9] text-xs sm:hidden">4 Docs</p>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 hidden sm:table-cell">
              <div className="flex items-center gap-2 text-[#9da6b9] text-sm">
                <span className="material-symbols-outlined text-[16px]">description</span>4 Docs
              </div>
            </td>
            <td className="px-6 py-4">
              <StatusBadge status="active" label="Active" showDot />
            </td>
            <td className="px-6 py-4 hidden md:table-cell">
              <p className="text-white text-sm font-medium">89</p>
              <p className="text-[#9da6b9] text-xs">Questions</p>
            </td>
            <td className="px-6 py-4 hidden lg:table-cell">
              <p className="text-[#9da6b9] text-sm">4 hours ago</p>
            </td>
            <td className="px-6 py-4 text-right">
              <button className="text-[#9da6b9] hover:text-white p-1 rounded hover:bg-[#3b4354] transition-colors">
                <span className="material-symbols-outlined text-[20px]">more_vert</span>
              </button>
            </td>
          </tr>
        </DataTable>
      </div>
    </AdminLayout>
  );
}
