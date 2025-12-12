import { Star, Clock, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Award } from 'lucide-react';

interface LandingPageProps {
  onBookNow: () => void;
}

export function LandingPage({ onBookNow }: LandingPageProps) {
  const business = {
    name: 'Luxe Beauty Spa',
    category: 'Beauty & Wellness',
    logo: '💆‍♀️',
    tagline: 'Experience Premium Beauty Services',
    description: 'Welcome to Luxe Beauty Spa, where beauty meets luxury. Our expert team provides world-class beauty and wellness services in a serene, relaxing environment.',
    rating: 4.8,
    reviews: 342,
    phone: '+1 (555) 123-4567',
    email: 'hello@luxebeautyspa.com',
    address: '123 Beauty Boulevard, Wellness District, CA 90210',
  };

  const services = [
    { id: 1, name: 'Hair Styling', duration: '60 min', price: '$65', description: 'Professional hair cut, wash, and styling' },
    { id: 2, name: 'Manicure & Pedicure', duration: '90 min', price: '$85', description: 'Complete nail care with premium products' },
    { id: 3, name: 'Facial Treatment', duration: '75 min', price: '$120', description: 'Deep cleansing and rejuvenating facial' },
    { id: 4, name: 'Massage Therapy', duration: '60 min', price: '$95', description: 'Relaxing full-body massage' },
    { id: 5, name: 'Makeup Application', duration: '45 min', price: '$75', description: 'Professional makeup for any occasion' },
    { id: 6, name: 'Skin Treatment', duration: '90 min', price: '$150', description: 'Advanced skincare treatment' },
  ];

  const employees = [
    { id: 1, name: 'Sarah Johnson', role: 'Senior Stylist', specialty: 'Hair & Makeup', image: '👩‍🦰' },
    { id: 2, name: 'Emily Chen', role: 'Nail Specialist', specialty: 'Nail Care', image: '👩' },
    { id: 3, name: 'Maria Garcia', role: 'Esthetician', specialty: 'Skincare', image: '👩‍🦱' },
    { id: 4, name: 'Jessica Lee', role: 'Massage Therapist', specialty: 'Wellness', image: '👱‍♀️' },
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '11:00 AM - 5:00 PM' },
  ];

  const reviews = [
    { id: 1, author: 'Emma Wilson', rating: 5, text: 'Absolutely amazing service! The staff is professional and the atmosphere is so relaxing.', date: '2 days ago' },
    { id: 2, author: 'Olivia Brown', rating: 5, text: 'Best spa experience I\'ve ever had. Sarah did an incredible job with my hair!', date: '1 week ago' },
    { id: 3, author: 'Sophia Davis', rating: 4, text: 'Great services and friendly staff. The facial treatment was wonderful.', date: '2 weeks ago' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">{business.logo}</div>
              <div>
                <h1 className="text-gray-900 dark:text-white">{business.name}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded text-xs">
                    {business.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{business.rating} ({business.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={onBookNow}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 dark:text-white mb-4">{business.tagline}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            {business.description}
          </p>
          <button
            onClick={onBookNow}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors shadow-lg"
          >
            Schedule Your Appointment
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12 text-gray-900 dark:text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-gray-900 dark:text-white">{service.name}</h3>
                  <span className="text-purple-600 dark:text-purple-400">{service.price}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12 text-gray-900 dark:text-white">Our Expert Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {employees.map((employee) => (
              <div
                key={employee.id}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-6xl mb-4">{employee.image}</div>
                <h3 className="text-gray-900 dark:text-white mb-1">{employee.name}</h3>
                <p className="text-purple-600 dark:text-purple-400 text-sm mb-2">{employee.role}</p>
                <div className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-400 text-sm">
                  <Award className="w-4 h-4" />
                  <span>{employee.specialty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-8 text-gray-900 dark:text-white">Working Hours</h2>
              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <span className="text-gray-700 dark:text-gray-300">{schedule.day}</span>
                    <span className="text-gray-900 dark:text-white">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-8 text-gray-900 dark:text-white">Location & Contact</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">Address</div>
                    <div className="text-gray-900 dark:text-white">{business.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">Phone</div>
                    <div className="text-gray-900 dark:text-white">{business.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">Email</div>
                    <div className="text-gray-900 dark:text-white">{business.email}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12 text-gray-900 dark:text-white">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white dark:bg-gray-700 rounded-xl p-6"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{review.text}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white text-sm">{review.author}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="text-4xl">{business.logo}</div>
              <span className="text-xl">{business.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">© 2025 {business.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
