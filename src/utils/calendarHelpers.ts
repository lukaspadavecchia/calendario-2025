export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function getMonthDays(month: number, year: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDay = firstDay.getDay();

  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const days = [];

  // Previous month days
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = startingDay - 1; i >= 0; i--) {
    days.push({
      date: prevMonthLastDay - i,
      month: month - 1,
      year,
      isCurrentMonth: false,
      isToday: false,
      isWeekend: false
    });
  }

  // Current month days
  for (let date = 1; date <= daysInMonth; date++) {
    const dayOfWeek = new Date(year, month, date).getDay();
    days.push({
      date,
      month,
      year,
      isCurrentMonth: true,
      isToday: date === currentDay && month === currentMonth && year === currentYear,
      isWeekend: dayOfWeek === 0 || dayOfWeek === 6
    });
  }

  // Next month days
  const remainingDays = 42 - days.length; // 6 rows × 7 days
  for (let date = 1; date <= remainingDays; date++) {
    days.push({
      date,
      month: month + 1,
      year,
      isCurrentMonth: false,
      isToday: false,
      isWeekend: false
    });
  }

  return days;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}