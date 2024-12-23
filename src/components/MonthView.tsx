import React from 'react';
import { Month, CalendarDay } from '../types/calendar';
import { MonthGrid } from './MonthGrid';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MonthViewProps {
  month: Month;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onDayClick: (day: CalendarDay) => void;
}

export function MonthView({ month, onPrevMonth, onNextMonth, onDayClick }: MonthViewProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {month.name} 2025
        </h2>
        <div className="flex gap-2">
          <button
            onClick={onPrevMonth}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={onNextMonth}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
      
      <MonthGrid days={month.days} onDayClick={onDayClick} />
    </div>
  );
}