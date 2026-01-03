'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { ChatMessage, ChatInput, DateDivider } from '@/components/chat';
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
  { label: 'Onboarding Assistant Testing' },
];

interface Message {
  id: string;
  type: 'bot' | 'user';
  message: string | React.ReactNode;
  timestamp: string;
  showRating?: boolean;
  isThinking?: boolean;
}

export default function ChatbotTestPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      message:
        'Hello! I am the Tap Assist Onboarding Bot. I can help you with company policies, benefits, and IT setup. How can I assist you today?',
      timestamp: '10:00 AM',
      showRating: false,
    },
    {
      id: '2',
      type: 'user',
      message: 'How do I enroll in the dental plan?',
      timestamp: '10:02 AM',
    },
    {
      id: '3',
      type: 'bot',
      message: (
        <div>
          <p className="mb-3">
            You can enroll in the dental plan through the{' '}
            <span className="font-semibold">Workday Benefits Portal</span>.
          </p>
          <ol className="list-decimal list-inside space-y-1 mb-3">
            <li>Log in to Workday.</li>
            <li>Click on the "Benefits" app.</li>
            <li>Select "Change Benefits" and choose "Dental" from the list.</li>
          </ol>
          <p>Open enrollment closes on November 15th.</p>
        </div>
      ),
      timestamp: '10:02 AM',
      showRating: true,
    },
    {
      id: '4',
      type: 'user',
      message: 'Can I bring my dog to the office?',
      timestamp: '10:05 AM',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (message: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      message,
      timestamp: new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        message:
          'This is a simulated response. In the actual implementation, this would connect to your chatbot API.',
        timestamp: new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }),
        showRating: true,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleRateResponse = (
    messageId: string,
    rating: 'correct' | 'incorrect' | 'irrelevant'
  ) => {
    console.log(`Message ${messageId} rated as ${rating}`);
    // Here you would send the rating to your backend
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: '1',
        type: 'bot',
        message:
          'Hello! I am the Tap Assist Onboarding Bot. I can help you with company policies, benefits, and IT setup. How can I assist you today?',
        timestamp: new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }),
        showRating: false,
      },
    ]);
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
      <div className="flex flex-col h-[calc(100vh-120px)]">
        {/* Test Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#282e39]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[#0bda5e]/10 text-[#0bda5e] px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-[#0bda5e] rounded-full"></span>
              <span className="text-xs font-bold uppercase">Live Mode</span>
            </div>
            <div className="text-[#9da6b9] text-sm">
              Session ID: <span className="text-white font-mono">#TEST-2023-894</span>
            </div>
          </div>
          <button
            onClick={handleClearHistory}
            className="flex items-center gap-2 px-4 py-2 text-[#9da6b9] hover:text-white bg-[#1e232e] hover:bg-[#282e39] border border-[#282e39] rounded-lg text-sm font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
            Clear History
          </button>
        </div>

        {/* Chat Area */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto py-6 px-4 bg-[#0f1419]"
          style={{ scrollbarGutter: 'stable' }}
        >
          <div className="max-w-4xl mx-auto">
            <DateDivider date="Today, October 24" />

            {messages.map((msg) => (
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
                timestamp={new Date().toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true,
                })}
                isThinking
              />
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Chat Input */}
        <div className="border-t border-[#282e39] bg-[#1e232e]">
          <div className="max-w-4xl mx-auto">
            <ChatInput onSend={handleSendMessage} disabled={isTyping} />
            <div className="px-4 pb-3">
              <p className="text-[#6b7280] text-xs text-center">
                Responses generated in this test environment will help train the model. Feedback is
                recorded immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
