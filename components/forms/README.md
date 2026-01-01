# Form Components

Reusable form components with consistent styling and validation support.

## Components

### Input
Text input field with label, error states, and helper text.

```tsx
import { Input } from '@/components/forms';

<Input
  label="Email Address"
  name="email"
  type="email"
  placeholder="you@example.com"
  value={value}
  onChange={handleChange}
  required
  error="Invalid email address"
  helperText="We'll never share your email"
/>
```

### TextArea
Multi-line text input with label and validation.

```tsx
import { TextArea } from '@/components/forms';

<TextArea
  label="Description"
  name="description"
  placeholder="Enter description..."
  value={value}
  onChange={handleChange}
  rows={6}
  required
  error="Description is required"
/>
```

### FileUpload
Drag-and-drop file upload with progress tracking.

```tsx
import { FileUpload } from '@/components/forms';

<FileUpload
  label="Upload Documents"
  helperText="Supported: PDF, DOCX, TXT"
  acceptedFormats={['.pdf', '.docx', '.txt']}
  maxSize={50}
  onFilesChange={(files) => console.log(files)}
/>
```

## Features

### Input & TextArea
- Label with required indicator (*)
- Error state with error message
- Helper text for additional context
- Focus states with blue ring
- Full TypeScript support
- All native HTML attributes supported

### FileUpload
- Drag-and-drop support
- Click to browse files
- Multiple file upload
- Upload progress simulation
- File type icons (PDF, DOCX, TXT)
- File removal
- Accepted format validation
- Max file size display

## Props Reference

### Input Props
Extends all native `HTMLInputElement` attributes plus:

| Prop | Type | Description |
|------|------|-------------|
| label | string | Input label text |
| error | string | Error message to display |
| helperText | string | Helper text below input |

### TextArea Props
Extends all native `HTMLTextAreaElement` attributes plus:

| Prop | Type | Description |
|------|------|-------------|
| label | string | TextArea label text |
| error | string | Error message to display |
| helperText | string | Helper text below textarea |

### FileUpload Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | "Upload Knowledge Base Documents" | Upload section label |
| helperText | string | "Supported: PDF, DOCX, TXT" | Supported formats text |
| acceptedFormats | string[] | ['.pdf', '.docx', '.txt'] | Accepted file extensions |
| maxSize | number | 50 | Maximum file size in MB |
| onFilesChange | (files: UploadedFile[]) => void | - | Callback when files change |

### UploadedFile Type

```typescript
interface UploadedFile {
  id: string;
  name: string;
  size: number;
  status: 'uploading' | 'ready' | 'error';
  progress: number;
  type: string;
}
```

## Examples

### Complete Form Example

```tsx
'use client';

import { useState } from 'react';
import { Input, TextArea, FileUpload } from '@/components/forms';
import { Button } from '@/components/common';

export default function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const [files, setFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ formData, files });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />

      <TextArea
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        rows={4}
        required
      />

      <FileUpload onFilesChange={setFiles} />

      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
}
```

See [app/chatbots/create/page.tsx](../../app/chatbots/create/page.tsx) for a complete implementation.
