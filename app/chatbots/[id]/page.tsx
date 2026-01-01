'use client';

import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { StatusBadge } from '@/components/dashboard';
import { Button } from '@/components/common';
import {
  InfoCard,
  DetailItem,
  StatBox,
  PerformanceMetric,
  IntegrationItem,
  DocumentItem,
} from '@/components/chatbot';
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
  { label: 'Chatbots' },
  { label: 'Onboarding Assistant Details' },
];

export default function ChatbotDetailPage({ params }: { params: { id: string } }) {
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
      <div className="flex flex-col gap-6 pb-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <div>
              <h1 className="text-white text-3xl font-bold">Onboarding Assistant</h1>
              <p className="text-[#9da6b9] text-sm mt-1">ID: #CB-2023-089</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="md"
              onClick={() => router.push(`/chatbots/1/test`)}
            >
              Test Chatbot
            </Button>
            <Button
              variant="primary"
              size="md"
              icon="settings"
              iconPosition="left"
              onClick={() => router.push(`/chatbots/1/config`)}
            >
              Go to Configuration
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - General Details & Knowledge Base */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* General Details */}
            <InfoCard title="General Details">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DetailItem
                  label="Current Status"
                  value={<StatusBadge status="active" label="Active" showDot />}
                />
                <DetailItem
                  label="Version"
                  value={
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold">v2.4.0</span>
                      <span className="text-xs text-[#9da6b9] bg-[#282e39] px-2 py-1 rounded">
                        Stable
                      </span>
                    </div>
                  }
                />
                <DetailItem label="Created On" value={<p className="text-sm">Sep 12, 2023</p>} />
                <DetailItem
                  label="Last Updated"
                  value={
                    <div>
                      <p className="text-sm font-medium">2 hours ago</p>
                      <p className="text-xs text-[#9da6b9]">by Sarah Jenkins</p>
                    </div>
                  }
                />
                <DetailItem
                  label="Purpose / Description"
                  value={
                    <p className="text-sm leading-relaxed">
                      Helps new hires navigate company policies, benefits enrollment, and IT setup
                      procedures during their first 30 days. It is configured to handle common FAQs
                      regarding PTO, insurance plans, and hardware requests.
                    </p>
                  }
                  fullWidth
                />
              </div>
            </InfoCard>

            {/* Knowledge Base Summary */}
            <InfoCard
              title="Knowledge Base Summary"
              action={
                <button className="text-[#135bec] text-sm font-medium hover:text-[#0e4bce] transition-colors">
                  View All Documents
                </button>
              }
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <StatBox label="Total Documents" value="145" />
                <StatBox label="Categories" value="12" />
                <StatBox label="Last Synced" value="Today, 10:30 AM" />
              </div>

              <div>
                <h3 className="text-[#9da6b9] text-xs font-semibold uppercase tracking-wider mb-4">
                  Recently Added Sources
                </h3>
                <div className="flex flex-col gap-2">
                  <DocumentItem
                    name="2024_Benefits_Summary_US.pdf"
                    addedBy="Sarah Jenkins"
                    timeAgo="2 hours ago"
                    status="indexed"
                    type="pdf"
                  />
                  <DocumentItem
                    name="Confluence: IT Setup Guide"
                    addedBy="System Sync"
                    timeAgo="5 hours ago"
                    status="indexed"
                    type="link"
                  />
                </div>
              </div>
            </InfoCard>
          </div>

          {/* Right Column - Performance & Integrations */}
          <div className="flex flex-col gap-6">
            {/* Performance */}
            <InfoCard
              title="Performance"
              action={
                <select className="bg-[#282e39] text-[#9da6b9] text-xs px-3 py-1.5 rounded border border-[#3b4354] focus:outline-none focus:ring-2 focus:ring-[#135bec]">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                </select>
              }
            >
              <div className="flex flex-col gap-6">
                <PerformanceMetric
                  label="Resolution Rate"
                  value="92%"
                  subValue="+2.4%"
                  showBar
                  percentage={92}
                />
                <PerformanceMetric
                  label="Avg Response Time"
                  value="1.2s"
                  subValue="-0.2s"
                  color="text-white"
                />
                <PerformanceMetric
                  label="Total Conversations"
                  value="1,248"
                  subValue="From 450 unique users"
                  color="text-white"
                />
                <div className="pt-4 border-t border-[#282e39]">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[#9da6b9] text-sm">CSAT Score</p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-bold text-white">4.8</p>
                    <span className="material-symbols-outlined text-yellow-500 text-xl">star</span>
                  </div>
                </div>
                <button className="text-[#135bec] text-sm font-medium hover:text-[#0e4bce] transition-colors flex items-center gap-1 mt-2">
                  View Detailed Analytics
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </InfoCard>

            {/* Integrations */}
            <InfoCard title="Integrations">
              <div className="flex flex-col gap-3">
                <IntegrationItem
                  name="Slack"
                  status="connected"
                  icon="chat"
                  iconColor="text-purple-500"
                  iconBg="bg-purple-500/20"
                />
                <IntegrationItem
                  name="Microsoft Teams"
                  status="not-configured"
                  icon="groups"
                  iconColor="text-blue-500"
                  iconBg="bg-blue-500/20"
                />
              </div>
            </InfoCard>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
