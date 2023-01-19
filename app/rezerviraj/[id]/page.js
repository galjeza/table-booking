'use client';
import {useEffect, useState} from 'react';
import {CheckCircleIcon, OfficeBuildingIcon} from '@heroicons/react/solid';

function createEventUrl(name, location, startTime, endTime, date) {

    // format date from YYYY-MM-DD to YYYYMMDD
    const formattedDate = date.replace(/-/g, '');


    // Format time to HHMM
    const formattedStartTime = startTime.split(':').join('');
    const formattedEndTime = endTime.split(':').join('');


    const date1String = `${formattedDate}T${formattedStartTime}00Z`;
    const date2String = `${formattedDate}T${formattedEndTime}00Z`;


    const event = {
        action: 'TEMPLATE',
        text: 'Rezervacija mize v ' + name,
        details: 'Rezervacija mize v ' + name + ' na naslovu ' + location,
        location: location,
        dates: date1String + '/' + date2String,
    };

    const url = new URL('https://calendar.google.com/calendar/render');
    Object.keys(event).forEach(key => url.searchParams.append(key, event[key]));
    return url;


}

const ThankYouPage = ({
  date,
  partySize,
  name,
  restaurant,
  customer,
  startTime,
  endTime
}) => {
    const eventUrl = createEventUrl(restaurant?.name, restaurant?.address, startTime, endTime, date);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 sm:py-12">
      <div className="flex flex-col items-center justify-center">
        <CheckCircleIcon className="h-20 w-20 text-green-500" />
        <h1 className="text-4xl font-bold text-gray-900">
          Hvala za rezervacijo!
        </h1>
        <p className="text-gray-600">
          Uspešno ste rezervirali mizo.
        </p>

        <div className="flex flex-col items-start justify-center mt-10 p-4 rounded-lg bg-indigo-100 shadow-xl">
          <p className="text-gray-800 ">
            {restaurant?.name}, {restaurant?.address}
          </p>

          <p className="text-gray-800">Datum: {date}</p>
          <p className="text-gray-800">
            Od: {startTime} do {endTime}{' '}
          </p>
          <p className="text-gray-800 ">Število oseb: {partySize}</p>
          <p className="text-gray-800">
            Rezervacija na ime: {customer}
          </p>
        </div>
            <a href={eventUrl} target="_blank" className="mt-5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> Dodaj v google koledar</a>
      </div>
    </div>
  );
};

export default function Page({ params }) {
  const restaurantId = params.id;
  const imageSrc =
    'https://avatars.dicebear.com/api/croodles-neutral/' +
    restaurantId +
    '.svg';
  const [restaurant, setRestaurant] = useState(null);

  const [customer, setCustomer] = useState('');
  const [date, setDate] = useState('1.1.2021');
  const [partySize, setPartySize] = useState(2);
  const [startTime, setStartTime] = useState('17:00');
  const [endTime, setEndTime] = useState('18:30');
  const [available, setAvailable] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (restaurantId === undefined) {
      return;
    }
    fetch(`/api/restaurants/${restaurantId}`)
      .then(res => res.json())
      .then(data => setRestaurant(data));
  }, []);
  // get restaurant data
  const checkAvailability = async e => {
    e.preventDefault();
    console.log('Checking availability');
    const res = await fetch('/api/reservations/checkAvailability', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        restaurantId,
        partySize,
        startTime,
        endTime,
        customer,
        date
      })
    });
    const data = await res.json();

    setSubmitted(true);
    setAvailable(data.available);
  };

  const submitReservation = async e => {
    e.preventDefault();
    console.log('Submitting reservation');
    const res = await fetch('/api/reservations/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        restaurantId,
        partySize,
        startTime,
        endTime,
        customer,
        date
      })
    });
    const data = await res.json();

    setSubmitted(true);
    setAvailable(data.available);
    setDone(true);
  };

  if (done) {
    return (
      <ThankYouPage
        date={date}
        partySize={partySize}
        name={customer}
        restaurant={restaurant}
        customer={customer}
        startTime={startTime}
        endTime={endTime}
      />
    );
  }

  return (
    <>
      <div className="min-h-full">
        <div className="lg:pl-64 flex flex-col flex-1">
          <main className="flex-1 pb-8">
            <div className="mt-2">
              <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                  <div className="flex items-center justify-center">
                    <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8 ">
                      <div className="py-6 md:flex md:items-center md:justify-between ">
                        <div className="flex-1 min-w-0">
                          {/* Profile */}
                          <div className="flex items-center">
                            <img
                              className="hidden h-16 w-16 rounded-full sm:block border-indigo-300 border-4"
                              src={imageSrc}
                              alt=""
                            />
                            <div>
                              <div className="flex items-center">
                                <img
                                  className="h-16 w-16 rounded-full sm:hidden"
                                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                                  alt=""
                                />
                                <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                                  {restaurant?.name}
                                </h1>
                              </div>
                              <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                                <dd className="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
                                  <OfficeBuildingIcon
                                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  {restaurant?.address}
                                </dd>
                                <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                                  <CheckCircleIcon
                                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                    aria-hidden="true"
                                  />
                                  Potrjen račun
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
                    <form className="space-y-6">
                      <div>
                        <label
                          htmlFor="customerName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Ime in priimek
                        </label>
                        <div className="mt-1">
                          <input
                            id="customerName"
                            name="customerName"
                            type="customerName"
                            autoComplete="customerName"
                            value={customer}
                            onChange={e =>
                              setCustomer(e.target.value)
                            }
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="partySize"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Število oseb
                        </label>
                        <div className="mt-1">
                          <input
                            id="partySize"
                            name="partySize"
                            value={partySize}
                            onChange={e =>
                              setPartySize(e.target.value)
                            }
                            type="number"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Datum
                        </label>
                        <div className="mt-1">
                          <input
                            id="date"
                            name="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            type="date"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Ura od
                        </label>
                        <div className="mt-1">
                          <input
                            id="date"
                            name="date"
                            value={startTime}
                            onChange={e =>
                              setStartTime(e.target.value)
                            }
                            type="time"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Ura do
                        </label>
                        <div className="mt-1">
                          <input
                            id="date"
                            name="date"
                            value={endTime}
                            onChange={e =>
                              setEndTime(e.target.value)
                            }
                            type="time"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      {(!submitted || (submitted && !available)) && (
                        <div>
                          <button
                            type="submit"
                            onClick={checkAvailability}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Preveri razpoložljivost
                          </button>
                        </div>
                      )}

                      {submitted && (
                        <div>
                          <p className={'text-sm text-gray-500'}>
                            {available
                              ? ''
                              : 'Ni razpoložljivo izberite drugo uro ali datum'}
                          </p>
                        </div>
                      )}
                      {available && (
                        <div>
                          <button
                            type="submit"
                            onClick={submitReservation}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            Potrdi rezervacijo
                          </button>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
