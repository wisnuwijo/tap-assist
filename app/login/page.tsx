'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', { email, password });
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-[#0f1419] selection:bg-primary/30 text-white">
      {/* Main Content Layout */}
      <div className="layout-container flex h-full grow flex-col z-10 justify-center items-center p-4">
        {/* Auth Card */}
        <div className="w-full max-w-[440px] bg-[#1a1f29] rounded-2xl shadow-2xl border border-[#2a3240] p-8 md:p-10 flex flex-col gap-6">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-4 pb-2">
            {/* Logo */}
            <div className="w-16 h-16 bg-[#2563eb] rounded-xl flex items-center justify-center">
              <span className="text-white text-[32px] font-bold">T</span>
            </div>
            <div className="text-center space-y-1">
              <h2 className="text-white tracking-tight text-[26px] font-semibold leading-tight">
                Admin Login
              </h2>
              <p className="text-[#9ca3af] text-[15px] font-normal leading-normal">
                Manage your HR AI assistant and workflows.
              </p>
            </div>
          </div>

          {/* Login Form */}
          <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-[13px] font-medium leading-normal">
                Work Email
              </label>
              <div className="flex w-full items-stretch rounded-lg overflow-hidden">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-white focus:outline-0 focus:ring-0 border-0 bg-[#252b38] focus:bg-[#2a3240] h-12 placeholder:text-[#6b7280] px-4 text-[15px] font-normal leading-normal transition-colors"
                  placeholder="name@company.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="text-[#9ca3af] flex bg-[#252b38] items-center justify-center px-4 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-white text-[13px] font-medium leading-normal">
                  Password
                </label>
              </div>
              <div className="flex w-full items-stretch rounded-lg overflow-hidden">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-white focus:outline-0 focus:ring-0 border-0 bg-[#252b38] focus:bg-[#2a3240] h-12 placeholder:text-[#6b7280] px-4 text-[15px] font-normal leading-normal transition-colors"
                  placeholder="Enter your password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div
                  className="text-[#9ca3af] flex bg-[#252b38] items-center justify-center px-4 transition-colors cursor-pointer hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility' : 'visibility_off'}
                  </span>
                </div>
              </div>
              {/* Forgot Password Link */}
              <div className="flex justify-end pt-1">
                <a
                  className="text-[#3b82f6] hover:text-[#60a5fa] text-[13px] font-medium transition-colors"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-2 text-[15px]"
            >
              <span>Log In</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </form>

          {/* Support/Footer within card */}
          <div className="pt-2 text-center">
            <p className="text-[#9ca3af] text-[13px]">
              Need help?{' '}
              <a className="text-[#3b82f6] hover:text-[#60a5fa] font-medium" href="#">
                Contact Support
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Branding */}
        <div className="mt-8 flex items-center gap-2 opacity-50">
          <span className="text-[#9ca3af] text-[12px] font-normal">Powered by</span>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 bg-[#6b7280] rounded flex items-center justify-center">
              <span className="text-[10px] font-bold text-white">T</span>
            </div>
            <span className="text-[#9ca3af] text-[12px] font-semibold">Tap AI</span>
          </div>
        </div>
      </div>
    </div>
  );
}
