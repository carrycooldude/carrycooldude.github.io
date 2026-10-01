import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const MASTER_PASSWORD_KEY = 'carrycooldude_master_pass';
const AUTH_STATE_KEY = 'carrycooldude_admin_auth';

const CMS_PASSCODE = import.meta.env.VITE_CMS_PASSCODE || '';

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return localStorage.getItem(AUTH_STATE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Global keyboard shortcut: Ctrl+Shift+W or Alt+C opens passcode modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'w') || (e.altKey && e.key.toLowerCase() === 'c')) {
        e.preventDefault();
        setIsAuthModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getStoredPassword = () => {
    try {
      return localStorage.getItem(MASTER_PASSWORD_KEY) || CMS_PASSCODE;
    } catch {
      return CMS_PASSCODE;
    }
  };

  const login = (password) => {
    const valid = getStoredPassword();
    if (valid && password === valid) {
      setIsAuthenticated(true);
      try {
        localStorage.setItem(AUTH_STATE_KEY, 'true');
      } catch (e) {
        console.error(e);
      }
      setIsAuthModalOpen(false);
      return { success: true };
    }
    return { success: false, error: 'Incorrect master passcode' };
  };

  const logout = () => {
    setIsAuthenticated(false);
    try {
      localStorage.removeItem(AUTH_STATE_KEY);
    } catch (e) {
      console.error(e);
    }
  };

  const changePassword = (newPassword) => {
    if (!newPassword || newPassword.length < 6) {
      return { success: false, error: 'Passcode must be at least 6 characters' };
    }
    try {
      localStorage.setItem(MASTER_PASSWORD_KEY, newPassword);
      return { success: true };
    } catch (e) {
      return { success: false, error: 'Failed to update passcode' };
    }
  };

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        changePassword,
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
