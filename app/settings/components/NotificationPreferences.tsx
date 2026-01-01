'use client';

import { useState } from 'react';

export default function NotificationPreferences() {
    // Email Alerts State
    const [criticalSystemIssues, setCriticalSystemIssues] = useState(true);
    const [additionalRecipients, setAdditionalRecipients] = useState('');
    const [chatbotLearningCompletion, setChatbotLearningCompletion] = useState(true);
    const [knowledgeGapAlerts, setKnowledgeGapAlerts] = useState(false);

    // In-App Notifications State
    const [newChatbotFeedback, setNewChatbotFeedback] = useState(true);
    const [systemUpdates, setSystemUpdates] = useState(true);
    const [unansweredQuestions, setUnansweredQuestions] = useState(false);

    // Digest Reports State
    const [weeklySummary, setWeeklySummary] = useState(true);
    const [weeklySummaryDay, setWeeklySummaryDay] = useState('Monday');
    const [monthlyReport, setMonthlyReport] = useState(false);

    return (
        <div className="flex flex-col gap-6 max-w-4xl">
            {/* Email Alerts Section */}
            <section className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-[#282e39] flex gap-3 items-center">
                    <div className="size-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                            mail
                        </span>
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">Email Alerts</h3>
                        <p className="text-xs text-slate-500 dark:text-[#9da6b9] mt-0.5">
                            High-priority updates sent directly to your inbox.
                        </p>
                    </div>
                </div>
                <div className="p-6 flex flex-col gap-6">
                    {/* Critical System Issues */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start justify-between">
                            <div className="flex-1 pr-4">
                                <p className="text-sm font-medium text-slate-900 dark:text-white">
                                    Critical System Issues
                                </p>
                                <p className="text-xs text-slate-500 dark:text-[#9da6b9] mt-1">
                                    Receive immediate alerts when the chatbot service experiences downtime or critical
                                    errors.
                                </p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer shrink-0">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={criticalSystemIssues}
                                    onChange={(e) => setCriticalSystemIssues(e.target.checked)}
                                />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                            </label>
                        </div>
                        <div className="ml-0 pl-0 md:ml-0 md:pl-0 w-full md:w-2/3">
                            <label className="block text-xs font-medium text-slate-700 dark:text-slate-400 mb-1.5">
                                Additional Recipients (Optional)
                            </label>
                            <input
                                type="text"
                                value={additionalRecipients}
                                onChange={(e) => setAdditionalRecipients(e.target.value)}
                                className="w-full bg-slate-50 dark:bg-[#101622] border border-slate-200 dark:border-[#282e39] rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                placeholder="tech.lead@company.com, devops@company.com"
                            />
                        </div>
                    </div>

                    <div className="w-full h-px bg-slate-100 dark:bg-[#282e39]"></div>

                    {/* Chatbot Learning Completion */}
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                                Chatbot Learning Completion
                            </p>
                            <p className="text-xs text-slate-500 dark:text-[#9da6b9] mt-1">
                                Notification when the AI model finishes processing new training materials.
                            </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={chatbotLearningCompletion}
                                onChange={(e) => setChatbotLearningCompletion(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>

                    <div className="w-full h-px bg-slate-100 dark:bg-[#282e39]"></div>

                    {/* Knowledge Gap Alerts */}
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                                Knowledge Gap Alerts
                            </p>
                            <p className="text-xs text-slate-500 dark:text-[#9da6b9] mt-1">
                                Alerts when user queries cannot be answered by the current knowledge base.
                            </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={knowledgeGapAlerts}
                                onChange={(e) => setKnowledgeGapAlerts(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>
                </div>
            </section>

            {/* In-App Notifications Section */}
            <section className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-[#282e39] flex gap-3 items-center">
                    <div className="size-8 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                            notifications_active
                        </span>
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                            In-App Notifications
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-[#9da6b9] mt-0.5">
                            Real-time badges and alerts within the admin console.
                        </p>
                    </div>
                </div>
                <div className="p-6 flex flex-col gap-6">
                    {/* New Chatbot Feedback */}
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                                New Chatbot Feedback
                            </p>
                            <p className="text-xs text-slate-500 dark:text-[#9da6b9] mt-1">
                                Notify me when users rate chatbot responses as helpful or unhelpful.
                            </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={newChatbotFeedback}
                                onChange={(e) => setNewChatbotFeedback(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>

                    <div className="w-full h-px bg-slate-100 dark:bg-[#282e39]"></div>

                    {/* System Updates */}
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">System Updates</p>
                            <p className="text-xs text-slate-500 dark:text-[#9da6b9] mt-1">
                                Announcements about new Tap Assist features and maintenance.
                            </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={systemUpdates}
                                onChange={(e) => setSystemUpdates(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>

                    <div className="w-full h-px bg-slate-100 dark:bg-[#282e39]"></div>

                    {/* Unanswered Questions */}
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                                Unanswered Questions
                            </p>
                            <p className="text-xs text-slate-500 dark:text-[#9da6b9] mt-1">
                                Alerts when a high volume of questions remain unanswered.
                            </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={unansweredQuestions}
                                onChange={(e) => setUnansweredQuestions(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>
                </div>
            </section>

            {/* Digest Reports Section */}
            <section className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-[#282e39] flex gap-3 items-center">
                    <div className="size-8 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                            summarize
                        </span>
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">Digest Reports</h3>
                        <p className="text-xs text-slate-500 dark:text-[#9da6b9] mt-0.5">
                            Summary reports sent to your email periodically.
                        </p>
                    </div>
                </div>
                <div className="p-6 flex flex-col gap-6">
                    {/* Weekly Summary */}
                    <div className="flex items-start justify-between">
                        <div className="flex-1 pr-4">
                            <div className="flex items-center gap-2">
                                <p className="text-sm font-medium text-slate-900 dark:text-white">Weekly Summary</p>
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                    Recommended
                                </span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-[#9da6b9] mt-1 mb-3">
                                A consolidated view of chatbot performance and user engagement metrics.
                            </p>
                            <div className="flex items-center gap-3">
                                <span className="text-xs text-slate-500 dark:text-slate-400">Send every:</span>
                                <select
                                    value={weeklySummaryDay}
                                    onChange={(e) => setWeeklySummaryDay(e.target.value)}
                                    className="bg-slate-50 dark:bg-[#101622] border border-slate-200 dark:border-[#282e39] rounded px-2 py-1 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary"
                                >
                                    <option>Monday</option>
                                    <option>Friday</option>
                                    <option>Sunday</option>
                                </select>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer shrink-0">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={weeklySummary}
                                onChange={(e) => setWeeklySummary(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>

                    <div className="w-full h-px bg-slate-100 dark:bg-[#282e39]"></div>

                    {/* Monthly Report */}
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">Monthly Report</p>
                            <p className="text-xs text-slate-500 dark:text-[#9da6b9] mt-1">
                                Comprehensive monthly analysis including trend data.
                            </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={monthlyReport}
                                onChange={(e) => setMonthlyReport(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>
                </div>
            </section>
        </div>
    );
}
