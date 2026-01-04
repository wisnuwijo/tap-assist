# User Layout Components

This directory contains the reusable layout components for non-admin (regular) users.

## Components

### UserLayout
The main layout wrapper that combines sidebar and navbar.

**Props:**
- `children`: ReactNode - The main content to display
- `navItems?`: UserSidebarNavItem[] - Optional custom navigation items
- `userInfo`: UserInfo - User information (name, role, avatar)
- `currentDate?`: string - Optional custom date string
- `showNewRequestButton?`: boolean - Show/hide new request button (default: true)
- `onNewRequest?`: () => void - Callback for new request button click

### UserSidebar
The left sidebar with navigation menu and user profile.

**Features:**
- Responsive design (collapses to icon-only on mobile)
- Brand logo
- Navigation menu items
- Settings and Help & Support at bottom
- User profile display

### UserNavbar
The top navigation bar with date and actions.

**Features:**
- Current date display
- Notification bell with indicator
- New Request button

## Usage Example

```tsx
import UserLayout from '@/components/user/UserLayout';
import type { UserInfo } from '@/components/user';

const userInfo: UserInfo = {
  name: 'Alex Morgan',
  role: 'Product Manager',
  avatarUrl: 'https://example.com/avatar.jpg',
};

export default function MyPage() {
  const handleNewRequest = () => {
    console.log('New request clicked');
  };

  return (
    <UserLayout userInfo={userInfo} onNewRequest={handleNewRequest}>
      <div>
        {/* Your page content here */}
      </div>
    </UserLayout>
  );
}
```

## Color Scheme

The user layout uses the following dark theme colors:
- Background: `#101622`
- Surface: `#1e2430`
- Border: `#2d3544`
- Primary: `#135bec`
- Text: `white` / `slate-400`

## Navigation Items

Default navigation items:
1. Dashboard (grid_view icon, filled)
2. History (history icon)
3. Saved Threads (bookmark icon)
4. Settings (settings icon, bottom)
5. Help & Support (help icon, bottom)

You can customize navigation items by passing a custom `navItems` prop.
