import { useState } from 'react';
import { Plus, Trash2, Save, Calendar } from 'lucide-react';

interface ScheduleManagementProps {
  darkMode: boolean;
}

export function ScheduleManagement({ darkMode }: ScheduleManagementProps) {
  const [workingDays, setWorkingDays] = useState([
    { day: 'Monday', enabled: true, startTime: '09:00', endTime: '18:00' },
    { day: 'Tuesday', enabled: true, startTime: '09:00', endTime: '18:00' },
    { day: 'Wednesday', enabled: true, startTime: '09:00', endTime: '18:00' },
    { day: 'Thursday', enabled: true, startTime: '09:00', endTime: '18:00' },
    { day: 'Friday', enabled: true, startTime: '09:00', endTime: '18:00' },
    { day: 'Saturday', enabled: true, startTime: '10:00', endTime: '16:00' },
    { day: 'Sunday', enabled: false, startTime: '10:00', endTime: '16:00' },
  ]);

  const [breakTimes, setBreakTimes] = useState([
    { id: 1, label: 'Lunch Break', startTime: '12:00', endTime: '13:00' },
  ]);

  const [holidays, setHolidays] = useState([
    { id: 1, date: '2025-12-25', description: 'Christmas Day' },
    { id: 2, date: '2026-01-01', description: 'New Year\'s Day' },
  ]);

  return (
    <div className="max-w-5xl">
      <h2 className="text-gray-900 dark:text-white mb-6">Schedule & Slot Management</h2>

      <div className="space-y-6">
        {/* Working Days */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">Working Days & Hours</h3>
          <div className="space-y-3">
            {workingDays.map((schedule, index) => (
              <div key={schedule.day} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <input
                  type="checkbox"
                  checked={schedule.enabled}
                  onChange={(e) => {
                    const newDays = [...workingDays];
                    newDays[index].enabled = e.target.checked;
                    setWorkingDays(newDays);
                  }}
                  className="w-5 h-5 rounded"
                />
                <div className="w-32">
                  <span className="text-gray-900 dark:text-white">{schedule.day}</span>
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <input
                    type="time"
                    value={schedule.startTime}
                    disabled={!schedule.enabled}
                    onChange={(e) => {
                      const newDays = [...workingDays];
                      newDays[index].startTime = e.target.value;
                      setWorkingDays(newDays);
                    }}
                    className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white disabled:opacity-50"
                  />
                  <span className="text-gray-600 dark:text-gray-400">to</span>
                  <input
                    type="time"
                    value={schedule.endTime}
                    disabled={!schedule.enabled}
                    onChange={(e) => {
                      const newDays = [...workingDays];
                      newDays[index].endTime = e.target.value;
                      setWorkingDays(newDays);
                    }}
                    className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white disabled:opacity-50"
                  />
                </div>
                {!schedule.enabled && (
                  <span className="text-red-600 dark:text-red-400 text-sm">Closed</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Time Slot Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">Time Slot Settings</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Slot Duration (minutes)</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                <option value="15">15 minutes</option>
                <option value="30" selected>30 minutes</option>
                <option value="60">60 minutes</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Buffer Time (minutes)</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                <option value="0">No buffer</option>
                <option value="5">5 minutes</option>
                <option value="10" selected>10 minutes</option>
                <option value="15">15 minutes</option>
              </select>
            </div>
          </div>
        </div>

        {/* Break Times */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900 dark:text-white">Break Times</h3>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm">
              <Plus className="w-4 h-4" />
              Add Break
            </button>
          </div>
          <div className="space-y-3">
            {breakTimes.map((breakTime) => (
              <div key={breakTime.id} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <div className="flex-1">
                  <input
                    type="text"
                    value={breakTime.label}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white mb-2"
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="time"
                      value={breakTime.startTime}
                      className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    />
                    <span className="text-gray-600 dark:text-gray-400">to</span>
                    <input
                      type="time"
                      value={breakTime.endTime}
                      className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
                <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Holidays */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900 dark:text-white">Holidays & Closures</h3>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm">
              <Plus className="w-4 h-4" />
              Add Holiday
            </button>
          </div>
          <div className="space-y-3">
            {holidays.map((holiday) => (
              <div key={holiday.id} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <div className="flex-1">
                  <div className="text-gray-900 dark:text-white">{holiday.description}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{holiday.date}</div>
                </div>
                <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Closure */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">Emergency Closure</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
            Temporarily close your business for bookings without deleting your schedule
          </p>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors">
              Close Now
            </button>
            <span className="text-sm text-gray-600 dark:text-gray-400">Status: Open</span>
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
