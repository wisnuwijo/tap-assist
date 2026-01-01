'use client';

import { useState } from 'react';

interface Integration {
    id: string;
    name: string;
    category: string;
    description: string;
    status: 'connected' | 'disconnected' | 'config-required';
    icon: 'slack' | 'teams' | 'drive' | 'workday' | 'bamboo' | 'zendesk';
    iconColor?: string;
}

const integrations: Integration[] = [
    {
        id: 'slack',
        name: 'Slack',
        category: 'Communication',
        description: 'Send notifications and chatbot responses directly to Slack channels or DMs.',
        status: 'connected',
        icon: 'slack',
    },
    {
        id: 'teams',
        name: 'Microsoft Teams',
        category: 'Communication',
        description: 'Integrate with MS Teams for seamless employee support within their workflow.',
        status: 'disconnected',
        icon: 'teams',
        iconColor: '#6264A7',
    },
    {
        id: 'drive',
        name: 'Google Drive',
        category: 'Document Management',
        description: "Sync SOPs and policy documents directly from your organization's Drive.",
        status: 'connected',
        icon: 'drive',
        iconColor: '#1EA362',
    },
    {
        id: 'workday',
        name: 'Workday',
        category: 'HRIS System',
        description: 'Sync employee data and organizational charts. API token has expired.',
        status: 'config-required',
        icon: 'workday',
        iconColor: '#0875E1',
    },
    {
        id: 'bamboo',
        name: 'BambooHR',
        category: 'HRIS System',
        description: 'Connect your HR data source to personalize chatbot responses for employees.',
        status: 'disconnected',
        icon: 'bamboo',
        iconColor: '#73BE1E',
    },
    {
        id: 'zendesk',
        name: 'Zendesk',
        category: 'Support Platform',
        description: 'Escalate complex HR queries to tickets in your existing support desk.',
        status: 'connected',
        icon: 'zendesk',
        iconColor: '#03363D',
    },
];

export default function IntegrationsSettings() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredIntegrations = integrations.filter(
        (integration) =>
            integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            integration.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            integration.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getStatusBadge = (status: Integration['status']) => {
        switch (status) {
            case 'connected':
                return (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800/30">
                        Connected
                    </span>
                );
            case 'disconnected':
                return (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        Disconnected
                    </span>
                );
            case 'config-required':
                return (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800/30">
                        Config Required
                    </span>
                );
        }
    };

    const getActionButton = (status: Integration['status']) => {
        switch (status) {
            case 'connected':
                return (
                    <button className="px-3 py-1.5 rounded bg-white dark:bg-[#111318] border border-slate-200 dark:border-[#282e39] text-slate-900 dark:text-white text-xs font-medium hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors shadow-sm">
                        Configure
                    </button>
                );
            case 'disconnected':
                return (
                    <button className="px-3 py-1.5 rounded bg-primary text-white text-xs font-medium hover:bg-primary/90 transition-colors shadow-sm">
                        Connect
                    </button>
                );
            case 'config-required':
                return (
                    <button className="px-3 py-1.5 rounded bg-amber-600 text-white text-xs font-medium hover:bg-amber-700 transition-colors shadow-sm">
                        Fix Config
                    </button>
                );
        }
    };

    const getIntegrationIcon = (integration: Integration) => {
        if (integration.icon === 'slack') {
            return (
                <svg className="w-full h-full" viewBox="0 0 24 24">
                    <path
                        d="M6 15a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2v2zm1 0a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-2z"
                        fill="#E01E5A"
                    />
                    <path
                        d="M11 6a2 2 0 0 1-2-2a2 2 0 0 1-2 2a2 2 0 0 1 2 2h2V6zm0 1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2a2 2 0 0 1-2-2V7z"
                        fill="#36C5F0"
                    />
                    <path
                        d="M17 11a2 2 0 0 1 2 2a2 2 0 0 1 2-2a2 2 0 0 1-2-2h-2v2zm-1 0a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2a2 2 0 0 1 2 2v2z"
                        fill="#2EB67D"
                    />
                    <path
                        d="M12 17a2 2 0 0 1 2 2a2 2 0 0 1 2-2a2 2 0 0 1-2-2h-2v2zm0-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2v2z"
                        fill="#ECB22E"
                    />
                </svg>
            );
        }

        // For other integrations, use Material Icons
        const iconMap = {
            teams: 'groups',
            drive: 'add_to_drive',
            workday: 'work_history',
            bamboo: 'spa',
            zendesk: 'support_agent',
        };

        return (
            <span
                className="material-symbols-outlined"
                style={{ fontSize: '32px', color: integration.iconColor }}
            >
                {iconMap[integration.icon]}
            </span>
        );
    };

    return (
        <div className="flex flex-col gap-6">
            {/* Search and Add Button */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="relative w-full md:w-96">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-slate-400" style={{ fontSize: '20px' }}>
                            search
                        </span>
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#111318] border border-slate-200 dark:border-[#282e39] rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="Search integrations..."
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-colors shadow-sm shadow-primary/20">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                        add
                    </span>
                    Add New Integration
                </button>
            </div>

            {/* Integration Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredIntegrations.map((integration) => (
                    <div
                        key={integration.id}
                        className={`bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] overflow-hidden flex flex-col hover:border-slate-300 dark:hover:border-slate-600 transition-colors ${integration.status === 'config-required'
                                ? 'ring-1 ring-amber-500/20 dark:ring-amber-500/30'
                                : ''
                            }`}
                    >
                        {/* Card Content */}
                        <div className="p-6 flex-1">
                            <div className="flex justify-between items-start mb-4">
                                <div className="size-12 rounded-lg bg-white dark:bg-[#101622] border border-slate-100 dark:border-[#282e39] flex items-center justify-center p-2">
                                    {getIntegrationIcon(integration)}
                                </div>
                                {getStatusBadge(integration.status)}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                                {integration.name}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-[#9da6b9] mb-2">
                                {integration.category}
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                                {integration.description}
                            </p>
                        </div>

                        {/* Card Footer */}
                        <div className="px-6 py-4 bg-slate-50 dark:bg-[#101622]/50 border-t border-slate-200 dark:border-[#282e39] flex items-center justify-between">
                            <button className="text-sm font-medium text-slate-600 dark:text-[#9da6b9] hover:text-slate-900 dark:hover:text-white transition-colors">
                                View Details
                            </button>
                            {getActionButton(integration.status)}
                        </div>
                    </div>
                ))}
            </div>

            {/* No Results */}
            {filteredIntegrations.length === 0 && (
                <div className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] p-12 text-center">
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-600 mb-3" style={{ fontSize: '48px' }}>
                        search_off
                    </span>
                    <p className="text-slate-500 dark:text-[#9da6b9] text-sm">
                        No integrations found matching "{searchQuery}"
                    </p>
                </div>
            )}
        </div>
    );
}
