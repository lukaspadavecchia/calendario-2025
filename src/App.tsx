import React, { useState } from 'react';
import { MonthView } from './components/MonthView';
import { EventModal } from './components/EventModal';
import { CalendarDay, Month } from './types/calendar';
import { MONTHS, getMonthDays } from './utils/calendarHelpers';
import { Calendar } from 'lucide-react';

function App() {
  const [currentMonth, setCurrentMonth] = useState<number>(0);
  const [selectedDay, setSelectedDay] = useState<CalendarDay | null>(null);

  const month: Month = {
    name: MONTHS[currentMonth],
    number: currentMonth,
    days: getMonthDays(currentMonth, 2025)
  };

  const handlePrevMonth = () => {
    setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1));
  };

  const handleDayClick = (day: CalendarDay) => {
    setSelectedDay(day);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="flex items-center gap-3 mb-8">
          <Calendar className="w-8 h-8 text-emerald-600" />
          <h1 className="text-3xl font-bold text-gray-800">Calendar 2025</h1>
        </div>

        <MonthView
          month={month}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
          onDayClick={handleDayClick}
        />

        {selectedDay && (
          <EventModal
            day={selectedDay}
            onClose={() => setSelectedDay(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;