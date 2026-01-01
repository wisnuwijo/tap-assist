# Admin Layout Components

A responsive admin panel layout system for Next.js with a dark theme.

## Components

### AdminLayout
The main wrapper component that combines sidebar and navbar.

### Sidebar
Desktop sidebar navigation with brand info and user profile.

### MobileSidebar
Mobile-responsive sidebar with hamburger menu toggle.

### Navbar
Top navigation bar with breadcrumbs and actions.

## Usage

```tsx
import AdminLayout from '@/components/admin/AdminLayout';
import type { SidebarNavItem, SidebarUserInfo, BreadcrumbItem } from '@/components/admin';

// Define navigation items
const navItems: SidebarNavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
  { label: 'Analytics', href: '/analytics', icon: 'analytics' },
  { label: 'Settings', href: '/settings', icon: 'settings' },
];

// Define user info (optional)
const userInfo: SidebarUserInfo = {
  name: 'John Doe',
  email: 'john@example.com',
  role: 'Admin',
  avatarUrl: 'https://example.com/avatar.jpg', // optional
};

// Define breadcrumbs (optional)
const breadcrumbs: BreadcrumbItem[] = [
  { label: 'Dashboard' },
  { label: 'Overview' },
];

export default function MyPage() {
  return (
    <AdminLayout
      brandName="My App"
      brandSubtitle="Admin Panel"
      brandIcon="dashboard" // Material Symbol icon name
      navItems={navItems}
      userInfo={userInfo}
      breadcrumbs={breadcrumbs}
      navbarActions={
        <button>
          <span className="material-symbols-outlined">notifications</span>
        </button>
      }
    >
      {/* Your page content */}
      <div>Content goes here</div>
    </AdminLayout>
  );
}
```

## Props

### AdminLayout Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | ReactNode | Yes | Page content |
| `navItems` | SidebarNavItem[] | Yes | Navigation menu items |
| `brandName` | string | No | Brand/app name (default: "Tap Assist") |
| `brandSubtitle` | string | No | Subtitle below brand name (default: "Admin Console") |
| `brandIcon` | string | No | Material Symbol icon name (default: "smart_toy") |
| `userInfo` | SidebarUserInfo | No | User profile information |
| `breadcrumbs` | BreadcrumbItem[] | No | Navigation breadcrumbs |
| `navbarActions` | ReactNode | No | Custom actions in navbar |

### SidebarNavItem Type

```typescript
interface SidebarNavItem {
  label: string;        // Display text
  href: string;         // Route path
  icon: string;         // Material Symbol icon name
}
```

### SidebarUserInfo Type

```typescript
interface SidebarUserInfo {
  name: string;         // User's full name
  email: string;        // User's email
  role: string;         // User's role/title
  avatarUrl?: string;   // Optional avatar image URL
}
```

### BreadcrumbItem Type

```typescript
interface BreadcrumbItem {
  label: string;        // Breadcrumb text
  href?: string;        // Optional link (for future use)
}
```

## Features

- **Responsive Design**: Mobile-first approach with hamburger menu on small screens
- **Active State**: Automatically highlights current page in navigation
- **Dark Theme**: Consistent dark color scheme
- **Material Symbols**: Uses Google Material Symbols for icons
- **Customizable**: Easy to customize brand, navigation, and user info

## Responsive Breakpoints

- Mobile: < 1024px (hamburger menu)
- Desktop: >= 1024px (persistent sidebar)

## Styling

The components use Tailwind CSS with custom color variables defined in [globals.css](../../app/globals.css):

- Primary: `#135bec`
- Background Dark: `#101622`
- Card Dark: `#1e232e`
- Border Dark: `#282e39`
- Text Secondary: `#9da6b9`

## Icons

Uses [Google Material Symbols Outlined](https://fonts.google.com/icons). Common icons:
- `dashboard` - Dashboard
- `smart_toy` - Chatbot/AI
- `analytics` - Analytics
- `group` - Users
- `settings` - Settings
- `notifications` - Notifications
- `menu` - Hamburger menu
- `close` - Close

## Example Pages

See [app/dashboard/page.tsx](../../app/dashboard/page.tsx) for a complete example.
