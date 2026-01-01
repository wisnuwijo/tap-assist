# Dashboard Components

Reusable components for building dashboard interfaces with stats, tables, and data visualizations.

## Components

### StatCard
Display key metrics with optional badges and icons.

```tsx
import { StatCard } from '@/components/dashboard';

<StatCard
  title="Total Users"
  value="12,450"
  icon="group"
  iconColor="text-blue-500"
  iconBgColor="bg-blue-500/20"
  badge={{
    text: '+12.5%',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  }}
/>
```

### StatsGrid
Responsive grid container for stat cards.

```tsx
import { StatsGrid, StatCard } from '@/components/dashboard';

<StatsGrid columns={3}>
  <StatCard {...} />
  <StatCard {...} />
  <StatCard {...} />
</StatsGrid>
```

### DataTable
Reusable table component with responsive columns.

```tsx
import { DataTable } from '@/components/dashboard';

const columns = [
  { key: 'name', label: 'Name', align: 'left' },
  { key: 'email', label: 'Email', align: 'left', hideOnMobile: true },
  { key: 'status', label: 'Status', align: 'left' },
  { key: 'actions', label: 'Actions', align: 'right' },
];

<DataTable
  title="Users"
  columns={columns}
  actions={<button>Export</button>}
>
  <tr>
    <td>...</td>
  </tr>
</DataTable>
```

### StatusBadge
Display status with colors, icons, and animations.

```tsx
import { StatusBadge } from '@/components/dashboard';

<StatusBadge status="active" label="Active" showDot />
<StatusBadge status="learning" label="Learning" icon="sync" animated />
<StatusBadge status="warning" label="Warning" icon="warning" />
<StatusBadge status="error" label="Error" icon="error" />
```

### TableActionButton
Styled button for table action sections.

```tsx
import { TableActionButton } from '@/components/dashboard';

<TableActionButton icon="filter_list" label="Filter" onClick={handleFilter} />
<TableActionButton icon="download" label="Export" onClick={handleExport} />
```

## Types

### StatCardProps
```typescript
interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  iconColor?: string;
  iconBgColor?: string;
  badge?: {
    text: string;
    color: string;
    bgColor: string;
  };
}
```

### TableColumn
```typescript
interface TableColumn {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
  hideOnMobile?: boolean;
  hideOnTablet?: boolean;
}
```

### StatusType
```typescript
type StatusType = 'active' | 'inactive' | 'warning' | 'learning' | 'error';
```

## Examples

See [app/dashboard/page.tsx](../../app/dashboard/page.tsx) for complete examples.
