import {
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export default function Calendar({ days, setSelectedDate, selectedDate, selectedMonth, selectedYear, setSelectedMonth, setSelectedYear }) {
  return (
    <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
      <div className="flex items-center text-gray-900">
        <button
            onClick={() => setSelectedMonth(selectedMonth - 1)}
          type="button"
          className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Prejšnji mesec</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="flex-auto font-semibold">{
            selectedMonth === 0 ? 'Januar' :
                selectedMonth === 1 ? 'Februar' :
                    selectedMonth === 2 ? 'Marec' :
                        selectedMonth === 3 ? 'April' :
                            selectedMonth === 4 ? 'Maj' :
                                selectedMonth === 5 ? 'Junij' :
                                    selectedMonth === 6 ? 'Julij' :
                                        selectedMonth === 7 ? 'Avgust' :
                                            selectedMonth === 8 ? 'September' :
                                                selectedMonth === 9 ? 'Oktober' :
                                                    selectedMonth === 10 ? 'November' :
                                                        selectedMonth === 11 ? 'December' : ''
        } </div>
        <button
            onClick={() => setSelectedMonth(selectedMonth + 1)}
          type="button"
          className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Naslednji mesec</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
        <div>P</div>
        <div>T</div>
        <div>S</div>
        <div>Č</div>
        <div>P</div>
        <div>S</div>
        <div>N</div>
      </div>
      <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
        {days.map((day, dayIdx) => (
          <button
                onClick={() => {
                    console.log(day.date);
                    setSelectedDate(day.date);
                }}
            key={day.date}
            type="button"
            className={classNames(
              'py-1.5 hover:bg-gray-100 focus:z-10',
              day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
              (day.isSelected || day.isToday) && 'font-semibold',
              day.isSelected && 'text-white',
              !day.isSelected &&
                day.isCurrentMonth &&
                !day.isToday &&
                'text-gray-900',
              !day.isSelected &&
                !day.isCurrentMonth &&
                !day.isToday &&
                'text-gray-400',
              day.isToday && !day.isSelected && 'text-indigo-600',
              dayIdx === 0 && 'rounded-tl-lg',
              dayIdx === 6 && 'rounded-tr-lg',
              dayIdx === days.length - 7 && 'rounded-bl-lg',
              dayIdx === days.length - 1 && 'rounded-br-lg'
            )}
          >
            <time
              dateTime={day.date}
              className={classNames(
                'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                day.isSelected && day.isToday && 'bg-indigo-600',
                day.isSelected && !day.isToday && 'bg-gray-900'
              )}
            >
              {day.date.split('-').pop().replace(/^0/, '')}
            </time>
          </button>
        ))}
      </div>
      <button
        type="button"
        className="focus:outline-none mt-8 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Dodaj rezervacijo
      </button>
    </div>
  );
}
