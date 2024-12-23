import React from 'react';
import { CalendarDay } from '../types/calendar';
import { X } from 'lucide-react';
import { formatDate } from '../utils/calendarHelpers';

interface EventModalProps {
  day: CalendarDay;
  onClose: () => void;
}

export function EventModal({ day, onClose }: EventModalProps) {
  const date = new Date(day.year, day.month, day.date);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            {formatDate(date)}
          </h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              {day.isWeekend ? 'Weekend' : 'Weekday'}
            </p>
          </div>
          
          {/* Add more event-related content here */}
        </div>
      </div>
    </div>
  );
}