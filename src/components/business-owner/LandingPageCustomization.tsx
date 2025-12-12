import { useState } from 'react';
import { Eye, Save, Plus, Trash2, Upload } from 'lucide-react';

interface LandingPageCustomizationProps {
  darkMode: boolean;
}

export function LandingPageCustomization({ darkMode }: LandingPageCustomizationProps) {
  const [services, setServices] = useState([
    { id: 1, name: 'Haircut & Styling', duration: 45, price: 45, description: 'Professional haircut with styling' },
    { id: 2, name: 'Hair Coloring', duration: 90, price: 120, description: 'Full hair coloring service' },
  ]);

  const [socialLinks, setSocialLinks] = useState({
    facebook: 'facebook.com/luxebeauty',
    instagram: 'instagram.com/luxebeauty',
    twitter: 'twitter.com/luxebeauty',
  });

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-gray-900 dark:text-white">Landing Page Customization</h2>
        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2">
          <Eye className="w-4 h-4" />
          Preview
        </button>
      </div>

      <div className="space-y-6">
        {/* Theme & Branding */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">Theme & Branding</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Primary Color</label>
              <div className="flex gap-3">
                <input type="color" defaultValue="#ec4899" className="w-16 h-12 rounded-xl cursor-pointer" />
                <input type="text" defaultValue="#ec4899" className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Secondary Color</label>
              <div className="flex gap-3">
                <input type="color" defaultValue="#9333ea" className="w-16 h-12 rounded-xl cursor-pointer" />
                <input type="text" defaultValue="#9333ea" className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">Hero Section</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Headline</label>
              <input
                type="text"
                defaultValue="Your Beauty, Our Passion"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Subheadline</label>
              <textarea
                defaultValue="Experience premium beauty services in a relaxing and luxurious environment."
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900 dark:text-white">Photo Gallery</h3>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm">
              <Upload className="w-4 h-4" />
              Upload Photos
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
            ))}
          </div>
        </div>

        {/* Services List */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900 dark:text-white">Services</h3>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm">
              <Plus className="w-4 h-4" />
              Add Service
            </button>
          </div>
          <div className="space-y-3">
            {services.map((service) => (
              <div key={service.id} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <div className="flex-1">
                  <div className="text-gray-900 dark:text-white">{service.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{service.duration} min · ${service.price}</div>
                </div>
                <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">Social Media Links</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Facebook</label>
              <input
                type="text"
                value={socialLinks.facebook}
                onChange={(e) => setSocialLinks({ ...socialLinks, facebook: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                placeholder="facebook.com/yourbusiness"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Instagram</label>
              <input
                type="text"
                value={socialLinks.instagram}
                onChange={(e) => setSocialLinks({ ...socialLinks, instagram: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                placeholder="instagram.com/yourbusiness"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Twitter</label>
              <input
                type="text"
                value={socialLinks.twitter}
                onChange={(e) => setSocialLinks({ ...socialLinks, twitter: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                placeholder="twitter.com/yourbusiness"
              />
            </div>
          </div>
        </div>

        {/* Custom Domain */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">Custom Domain</h3>
          <div className="flex items-center gap-4 mb-2">
            <input
              type="text"
              defaultValue="luxebeauty.bookings.com"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            />
            <button className="px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              Verify Domain
            </button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Upgrade to Professional plan to use custom domains
          </p>
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
