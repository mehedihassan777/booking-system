import { useState } from 'react';
import { 
  LayoutDashboard, Store, Calendar, Users, CreditCard, 
  Settings, BarChart3, FileText, Bell, LogOut, Menu, X,
  Plus, Search, Filter, Download, Edit, Trash2, Check, Clock,
  DollarSign, TrendingUp, Package, Eye
} from 'lucide-react';

interface BusinessOwnerDashboardProps {
  theme: 'light' | 'dark';
}

export function BusinessOwnerDashboard({ theme }: BusinessOwnerDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'business', label: 'Business Profile', icon: Store },
    { id: 'schedule', label: 'Schedule & Slots', icon: Calendar },
    { id: 'employees', label: 'Employees', icon: Users },
    { id: 'bookings', label: 'Bookings', icon: FileText },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'reports', label: 'Reports & Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const stats = [
    { label: 'Total Bookings', value: '342', change: '+12%', trend: 'up', icon: FileText },
    { label: 'Revenue (Month)', value: '$12,450', change: '+18%', trend: 'up', icon: DollarSign },
    { label: 'Active Employees', value: '8', change: '+2', trend: 'up', icon: Users },
    { label: 'Avg. Rating', value: '4.8', change: '+0.2', trend: 'up', icon: TrendingUp },
  ];

  const recentBookings = [
    { id: 1, customer: 'Emma Wilson', service: 'Hair Styling', employee: 'Sarah Johnson', date: '2025-12-13', time: '10:00 AM', status: 'confirmed', amount: 65 },
    { id: 2, customer: 'Olivia Brown', service: 'Facial Treatment', employee: 'Maria Garcia', date: '2025-12-13', time: '11:30 AM', status: 'confirmed', amount: 120 },
    { id: 3, customer: 'Sophia Davis', service: 'Manicure', employee: 'Emily Chen', date: '2025-12-13', time: '02:00 PM', status: 'pending', amount: 85 },
    { id: 4, customer: 'Ava Johnson', service: 'Massage Therapy', employee: 'Jessica Lee', date: '2025-12-14', time: '09:00 AM', status: 'confirmed', amount: 95 },
  ];

  const employees = [
    { id: 1, name: 'Sarah Johnson', role: 'Senior Stylist', services: 12, bookings: 89, rating: 4.9, status: 'active' },
    { id: 2, name: 'Emily Chen', role: 'Nail Specialist', services: 8, bookings: 76, rating: 4.8, status: 'active' },
    { id: 3, name: 'Maria Garcia', role: 'Esthetician', services: 10, bookings: 82, rating: 4.9, status: 'active' },
    { id: 4, name: 'Jessica Lee', role: 'Massage Therapist', services: 6, bookings: 65, rating: 5.0, status: 'active' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab stats={stats} recentBookings={recentBookings} />;
      case 'business':
        return <BusinessProfileTab />;
      case 'schedule':
        return <ScheduleTab />;
      case 'employees':
        return <EmployeesTab employees={employees} />;
      case 'bookings':
        return <BookingsTab bookings={recentBookings} />;
      case 'payments':
        return <PaymentsTab />;
      case 'reports':
        return <ReportsTab />;
      case 'settings':
        return <SettingsTab />;
      default:
        return <OverviewTab stats={stats} recentBookings={recentBookings} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <div>
                <h2 className="text-gray-900 dark:text-white">BookEasy</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Business Owner</p>
              </div>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {sidebarOpen && <span className="text-sm">{item.label}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span className="text-sm">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-gray-900 dark:text-white">
                {menuItems.find((item) => item.id === activeTab)?.label}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Manage your business operations</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 pl-3 border-l border-gray-200 dark:border-gray-700">
                <div className="text-right">
                  <div className="text-sm text-gray-900 dark:text-white">Luxe Beauty Spa</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Owner</div>
                </div>
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                  LB
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

function OverviewTab({ stats, recentBookings }: any) {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat: any, index: number) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <span className={`text-sm ${stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Recent Bookings */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-900 dark:text-white">Recent Bookings</h3>
            <button className="text-sm text-purple-600 dark:text-purple-400 hover:underline">View All</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Customer</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Service</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Employee</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Amount</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {recentBookings.map((booking: any) => (
                <tr key={booking.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{booking.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{booking.service}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{booking.employee}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                    {booking.date} {booking.time}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">${booking.amount}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        booking.status === 'confirmed'
                          ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                          : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function BusinessProfileTab() {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="mb-6 text-gray-900 dark:text-white">Business Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Business Name</label>
            <input
              type="text"
              defaultValue="Luxe Beauty Spa"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Category</label>
            <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option>Beauty & Wellness</option>
              <option>Healthcare</option>
              <option>Auto Service</option>
              <option>Cleaning</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Description</label>
            <textarea
              rows={4}
              defaultValue="Welcome to Luxe Beauty Spa, where beauty meets luxury."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Phone</label>
            <input
              type="tel"
              defaultValue="+1 (555) 123-4567"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              defaultValue="hello@luxebeautyspa.com"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Address</label>
            <input
              type="text"
              defaultValue="123 Beauty Boulevard, Wellness District, CA 90210"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
            Save Changes
          </button>
          <button className="px-6 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg">
            Preview Landing Page
          </button>
        </div>
      </div>

      {/* Branding */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="mb-6 text-gray-900 dark:text-white">Branding & Theme</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Primary Color</label>
            <div className="flex gap-3">
              <input
                type="color"
                defaultValue="#9333ea"
                className="w-16 h-10 border border-gray-300 dark:border-gray-600 rounded-lg"
              />
              <input
                type="text"
                defaultValue="#9333ea"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Logo</label>
            <button className="w-full px-4 py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500">
              Upload Logo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScheduleTab() {
  const workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  return (
    <div className="space-y-6">
      {/* Working Hours */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="mb-6 text-gray-900 dark:text-white">Working Hours</h3>
        <div className="space-y-4">
          {workingDays.map((day) => (
            <div key={day} className="flex items-center gap-4">
              <div className="w-32">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{day}</span>
                </label>
              </div>
              <input
                type="time"
                defaultValue="09:00"
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <span className="text-gray-500 dark:text-gray-400">to</span>
              <input
                type="time"
                defaultValue="18:00"
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          ))}
        </div>
        <button className="mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
          Save Hours
        </button>
      </div>

      {/* Time Slots & Breaks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="mb-4 text-gray-900 dark:text-white">Slot Duration</h3>
          <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
            <option>15 minutes</option>
            <option>30 minutes</option>
            <option>45 minutes</option>
            <option>60 minutes</option>
          </select>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="mb-4 text-gray-900 dark:text-white">Break Times</h3>
          <button className="w-full px-4 py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500">
            + Add Break
          </button>
        </div>
      </div>

      {/* Holidays */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900 dark:text-white">Holidays & Closures</h3>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm">
            + Add Holiday
          </button>
        </div>
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          No holidays scheduled
        </div>
      </div>
    </div>
  );
}

function EmployeesTab({ employees }: any) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search employees..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
          <Plus className="w-5 h-5" />
          Add Employee
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee: any) => (
          <div key={employee.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                {employee.name.charAt(0)}
              </div>
              <div className="flex gap-2">
                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  <Edit className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  <Trash2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
            <h3 className="text-gray-900 dark:text-white mb-1">{employee.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{employee.role}</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Services</span>
                <span className="text-gray-900 dark:text-white">{employee.services}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Bookings</span>
                <span className="text-gray-900 dark:text-white">{employee.bookings}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Rating</span>
                <span className="text-yellow-500">⭐ {employee.rating}</span>
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg text-sm">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function BookingsTab({ bookings }: any) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search bookings..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
            <Filter className="w-5 h-5" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
            <Plus className="w-5 h-5" />
            New Booking
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">ID</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Customer</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Service</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Employee</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Amount</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Status</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {bookings.map((booking: any) => (
                <tr key={booking.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">#{booking.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{booking.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{booking.service}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{booking.employee}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                    {booking.date}<br />{booking.time}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">${booking.amount}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        booking.status === 'confirmed'
                          ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                          : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                        <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                        <Edit className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function PaymentsTab() {
  const transactions = [
    { id: 1, date: '2025-12-12', customer: 'Emma Wilson', service: 'Hair Styling', amount: 65, method: 'Credit Card', status: 'completed' },
    { id: 2, date: '2025-12-11', customer: 'Olivia Brown', service: 'Facial Treatment', amount: 120, method: 'PayPal', status: 'completed' },
    { id: 3, date: '2025-12-11', customer: 'Sophia Davis', service: 'Manicure', amount: 85, method: 'Cash', status: 'completed' },
    { id: 4, date: '2025-12-10', customer: 'Ava Johnson', service: 'Massage Therapy', amount: 95, method: 'Credit Card', status: 'refunded' },
  ];

  return (
    <div className="space-y-6">
      {/* Payment Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total Revenue</div>
          <div className="text-2xl text-gray-900 dark:text-white">$12,450</div>
          <div className="text-sm text-green-600 dark:text-green-400 mt-2">+18% from last month</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Pending</div>
          <div className="text-2xl text-gray-900 dark:text-white">$850</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">5 transactions</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Refunds</div>
          <div className="text-2xl text-gray-900 dark:text-white">$190</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">2 refunds</div>
        </div>
      </div>

      {/* Payment Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="mb-4 text-gray-900 dark:text-white">Payment Methods</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-900 dark:text-white">Stripe</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs rounded-full">
                Connected
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Online card payments</p>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-900 dark:text-white">PayPal</span>
              <button className="text-sm text-purple-600 dark:text-purple-400 hover:underline">Connect</button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">PayPal payments</p>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-900 dark:text-white">Transaction History</h3>
            <button className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Date</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Customer</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Service</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Method</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Amount</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{tx.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{tx.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{tx.service}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{tx.method}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">${tx.amount}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        tx.status === 'completed'
                          ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                          : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ReportsTab() {
  return (
    <div className="space-y-6">
      {/* Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total Bookings</div>
          <div className="text-2xl text-gray-900 dark:text-white mb-2">342</div>
          <div className="text-sm text-green-600 dark:text-green-400">+12% this month</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Revenue</div>
          <div className="text-2xl text-gray-900 dark:text-white mb-2">$12,450</div>
          <div className="text-sm text-green-600 dark:text-green-400">+18% this month</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Avg. Rating</div>
          <div className="text-2xl text-gray-900 dark:text-white mb-2">4.8⭐</div>
          <div className="text-sm text-green-600 dark:text-green-400">+0.2 this month</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Completion Rate</div>
          <div className="text-2xl text-gray-900 dark:text-white mb-2">96%</div>
          <div className="text-sm text-green-600 dark:text-green-400">+2% this month</div>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="mb-4 text-gray-900 dark:text-white">Revenue Trend</h3>
          <div className="h-64 flex items-center justify-center text-gray-400 dark:text-gray-500 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
            Chart: Revenue over time
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="mb-4 text-gray-900 dark:text-white">Popular Services</h3>
          <div className="space-y-3">
            {[
              { name: 'Facial Treatment', bookings: 89, percentage: 26 },
              { name: 'Hair Styling', bookings: 76, percentage: 22 },
              { name: 'Manicure & Pedicure', bookings: 68, percentage: 20 },
              { name: 'Massage Therapy', bookings: 54, percentage: 16 },
              { name: 'Makeup Application', bookings: 45, percentage: 16 },
            ].map((service, index) => (
              <div key={index}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-700 dark:text-gray-300">{service.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{service.bookings}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-purple-600 dark:bg-purple-500 h-2 rounded-full"
                    style={{ width: `${service.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="mb-4 text-gray-900 dark:text-white">Export Reports</h3>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
            <Download className="w-4 h-4" />
            Export to PDF
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
            <Download className="w-4 h-4" />
            Export to Excel
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
            <Download className="w-4 h-4" />
            Export to CSV
          </button>
        </div>
      </div>
    </div>
  );
}

function SettingsTab() {
  return (
    <div className="space-y-6">
      {/* Notification Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="mb-6 text-gray-900 dark:text-white">Notification Preferences</h3>
        <div className="space-y-4">
          {[
            { label: 'Email notifications for new bookings', description: 'Get notified when a new booking is made' },
            { label: 'SMS notifications', description: 'Receive SMS for important updates' },
            { label: 'WhatsApp notifications', description: 'Get notifications via WhatsApp' },
            { label: 'Daily booking summary', description: 'Receive a daily summary of all bookings' },
          ].map((setting, index) => (
            <label key={index} className="flex items-start gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg cursor-pointer">
              <input type="checkbox" defaultChecked className="mt-1" />
              <div>
                <div className="text-sm text-gray-900 dark:text-white">{setting.label}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{setting.description}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Booking Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="mb-6 text-gray-900 dark:text-white">Booking Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Advance booking limit</label>
            <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option>1 week</option>
              <option>2 weeks</option>
              <option>1 month</option>
              <option>3 months</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Minimum notice time</label>
            <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option>1 hour</option>
              <option>2 hours</option>
              <option>4 hours</option>
              <option>24 hours</option>
            </select>
          </div>
          <label className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg cursor-pointer">
            <input type="checkbox" defaultChecked />
            <span className="text-sm text-gray-900 dark:text-white">Auto-confirm bookings</span>
          </label>
        </div>
      </div>

      {/* Privacy & GDPR */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="mb-6 text-gray-900 dark:text-white">Privacy & Data</h3>
        <div className="space-y-4">
          <label className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg cursor-pointer">
            <input type="checkbox" defaultChecked />
            <span className="text-sm text-gray-900 dark:text-white">GDPR compliant data handling</span>
          </label>
          <label className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg cursor-pointer">
            <input type="checkbox" defaultChecked />
            <span className="text-sm text-gray-900 dark:text-white">Show privacy policy to customers</span>
          </label>
          <button className="px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:underline">
            Delete all customer data
          </button>
        </div>
      </div>
    </div>
  );
}
