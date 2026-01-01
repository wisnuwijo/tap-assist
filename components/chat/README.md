# Chat Components

Reusable components for building chat interfaces and chatbot testing pages.

## Components

### ChatMessage
Display chat messages from bot or user with optional rating system.

```tsx
import { ChatMessage } from '@/components/chat';

// Bot message
<ChatMessage
  type="bot"
  message="Hello! How can I help you today?"
  timestamp="10:00 AM"
  senderName="Onboarding Assistant"
  showRating={true}
  onRate={(rating) => console.log(rating)}
/>

// User message
<ChatMessage
  type="user"
  message="How do I enroll in benefits?"
  timestamp="10:02 AM"
  senderName="Admin Tester"
/>

// Thinking state
<ChatMessage
  type="bot"
  message=""
  timestamp="10:03 AM"
  isThinking={true}
/>
```

### ChatInput
Input field with send button for chat messages.

```tsx
import { ChatInput } from '@/components/chat';

<ChatInput
  onSend={(message) => console.log(message)}
  placeholder="Type a message..."
  disabled={false}
/>
```

### DateDivider
Date separator for chat messages.

```tsx
import { DateDivider } from '@/components/chat';

<DateDivider date="Today, October 24" />
```

## Props Reference

### ChatMessage Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | 'bot' \| 'user' | required | Message sender type |
| message | string \| ReactNode | required | Message content |
| timestamp | string | required | Time of message |
| senderName | string | 'Onboarding Assistant' \| 'Admin Tester' | Sender display name |
| avatar | string | - | Avatar URL (optional) |
| showRating | boolean | false | Show rating buttons |
| onRate | (rating: 'correct' \| 'incorrect' \| 'irrelevant') => void | - | Rating callback |
| isThinking | boolean | false | Show typing indicator |

### ChatInput Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| onSend | (message: string) => void | required | Send message callback |
| placeholder | string | "Type a message to test the chatbot..." | Input placeholder |
| disabled | boolean | false | Disable input |

### DateDivider Props

| Prop | Type | Description |
|------|------|-------------|
| date | string | Date text to display |

## Features

### ChatMessage Features
- **Bot messages**: Left-aligned with green avatar, rounded corners (except top-left)
- **User messages**: Right-aligned with blue background, rounded corners (except top-right)
- **Thinking state**: Animated dots indicating bot is processing
- **Rating system**: Three buttons (Correct, Incorrect, Irrelevant) for feedback
- **Rich content**: Supports ReactNode for formatted messages (lists, links, etc.)
- **Responsive**: Adapts to different screen sizes

### ChatInput Features
- **Attach button**: Icon button for file attachments
- **Text input**: Full-width input field
- **Send button**: Disabled when empty or disabled prop is true
- **Enter key**: Sends message on Enter (without Shift)
- **Auto-clear**: Clears input after sending

## Usage Example

### Complete Chat Interface

```tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { ChatMessage, ChatInput, DateDivider } from '@/components/chat';

interface Message {
  id: string;
  type: 'bot' | 'user';
  message: string;
  timestamp: string;
  showRating?: boolean;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (message: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      message,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setIsTyping(true);
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        message: 'This is a bot response.',
        timestamp: new Date().toLocaleTimeString(),
        showRating: true,
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleRateResponse = (messageId: string, rating: string) => {
    console.log(`Message ${messageId} rated as ${rating}`);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 bg-[#0f1419]">
        <DateDivider date="Today, October 24" />

        {messages.map(msg => (
          <ChatMessage
            key={msg.id}
            type={msg.type}
            message={msg.message}
            timestamp={msg.timestamp}
            showRating={msg.showRating}
            onRate={(rating) => handleRateResponse(msg.id, rating)}
          />
        ))}

        {isTyping && (
          <ChatMessage
            type="bot"
            message=""
            timestamp={new Date().toLocaleTimeString()}
            isThinking
          />
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatInput onSend={handleSendMessage} disabled={isTyping} />
    </div>
  );
}
```

## Styling

### Message Styles
- Bot message background: `#1e232e`
- User message background: `#135bec`
- Border color: `#282e39`
- Timestamp color: `#9da6b9`

### Rating Button States
- Correct: Green (`#0bda5e`)
- Incorrect: Orange (`orange-400`)
- Irrelevant: Gray (`gray-400`)

## Complete Example

See [app/chatbots/[id]/test/page.tsx](../../app/chatbots/[id]/test/page.tsx) for a complete chatbot testing interface implementation.
