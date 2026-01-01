'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/common';
import { Input, TextArea } from '@/components/forms';
import { ConfigSection, Toggle, Slider, ImageUpload, InfoBanner } from '@/components/config';
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
const breadcrumbs: BreadcrumbItem[] = [{ label: 'Chatbots' }, { label: 'Configuration' }];

// Mock documents
const documents = [
  {
    id: 1,
    name: 'Employee_Handbook_2024.pdf',
    size: '2.4 MB',
    uploaded: '2h ago',
    version: 'v2.0',
    status: 'ready' as const,
    category: 'General',
    type: 'pdf' as const,
  },
  {
    id: 2,
    name: 'Benefits_Summary_Q3.docx',
    size: '850 KB',
    uploaded: '5m ago',
    version: 'v1.0',
    status: 'indexing' as const,
    category: 'HR',
    type: 'docx' as const,
  },
  {
    id: 3,
    name: 'Safety_Protocols_2023.pdf',
    size: '1.2 MB',
    uploaded: 'Oct 12, 2023',
    version: 'v3.1',
    status: 'archived' as const,
    category: 'Safety',
    type: 'pdf' as const,
  },
];

const knowledgeGaps = [
  {
    id: 1,
    question: 'What is the dental plan coverage limit?',
    type: 'unanswered' as const,
    attempts: 5,
  },
  {
    id: 2,
    question: 'Guest wifi password for visitors',
    type: 'low-confidence' as const,
    attempts: 3,
  },
];

export default function ChatbotConfigPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  // Identity settings
  const [displayName, setDisplayName] = useState('HR Assistant Alpha');
  const [systemPrompt, setSystemPrompt] = useState('You are a helpful HR assistant...');

  // AI Settings
  const [feedbackLoop, setFeedbackLoop] = useState(true);
  const [strictness, setStrictness] = useState(1);
  const [confidence, setConfidence] = useState(85);
  const [chunkSize, setChunkSize] = useState(512);
  const [overlap, setOverlap] = useState(64);

  const getStrictnessLabel = () => {
    if (strictness === 0) return 'Factual';
    if (strictness === 1) return 'Moderate';
    return 'Creative';
  };

  const handleSave = () => {
    console.log('Saving configuration...');
  };

  const handleCancel = () => {
    router.push(`/chatbots/${params.id}`);
  };

  const getDocIcon = (type: string) => {
    if (type === 'pdf') return { icon: 'picture_as_pdf', color: 'text-red-600', bg: 'bg-red-100' };
    return { icon: 'description', color: 'text-blue-600', bg: 'bg-blue-100' };
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
        <button className="text-[#9da6b9] hover:text-white transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      }
    >
      <div className="flex flex-col gap-8 pb-20">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Chatbot Configuration</h1>
            <p className="text-[#9da6b9] mt-1 text-sm">
              Customize your AI assistant's persona, knowledge base, and behavior.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" size="md" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="primary" size="md" icon="save" iconPosition="left" onClick={handleSave}>
              Save Chatbot
            </Button>
          </div>
        </div>

        {/* Identity & AI Settings - Side by Side */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Identity Section */}
          <ConfigSection icon="fingerprint" title="Identity">
            <div className="flex flex-col gap-5">
              <ImageUpload
                label="Bot Avatar"
                helperText="JPG, PNG up to 2MB"
                currentImage="https://api.dicebear.com/7.x/avataaars/svg?seed=HR"
              />

              <Input
                label="Display Name"
                name="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="e.g., HR Assistant Alpha"
              />

              <TextArea
                label="Purpose / System Prompt"
                name="systemPrompt"
                value={systemPrompt}
                onChange={(e) => setSystemPrompt(e.target.value)}
                placeholder="You are a helpful HR assistant..."
                rows={4}
                helperText="This defines the personality and scope of the bot."
              />
            </div>
          </ConfigSection>

          {/* AI Settings Section */}
          <ConfigSection icon="tune" title="AI Settings">
            <div className="flex flex-col gap-5">
              <Toggle
                label="Feedback Loop"
                description="Enable user ratings."
                checked={feedbackLoop}
                onChange={setFeedbackLoop}
              />

              <div className="h-px bg-[#282e39]"></div>

              <Slider
                label="Strictness"
                value={strictness}
                onChange={setStrictness}
                min={0}
                max={2}
                step={1}
                valueLabel={getStrictnessLabel()}
                labels={{
                  left: 'Factual',
                  center: 'Balanced',
                  right: 'Creative',
                }}
              />

              <Slider
                label="Confidence Threshold"
                value={confidence}
                onChange={setConfidence}
                min={0}
                max={100}
                showValue
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Chunk Size"
                  name="chunkSize"
                  type="number"
                  value={chunkSize.toString()}
                  onChange={(e) => setChunkSize(Number(e.target.value))}
                />
                <Input
                  label="Overlap"
                  name="overlap"
                  type="number"
                  value={overlap.toString()}
                  onChange={(e) => setOverlap(Number(e.target.value))}
                />
              </div>
            </div>
          </ConfigSection>
        </div>

        {/* Test Your Chatbot Banner */}
        <InfoBanner
          icon="science"
          title="Test Your Chatbot"
          description="Launch the testing interface to verify behavior before publishing."
          action={
            <Button
              variant="secondary"
              size="md"
              icon="arrow_forward"
              iconPosition="right"
              onClick={() => router.push(`/chatbots/${params.id}/test`)}
            >
              Go to Testing Interface
            </Button>
          }
        />

        {/* Knowledge Base & Documents */}
        <ConfigSection
          icon="library_books"
          title={
            <div>
              <h2 className="text-lg font-bold text-white">Knowledge Base & Documents</h2>
              <p className="text-xs text-[#9da6b9]">Manage training data and source documents.</p>
            </div>
          }
          action={
            <button
              onClick={() => router.push(`/chatbots/1/logs`)}
              className="text-sm font-medium text-[#135bec] hover:text-[#0e4bce] flex items-center gap-1 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">history</span>
              View Logs
            </button>
          }
        >
          <div className="flex flex-col gap-8">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#1a1f2e] border border-[#282e39]">
                <p className="text-xs text-[#9da6b9] font-medium uppercase tracking-wide">
                  Total Documents
                </p>
                <p className="text-2xl font-bold text-white mt-1">124</p>
              </div>
              <div className="p-4 rounded-xl bg-[#1a1f2e] border border-[#282e39]">
                <p className="text-xs text-[#9da6b9] font-medium uppercase tracking-wide">Last Updated</p>
                <p className="text-2xl font-bold text-white mt-1">2h ago</p>
              </div>
              <div className="p-4 rounded-xl bg-[#1a1f2e] border border-[#282e39]">
                <p className="text-xs text-[#9da6b9] font-medium uppercase tracking-wide">AI Coverage</p>
                <p className="text-2xl font-bold text-[#135bec] mt-1">92%</p>
              </div>
            </div>

            {/* Upload Area */}
            <div className="w-full h-24 rounded-xl border-2 border-dashed border-[#3b4354] bg-[#1a1f2e] hover:bg-[#2f3642] transition-all flex flex-col items-center justify-center gap-1 cursor-pointer group">
              <div className="flex items-center gap-2 text-[#9da6b9] group-hover:text-[#135bec] transition-colors">
                <span className="material-symbols-outlined">cloud_upload</span>
                <span className="text-sm font-medium">Click to upload or drag and drop</span>
              </div>
              <p className="text-xs text-[#6b7280]">PDF, TXT, DOCX up to 10MB</p>
            </div>

            {/* Documents List */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-2 border-b border-[#282e39] gap-3">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Active Documents ({documents.length})
                </h3>
                <div className="flex w-full sm:w-auto gap-2">
                  <div className="relative flex-1 sm:w-48">
                    <span className="absolute left-2.5 top-2 material-symbols-outlined text-[#9da6b9] text-[18px]">
                      search
                    </span>
                    <input
                      className="w-full pl-8 pr-3 py-1.5 text-sm rounded-lg bg-[#1e232e] border-[#282e39] text-white focus:ring-1 focus:ring-[#135bec] focus:border-[#135bec] placeholder-[#9da6b9]"
                      placeholder="Search docs..."
                      type="text"
                    />
                  </div>
                  <button className="p-1.5 rounded hover:bg-[#282e39] text-[#9da6b9] hover:text-white transition-colors border border-[#282e39]">
                    <span className="material-symbols-outlined text-[18px]">filter_list</span>
                  </button>
                </div>
              </div>

              {documents.map((doc) => {
                const iconInfo = getDocIcon(doc.type);
                return (
                  <div
                    key={doc.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-[#1a1f2e] border border-transparent hover:border-[#3b4354] transition-all gap-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 ${iconInfo.bg} dark:bg-opacity-20 rounded ${iconInfo.color} shrink-0`}>
                        <span className="material-symbols-outlined text-[24px]">{iconInfo.icon}</span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white truncate">{doc.name}</span>
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#282e39] text-[#9da6b9] border border-[#3b4354]">
                            {doc.version}
                          </span>
                          {doc.status === 'archived' && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-medium border border-[#3b4354] text-[#9da6b9]">
                              Archived
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="text-xs text-[#9da6b9] whitespace-nowrap">
                            {doc.size} • {doc.uploaded}
                          </span>
                          <div className="flex gap-1 flex-wrap">
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-900/30 text-blue-300 border border-blue-800">
                              #{doc.category}
                            </span>
                            {doc.status !== 'archived' && (
                              <button className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#282e39] text-[#9da6b9] hover:bg-[#3b4354] transition-colors">
                                +
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 ml-12 sm:ml-0">
                      {doc.status === 'ready' && (
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-900/20 border border-green-900/50">
                          <span className="material-symbols-outlined text-[14px] text-green-400">
                            check_circle
                          </span>
                          <span className="text-xs font-medium text-green-400">Ready</span>
                        </div>
                      )}
                      {doc.status === 'indexing' && (
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-yellow-900/20 border border-yellow-900/50 animate-pulse">
                          <span className="material-symbols-outlined text-[14px] text-yellow-400">sync</span>
                          <span className="text-xs font-medium text-yellow-400">Indexing...</span>
                        </div>
                      )}
                      {doc.status === 'archived' && (
                        <button className="text-xs font-medium text-[#135bec] hover:text-[#0e4bce] hover:underline transition-colors">
                          Restore
                        </button>
                      )}
                      <button className="text-[#9da6b9] hover:text-white transition-colors p-1 rounded-full hover:bg-[#282e39]">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </div>
                  </div>
                );
              })}

              <div className="mt-4 flex justify-center">
                <button className="text-sm text-[#9da6b9] hover:text-[#135bec] transition-colors flex items-center gap-1 group">
                  Show More Documents
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-y-0.5 transition-transform">
                    expand_more
                  </span>
                </button>
              </div>
            </div>

            {/* Knowledge Gaps */}
            <div className="mt-8 pt-6 border-t border-[#282e39]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange-500 text-[20px]">warning</span>
                  Recent Knowledge Gaps
                </h3>
                <button
                  onClick={() => router.push(`/chatbots/1/gaps`)}
                  className="text-xs text-[#135bec] hover:underline font-medium"
                >
                  View All Gaps
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {knowledgeGaps.map((gap) => (
                  <div
                    key={gap.id}
                    className="flex flex-col gap-1 p-3 rounded-lg bg-orange-900/10 border border-orange-900/20"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                        {gap.type === 'unanswered' ? 'Unanswered' : 'Low Confidence'}
                      </span>
                      <span className="text-xs text-[#9da6b9]">{gap.attempts} attempts</span>
                    </div>
                    <p className="text-sm text-white font-medium">"{gap.question}"</p>
                    <div className="mt-1 flex gap-2">
                      <button className="text-[10px] bg-[#1e232e] px-2 py-1 rounded border border-orange-900/50 text-[#9da6b9] hover:text-[#135bec]">
                        {gap.type === 'unanswered' ? 'Add Answer' : 'Train Bot'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ConfigSection>
      </div>
    </AdminLayout>
  );
}
