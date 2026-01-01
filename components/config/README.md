# Configuration Components

Reusable components for building configuration and settings pages.

## Components

### ConfigSection
Section container with icon, title, and optional action.

```tsx
import { ConfigSection } from '@/components/config';

<ConfigSection
  icon="badge"
  title="Identity"
  action={<button>View Logs</button>}
>
  {/* Section content */}
</ConfigSection>
```

### Toggle
Toggle switch with label and description.

```tsx
import { Toggle } from '@/components/config';

<Toggle
  label="Feedback Loop"
  description="Enable user ratings."
  checked={enabled}
  onChange={(checked) => setEnabled(checked)}
/>
```

### Slider
Range slider with labels and value display.

```tsx
import { Slider } from '@/components/config';

// Basic slider
<Slider
  label="Confidence Threshold"
  value={85}
  onChange={(value) => setConfidence(value)}
  min={0}
  max={100}
  showValue
/>

// Slider with labels
<Slider
  label="Strictness"
  value={50}
  onChange={(value) => setStrictness(value)}
  min={0}
  max={100}
  valueLabel="Moderate"
  labels={{
    left: 'Factual',
    center: 'Balanced',
    right: 'Creative',
  }}
/>
```

### ImageUpload
Image upload component with preview.

```tsx
import { ImageUpload } from '@/components/config';

<ImageUpload
  label="Bot Avatar"
  helperText="JPG, PNG up to 2MB"
  currentImage="https://example.com/avatar.jpg"
  onImageChange={(file) => console.log(file)}
/>
```

### InfoBanner
Information banner with icon and optional action button.

```tsx
import { InfoBanner } from '@/components/config';

<InfoBanner
  icon="science"
  title="Test Your Chatbot"
  description="Launch the testing interface to verify behavior before publishing."
  variant="info"
  action={<button>Go to Testing</button>}
/>
```

## Props Reference

### ConfigSection Props

| Prop | Type | Description |
|------|------|-------------|
| icon | string | Material Symbol icon name |
| title | string | Section title |
| children | ReactNode | Section content |
| action | ReactNode | Optional action element in header |

### Toggle Props

| Prop | Type | Description |
|------|------|-------------|
| label | string | Toggle label |
| description | string | Optional description text |
| checked | boolean | Toggle state |
| onChange | (checked: boolean) => void | Change callback |

### Slider Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | required | Slider label |
| value | number | required | Current value |
| onChange | (value: number) => void | required | Change callback |
| min | number | 0 | Minimum value |
| max | number | 100 | Maximum value |
| step | number | 1 | Step increment |
| showValue | boolean | true | Show current value |
| valueLabel | string | - | Custom value label |
| labels | { left: string; center: string; right: string } | - | Labels below slider |

### ImageUpload Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | required | Upload label |
| helperText | string | "JPG, PNG up to 2MB" | Help text |
| currentImage | string | - | Current image URL |
| onImageChange | (file: File) => void | - | File change callback |

### InfoBanner Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| icon | string | required | Material Symbol icon name |
| title | string | required | Banner title |
| description | string | required | Banner description |
| action | ReactNode | - | Optional action button |
| variant | 'info' \| 'success' \| 'warning' | 'info' | Banner style variant |

## Features

### Toggle
- Smooth animation
- Blue active state
- Gray inactive state
- Click anywhere on row to toggle

### Slider
- Custom styled track
- Blue filled portion
- Large thumb for easy dragging
- Percentage display (when max=100)
- Custom value labels
- Optional left/center/right labels

### ImageUpload
- Circular preview
- Upload new image button
- Remove image button
- File type validation (JPG, PNG)
- Preview before upload

### InfoBanner Variants
- **Info**: Blue theme
- **Success**: Green theme
- **Warning**: Orange theme

## Usage Example

### Complete Configuration Form

```tsx
'use client';

import { useState } from 'react';
import { ConfigSection, Toggle, Slider, ImageUpload, InfoBanner } from '@/components/config';
import { Input, TextArea } from '@/components/forms';
import { Button } from '@/components/common';

export default function ConfigPage() {
  const [displayName, setDisplayName] = useState('');
  const [feedbackEnabled, setFeedbackEnabled] = useState(true);
  const [strictness, setStrictness] = useState(50);

  const getStrictnessLabel = () => {
    if (strictness < 33) return 'Factual';
    if (strictness < 67) return 'Moderate';
    return 'Creative';
  };

  return (
    <div className="flex flex-col gap-6">
      <ConfigSection icon="badge" title="Identity">
        <ImageUpload label="Bot Avatar" />
        <Input
          label="Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </ConfigSection>

      <ConfigSection icon="tune" title="AI Settings">
        <Toggle
          label="Feedback Loop"
          description="Enable user ratings"
          checked={feedbackEnabled}
          onChange={setFeedbackEnabled}
        />

        <Slider
          label="Strictness"
          value={strictness}
          onChange={setStrictness}
          valueLabel={getStrictnessLabel()}
          labels={{
            left: 'Factual',
            center: 'Balanced',
            right: 'Creative',
          }}
        />
      </ConfigSection>

      <InfoBanner
        icon="science"
        title="Test Your Chatbot"
        description="Launch testing interface"
        action={<Button>Go to Testing</Button>}
      />
    </div>
  );
}
```

## Styling

### Colors
- Section background: `#1e232e`
- Section border: `#282e39`
- Icon background: `#135bec/20`
- Icon color: `#135bec`
- Toggle active: `#135bec`
- Toggle inactive: `#282e39`
- Slider track: `#282e39`
- Slider fill: `#135bec`

## Complete Example

See [app/chatbots/[id]/config/page.tsx](../../app/chatbots/[id]/config/page.tsx) for a complete configuration page implementation.
