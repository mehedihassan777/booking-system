import React, { useState } from 'react';
import { LandingPage } from './components/landing/LandingPage';
import { BookingFlow } from './components/booking/BookingFlow';
import { BusinessOwnerDashboard } from './components/dashboard/BusinessOwnerDashboard';
import { EmployeeDashboard } from './components/dashboard/EmployeeDashboard';
import { SuperAdminDashboard } from './components/dashboard/SuperAdminDashboard';

type UserRole = 'public' | 'customer' | 'employee' | 'business-owner' | 'super-admin';
type View = 'landing' | 'booking' | 'dashboard';

export default function App() {
  const [currentRole, setCurrentRole] = useState<UserRole>('public');
  const [currentView, setCurrentView] = useState<View>('landing');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const renderView = () => {
    if (currentView === 'landing') {
      return <LandingPage onBookNow={() => setCurrentView('booking')} />;
    }

    if (currentView === 'booking') {
      return <BookingFlow onBack={() => setCurrentView('landing')} />;
    }

    if (currentView === 'dashboard') {
      switch (currentRole) {
        case 'super-admin':
          return <SuperAdminDashboard theme={theme} />;
        case 'business-owner':
          return <BusinessOwnerDashboard theme={theme} />;
        case 'employee':
          return <EmployeeDashboard theme={theme} />;
        default:
          return <LandingPage onBookNow={() => setCurrentView('booking')} />;
      }
    }
  };

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        {/* Demo Role Switcher - Would be replaced with actual auth */}
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 border border-gray-200 dark:border-gray-700">
            <div className="text-xs mb-2 text-gray-600 dark:text-gray-400">Demo Mode</div>
            <select
              value={currentRole}
              onChange={(e) => {
                const role = e.target.value as UserRole;
                setCurrentRole(role);
                if (role === 'public') {
                  setCurrentView('landing');
                } else if (role === 'customer') {
                  setCurrentView('booking');
                } else {
                  setCurrentView('dashboard');
                }
              }}
              className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="public">Public View</option>
              <option value="customer">Customer Booking</option>
              <option value="employee">Employee Dashboard</option>
              <option value="business-owner">Business Owner</option>
              <option value="super-admin">Super Admin</option>
            </select>
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="w-full mt-2 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-lg text-gray-700 dark:text-gray-200"
            >
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
        </div>

        {renderView()}
      </div>
    </div>
  );
}
