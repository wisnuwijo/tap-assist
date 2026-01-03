'use client';

import { useState } from 'react';

export default function ProfileContent() {
    const [fullName, setFullName] = useState('Jane Administrator');
    const [jobTitle, setJobTitle] = useState('Super Admin');
    const [department, setDepartment] = useState('Human Resources');
    const [phone, setPhone] = useState('+1 (555) 123-4567');
    const [emailNotifications, setEmailNotifications] = useState(true);

    return (
        <div className="space-y-8 animate-fade-in pt-2">
            {/* Profile Picture Section */}
            <section>
                <div className="flex items-start md:items-center gap-6">
                    <div className="size-24 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500 overflow-hidden ring-4 ring-white dark:ring-[#282e39]">
                        <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>
                            person
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-medium text-slate-900 dark:text-white">Profile Picture</h3>
                        <p className="text-sm text-slate-500 dark:text-[#9da6b9] mb-4">
                            Supports PNG, JPG or GIF up to 5MB.
                        </p>
                        <div className="flex gap-3">
                            <button
                                type="button"
                                className="px-3 py-2 rounded-lg bg-white dark:bg-[#111318] border border-slate-300 dark:border-[#282e39] text-slate-700 dark:text-white text-sm font-medium hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors shadow-sm"
                            >
                                Upload New
                            </button>
                            <button
                                type="button"
                                className="px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 text-sm font-medium transition-colors"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="border-slate-200 dark:border-[#282e39]" />

            {/* Personal Information Section */}
            <section>
                <div className="flex flex-col gap-1 mb-6">
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">
                        Personal Information
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-[#9da6b9]">
                        Update your personal details and contact information.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="col-span-1">
                        <label
                            htmlFor="full-name"
                            className="block text-sm font-medium text-slate-700 dark:text-[#9da6b9] mb-1.5"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="full-name"
                            name="full-name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="block w-full rounded-lg border-slate-300 dark:border-[#282e39] bg-white dark:bg-[#111318] text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-3 py-2.5 placeholder-slate-400"
                        />
                    </div>

                    {/* Email Address (Read-only) */}
                    <div className="col-span-1">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-slate-700 dark:text-[#9da6b9] mb-1.5"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            readOnly
                            value="jane.admin@tapassist.ai"
                            className="block w-full rounded-lg border-slate-300 dark:border-[#282e39] bg-slate-50 dark:bg-[#111318]/50 text-slate-500 dark:text-slate-400 shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-3 py-2.5 cursor-not-allowed"
                        />
                    </div>

                    {/* Job Title */}
                    <div className="col-span-1">
                        <label
                            htmlFor="job-title"
                            className="block text-sm font-medium text-slate-700 dark:text-[#9da6b9] mb-1.5"
                        >
                            Job Title
                        </label>
                        <input
                            type="text"
                            id="job-title"
                            name="job-title"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            className="block w-full rounded-lg border-slate-300 dark:border-[#282e39] bg-white dark:bg-[#111318] text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-3 py-2.5 placeholder-slate-400"
                        />
                    </div>

                    {/* Department */}
                    <div className="col-span-1">
                        <label
                            htmlFor="department"
                            className="block text-sm font-medium text-slate-700 dark:text-[#9da6b9] mb-1.5"
                        >
                            Department
                        </label>
                        <input
                            type="text"
                            id="department"
                            name="department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="block w-full rounded-lg border-slate-300 dark:border-[#282e39] bg-white dark:bg-[#111318] text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-3 py-2.5 placeholder-slate-400"
                        />
                    </div>

                    {/* Contact Information */}
                    <div className="col-span-1 md:col-span-2">
                        <label
                            htmlFor="contact-info"
                            className="block text-sm font-medium text-slate-700 dark:text-[#9da6b9] mb-1.5"
                        >
                            Contact Information
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span
                                    className="text-slate-500 material-symbols-outlined"
                                    style={{ fontSize: '20px' }}
                                >
                                    phone
                                </span>
                            </div>
                            <input
                                type="tel"
                                id="contact-info"
                                name="contact-info"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="block w-full rounded-lg border-slate-300 dark:border-[#282e39] bg-white dark:bg-[#111318] text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm pl-10 px-3 py-2.5 placeholder-slate-400"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <hr className="border-slate-200 dark:border-[#282e39]" />

            {/* Password Section */}
            <section>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-medium text-slate-900 dark:text-white">Password</h3>
                        <p className="text-sm text-slate-500 dark:text-[#9da6b9] mt-1">
                            Last changed 3 months ago.
                        </p>
                    </div>
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-[#111318] border border-slate-300 dark:border-[#282e39] text-slate-700 dark:text-white text-sm font-medium hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors shadow-sm"
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                            lock_reset
                        </span>
                        Change Password
                    </button>
                </div>
            </section>

            <hr className="border-slate-200 dark:border-[#282e39]" />

            {/* Notification Preferences Section */}
            <section>
                <div className="flex flex-col gap-4">
                    <div>
                        <h3 className="text-lg font-medium text-slate-900 dark:text-white">
                            Notification Preferences
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-[#9da6b9] mt-1">
                            Choose how you receive updates and alerts.
                        </p>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-[#111318] border border-slate-200 dark:border-[#282e39]">
                        <div className="flex h-6 items-center">
                            <input
                                id="email-notifs"
                                name="email-notifs"
                                type="checkbox"
                                checked={emailNotifications}
                                onChange={(e) => setEmailNotifications(e.target.checked)}
                                className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 bg-transparent text-primary focus:ring-primary"
                            />
                        </div>
                        <div className="text-sm leading-6">
                            <label
                                htmlFor="email-notifs"
                                className="font-medium text-slate-900 dark:text-white"
                            >
                                Email Notifications
                            </label>
                            <p className="text-slate-500 dark:text-[#9da6b9]">
                                Receive daily summaries and critical alerts via email.
                            </p>
                        </div>
                    </div>
                    <div>
                        <a
                            href="/settings"
                            className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 group"
                        >
                            Manage advanced notification settings
                            <span
                                className="material-symbols-outlined transition-transform group-hover:translate-x-0.5"
                                style={{ fontSize: '16px' }}
                            >
                                arrow_forward
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-6">
                <button
                    type="button"
                    className="px-4 py-2 rounded-lg bg-transparent border border-transparent text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-100 dark:hover:bg-[#282e39] transition-colors"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    className="px-6 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-colors shadow-sm shadow-primary/20"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}
