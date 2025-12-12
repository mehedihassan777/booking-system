import { useState } from 'react';
import { Upload, MapPin, Phone, Mail, Globe, Save } from 'lucide-react';

interface BusinessProfileProps {
  darkMode: boolean;
}

export function BusinessProfile({ darkMode }: BusinessProfileProps) {
  const [formData, setFormData] = useState({
    businessName: 'Luxe Beauty Salon',
    category: 'beauty',
    description: 'Premium beauty and wellness services in the heart of the city',
    address: '123 Beauty Street, New York, NY 10001',
    phone: '(555) 123-4567',
    email: 'hello@luxebeauty.com',
    website: 'www.luxebeauty.com',
  });

  const categories = [
    { value: 'beauty', label: 'Beauty & Wellness' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'automotive', label: 'Automotive Services' },
    { value: 'home', label: 'Home Services' },
    { value: 'education', label: 'Education & Training' },
    { value: 'fitness', label: 'Fitness & Sports' },
  ];

  return (
    <div className="max-w-4xl">
      <h2 className="text-gray-900 dark:text-white mb-6">Business Profile</h2>

      <div className="space-y-6">
        {/* Logo Upload */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">Business Logo</h3>
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl">
              ✨
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Upload New Logo
            </button>
          </div>
        </div>

        {/* Basic Information */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">Basic Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Business Name *</label>
              <input
                type="text"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Business Category *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                Business Address
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                <Globe className="w-4 h-4 inline mr-2" />
                Website (Optional)
              </label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Save className="w-5 h-5" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
