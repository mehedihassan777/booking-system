import { useState } from 'react';
import { ArrowLeft, Check, Calendar, Clock, User, CreditCard, CheckCircle2 } from 'lucide-react';

interface BookingFlowProps {
  onBack: () => void;
}

export function BookingFlow({ onBack }: BookingFlowProps) {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<'now' | 'later'>('later');

  const categories = [
    { id: 1, name: 'Hair Services', icon: '💇‍♀️', count: 8 },
    { id: 2, name: 'Nail Care', icon: '💅', count: 6 },
    { id: 3, name: 'Facial & Skincare', icon: '🧖‍♀️', count: 5 },
    { id: 4, name: 'Massage & Wellness', icon: '💆‍♀️', count: 4 },
    { id: 5, name: 'Makeup', icon: '💄', count: 3 },
  ];

  const services = [
    { id: 1, category: 'Hair Services', name: 'Hair Styling', duration: 60, price: 65, description: 'Professional hair cut, wash, and styling' },
    { id: 2, category: 'Hair Services', name: 'Hair Coloring', duration: 120, price: 120, description: 'Full hair coloring service' },
    { id: 3, category: 'Nail Care', name: 'Manicure & Pedicure', duration: 90, price: 85, description: 'Complete nail care with premium products' },
    { id: 4, category: 'Facial & Skincare', name: 'Facial Treatment', duration: 75, price: 120, description: 'Deep cleansing and rejuvenating facial' },
    { id: 5, category: 'Massage & Wellness', name: 'Massage Therapy', duration: 60, price: 95, description: 'Relaxing full-body massage' },
    { id: 6, category: 'Makeup', name: 'Makeup Application', duration: 45, price: 75, description: 'Professional makeup for any occasion' },
  ];

  const employees = [
    { id: 1, name: 'Sarah Johnson', role: 'Senior Stylist', specialty: 'Hair & Makeup', image: '👩‍🦰', rating: 4.9 },
    { id: 2, name: 'Emily Chen', role: 'Nail Specialist', specialty: 'Nail Care', image: '👩', rating: 4.8 },
    { id: 3, name: 'Maria Garcia', role: 'Esthetician', specialty: 'Skincare', image: '👩‍🦱', rating: 4.9 },
    { id: 4, name: 'Jessica Lee', role: 'Massage Therapist', specialty: 'Wellness', image: '👱‍♀️', rating: 5.0 },
  ];

  const availableDates = [
    '2025-12-13',
    '2025-12-14',
    '2025-12-15',
    '2025-12-16',
    '2025-12-17',
    '2025-12-18',
    '2025-12-19',
  ];

  const availableTimeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM',
    '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM',
  ];

  const steps = [
    { number: 1, name: 'Category' },
    { number: 2, name: 'Service' },
    { number: 3, name: 'Employee' },
    { number: 4, name: 'Date & Time' },
    { number: 5, name: 'Your Info' },
    { number: 6, name: 'Payment' },
    { number: 7, name: 'Confirmation' },
  ];

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step === 1) {
      onBack();
    } else {
      setStep(step - 1);
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8">
            {steps.map((s, index) => (
              <div key={s.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      step > s.number
                        ? 'bg-green-500 text-white'
                        : step === s.number
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {step > s.number ? <Check className="w-5 h-5" /> : s.number}
                  </div>
                  <span className="text-xs mt-2 text-gray-600 dark:text-gray-400 hidden sm:block">{s.name}</span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-0.5 w-8 mx-2 ${
                      step > s.number ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8">
          {/* Step 1: Category Selection */}
          {step === 1 && (
            <div>
              <h2 className="mb-6 text-gray-900 dark:text-white">Select Service Category</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.name);
                      handleNext();
                    }}
                    className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-600 dark:hover:border-purple-500 transition-colors text-left group"
                  >
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-gray-900 dark:text-white mb-2">{category.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{category.count} services available</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Service Selection */}
          {step === 2 && (
            <div>
              <h2 className="mb-6 text-gray-900 dark:text-white">Select Service</h2>
              <div className="space-y-4">
                {services
                  .filter((s) => !selectedCategory || s.category === selectedCategory)
                  .map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        setSelectedService(service);
                        handleNext();
                      }}
                      className="w-full p-6 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-600 dark:hover:border-purple-500 transition-colors text-left"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-gray-900 dark:text-white">{service.name}</h3>
                        <span className="text-purple-600 dark:text-purple-400">${service.price}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{service.description}</p>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration} minutes</span>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          )}

          {/* Step 3: Employee Selection */}
          {step === 3 && (
            <div>
              <h2 className="mb-2 text-gray-900 dark:text-white">Select Employee</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Choose your preferred specialist or skip to auto-assign</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {employees.map((employee) => (
                  <button
                    key={employee.id}
                    onClick={() => {
                      setSelectedEmployee(employee);
                      handleNext();
                    }}
                    className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-600 dark:hover:border-purple-500 transition-colors text-center"
                  >
                    <div className="text-5xl mb-3">{employee.image}</div>
                    <h3 className="text-gray-900 dark:text-white mb-1">{employee.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{employee.role}</p>
                    <div className="flex items-center justify-center gap-1 text-yellow-500">
                      <span>⭐</span>
                      <span className="text-sm">{employee.rating}</span>
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-full py-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
              >
                No preference (Auto-assign)
              </button>
            </div>
          )}

          {/* Step 4: Date & Time Selection */}
          {step === 4 && (
            <div>
              <h2 className="mb-6 text-gray-900 dark:text-white">Choose Date & Time</h2>
              
              {/* Date Selection */}
              <div className="mb-6">
                <h3 className="mb-3 text-gray-900 dark:text-white">Select Date</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {availableDates.map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`p-4 border-2 rounded-xl transition-colors ${
                        selectedDate === date
                          ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                          : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      <div className="text-sm">{formatDate(date)}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div className="mb-6">
                  <h3 className="mb-3 text-gray-900 dark:text-white">Select Time</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-64 overflow-y-auto">
                    {availableTimeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 border-2 rounded-lg text-sm transition-colors ${
                          selectedTime === time
                            ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                            : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {selectedDate && selectedTime && (
                <button
                  onClick={handleNext}
                  className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  Continue
                </button>
              )}
            </div>
          )}

          {/* Step 5: Customer Info */}
          {step === 5 && (
            <div>
              <h2 className="mb-6 text-gray-900 dark:text-white">Your Information</h2>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                <div>
                  <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Special Notes (Optional)</label>
                  <textarea
                    value={customerInfo.notes}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Any specific requests or preferences..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  Continue to Payment
                </button>
              </form>
            </div>
          )}

          {/* Step 6: Payment */}
          {step === 6 && (
            <div>
              <h2 className="mb-6 text-gray-900 dark:text-white">Payment Method</h2>
              <div className="space-y-4 mb-6">
                <button
                  onClick={() => {
                    setPaymentMethod('now');
                    handleNext();
                  }}
                  className="w-full p-6 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-600 dark:hover:border-purple-500 transition-colors text-left"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <CreditCard className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <h3 className="text-gray-900 dark:text-white">Pay Now</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Secure online payment via credit card or digital wallet</p>
                </button>
                <button
                  onClick={() => {
                    setPaymentMethod('later');
                    handleNext();
                  }}
                  className="w-full p-6 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-600 dark:hover:border-purple-500 transition-colors text-left"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <h3 className="text-gray-900 dark:text-white">Pay at Venue</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Pay when you arrive for your appointment</p>
                </button>
              </div>
            </div>
          )}

          {/* Step 7: Confirmation */}
          {step === 7 && (
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="mb-4 text-gray-900 dark:text-white">Booking Confirmed!</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Your appointment has been successfully booked. We've sent a confirmation email to {customerInfo.email}
              </p>

              {/* Booking Summary */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 text-left mb-6">
                <h3 className="mb-4 text-gray-900 dark:text-white">Booking Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Service</span>
                    <span className="text-gray-900 dark:text-white">{selectedService?.name}</span>
                  </div>
                  {selectedEmployee && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Specialist</span>
                      <span className="text-gray-900 dark:text-white">{selectedEmployee.name}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Date & Time</span>
                    <span className="text-gray-900 dark:text-white">
                      {formatDate(selectedDate)} at {selectedTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Duration</span>
                    <span className="text-gray-900 dark:text-white">{selectedService?.duration} minutes</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-gray-900 dark:text-white">Total</span>
                    <span className="text-purple-600 dark:text-purple-400 text-xl">${selectedService?.price}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={onBack}
                  className="flex-1 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors"
                >
                  Back to Home
                </button>
                <button
                  onClick={() => alert('Download calendar event (ICS file)')}
                  className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  Add to Calendar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
