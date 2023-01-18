'use client';
import EventListItem from './components/EventListItem';
import Calendar from './components/Calendar';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

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

function generateCalendar(year, month) {
  let date = new Date(year, month - 1, 1);
  let days = [];
  // add days of month to array until we reach the next month and each day should have date formatted as YYYY-MM-DD and isCurrentMont and isSelected=false
  while (date.getMonth() === month - 1) {
    days.push({
      date: formatDate(date),
      isCurrentMonth: true,
      isSelected: false,
      isToday: date.toDateString() === new Date().toDateString()
    });
    date.setDate(date.getDate() + 1);
  }

  // add days at the end of the array until we reach the next Sunday
  while (date.getDay() !== 1) {
    days.push({
      date: formatDate(date),
      isCurrentMonth: false,
      isSelected: false,
      isToday: date.toDateString() === new Date().toDateString()
    });
    date.setDate(date.getDate() + 1);
  }

  // add days at the beginning of the array until we reach the previous Sunday
  date = new Date(year, month - 1, 1);
  while (date.getDay() !== 1) {
    date.setDate(date.getDate() - 1);
    days.unshift({
      date: formatDate(date),
      isCurrentMonth: false,
      isSelected: false,
      isToday: date.toDateString() === new Date().toDateString()
    });
  }

  // set the current day to isToday

  return days;
}

function formatDate(date) {
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default function Example() {
  const [selectedDate, setSelectedDate] = useState(
    formatDate(new Date())
  );
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().getMonth() + 1
  );
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear()
  );
  const [reservations, setReservations] = useState([]);
  const [days, setDays] = useState(
    generateCalendar(
      new Date().getFullYear(),
      new Date().getMonth() + 1
    )
  );
  const { data: session } = useSession();

  const incrementMonth = () => {
    setSelectedMonth(selectedMonth + 1);
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    }
  };

  const decrementMonth = () => {
    setSelectedMonth(selectedMonth - 1);
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    }
  };

  const getReservations = async () => {
    if (!session) return;
    fetch('/api/reservations/' + session?.user.restaurantId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        setReservations(data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    const days = generateCalendar(selectedYear, selectedMonth + 1);

    let newDays = days.map(day => {
      day.isSelected = day.date === selectedDate;
      return day;
    });
    setDays(newDays);
  }, [selectedMonth, selectedYear]);

  useEffect(() => {
    console.log('Selected day: ' + selectedDate);
    let newDays = days.map(day => {
      day.isSelected = day.date === selectedDate;
      return day;
    });
    setDays(newDays);
  }, [selectedDate]);

  useEffect(() => {
    getReservations();
  }, []);

  const filteredReservations = reservations.filter(
    reservation => reservation.date === selectedDate
  );

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900">
        Rezervacije za datum: {selectedDate.replaceAll('-', '.')}
      </h2>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
        <Calendar
          setSelectedDate={setSelectedDate}
          days={days}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          incrementMonth={incrementMonth}
          decrementMonth={decrementMonth}
        />

        <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
          {filteredReservations.map(reservation => (
            <EventListItem reservation={reservation} />
          ))}
        </ol>
      </div>
    </div>
  );
}
