import { useState } from 'react';
import { ArrowLeft, Check, CreditCard, Calendar, Clock, User } from 'lucide-react';

interface CustomerBookingFlowProps {
  onBack: () => void;
  darkMode: boolean;
}

type BookingStep = 'category' | 'service' | 'employee' | 'datetime' | 'info' | 'payment' | 'confirmation';

export function CustomerBookingFlow({ onBack, darkMode }: CustomerBookingFlowProps) {
  const [currentStep, setCurrentStep] = useState<BookingStep>('category');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({ name: '', email: '', phone: '', notes: '' });

  const categories = [
    { id: 'hair', name: 'Hair Services', icon: '💇', color: 'from-pink-500 to-pink-600' },
    { id: 'nails', name: 'Nail Care', icon: '💅', color: 'from-purple-500 to-purple-600' },
    { id: 'facial', name: 'Facial Treatments', icon: '✨', color: 'from-blue-500 to-blue-600' },
    { id: 'massage', name: 'Massage Therapy', icon: '💆', color: 'from-green-500 to-green-600' },
  ];

  const services = {
    hair: [
      { id: 'haircut', name: 'Haircut & Styling', duration: '45 min', price: '$45' },
      { id: 'coloring', name: 'Hair Coloring', duration: '90 min', price: '$120' },
      { id: 'highlights', name: 'Highlights', duration: '120 min', price: '$150' },
    ],
    nails: [
      { id: 'manicure', name: 'Manicure', duration: '30 min', price: '$35' },
      { id: 'pedicure', name: 'Pedicure', duration: '45 min', price: '$45' },
      { id: 'both', name: 'Manicure & Pedicure', duration: '60 min', price: '$65' },
    ],
  };

  const employees = [
    { id: 'any', name: 'Any Available', avatar: '👤', rating: null },
    { id: '1', name: 'Sarah Johnson', avatar: '👩‍🦰', rating: 4.9 },
    { id: '2', name: 'Michael Chen', avatar: '👨‍🦱', rating: 4.8 },
    { id: '3', name: 'Emma Davis', avatar: '👩‍🦱', rating: 5.0 },
  ];

  const availableDates = [
    { date: '2025-12-16', day: 'Mon' },
    { date: '2025-12-17', day: 'Tue' },
    { date: '2025-12-18', day: 'Wed' },
    { date: '2025-12-19', day: 'Thu' },
    { date: '2025-12-20', day: 'Fri' },
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
  ];

  const steps = [
    { id: 'category', label: 'Category' },
    { id: 'service', label: 'Service' },
    { id: 'employee', label: 'Employee' },
    { id: 'datetime', label: 'Date & Time' },
    { id: 'info', label: 'Your Info' },
    { id: 'payment', label: 'Payment' },
  ];

  const getCurrentStepIndex = () => steps.findIndex(s => s.id === currentStep);

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        {steps.map((step, index) => {
          const isCompleted = index < getCurrentStepIndex();
          const isCurrent = step.id === currentStep;
          
          return (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  isCompleted ? 'bg-green-500' :
                  isCurrent ? 'bg-blue-600' :
                  'bg-gray-300 dark:bg-gray-600'
                }`}>
                  {isCompleted ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <span className="text-white">{index + 1}</span>
                  )}
                </div>
                <span className={`text-xs mt-2 ${
                  isCurrent ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`h-0.5 flex-1 ${
                  isCompleted ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                }`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderCategoryStep = () => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-gray-900 dark:text-white mb-8 text-center">Select a Category</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setSelectedCategory(category.id);
              setCurrentStep('service');
            }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left"
          >
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 text-3xl`}>
              {category.icon}
            </div>
            <h3 className="text-gray-900 dark:text-white">{category.name}</h3>
          </button>
        ))}
      </div>
    </div>
  );

  const renderServiceStep = () => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-gray-900 dark:text-white mb-8 text-center">Choose a Service</h2>
      <div className="grid gap-4">
        {(services[selectedCategory as keyof typeof services] || []).map((service) => (
          <button
            key={service.id}
            onClick={() => {
              setSelectedService(service.id);
              setCurrentStep('employee');
            }}
            className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 transition-all text-left ${
              selectedService === service.id
                ? 'border-blue-500'
                : 'border-gray-200 dark:border-gray-700 hover:border-blue-500'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-gray-900 dark:text-white mb-2">{service.name}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </span>
                  <span className="text-blue-600 dark:text-blue-400">{service.price}</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderEmployeeStep = () => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-gray-900 dark:text-white mb-8 text-center">Select an Employee</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {employees.map((employee) => (
          <button
            key={employee.id}
            onClick={() => {
              setSelectedEmployee(employee.id);
              setCurrentStep('datetime');
            }}
            className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 transition-all ${
              selectedEmployee === employee.id
                ? 'border-blue-500'
                : 'border-gray-200 dark:border-gray-700 hover:border-blue-500'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl">
                {employee.avatar}
              </div>
              <div className="text-left">
                <h3 className="text-gray-900 dark:text-white mb-1">{employee.name}</h3>
                {employee.rating && (
                  <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                    ⭐ {employee.rating}
                  </div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderDateTimeStep = () => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-gray-900 dark:text-white mb-8 text-center">Choose Date & Time</h2>
      
      {/* Date Selection */}
      <div className="mb-8">
        <h3 className="text-gray-900 dark:text-white mb-4">Select Date</h3>
        <div className="grid grid-cols-5 gap-3">
          {availableDates.map((dateObj) => (
            <button
              key={dateObj.date}
              onClick={() => setSelectedDate(dateObj.date)}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedDate === dateObj.date
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-blue-500'
              }`}
            >
              <div className="text-center">
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">{dateObj.day}</div>
                <div className="text-gray-900 dark:text-white">
                  {new Date(dateObj.date).getDate()}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <div>
          <h3 className="text-gray-900 dark:text-white mb-4">Select Time</h3>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => {
                  setSelectedTime(time);
                  setCurrentStep('info');
                }}
                className={`p-3 rounded-xl border-2 transition-all text-sm ${
                  selectedTime === time
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-500'
                } ${Math.random() > 0.7 ? 'opacity-40 cursor-not-allowed' : ''}`}
                disabled={Math.random() > 0.7}
              >
                <div className="text-gray-900 dark:text-white">{time}</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderInfoStep = () => (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-gray-900 dark:text-white mb-8 text-center">Your Information</h2>
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
            <input
              type="text"
              value={customerInfo.name}
              onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Email *</label>
            <input
              type="email"
              value={customerInfo.email}
              onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Phone *</label>
            <input
              type="tel"
              value={customerInfo.phone}
              onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Special Notes (Optional)</label>
            <textarea
              value={customerInfo.notes}
              onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              rows={4}
              placeholder="Any special requests or requirements..."
            />
          </div>
          <button
            onClick={() => setCurrentStep('payment')}
            className="w-full py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );

  const renderPaymentStep = () => (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-gray-900 dark:text-white mb-8 text-center">Payment Method</h2>
      <div className="space-y-6">
        <button
          onClick={() => setCurrentStep('confirmation')}
          className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-gray-900 dark:text-white mb-1">Pay Now</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pay securely with credit/debit card</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => setCurrentStep('confirmation')}
          className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="text-gray-900 dark:text-white mb-1">Pay at Venue</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pay when you arrive for your appointment</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="max-w-2xl mx-auto text-center">
      <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
      </div>
      <h2 className="text-gray-900 dark:text-white mb-4">Booking Confirmed!</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Your appointment has been successfully booked. A confirmation email has been sent to {customerInfo.email}
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 text-left mb-8">
        <h3 className="text-gray-900 dark:text-white mb-6">Booking Details</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Service</span>
            <span className="text-gray-900 dark:text-white">Hair Coloring</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Employee</span>
            <span className="text-gray-900 dark:text-white">Sarah Johnson</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Date</span>
            <span className="text-gray-900 dark:text-white">{selectedDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Time</span>
            <span className="text-gray-900 dark:text-white">{selectedTime}</span>
          </div>
          <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <span className="text-gray-900 dark:text-white">Total</span>
            <span className="text-blue-600 dark:text-blue-400">$120</span>
          </div>
        </div>
      </div>

      <button
        onClick={onBack}
        className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
      >
        Back to Home
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={currentStep === 'confirmation' ? onBack : () => {
              const stepIndex = getCurrentStepIndex();
              if (stepIndex > 0) setCurrentStep(steps[stepIndex - 1].id as BookingStep);
              else onBack();
            }}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-gray-900 dark:text-white">Book Appointment</h1>
          <div className="w-20"></div>
        </div>

        {/* Step Indicator */}
        {currentStep !== 'confirmation' && renderStepIndicator()}

        {/* Step Content */}
        <div className="py-8">
          {currentStep === 'category' && renderCategoryStep()}
          {currentStep === 'service' && renderServiceStep()}
          {currentStep === 'employee' && renderEmployeeStep()}
          {currentStep === 'datetime' && renderDateTimeStep()}
          {currentStep === 'info' && renderInfoStep()}
          {currentStep === 'payment' && renderPaymentStep()}
          {currentStep === 'confirmation' && renderConfirmation()}
        </div>
      </div>
    </div>
  );
}
