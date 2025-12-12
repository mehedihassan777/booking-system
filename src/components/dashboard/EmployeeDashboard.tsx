import { useState } from 'react';
import { 
  Calendar, Clock, User, CheckCircle, XCircle, AlertCircle,
  LogOut, Bell, Settings, Menu, X, ChevronLeft, ChevronRight
} from 'lucide-react';

interface EmployeeDashboardProps {
  theme: 'light' | 'dark';
}

export function EmployeeDashboard({ theme }: EmployeeDashboardProps) {
  const [activeTab, setActiveTab] = useState('today');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const todayBookings = [
    { id: 1, time: '09:00 AM', customer: 'Emma Wilson', service: 'Hair Styling', duration: 60, status: 'upcoming', phone: '+1 (555) 123-4567', notes: 'First time customer' },
    { id: 2, time: '10:30 AM', customer: 'Olivia Brown', service: 'Hair Coloring', duration: 120, status: 'upcoming', phone: '+1 (555) 234-5678', notes: '' },
    { id: 3, time: '01:00 PM', customer: 'Sophia Davis', service: 'Hair Styling', duration: 60, status: 'upcoming', phone: '+1 (555) 345-6789', notes: 'Prefers layered cut' },
    { id: 4, time: '02:30 PM', customer: 'Ava Johnson', service: 'Hair Treatment', duration: 90, status: 'upcoming', phone: '+1 (555) 456-7890', notes: '' },
  ];

  const weeklyBookings = [
    { date: '2025-12-13', day: 'Friday', bookings: 8, revenue: 520 },
    { date: '2025-12-14', day: 'Saturday', bookings: 10, revenue: 680 },
    { date: '2025-12-15', day: 'Sunday', bookings: 6, revenue: 420 },
    { date: '2025-12-16', day: 'Monday', bookings: 7, revenue: 475 },
    { date: '2025-12-17', day: 'Tuesday', bookings: 9, revenue: 595 },
    { date: '2025-12-18', day: 'Wednesday', bookings: 8, revenue: 540 },
    { date: '2025-12-19', day: 'Thursday', bookings: 7, revenue: 490 },
  ];

  const leaveRequests = [
    { id: 1, date: '2025-12-20', reason: 'Personal', status: 'pending' },
    { id: 2, date: '2025-12-25', reason: 'Holiday', status: 'approved' },
  ];

  const menuItems = [
    { id: 'today', label: "Today's Bookings", icon: Calendar },
    { id: 'week', label: 'Weekly Calendar', icon: Clock },
    { id: 'leave', label: 'Leave Requests', icon: AlertCircle },
    { id: 'profile', label: 'My Profile', icon: User },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'today':
        return <TodayBookingsTab bookings={todayBookings} />;
      case 'week':
        return <WeeklyCalendarTab bookings={weeklyBookings} />;
      case 'leave':
        return <LeaveRequestsTab requests={leaveRequests} />;
      case 'profile':
        return <ProfileTab />;
      default:
        return <TodayBookingsTab bookings={todayBookings} />;
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
                <p className="text-xs text-gray-500 dark:text-gray-400">Employee Portal</p>
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
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 pl-3 border-l border-gray-200 dark:border-gray-700">
                <div className="text-right">
                  <div className="text-sm text-gray-900 dark:text-white">Sarah Johnson</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Senior Stylist</div>
                </div>
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                  SJ
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

function TodayBookingsTab({ bookings }: any) {
  const [selectedBooking, setSelectedBooking] = useState<any>(null);

  const handleStatusUpdate = (bookingId: number, status: string) => {
    alert(`Booking #${bookingId} marked as ${status}`);
    setSelectedBooking(null);
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Today's Bookings</div>
          <div className="text-2xl text-gray-900 dark:text-white">{bookings.length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total Duration</div>
          <div className="text-2xl text-gray-900 dark:text-white">
            {bookings.reduce((acc: number, b: any) => acc + b.duration, 0)} min
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Status</div>
          <div className="text-2xl text-green-600 dark:text-green-400">On Track</div>
        </div>
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {bookings.map((booking: any) => (
          <div
            key={booking.id}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-gray-900 dark:text-white mb-1">{booking.time}</div>
                    <h3 className="text-gray-900 dark:text-white mb-2">{booking.customer}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 text-xs rounded-full">
                        {booking.service}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                        {booking.duration} min
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{booking.phone}</div>
                    {booking.notes && (
                      <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 italic">
                        Note: {booking.notes}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedBooking(booking)}
                    className="px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
                  >
                    Update Status
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Status Update Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full">
            <h3 className="mb-4 text-gray-900 dark:text-white">Update Booking Status</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {selectedBooking.customer} - {selectedBooking.service}
            </p>
            <div className="space-y-3">
              <button
                onClick={() => handleStatusUpdate(selectedBooking.id, 'completed')}
                className="w-full flex items-center gap-3 p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
              >
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                <span className="text-gray-900 dark:text-white">Mark as Completed</span>
              </button>
              <button
                onClick={() => handleStatusUpdate(selectedBooking.id, 'no-show')}
                className="w-full flex items-center gap-3 p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-red-500 dark:hover:border-red-500 transition-colors"
              >
                <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                <span className="text-gray-900 dark:text-white">Mark as No-Show</span>
              </button>
              <button
                onClick={() => setSelectedBooking(null)}
                className="w-full p-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function WeeklyCalendarTab({ bookings }: any) {
  const [currentWeek, setCurrentWeek] = useState(0);

  return (
    <div className="space-y-6">
      {/* Week Navigation */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentWeek(currentWeek - 1)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h3 className="text-gray-900 dark:text-white">Dec 13 - Dec 19, 2025</h3>
          <button
            onClick={() => setCurrentWeek(currentWeek + 1)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Weekly Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total Bookings</div>
          <div className="text-2xl text-gray-900 dark:text-white">
            {bookings.reduce((acc: number, b: any) => acc + b.bookings, 0)}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total Revenue</div>
          <div className="text-2xl text-gray-900 dark:text-white">
            ${bookings.reduce((acc: number, b: any) => acc + b.revenue, 0)}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Avg. per Day</div>
          <div className="text-2xl text-gray-900 dark:text-white">
            {Math.round(bookings.reduce((acc: number, b: any) => acc + b.bookings, 0) / bookings.length)}
          </div>
        </div>
      </div>

      {/* Daily Breakdown */}
      <div className="space-y-4">
        {bookings.map((day: any, index: number) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-gray-900 dark:text-white">{day.day}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{day.date}</p>
              </div>
              <div className="text-right">
                <div className="text-gray-900 dark:text-white">{day.bookings} bookings</div>
                <div className="text-sm text-green-600 dark:text-green-400">${day.revenue}</div>
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-purple-600 dark:bg-purple-500 h-2 rounded-full"
                style={{ width: `${(day.bookings / 10) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LeaveRequestsTab({ requests }: any) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-gray-900 dark:text-white">Leave Requests</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
        >
          {showForm ? 'Cancel' : '+ New Request'}
        </button>
      </div>

      {/* Leave Request Form */}
      {showForm && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="mb-4 text-gray-900 dark:text-white">Submit Leave Request</h3>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowForm(false); alert('Leave request submitted!'); }}>
            <div>
              <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Date</label>
              <input
                type="date"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Reason</label>
              <select
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Select reason...</option>
                <option>Personal</option>
                <option>Sick Leave</option>
                <option>Holiday</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Notes (Optional)</label>
              <textarea
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Any additional details..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
            >
              Submit Request
            </button>
          </form>
        </div>
      )}

      {/* Leave Requests List */}
      <div className="space-y-4">
        {requests.map((request: any) => (
          <div
            key={request.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-gray-900 dark:text-white mb-2">{request.date}</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{request.reason}</p>
              </div>
              <span
                className={`px-3 py-1 text-xs rounded-full ${
                  request.status === 'approved'
                    ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                    : request.status === 'pending'
                    ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400'
                    : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                }`}
              >
                {request.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileTab() {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-start gap-6 mb-6">
          <div className="w-24 h-24 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 text-3xl">
            SJ
          </div>
          <div className="flex-1">
            <h2 className="text-gray-900 dark:text-white mb-2">Sarah Johnson</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Senior Stylist</p>
            <button className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg">
              Change Photo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Full Name</label>
            <input
              type="text"
              defaultValue="Sarah Johnson"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              defaultValue="sarah.johnson@luxebeautyspa.com"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Phone</label>
            <input
              type="tel"
              defaultValue="+1 (555) 987-6543"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Specialty</label>
            <input
              type="text"
              defaultValue="Hair & Makeup"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
            Save Changes
          </button>
          <button className="px-6 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg">
            Cancel
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total Bookings</div>
          <div className="text-2xl text-gray-900 dark:text-white">342</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Average Rating</div>
          <div className="text-2xl text-gray-900 dark:text-white">4.9 ⭐</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Completion Rate</div>
          <div className="text-2xl text-gray-900 dark:text-white">98%</div>
        </div>
      </div>
    </div>
  );
}
