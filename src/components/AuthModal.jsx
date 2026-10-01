import React, { useState } from 'react';
import { X, Lock, Key, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, login } = useAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!password.trim()) {
      setError('Please enter your passcode');
      return;
    }
    const res = login(password.trim());
    if (!res.success) {
      setError(res.error || 'Incorrect master passcode');
    } else {
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm select-none">
      <div className="relative w-full max-w-sm bg-white dark:bg-[#0f1118] border-2 border-gray-900 dark:border-gray-600 rounded-lg shadow-2xl p-6 text-gray-900 dark:text-gray-100 font-hand animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300">
              <Lock className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-xl font-bold font-hand text-gray-900 dark:text-white leading-tight">
                CMS Studio Login
              </h2>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-hand">
                &ldquo;enter your master passcode to unlock&rdquo;
              </p>
            </div>
          </div>

          <button
            onClick={closeAuthModal}
            className="p-1 rounded text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-4 p-2.5 rounded bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-800 text-xs font-hand text-red-700 dark:text-red-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
            <span>{error}</span>
          </div>
        )}

        {/* Passcode Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-hand font-bold text-gray-700 dark:text-gray-300">
                Master Passcode
              </label>
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-3 pr-10 py-2 text-sm font-mono rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#161a26] text-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2.5 top-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="p-2 rounded bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 text-[11px] font-hand text-gray-500 dark:text-gray-400">
            <span>Only you have access to write, edit, and publish blogs directly from the site.</span>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
            <button
              type="button"
              onClick={closeAuthModal}
              className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700 text-xs font-hand text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded bg-blue-600 text-white font-hand font-bold text-sm hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Key className="w-4 h-4" />
              <span>Unlock CMS</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
