'use client';

import { useState } from 'react';

interface AuditLogEntry {
    id: string;
    action: string;
    user: string;
    userInitials: string;
    dateTime: string;
    ipAddress: string;
}

const auditLogs: AuditLogEntry[] = [
    {
        id: '1',
        action: 'Updated Password Policy',
        user: 'Jane Admin',
        userInitials: 'JA',
        dateTime: 'Oct 24, 2023, 10:42 AM',
        ipAddress: '192.168.1.42',
    },
    {
        id: '2',
        action: 'User Lockout',
        user: 'System',
        userInitials: 'SY',
        dateTime: 'Oct 24, 2023, 09:15 AM',
        ipAddress: '10.0.0.5',
    },
    {
        id: '3',
        action: 'Integration Added (Slack)',
        user: 'Jane Admin',
        userInitials: 'JA',
        dateTime: 'Oct 23, 2023, 04:30 PM',
        ipAddress: '192.168.1.42',
    },
];

export default function SecuritySettings() {
    // Password Policy State
    const [minPasswordLength, setMinPasswordLength] = useState(12);
    const [passwordExpiry, setPasswordExpiry] = useState(90);
    const [requireUppercase, setRequireUppercase] = useState(true);
    const [requireNumber, setRequireNumber] = useState(true);
    const [requireSpecialChar, setRequireSpecialChar] = useState(true);

    // 2FA State
    const [enforce2FA, setEnforce2FA] = useState(true);

    // Session Management State
    const [sessionTimeout, setSessionTimeout] = useState('30 Minutes');

    // Account Lockout State
    const [maxFailedAttempts, setMaxFailedAttempts] = useState(5);
    const [lockoutDuration, setLockoutDuration] = useState(30);

    return (
        <div className="flex flex-col gap-8">
            {/* Password Policy Section */}
            <section className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                        <span className="material-symbols-outlined">lock</span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Password Policy</h3>
                        <p className="text-sm text-slate-500 dark:text-[#9da6b9]">
                            Define requirements for user passwords.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Minimum Password Length
                        </label>
                        <input
                            type="number"
                            value={minPasswordLength}
                            onChange={(e) => setMinPasswordLength(Number(e.target.value))}
                            className="w-full bg-slate-50 dark:bg-[#101622] border border-slate-200 dark:border-[#282e39] rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Password Expiry (Days)
                        </label>
                        <input
                            type="number"
                            value={passwordExpiry}
                            onChange={(e) => setPasswordExpiry(Number(e.target.value))}
                            className="w-full bg-slate-50 dark:bg-[#101622] border border-slate-200 dark:border-[#282e39] rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                    </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Complexity Requirements
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                            type="checkbox"
                            checked={requireUppercase}
                            onChange={(e) => setRequireUppercase(e.target.checked)}
                            className="rounded text-primary border-slate-300 dark:border-[#282e39] bg-slate-50 dark:bg-[#101622] focus:ring-primary h-5 w-5"
                        />
                        <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                            Require at least one uppercase letter
                        </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                            type="checkbox"
                            checked={requireNumber}
                            onChange={(e) => setRequireNumber(e.target.checked)}
                            className="rounded text-primary border-slate-300 dark:border-[#282e39] bg-slate-50 dark:bg-[#101622] focus:ring-primary h-5 w-5"
                        />
                        <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                            Require at least one number
                        </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                            type="checkbox"
                            checked={requireSpecialChar}
                            onChange={(e) => setRequireSpecialChar(e.target.checked)}
                            className="rounded text-primary border-slate-300 dark:border-[#282e39] bg-slate-50 dark:bg-[#101622] focus:ring-primary h-5 w-5"
                        />
                        <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                            Require at least one special character (!@#$%)
                        </span>
                    </label>
                </div>
            </section>

            {/* 2FA and Session Management Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Two-Factor Authentication */}
                <section className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-green-500/10 p-2 rounded-lg text-green-600 dark:text-green-400">
                            <span className="material-symbols-outlined">security</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                Two-Factor Authentication
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-[#9da6b9]">Manage 2FA enforcement.</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-slate-900 dark:text-white">
                                Enforce 2FA for all users
                            </span>
                            <span className="text-xs text-slate-500 dark:text-[#9da6b9]">
                                Requires all users to set up 2FA on next login.
                            </span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={enforce2FA}
                                onChange={(e) => setEnforce2FA(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-[#282e39] mt-auto">
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                            User specific 2FA settings
                        </span>
                        <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                            Manage Users
                        </button>
                    </div>
                </section>

                {/* Session Management */}
                <section className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-amber-500/10 p-2 rounded-lg text-amber-600 dark:text-amber-400">
                            <span className="material-symbols-outlined">timer</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                Session Management
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-[#9da6b9]">
                                Control user session timeouts.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                Auto-logout after inactivity
                            </label>
                            <select
                                value={sessionTimeout}
                                onChange={(e) => setSessionTimeout(e.target.value)}
                                className="w-full bg-slate-50 dark:bg-[#101622] border border-slate-200 dark:border-[#282e39] rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            >
                                <option>15 Minutes</option>
                                <option>30 Minutes</option>
                                <option>1 Hour</option>
                                <option>4 Hours</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20">
                            <span
                                className="material-symbols-outlined text-blue-600 dark:text-blue-400"
                                style={{ fontSize: '20px' }}
                            >
                                info
                            </span>
                            <p className="text-xs text-blue-800 dark:text-blue-200">
                                Changes will apply to new sessions only.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Account Lockout Policy */}
            <section className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-red-500/10 p-2 rounded-lg text-red-600 dark:text-red-400">
                        <span className="material-symbols-outlined">block</span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            Account Lockout Policy
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-[#9da6b9]">
                            Prevent brute-force attacks.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Max Failed Login Attempts
                        </label>
                        <div className="flex items-center gap-4">
                            <input
                                type="range"
                                min="3"
                                max="10"
                                value={maxFailedAttempts}
                                onChange={(e) => setMaxFailedAttempts(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-primary"
                            />
                            <output className="text-sm font-bold text-slate-900 dark:text-white w-6 text-center">
                                {maxFailedAttempts}
                            </output>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Lockout Duration (Minutes)
                        </label>
                        <input
                            type="number"
                            value={lockoutDuration}
                            onChange={(e) => setLockoutDuration(Number(e.target.value))}
                            className="w-full bg-slate-50 dark:bg-[#101622] border border-slate-200 dark:border-[#282e39] rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                    </div>
                </div>
            </section>

            {/* Audit Log Viewer */}
            <section className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="bg-purple-500/10 p-2 rounded-lg text-purple-600 dark:text-purple-400">
                            <span className="material-symbols-outlined">history</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                Audit Log Viewer
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-[#9da6b9]">
                                Recent administrative actions.
                            </p>
                        </div>
                    </div>
                    <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                        View Full Logs
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                            arrow_forward
                        </span>
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-600 dark:text-[#9da6b9]">
                        <thead className="bg-slate-50 dark:bg-[#101622] border-b border-slate-200 dark:border-[#282e39]">
                            <tr>
                                <th className="px-4 py-3 font-medium text-slate-900 dark:text-white">Action</th>
                                <th className="px-4 py-3 font-medium text-slate-900 dark:text-white">User</th>
                                <th className="px-4 py-3 font-medium text-slate-900 dark:text-white">
                                    Date &amp; Time
                                </th>
                                <th className="px-4 py-3 font-medium text-slate-900 dark:text-white">
                                    IP Address
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-[#282e39]">
                            {auditLogs.map((log) => (
                                <tr key={log.id}>
                                    <td className="px-4 py-3">{log.action}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            <div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] text-slate-600 dark:text-slate-300">
                                                {log.userInitials}
                                            </div>
                                            {log.user}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">{log.dateTime}</td>
                                    <td className="px-4 py-3 font-mono text-xs">{log.ipAddress}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
