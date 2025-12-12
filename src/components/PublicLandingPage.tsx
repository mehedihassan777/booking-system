import { Star, MapPin, Clock, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

interface PublicLandingPageProps {
  onBook: () => void;
  darkMode: boolean;
}

export function PublicLandingPage({ onBook, darkMode }: PublicLandingPageProps) {
  const services = [
    { id: 1, name: 'Haircut & Styling', duration: '45 min', price: '$45', description: 'Professional haircut with styling' },
    { id: 2, name: 'Hair Coloring', duration: '90 min', price: '$120', description: 'Full hair coloring service' },
    { id: 3, name: 'Manicure & Pedicure', duration: '60 min', price: '$65', description: 'Complete nail care service' },
    { id: 4, name: 'Facial Treatment', duration: '75 min', price: '$95', description: 'Rejuvenating facial treatment' },
  ];

  const employees = [
    { id: 1, name: 'Sarah Johnson', role: 'Senior Stylist', avatar: '👩‍🦰', rating: 4.9 },
    { id: 2, name: 'Michael Chen', role: 'Hair Specialist', avatar: '👨‍🦱', rating: 4.8 },
    { id: 3, name: 'Emma Davis', role: 'Beauty Expert', avatar: '👩‍🦱', rating: 5.0 },
  ];

  const reviews = [
    { id: 1, author: 'Jessica M.', rating: 5, text: 'Amazing service! Sarah did a fantastic job with my hair color.', date: '2 days ago' },
    { id: 2, author: 'David L.', rating: 5, text: 'Professional and friendly staff. Highly recommend!', date: '1 week ago' },
    { id: 3, author: 'Rachel K.', rating: 4, text: 'Great experience overall. Will definitely come back.', date: '2 weeks ago' },
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <div>
                <h1 className="text-gray-900 dark:text-white">Luxe Beauty Salon</h1>
                <span className="inline-block px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-xs mt-1">
                  Beauty & Wellness
                </span>
              </div>
            </div>
            <button
              onClick={onBook}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all"
            >
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 dark:text-white mb-6">
                Your Beauty, Our Passion
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                Experience premium beauty services in a relaxing and luxurious environment. Our expert team is dedicated to making you look and feel your best.
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">4.9 out of 5 (234 reviews)</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-pink-200 dark:bg-pink-900/30 rounded-2xl"></div>
              <div className="aspect-square bg-purple-200 dark:bg-purple-900/30 rounded-2xl mt-8"></div>
              <div className="aspect-square bg-purple-200 dark:bg-purple-900/30 rounded-2xl -mt-8"></div>
              <div className="aspect-square bg-pink-200 dark:bg-pink-900/30 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Discover our range of premium beauty treatments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-gray-900 dark:text-white">{service.name}</h3>
                  <span className="text-pink-600 dark:text-pink-400">{service.price}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                  <Clock className="w-4 h-4" />
                  {service.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Experienced professionals dedicated to your beauty
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {employees.map((employee) => (
              <div
                key={employee.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4 text-4xl">
                  {employee.avatar}
                </div>
                <h3 className="text-gray-900 dark:text-white mb-1">{employee.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{employee.role}</p>
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-gray-900 dark:text-white">{employee.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 dark:text-white mb-4">Customer Reviews</h2>
            <p className="text-gray-600 dark:text-gray-400">
              See what our clients are saying
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{review.text}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white text-sm">{review.author}</span>
                  <span className="text-gray-500 dark:text-gray-500 text-xs">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Hours Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Working Hours */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-gray-900 dark:text-white mb-6">Working Hours</h3>
              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0">
                    <span className="text-gray-600 dark:text-gray-400">{schedule.day}</span>
                    <span className="text-gray-900 dark:text-white">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-gray-900 dark:text-white mb-6">Contact Us</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  <span className="text-gray-600 dark:text-gray-400">123 Beauty Street, New York, NY 10001</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  <span className="text-gray-600 dark:text-gray-400">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  <span className="text-gray-600 dark:text-gray-400">hello@luxebeauty.com</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-colors">
                  <Facebook className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                </button>
                <button className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-colors">
                  <Instagram className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                </button>
                <button className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-colors">
                  <Twitter className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12 bg-gray-200 dark:bg-gray-700 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
              <p className="text-gray-500 dark:text-gray-400">Map Location</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Book Your Appointment?</h2>
          <p className="text-pink-100 text-lg mb-8">
            Join hundreds of satisfied clients and experience the difference
          </p>
          <button
            onClick={onBook}
            className="px-8 py-4 bg-white text-pink-600 rounded-xl hover:shadow-xl transition-all"
          >
            Book Your Appointment Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Luxe Beauty Salon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
