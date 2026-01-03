'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { Input, TextArea, FileUpload } from '@/components/forms';
import { Button } from '@/components/common';
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
  { label: 'Create New' },
];

export default function CreateChatbotPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const [files, setFiles] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    router.push('/chatbots');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/chatbots');
    }, 2000);
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
        <a href="/notifications" className="text-[#9da6b9] hover:text-white transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </a>
      }
    >
      <div className="flex flex-col gap-6 pb-24">
        {/* Page Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-3xl font-bold">Create New Chatbot</h1>
          <p className="text-[#9da6b9] text-base">
            Configure your new AI assistant and upload training materials.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-4xl">
          <div className="bg-[#1e232e] border border-[#282e39] rounded-xl p-6 lg:p-8">
            <div className="flex flex-col gap-6">
              {/* Chatbot Name */}
              <Input
                label="Chatbot Name"
                name="name"
                placeholder="e.g., HR Policy Assistant"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              {/* Purpose & Description */}
              <TextArea
                label="Purpose & Description"
                name="description"
                placeholder="Describe the chatbot's primary function and who will use it..."
                value={formData.description}
                onChange={handleInputChange}
                rows={6}
                required
              />

              {/* File Upload */}
              <FileUpload
                label="Upload Knowledge Base Documents"
                helperText="Supported: PDF, DOCX, TXT"
                acceptedFormats={['.pdf', '.docx', '.txt']}
                maxSize={50}
                onFilesChange={setFiles}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 mt-6">
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={handleCancel}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon="add_circle"
              iconPosition="left"
              disabled={isSubmitting || !formData.name || !formData.description}
            >
              {isSubmitting ? 'Creating...' : 'Create Chatbot'}
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
