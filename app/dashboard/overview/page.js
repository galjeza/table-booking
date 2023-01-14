'use client';
import Modal from './Modal';
import {
  DocumentReportIcon,
  ScaleIcon,
  UsersIcon
} from '@heroicons/react/outline';
import {
  CashIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  OfficeBuildingIcon,
  SearchIcon,
  UserIcon,
  TableIcon
} from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function Overview() {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);
  const [reservations, setReservations] = useState([]);
  const [reservationsToday, setReservationsToday] = useState([]);
  const [restaurant, setRestaurant] = useState({});
  const [cards, setCards] = useState([
    {
      name: 'Rezervacije danes',
      href: '#',
      icon: DocumentReportIcon,
      vrednost: ''
    },
    {
      name: 'Število naročenih gostov danes',
      href: '#',
      icon: UsersIcon,
      vrednost: ''
    },
    {
      name: 'Število rezervacij zadnjih 30 dni',
      href: '#',
      icon: TableIcon,
      vrednost: ''
    }
  ]);

  const userImageSrc =
    'https://avatars.dicebear.com/api/croodles-neutral/' +
    session?.user.email +
    '.svg';

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
        setReservationsToday(
          data.filter(
            reservation =>
              reservation.date ===
              new Date().toISOString().split('T')[0]
          )
        );
        setCards([
          {
            name: 'Rezervacije danes',
            href: '#',
            icon: DocumentReportIcon,
            vrednost: data.filter(
              reservation =>
                reservation.date ===
                new Date().toISOString().split('T')[0]
            ).length
          },
          {
            name: 'Število naročenih gostov danes',
            href: '#',
            icon: UsersIcon,
            vrednost: data
              .filter(
                reservation =>
                  reservation.date ===
                  new Date().toISOString().split('T')[0]
              )
              .reduce((acc, curr) => acc + curr.partySize, 0)
          },
          {
            name: 'Število rezervacij zadnjih 30 dni',
            href: '#',
            icon: TableIcon,
            vrednost: data.filter(
              reservation =>
                new Date(reservation.date) >
                new Date(
                  new Date().setDate(new Date().getDate() - 30)
                )
            ).length
          }
        ]);
      });
  };

  const getRestaurant = async () => {
    if (!session) return;
    fetch('/api/restaurants/' + session?.user.restaurantId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        setRestaurant(data);
      });
  };

  // create useffect to fetch reservations
  useEffect(() => {
    getReservations();
    getRestaurant();
  }, []);

  return (
    <>
      <Modal
        getReservations={getReservations}
        reservations={reservations}
        setReservations={() => {}}
        restaurantId={session?.user?.restaurantId}
        showModal={showModal}
        setShowModal={() => {
          setShowModal();
        }}
      />

      <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
        <div className="py-6 md:flex md:items-center md:justify-between ">
          <div className="flex-1 min-w-0">
            {/* Profile */}
            <div className="flex items-center">
              <img
                className="hidden h-16 w-16 rounded-full sm:block border-indigo-500 border-2"
                src={userImageSrc}
                alt=""
              />
              <div>
                <div className="flex items-center">
                  <img
                    className="h-16 w-16 rounded-full sm:hidden"
                    src={userImageSrc}
                    alt=""
                  />
                  <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                    {restaurant.name}
                  </h1>
                </div>
                <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                  <dt className="sr-only">Company</dt>
                  <dd className="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
                    <OfficeBuildingIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    {restaurant.address}
                  </dd>
                  <dt className="sr-only">Account status</dt>
                  <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                    <CheckCircleIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                      aria-hidden="true"
                    />
                    Aktiven Račun
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Dodaj rezervacijo
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            {cards.map(card => (
              <div
                key={card.name}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <card.icon
                        className="h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {card.name}
                        </dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">
                            {card.vrednost}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
          Današnje rezervacije
        </h2>

        {/* Activity list (smallest breakpoint only) */}
        <div className="shadow sm:hidden">
          <ul
            role="list"
            className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
          >
            {reservationsToday.map(rezervacija => (
              <li key={rezervacija.id}>
                <a className="block px-4 py-4 bg-white hover:bg-gray-50">
                  <span className="flex items-center space-x-4">
                    <span className="flex-1 flex space-x-2 truncate">
                      <UserIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="flex flex-col text-gray-500 text-sm truncate">
                        <span className="truncate">
                          {rezervacija.customer}
                        </span>

                        <time dateTime={rezervacija.startTime}>
                          {rezervacija.startTime}
                        </time>
                      </span>
                    </span>
                    <ChevronRightIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Activity table (small breakpoint and up) */}
        <div className="hidden sm:block">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col mt-2">
              <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rezervacija
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Miza
                      </th>
                      <th className="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block">
                        Osebe
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ura
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {reservationsToday.map(rezervacija => (
                      <tr key={rezervacija.id} className="bg-white">
                        <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div className="flex">
                            <a className="group inline-flex space-x-2 truncate text-sm">
                              <UserIcon
                                className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              <p className="text-gray-500 truncate group-hover:text-gray-900">
                                {rezervacija.customer}
                              </p>
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          <span className="text-gray-900 font-medium">
                            {rezervacija.table.number}{' '}
                          </span>
                        </td>
                        <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize">
                            {rezervacija.partySize}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          <time>{rezervacija.startTime}</time>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
