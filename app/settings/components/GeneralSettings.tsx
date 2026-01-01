'use client';

import { useState } from 'react';

export default function GeneralSettings() {
    const [emailAlerts, setEmailAlerts] = useState(true);
    const [inAppNotifications, setInAppNotifications] = useState(true);
    const [weeklyDigest, setWeeklyDigest] = useState(false);
    const [twoFactorAuth, setTwoFactorAuth] = useState(true);

    return (
        <div className="flex flex-col gap-6 max-w-4xl">
            {/* General Information */}
            <section className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-[#282e39] flex justify-between items-center">
                    <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                            General Information
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-[#9da6b9] mt-0.5">
                            Basic platform identification and localization.
                        </p>
                    </div>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                            Default Timezone
                        </label>
                        <select
                            defaultValue="(UTC-08:00) Pacific Time (US & Canada)"
                            className="w-full bg-slate-50 dark:bg-[#101622] border border-slate-200 dark:border-[#282e39] rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        >
                            <option>(UTC-08:00) Pacific Time (US &amp; Canada)</option>
                            <option>(UTC-05:00) Eastern Time (US &amp; Canada)</option>
                            <option>(UTC+00:00) London</option>
                            <option>(UTC+01:00) Paris</option>
                        </select>
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                            System Language
                        </label>
                        <select
                            defaultValue="English (United States)"
                            className="w-full bg-slate-50 dark:bg-[#101622] border border-slate-200 dark:border-[#282e39] rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        >
                            <option>English (United States)</option>
                            <option>French (Français)</option>
                            <option>Spanish (Español)</option>
                            <option>German (Deutsch)</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Notification Preferences */}
            <section className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-[#282e39]">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        Notification Preferences
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-[#9da6b9] mt-0.5">
                        Control how and when administrators receive alerts.
                    </p>
                </div>
                <div className="p-6 flex flex-col gap-5">
                    {/* Email Alerts */}
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">Email Alerts</p>
                            <p className="text-xs text-slate-500 dark:text-[#9da6b9]">
                                Receive emails for critical system issues and updates.
                            </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={emailAlerts}
                                onChange={(e) => setEmailAlerts(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>

                    <div className="w-full h-px bg-slate-100 dark:bg-[#282e39]"></div>

                    {/* In-App Notifications */}
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                                In-App Notifications
                            </p>
                            <p className="text-xs text-slate-500 dark:text-[#9da6b9]">
                                Show badge alerts in the top dashboard header.
                            </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={inAppNotifications}
                                onChange={(e) => setInAppNotifications(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>

                    <div className="w-full h-px bg-slate-100 dark:bg-[#282e39]"></div>

                    {/* Weekly Digest */}
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">Weekly Digest</p>
                            <p className="text-xs text-slate-500 dark:text-[#9da6b9]">
                                Summary of chatbot performance stats sent every Monday.
                            </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={weeklyDigest}
                                onChange={(e) => setWeeklyDigest(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>
                </div>
            </section>

            {/* Security Settings */}
            <section className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-[#282e39]">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">Security Settings</h3>
                    <p className="text-sm text-slate-500 dark:text-[#9da6b9] mt-0.5">
                        Authentication and access control policies.
                    </p>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 2FA */}
                    <div className="col-span-1 md:col-span-2 flex items-center justify-between p-4 rounded-lg border border-slate-200 dark:border-[#282e39] bg-slate-50 dark:bg-[#101622]/50">
                        <div className="flex items-center gap-3">
                            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">security</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">
                                    Two-Factor Authentication (2FA)
                                </p>
                                <p className="text-xs text-slate-500 dark:text-[#9da6b9]">
                                    Enforce 2FA for all administrator accounts.
                                </p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={twoFactorAuth}
                                onChange={(e) => setTwoFactorAuth(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>

                    {/* Password Policy */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                            Password Policy
                        </label>
                        <select
                            defaultValue="Strong (Min 12 chars, symbols)"
                            className="w-full bg-slate-50 dark:bg-[#101622] border border-slate-200 dark:border-[#282e39] rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        >
                            <option>Standard (Min 8 chars)</option>
                            <option>Strong (Min 12 chars, symbols)</option>
                            <option>Strict (Min 16 chars, 90 day expiry)</option>
                        </select>
                    </div>

                    {/* Session Timeout */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                            Session Timeout
                        </label>
                        <select
                            defaultValue="30 minutes"
                            className="w-full bg-slate-50 dark:bg-[#101622] border border-slate-200 dark:border-[#282e39] rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        >
                            <option>15 minutes</option>
                            <option>30 minutes</option>
                            <option>1 hour</option>
                            <option>4 hours</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Active Integrations */}
            <section className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-[#282e39]">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        Active Integrations
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-[#9da6b9] mt-0.5">
                        Manage external services connected to Tap Assist.
                    </p>
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-lg bg-[#4A154B] flex items-center justify-center text-white font-bold text-xl">
                                S
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">Slack</p>
                                <p className="text-xs text-slate-500 dark:text-[#9da6b9]">
                                    Connected to workspace 'TechCorp HR'
                                </p>
                            </div>
                        </div>
                        <button className="px-3 py-1.5 rounded border border-slate-300 dark:border-[#282e39] text-slate-700 dark:text-slate-300 text-xs font-medium hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors">
                            Configure
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
