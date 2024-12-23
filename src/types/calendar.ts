export type CalendarDay = {
  date: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isWeekend: boolean;
};

export type Month = {
  name: string;
  number: number;
  days: CalendarDay[];
};

export type Holiday = {
  date: string; // YYYY-MM-DD
  name: string;
};