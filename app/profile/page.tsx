'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import type { SidebarNavItem, SidebarUserInfo, BreadcrumbItem } from '@/components/admin';
import ProfileContent from './components/ProfileContent';

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
    email: 'jane.admin@tapassist.ai',
    role: 'Super Admin',
    avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBdliPYJP-ODwe6wAjROyzTBP2v93Z0Kt-eXlq3acf6jDiampNw_pXmZCQ4x25AzHLWM_NEhqlur521TWrxTc74JE3I7QrC-TATsbCGdzRlPwus6ymdT5hJBdjXqzMAsRafgzwMl2EG_6mmIlML1EefPoty_kEpgKfXjk09J9Wuc0Nh-j6ve_cBKSiJqaQXufljI-Msi5TJdb480LoC50EY2tNRAQs03IYVVOCV9y2akQthI22L9mi0NR9Wi9cTmQSdyz6NbYwgU6g',
};

// Breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [{ label: 'My Profile' }];

export default function ProfilePage() {
    return (
        <AdminLayout
            brandName="Tap Assist"
            brandSubtitle="Admin Console"
            brandIcon="smart_toy"
            navItems={navItems}
            userInfo={userInfo}
            breadcrumbs={breadcrumbs}
            navbarActions={
                <button className="text-[#9da6b9] hover:text-white transition-colors relative">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#111318]"></span>
                </button>
            }
            showLogout={true}
        >
            <div className="flex-1 overflow-y-auto px-8 pt-6 pb-12 relative">
                <div className="max-w-5xl mx-auto">
                    <ProfileContent />
                </div>
            </div>
        </AdminLayout>
    );
}
