import { useState } from 'react';
import { ArrowLeft, LayoutDashboard, Store, Calendar, Users, DollarSign, BarChart3, Settings, Palette, Clock, MapPin, CreditCard, FileText } from 'lucide-react';
import { BusinessProfile } from './business-owner/BusinessProfile';
import { ScheduleManagement } from './business-owner/ScheduleManagement';
import { EmployeeManagement } from './business-owner/EmployeeManagement';
import { BookingManagement } from './business-owner/BookingManagement';
import { PaymentSettings } from './business-owner/PaymentSettings';
import { Reports } from './business-owner/Reports';
import { LandingPageCustomization } from './business-owner/LandingPageCustomization';

interface BusinessOwnerDashboardProps {
  onBack: () => void;
  darkMode: boolean;
}

type MenuItem = 'overview' | 'business' | 'landing' | 'schedule' | 'employees' | 'bookings' | 'payments' | 'reports';

export function BusinessOwnerDashboard({ onBack, darkMode }: BusinessOwnerDashboardProps) {
  const [activeMenu, setActiveMenu] = useState<MenuItem>('overview');

  const menuItems = [
    { id: 'overview' as MenuItem, label: 'Overview', icon: LayoutDashboard },
    { id: 'business' as MenuItem, label: 'Business Profile', icon: Store },
    { id: 'landing' as MenuItem, label: 'Landing Page', icon: Palette },
    { id: 'schedule' as MenuItem, label: 'Schedule & Slots', icon: Calendar },
    { id: 'employees' as MenuItem, label: 'Employees', icon: Users },
    { id: 'bookings' as MenuItem, label: 'Bookings', icon: Calendar },
    { id: 'payments' as MenuItem, label: 'Payments', icon: DollarSign },
    { id: 'reports' as MenuItem, label: 'Reports', icon: BarChart3 },
  ];

  const stats = [
    { label: 'Total Bookings', value: '234', change: '+12%', color: 'from-blue-500 to-blue-600' },
    { label: 'Revenue (Month)', value: '$12,450', change: '+8%', color: 'from-green-500 to-green-600' },
    { label: 'Active Employees', value: '8', change: '+2', color: 'from-purple-500 to-purple-600' },
    { label: 'Avg Rating', value: '4.8', change: '+0.2', color: 'from-yellow-500 to-yellow-600' },
  ];

  const recentBookings = [
    { id: 1, customer: 'Jessica Martinez', service: 'Hair Coloring', employee: 'Sarah J.', time: '10:00 AM', status: 'confirmed' },
    { id: 2, customer: 'David Chen', service: 'Haircut', employee: 'Michael C.', time: '11:30 AM', status: 'confirmed' },
    { id: 3, customer: 'Emily Wilson', service: 'Manicure', employee: 'Emma D.', time: '2:00 PM', status: 'pending' },
    { id: 4, customer: 'Robert Taylor', service: 'Massage', employee: 'Any', time: '3:30 PM', status: 'confirmed' },
  ];

  const upcomingAppointments = [
    { id: 1, time: '9:00 AM', customer: 'Sarah Parker', service: 'Facial Treatment' },
    { id: 2, time: '10:30 AM', customer: 'Mike Johnson', service: 'Haircut' },
    { id: 3, time: '1:00 PM', customer: 'Lisa Anderson', service: 'Pedicure' },
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 dark:text-white mb-6">Business Overview</h2>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-gray-900 dark:text-white text-2xl">{stat.value}</span>
                <span className="text-green-600 dark:text-green-400 text-sm">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Today's Schedule & Recent Bookings */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Today's Schedule */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-gray-900 dark:text-white mb-4">Today's Schedule</h3>
            <div className="space-y-3">
              {upcomingAppointments.map((apt) => (
                <div key={apt.id} className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <div className="text-center min-w-[60px]">
                    <div className="text-sm text-gray-600 dark:text-gray-400">{apt.time}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-900 dark:text-white text-sm">{apt.customer}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-xs">{apt.service}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-gray-900 dark:text-white mb-4">Recent Bookings</h3>
            <div className="space-y-3">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <div>
                    <div className="text-gray-900 dark:text-white text-sm">{booking.customer}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-xs">{booking.service}</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    booking.status === 'confirmed' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                      : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeMenu) {
      case 'overview':
        return renderOverview();
      case 'business':
        return <BusinessProfile darkMode={darkMode} />;
      case 'landing':
        return <LandingPageCustomization darkMode={darkMode} />;
      case 'schedule':
        return <ScheduleManagement darkMode={darkMode} />;
      case 'employees':
        return <EmployeeManagement darkMode={darkMode} />;
      case 'bookings':
        return <BookingManagement darkMode={darkMode} />;
      case 'payments':
        return <PaymentSettings darkMode={darkMode} />;
      case 'reports':
        return <Reports darkMode={darkMode} />;
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Navigation */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <div>
                <h1 className="text-gray-900 dark:text-white">Business Owner Dashboard</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Luxe Beauty Salon</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-[calc(100vh-73px)] sticky top-[73px]">
          <nav className="p-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveMenu(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-colors ${
                    activeMenu === item.id
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
