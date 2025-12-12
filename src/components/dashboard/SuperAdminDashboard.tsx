import { useState } from 'react';
import { 
  LayoutDashboard, Store, Users, DollarSign, Settings, Tag,
  CreditCard, HelpCircle, AlertTriangle, LogOut, Menu, X,
  Plus, Search, Filter, Edit, Trash2, Eye, Download, BarChart3
} from 'lucide-react';

interface SuperAdminDashboardProps {
  theme: 'light' | 'dark';
}

export function SuperAdminDashboard({ theme }: SuperAdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'overview', label: 'Platform Overview', icon: LayoutDashboard },
    { id: 'businesses', label: 'Business Owners', icon: Store },
    { id: 'employees', label: 'All Employees', icon: Users },
    { id: 'categories', label: 'Categories', icon: Tag },
    { id: 'subscriptions', label: 'Subscriptions', icon: CreditCard },
    { id: 'revenue', label: 'Platform Revenue', icon: DollarSign },
    { id: 'support', label: 'Support Tickets', icon: HelpCircle },
    { id: 'monitoring', label: 'Abuse Monitoring', icon: AlertTriangle },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const platformStats = [
    { label: 'Total Businesses', value: '1,234', change: '+45 this month', icon: Store },
    { label: 'Total Employees', value: '8,567', change: '+234 this month', icon: Users },
    { label: 'Monthly Revenue', value: '$45,670', change: '+22% vs last month', icon: DollarSign },
    { label: 'Active Subscriptions', value: '987', change: '+12% growth', icon: CreditCard },
  ];

  const businesses = [
    { id: 1, name: 'Luxe Beauty Spa', owner: 'Jane Smith', category: 'Beauty & Wellness', employees: 8, bookings: 342, plan: 'Professional', status: 'active' },
    { id: 2, name: 'AutoCare Plus', owner: 'John Doe', category: 'Auto Service', employees: 12, bookings: 567, plan: 'Enterprise', status: 'active' },
    { id: 3, name: 'HealthFirst Clinic', owner: 'Dr. Sarah Lee', category: 'Healthcare', employees: 25, bookings: 1203, plan: 'Enterprise', status: 'active' },
    { id: 4, name: 'CleanPro Services', owner: 'Mike Johnson', category: 'Cleaning', employees: 15, bookings: 456, plan: 'Professional', status: 'active' },
  ];

  const categories = [
    { id: 1, name: 'Beauty & Wellness', businesses: 342, icon: '💆‍♀️', active: true },
    { id: 2, name: 'Healthcare', businesses: 189, icon: '🏥', active: true },
    { id: 3, name: 'Auto Service', businesses: 156, icon: '🚗', active: true },
    { id: 4, name: 'Cleaning', businesses: 234, icon: '🧹', active: true },
    { id: 5, name: 'Education', businesses: 98, icon: '📚', active: true },
    { id: 6, name: 'Fitness', businesses: 145, icon: '💪', active: true },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab stats={platformStats} />;
      case 'businesses':
        return <BusinessesTab businesses={businesses} />;
      case 'employees':
        return <EmployeesTab />;
      case 'categories':
        return <CategoriesTab categories={categories} />;
      case 'subscriptions':
        return <SubscriptionsTab />;
      case 'revenue':
        return <RevenueTab />;
      case 'support':
        return <SupportTab />;
      case 'monitoring':
        return <MonitoringTab />;
      case 'settings':
        return <SettingsTab />;
      default:
        return <OverviewTab stats={platformStats} />;
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
                <p className="text-xs text-gray-500 dark:text-gray-400">Super Admin</p>
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
              <p className="text-gray-600 dark:text-gray-400 text-sm">Manage the entire platform</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3 pl-3">
                <div className="text-right">
                  <div className="text-sm text-gray-900 dark:text-white">Admin User</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Super Admin</div>
                </div>
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                  SA
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

function OverviewTab({ stats }: any) {
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
              </div>
              <div className="text-2xl text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{stat.label}</div>
              <div className="text-sm text-green-600 dark:text-green-400">{stat.change}</div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="mb-4 text-gray-900 dark:text-white">Recent Business Signups</h3>
          <div className="space-y-3">
            {[
              { name: 'Spa Serenity', category: 'Beauty & Wellness', date: '2 hours ago' },
              { name: 'QuickFix Auto', category: 'Auto Service', date: '5 hours ago' },
              { name: 'Dental Care Pro', category: 'Healthcare', date: '1 day ago' },
            ].map((business, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                <div>
                  <div className="text-sm text-gray-900 dark:text-white">{business.name}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{business.category}</div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{business.date}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="mb-4 text-gray-900 dark:text-white">Platform Growth</h3>
          <div className="h-48 flex items-center justify-center text-gray-400 dark:text-gray-500 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
            Chart: Growth over time
          </div>
        </div>
      </div>
    </div>
  );
}

function BusinessesTab({ businesses }: any) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search businesses..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
            <Filter className="w-5 h-5" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
            <Download className="w-5 h-5" />
            Export
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Business</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Owner</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Category</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Employees</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Bookings</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Plan</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Status</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {businesses.map((business: any) => (
                <tr key={business.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{business.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{business.owner}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{business.category}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{business.employees}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{business.bookings}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 text-xs rounded-full">
                      {business.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs rounded-full">
                      {business.status}
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
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                        <Trash2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
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

function EmployeesTab() {
  const employees = [
    { id: 1, name: 'Sarah Johnson', business: 'Luxe Beauty Spa', role: 'Senior Stylist', bookings: 342, rating: 4.9 },
    { id: 2, name: 'Emily Chen', business: 'Luxe Beauty Spa', role: 'Nail Specialist', bookings: 289, rating: 4.8 },
    { id: 3, name: 'Michael Brown', business: 'AutoCare Plus', role: 'Mechanic', bookings: 456, rating: 4.7 },
    { id: 4, name: 'Dr. Lisa Wang', business: 'HealthFirst Clinic', role: 'Dentist', bookings: 623, rating: 4.9 },
  ];

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
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Name</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Business</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Role</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Total Bookings</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Rating</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{employee.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{employee.business}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{employee.role}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{employee.bookings}</td>
                  <td className="px-6 py-4 text-sm text-yellow-500">⭐ {employee.rating}</td>
                  <td className="px-6 py-4">
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                      <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </button>
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

function CategoriesTab({ categories }: any) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-gray-900 dark:text-white">Service Categories</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
          <Plus className="w-5 h-5" />
          Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category: any) => (
          <div key={category.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl">{category.icon}</div>
              <div className="flex gap-2">
                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  <Edit className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  <Trash2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
            <h3 className="text-gray-900 dark:text-white mb-2">{category.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{category.businesses} businesses</p>
            <div className="mt-4">
              <span className={`px-2 py-1 text-xs rounded-full ${
                category.active
                  ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}>
                {category.active ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SubscriptionsTab() {
  const plans = [
    { name: 'Free Trial', price: 0, businesses: 456, features: ['1 Employee', '50 Bookings/month', 'Basic Support'] },
    { name: 'Starter', price: 29, businesses: 234, features: ['3 Employees', '200 Bookings/month', 'Email Support', 'Online Payments'] },
    { name: 'Professional', price: 79, businesses: 567, features: ['10 Employees', '1000 Bookings/month', 'Priority Support', 'All Features'] },
    { name: 'Enterprise', price: 199, businesses: 189, features: ['Unlimited Employees', 'Unlimited Bookings', '24/7 Support', 'Custom Domain'] },
  ];

  return (
    <div className="space-y-6">
      {/* Revenue Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Monthly Recurring Revenue</div>
          <div className="text-2xl text-gray-900 dark:text-white">$76,453</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Active Subscriptions</div>
          <div className="text-2xl text-gray-900 dark:text-white">1,446</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Churn Rate</div>
          <div className="text-2xl text-gray-900 dark:text-white">2.3%</div>
        </div>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-gray-900 dark:text-white mb-2">{plan.name}</h3>
            <div className="text-3xl text-gray-900 dark:text-white mb-1">
              ${plan.price}
              <span className="text-sm text-gray-600 dark:text-gray-400">/mo</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{plan.businesses} businesses</p>
            <ul className="space-y-2 mb-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
              Edit Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function RevenueTab() {
  return (
    <div className="space-y-6">
      {/* Revenue Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">This Month</div>
          <div className="text-2xl text-gray-900 dark:text-white">$45,670</div>
          <div className="text-sm text-green-600 dark:text-green-400 mt-2">+22%</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Last Month</div>
          <div className="text-2xl text-gray-900 dark:text-white">$37,420</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">This Year</div>
          <div className="text-2xl text-gray-900 dark:text-white">$423,890</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Average/Business</div>
          <div className="text-2xl text-gray-900 dark:text-white">$62</div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="mb-4 text-gray-900 dark:text-white">Revenue Trend</h3>
        <div className="h-64 flex items-center justify-center text-gray-400 dark:text-gray-500 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
          Chart: Revenue over time
        </div>
      </div>

      {/* Revenue by Plan */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="mb-4 text-gray-900 dark:text-white">Revenue by Plan</h3>
        <div className="space-y-4">
          {[
            { plan: 'Enterprise', revenue: 37611, percentage: 49 },
            { plan: 'Professional', revenue: 44793, percentage: 37 },
            { plan: 'Starter', revenue: 6786, percentage: 11 },
            { plan: 'Free Trial', revenue: 0, percentage: 3 },
          ].map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700 dark:text-gray-300">{item.plan}</span>
                <span className="text-sm text-gray-900 dark:text-white">${item.revenue.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-purple-600 dark:bg-purple-500 h-2 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SupportTab() {
  const tickets = [
    { id: 1, subject: 'Payment integration issue', business: 'Luxe Beauty Spa', status: 'open', priority: 'high', date: '2 hours ago' },
    { id: 2, subject: 'Cannot add new employee', business: 'AutoCare Plus', status: 'in-progress', priority: 'medium', date: '5 hours ago' },
    { id: 3, subject: 'Custom domain setup', business: 'HealthFirst Clinic', status: 'resolved', priority: 'low', date: '1 day ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Open Tickets</div>
          <div className="text-2xl text-gray-900 dark:text-white">23</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">In Progress</div>
          <div className="text-2xl text-gray-900 dark:text-white">12</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Resolved Today</div>
          <div className="text-2xl text-gray-900 dark:text-white">45</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Avg. Response Time</div>
          <div className="text-2xl text-gray-900 dark:text-white">2.3h</div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">ID</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Subject</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Business</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Priority</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Status</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Date</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">#{ticket.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{ticket.subject}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{ticket.business}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      ticket.priority === 'high'
                        ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                        : ticket.priority === 'medium'
                        ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      ticket.status === 'resolved'
                        ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                        : ticket.status === 'in-progress'
                        ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                        : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400'
                    }`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{ticket.date}</td>
                  <td className="px-6 py-4">
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                      <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </button>
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

function MonitoringTab() {
  const alerts = [
    { id: 1, type: 'Suspicious Activity', business: 'QuickFix Auto', description: 'Multiple failed login attempts', severity: 'high', date: '1 hour ago' },
    { id: 2, type: 'Policy Violation', business: 'Spa Wellness', description: 'Inappropriate content in reviews', severity: 'medium', date: '3 hours ago' },
    { id: 3, type: 'Payment Issue', business: 'Dental Care Pro', description: 'Unusual refund pattern', severity: 'medium', date: '1 day ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Active Alerts</div>
          <div className="text-2xl text-red-600 dark:text-red-400">12</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Resolved Today</div>
          <div className="text-2xl text-gray-900 dark:text-white">8</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Suspended Accounts</div>
          <div className="text-2xl text-gray-900 dark:text-white">3</div>
        </div>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className={`w-5 h-5 ${
                    alert.severity === 'high' ? 'text-red-600 dark:text-red-400' : 'text-yellow-600 dark:text-yellow-400'
                  }`} />
                  <h3 className="text-gray-900 dark:text-white">{alert.type}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    alert.severity === 'high'
                      ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                      : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400'
                  }`}>
                    {alert.severity}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{alert.business}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{alert.description}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{alert.date}</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
                  Investigate
                </button>
                <button className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg">
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SettingsTab() {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="mb-6 text-gray-900 dark:text-white">Platform Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Platform Name</label>
            <input
              type="text"
              defaultValue="BookEasy"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Support Email</label>
            <input
              type="email"
              defaultValue="support@bookeasy.com"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Commission Rate (%)</label>
            <input
              type="number"
              defaultValue="10"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>
        <button className="mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
          Save Settings
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="mb-6 text-gray-900 dark:text-white">Feature Flags</h3>
        <div className="space-y-4">
          {[
            { label: 'Allow new business registrations', enabled: true },
            { label: 'Enable payment processing', enabled: true },
            { label: 'Maintenance mode', enabled: false },
            { label: 'Debug mode', enabled: false },
          ].map((flag, index) => (
            <label key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg cursor-pointer">
              <span className="text-sm text-gray-900 dark:text-white">{flag.label}</span>
              <input type="checkbox" defaultChecked={flag.enabled} className="rounded" />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
