import { UserRole } from '../App';
import { Shield, Briefcase, Users, Calendar } from 'lucide-react';

interface RoleSelectorProps {
  onSelectRole: (role: UserRole) => void;
  darkMode: boolean;
}

export function RoleSelector({ onSelectRole, darkMode }: RoleSelectorProps) {
  const roles = [
    {
      id: 'public' as UserRole,
      title: 'Public Landing Page',
      description: 'View a business landing page',
      icon: Calendar,
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'customer' as UserRole,
      title: 'Customer Booking',
      description: 'Book an appointment',
      icon: Calendar,
      color: 'from-green-500 to-green-600',
    },
    {
      id: 'employee' as UserRole,
      title: 'Employee Dashboard',
      description: 'Manage your bookings',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 'business-owner' as UserRole,
      title: 'Business Owner',
      description: 'Full business management',
      icon: Briefcase,
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 'super-admin' as UserRole,
      title: 'Super Admin',
      description: 'Platform administration',
      icon: Shield,
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-gray-900 dark:text-white mb-4">
            Schedule Booking Platform
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Select a role to explore the platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <button
                key={role.id}
                onClick={() => onSelectRole(role.id)}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-gray-200 dark:border-gray-700"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-gray-900 dark:text-white mb-2">
                  {role.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {role.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
