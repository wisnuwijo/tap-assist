'use client';

import { useState } from 'react';

interface PaymentMethod {
    id: string;
    type: 'visa' | 'mastercard';
    last4: string;
    expiry: string;
    isDefault: boolean;
}

interface Invoice {
    id: string;
    invoiceNumber: string;
    date: string;
    amount: string;
    status: 'paid' | 'pending' | 'failed';
}

const paymentMethods: PaymentMethod[] = [
    {
        id: '1',
        type: 'visa',
        last4: '4242',
        expiry: '12/2024',
        isDefault: true,
    },
    {
        id: '2',
        type: 'mastercard',
        last4: '8833',
        expiry: '08/2025',
        isDefault: false,
    },
];

const invoices: Invoice[] = [
    {
        id: '1',
        invoiceNumber: 'INV-2023-0012',
        date: 'Oct 24, 2023',
        amount: '$49.00',
        status: 'paid',
    },
    {
        id: '2',
        invoiceNumber: 'INV-2023-0011',
        date: 'Sep 24, 2023',
        amount: '$49.00',
        status: 'paid',
    },
    {
        id: '3',
        invoiceNumber: 'INV-2023-0010',
        date: 'Aug 24, 2023',
        amount: '$49.00',
        status: 'paid',
    },
];

export default function AccountBilling() {
    const [billingPeriod, setBillingPeriod] = useState('Last 12 Months');

    return (
        <div className="flex flex-col gap-8">
            {/* Subscription Plan and Usage Statistics Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Subscription Plan */}
                <section className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-indigo-500/10 p-2 rounded-lg text-indigo-600 dark:text-indigo-400">
                            <span className="material-symbols-outlined">diamond</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                Subscription Plan
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-[#9da6b9]">
                                Manage your plan details.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                                        Business Pro
                                    </h4>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                        Active
                                    </span>
                                </div>
                                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                                    $49
                                    <span className="text-sm font-normal text-slate-500 dark:text-[#9da6b9]">
                                        /month
                                    </span>
                                </p>
                                <p className="text-sm text-slate-500 dark:text-[#9da6b9] mt-1">
                                    Next billing date: Nov 24, 2023
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-3 mb-6">
                            <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                <span
                                    className="material-symbols-outlined text-green-500"
                                    style={{ fontSize: '18px' }}
                                >
                                    check_circle
                                </span>
                                Unlimited Chatbots
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                <span
                                    className="material-symbols-outlined text-green-500"
                                    style={{ fontSize: '18px' }}
                                >
                                    check_circle
                                </span>
                                Advanced Analytics
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                <span
                                    className="material-symbols-outlined text-green-500"
                                    style={{ fontSize: '18px' }}
                                >
                                    check_circle
                                </span>
                                50GB Document Storage
                            </li>
                        </ul>
                    </div>

                    <div className="flex gap-3 pt-6 border-t border-slate-200 dark:border-[#282e39] mt-auto">
                        <button className="flex-1 py-2 px-4 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                            Upgrade Plan
                        </button>
                        <button className="py-2 px-4 bg-transparent border border-slate-200 dark:border-[#282e39] text-slate-700 dark:text-white rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            Cancel
                        </button>
                    </div>
                </section>

                {/* Usage Statistics */}
                <section className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-cyan-500/10 p-2 rounded-lg text-cyan-600 dark:text-cyan-400">
                            <span className="material-symbols-outlined">data_usage</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                Usage Statistics
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-[#9da6b9]">
                                Monitor your account limits.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 flex-1">
                        {/* Chatbot Interactions */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-medium text-slate-700 dark:text-slate-300">
                                    Chatbot Interactions
                                </span>
                                <span className="text-slate-500 dark:text-[#9da6b9]">8,420 / 10,000</span>
                            </div>
                            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
                                <div className="bg-primary h-2.5 rounded-full" style={{ width: '84%' }}></div>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-[#9da6b9] text-right">84% used</p>
                        </div>

                        {/* Document Storage */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-medium text-slate-700 dark:text-slate-300">
                                    Document Storage
                                </span>
                                <span className="text-slate-500 dark:text-[#9da6b9]">12.5 GB / 50 GB</span>
                            </div>
                            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
                                <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-[#9da6b9] text-right">25% used</p>
                        </div>

                        {/* User Seats */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-medium text-slate-700 dark:text-slate-300">User Seats</span>
                                <span className="text-slate-500 dark:text-[#9da6b9]">4 / 5</span>
                            </div>
                            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
                                <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-[#9da6b9] text-right">80% used</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Payment Methods */}
            <section className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-600 dark:text-emerald-400">
                            <span className="material-symbols-outlined">credit_card</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Payment Methods</h3>
                            <p className="text-sm text-slate-500 dark:text-[#9da6b9]">
                                Manage your payment details.
                            </p>
                        </div>
                    </div>
                    <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                            add
                        </span>
                        Add Method
                    </button>
                </div>

                <div className="flex flex-col gap-3">
                    {paymentMethods.map((method) => (
                        <div
                            key={method.id}
                            className={`flex items-center justify-between p-4 border border-slate-200 dark:border-[#282e39] rounded-lg ${method.isDefault
                                ? 'bg-slate-50 dark:bg-[#101622]/50'
                                : 'hover:bg-slate-50 dark:hover:bg-[#101622]/50'
                                } transition-colors`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-8 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600 flex items-center justify-center">
                                    {method.type === 'visa' ? (
                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC341AqvBVdythdL1YCugf-gpAlGuwgCN1-p49kbjOH-mvm2ePwt_hCGZgy6TO_J5ZzOy96NuAA_h6grhSbh9CC2FDaI6DY2C9ckTxnDAihJZ52rGUXFybXOBSc1kmG-AAP59fKk6c3B_QVh8ga89i873uhu47i_GMrfsLCeX5Y3MkFjM7bIOknykva5VAdXg16FP_KJOLh2MPpErUOSnp5omtZebGpuly_fdUA8rJhJj0ItTAT1HgvrAREBqKVBpzx2sV9lfxp468"
                                            alt="Visa"
                                            className="h-4 object-contain opacity-80"
                                        />
                                    ) : (
                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3MZBmgfACWBPGugRRZk-tJHGWmc1cuNK8F7Baox1KtFlr1M3zx8eg66AOx_4CziaNtt3CgO2F6TzuiQw0RB4_80b36JSL0LqOZfIytQffYioElMLpxWoMGe7j7hbAQSUJYJJ4MAsst-DQNgd07lccBw491Hib9AJmobytLF9Zq6iMgcJKnWC_rg-LJJ_XQPuxa6tqjXtEJblkEY9R2hrQeMxvZR8f1TkIvTIaW2-p1VsFBYbl4n_hij-hu9BfXeTFt5aZ7D1tIoY"
                                            alt="Mastercard"
                                            className="h-5 object-contain opacity-80"
                                        />
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`text-sm ${method.isDefault ? 'font-bold' : 'font-medium'
                                                } text-slate-900 dark:text-white`}
                                        >
                                            {method.type === 'visa' ? 'Visa' : 'Mastercard'} ending in {method.last4}
                                        </span>
                                        {method.isDefault && (
                                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                                                Default
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-xs text-slate-500 dark:text-[#9da6b9]">
                                        Expires {method.expiry}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {!method.isDefault && (
                                    <button className="text-xs font-medium text-primary hover:underline px-2">
                                        Set as Default
                                    </button>
                                )}
                                <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                                        edit
                                    </span>
                                </button>
                                <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                                        delete
                                    </span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Billing History */}
            <section className="bg-white dark:bg-[#111318] rounded-xl border border-slate-200 dark:border-[#282e39] p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="bg-purple-500/10 p-2 rounded-lg text-purple-600 dark:text-purple-400">
                            <span className="material-symbols-outlined">receipt_long</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Billing History</h3>
                            <p className="text-sm text-slate-500 dark:text-[#9da6b9]">
                                View and download past invoices.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <select
                            value={billingPeriod}
                            onChange={(e) => setBillingPeriod(e.target.value)}
                            className="bg-slate-50 dark:bg-[#101622] border border-slate-200 dark:border-[#282e39] rounded-lg text-xs py-1.5 pl-3 pr-8 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        >
                            <option>Last 12 Months</option>
                            <option>2023</option>
                            <option>2022</option>
                        </select>
                        <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                            Download All
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                                download
                            </span>
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-600 dark:text-[#9da6b9]">
                        <thead className="bg-slate-50 dark:bg-[#101622] border-b border-slate-200 dark:border-[#282e39]">
                            <tr>
                                <th className="px-4 py-3 font-medium text-slate-900 dark:text-white">
                                    Invoice ID
                                </th>
                                <th className="px-4 py-3 font-medium text-slate-900 dark:text-white">Date</th>
                                <th className="px-4 py-3 font-medium text-slate-900 dark:text-white">Amount</th>
                                <th className="px-4 py-3 font-medium text-slate-900 dark:text-white">Status</th>
                                <th className="px-4 py-3 font-medium text-slate-900 dark:text-white text-right">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-[#282e39]">
                            {invoices.map((invoice) => (
                                <tr key={invoice.id}>
                                    <td className="px-4 py-3 font-mono text-xs">{invoice.invoiceNumber}</td>
                                    <td className="px-4 py-3">{invoice.date}</td>
                                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">
                                        {invoice.amount}
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                            {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <button className="text-slate-400 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                                                download
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
