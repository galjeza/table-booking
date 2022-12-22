'use client';
import EventListItem from './components/EventListItem';
import Calendar from './components/Calendar';

const reservations = [
  {
    id: 1,
    date: 'December 12, 2022',
    time: '13:00',
    datetime: '2022-01-10T17:00',
    name: 'Matic Lukežič',
    location: '5 oseb '
  },
  // Genrate 5 more items
  {
    id: 2,
    date: 'December 12, 2022',
    time: '17:00',
    datetime: '2022-01-10T17:00',
    name: 'Gal Jeza',
    location: '3 osebe '
  },

  {
    id: 2,
    date: 'December 12, 2022',
    time: '19:00',
    datetime: '2022-01-10T17:00',
    name: 'Vid Čabrian ',
    location: '2 osebi '
  },
  {
    id: 2,
    date: 'December 12, 2022',
    time: '8:00 PM',
    datetime: '2022-01-10T17:00',
    name: 'Simon Plazar',
    location: '2 osebi '
  }
];
const days = [
  { date: '2021-12-27' },
  { date: '2021-12-28' },
  { date: '2021-12-29' },
  { date: '2021-12-30' },
  { date: '2021-12-31' },
  { date: '2022-01-01', isCurrentMonth: true },
  { date: '2022-01-02', isCurrentMonth: true },
  { date: '2022-01-03', isCurrentMonth: true },
  { date: '2022-01-04', isCurrentMonth: true },
  { date: '2022-01-05', isCurrentMonth: true },
  { date: '2022-01-06', isCurrentMonth: true },
  { date: '2022-01-07', isCurrentMonth: true },
  { date: '2022-01-08', isCurrentMonth: true },
  { date: '2022-01-09', isCurrentMonth: true },
  { date: '2022-01-10', isCurrentMonth: true },
  { date: '2022-01-11', isCurrentMonth: true },
  { date: '2022-01-12', isCurrentMonth: true, isToday: true },
  { date: '2022-01-13', isCurrentMonth: true },
  { date: '2022-01-14', isCurrentMonth: true },
  { date: '2022-01-15', isCurrentMonth: true },
  { date: '2022-01-16', isCurrentMonth: true },
  { date: '2022-01-17', isCurrentMonth: true },
  { date: '2022-01-18', isCurrentMonth: true },
  { date: '2022-01-19', isCurrentMonth: true },
  { date: '2022-01-20', isCurrentMonth: true },
  { date: '2022-01-21', isCurrentMonth: true },
  { date: '2022-01-22', isCurrentMonth: true, isSelected: true },
  { date: '2022-01-23', isCurrentMonth: true },
  { date: '2022-01-24', isCurrentMonth: true },
  { date: '2022-01-25', isCurrentMonth: true },
  { date: '2022-01-26', isCurrentMonth: true },
  { date: '2022-01-27', isCurrentMonth: true },
  { date: '2022-01-28', isCurrentMonth: true },
  { date: '2022-01-29', isCurrentMonth: true },
  { date: '2022-01-30', isCurrentMonth: true },
  { date: '2022-01-31', isCurrentMonth: true },
  { date: '2022-02-01' },
  { date: '2022-02-02' },
  { date: '2022-02-03' },
  { date: '2022-02-04' },
  { date: '2022-02-05' },
  { date: '2022-02-06' }
];

export default function Example() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900">
        Rezervacije za datum: 12.12.2022
      </h2>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
        <Calendar days={days} />
        <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
          {reservations.map(reservation => (
            <EventListItem reservation={reservation} />
          ))}
        </ol>
      </div>
    </div>
  );
}
