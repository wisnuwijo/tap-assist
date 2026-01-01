# Common Components

Reusable UI components used across the application.

## Components

### SearchBar
Search input with icon and real-time feedback.

```tsx
import { SearchBar } from '@/components/common';

<SearchBar
  placeholder="Search by name..."
  onSearch={(value) => console.log(value)}
  className="w-full"
/>
```

### Dropdown
Dropdown selector with custom styling.

```tsx
import { Dropdown } from '@/components/common';

const options = [
  { label: 'All Statuses', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
];

<Dropdown
  label="Status"
  options={options}
  value={selectedValue}
  onChange={(value) => setSelectedValue(value)}
/>
```

### Button
Versatile button component with variants and sizes.

```tsx
import { Button } from '@/components/common';

<Button variant="primary" size="md" icon="add" iconPosition="left" onClick={handleClick}>
  Create New
</Button>

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button variant="ghost">Ghost</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### Pagination
Table pagination with page controls.

```tsx
import { Pagination } from '@/components/common';

<Pagination
  currentPage={currentPage}
  totalItems={100}
  itemsPerPage={10}
  onPageChange={(page) => setCurrentPage(page)}
  showingStart={1}
  showingEnd={10}
/>
```

## Props Reference

### SearchBar Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| placeholder | string | "Search..." | Input placeholder text |
| onSearch | (value: string) => void | - | Callback when search value changes |
| className | string | "" | Additional CSS classes |

### Dropdown Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | required | Display label |
| options | DropdownOption[] | required | Available options |
| value | string | - | Currently selected value |
| onChange | (value: string) => void | - | Callback when selection changes |
| icon | string | "expand_more" | Material Symbol icon |
| className | string | "" | Additional CSS classes |

### Button Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | required | Button content |
| variant | 'primary' \| 'secondary' \| 'danger' \| 'ghost' | "primary" | Button style variant |
| size | 'sm' \| 'md' \| 'lg' | "md" | Button size |
| icon | string | - | Material Symbol icon name |
| iconPosition | 'left' \| 'right' | "left" | Icon position |
| onClick | () => void | - | Click handler |
| disabled | boolean | false | Disabled state |
| className | string | "" | Additional CSS classes |

### Pagination Props
| Prop | Type | Description |
|------|------|-------------|
| currentPage | number | Current page number |
| totalItems | number | Total number of items |
| itemsPerPage | number | Items per page |
| onPageChange | (page: number) => void | Page change callback |
| showingStart | number | First item number shown |
| showingEnd | number | Last item number shown |

## Examples

See [app/chatbots/page.tsx](../../app/chatbots/page.tsx) for complete usage examples.
