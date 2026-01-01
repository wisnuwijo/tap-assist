# Chatbot Components

Reusable components for building chatbot detail and management pages.

## Components

### InfoCard
Card container for information sections with optional action button.

```tsx
import { InfoCard } from '@/components/chatbot';

<InfoCard
  title="General Details"
  action={
    <button className="text-[#135bec]">View All</button>
  }
>
  {/* Content */}
</InfoCard>
```

### DetailItem
Display label-value pairs in a consistent format.

```tsx
import { DetailItem } from '@/components/chatbot';

<DetailItem
  label="Created On"
  value={<p>Sep 12, 2023</p>}
/>

<DetailItem
  label="Description"
  value={<p>Long text...</p>}
  fullWidth // Spans 2 columns in grid
/>
```

### StatBox
Display statistics in a highlighted box.

```tsx
import { StatBox } from '@/components/chatbot';

<StatBox label="Total Documents" value="145" />
<StatBox label="Categories" value={12} />
```

### PerformanceMetric
Display performance metrics with optional progress bar.

```tsx
import { PerformanceMetric } from '@/components/chatbot';

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
```

### IntegrationItem
Display integration status with icon.

```tsx
import { IntegrationItem } from '@/components/chatbot';

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
```

### DocumentItem
Display document in knowledge base with metadata.

```tsx
import { DocumentItem } from '@/components/chatbot';

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
  status="processing"
  type="link"
/>
```

## Props Reference

### InfoCard Props

| Prop | Type | Description |
|------|------|-------------|
| title | string | Card title |
| children | ReactNode | Card content |
| action | ReactNode | Optional action button in header |

### DetailItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Label text (uppercase, small) |
| value | ReactNode | - | Value content |
| fullWidth | boolean | false | Span 2 columns in grid |

### StatBox Props

| Prop | Type | Description |
|------|------|-------------|
| label | string | Stat label |
| value | string \| number | Stat value |

### PerformanceMetric Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Metric label |
| value | string | - | Metric value |
| subValue | string | - | Optional sub-value (like change) |
| color | string | "text-white" | Value text color |
| showBar | boolean | false | Show progress bar |
| percentage | number | 0 | Progress bar percentage |

### IntegrationItem Props

| Prop | Type | Description |
|------|------|-------------|
| name | string | Integration name |
| status | 'connected' \| 'not-configured' | Connection status |
| icon | string | Material Symbol icon name |
| iconColor | string | Icon text color class |
| iconBg | string | Icon background color class |

### DocumentItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Document name |
| addedBy | string | - | User who added document |
| timeAgo | string | - | Time since added |
| status | 'indexed' \| 'processing' | - | Document status |
| type | 'pdf' \| 'link' \| 'document' | 'pdf' | Document type (affects icon) |

## Layout Patterns

### Two Column Layout (Detail Page)

```tsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {/* Left Column - 2/3 width */}
  <div className="lg:col-span-2 flex flex-col gap-6">
    <InfoCard title="General Details">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DetailItem label="Status" value={...} />
        <DetailItem label="Version" value={...} />
      </div>
    </InfoCard>
  </div>

  {/* Right Column - 1/3 width */}
  <div className="flex flex-col gap-6">
    <InfoCard title="Performance">
      {/* Metrics */}
    </InfoCard>
  </div>
</div>
```

### Stats Grid

```tsx
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <StatBox label="Total Documents" value="145" />
  <StatBox label="Categories" value="12" />
  <StatBox label="Last Synced" value="Today, 10:30 AM" />
</div>
```

## Examples

See [app/chatbots/[id]/page.tsx](../../app/chatbots/[id]/page.tsx) for a complete chatbot detail page implementation.
