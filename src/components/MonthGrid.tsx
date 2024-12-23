import React from 'react';
import { CalendarDay } from '../types/calendar';
import { DAYS } from '../utils/calendarHelpers';

interface MonthGridProps {
  days: CalendarDay[];
  onDayClick: (day: CalendarDay) => void;
}

export function MonthGrid({ days, onDayClick }: MonthGridProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-7 mb-2">
        {DAYS.map(day => (
          <div
            key={day}
            className="text-center text-sm font-semibold text-gray-600 py-2"
          >
            {day.slice(0, 3)}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <button
            key={`${day.date}-${day.month}-${index}`}
            onClick={() => onDayClick(day)}
            className={`
              aspect-square p-2 rounded-lg transition-colors
              flex flex-col items-center justify-center
              ${day.isCurrentMonth ? 'hover:bg-emerald-50' : 'opacity-40'}
              ${day.isToday ? 'bg-emerald-100 font-bold' : ''}
              ${day.isWeekend && day.isCurrentMonth ? 'text-emerald-600' : ''}
              ${!day.isCurrentMonth ? 'text-gray-400' : 'text-gray-700'}
            `}
          >
            <span className="text-sm">{day.date}</span>
          </button>
        ))}
      </div>
    </div>
  );
}