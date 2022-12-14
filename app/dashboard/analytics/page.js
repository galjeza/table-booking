'use client';

import ListOfRestaurantVisited from './ListOfRestaurantVisited';
import { HiHeart } from 'react-icons/hi';
import { BiBarChartAlt2, BiRestaurant } from 'react-icons/bi';
import React, { useState } from 'react';
import {
  ArrowSmDownIcon,
  ArrowSmUpIcon
} from '@heroicons/react/solid';

const stats = [
  {
    id: 1,
    name: 'Število vaših restavracij',
    stat: '2',
    icon: BiRestaurant,
    previousStat: '70,946',
    change: '12%',
    changeType: 'increase'
  },
  {
    id: 2,
    name: 'Povprecna ocena vaših restavracij',
    stat: '4.1',
    icon: BiBarChartAlt2,
    previousStat: '70,946',
    change: '12%',
    changeType: 'increase'
  },
  {
    id: 3,
    name: 'Skupno število rezervacij',
    stat: '799',
    icon: HiHeart,
    previousStat: '70,946',
    change: '12%',
    changeType: 'increase'
  }
];
const stats1 = [
  {
    name: 'Skupni kliki na vaš oglas',
    stat: '71,897',
    previousStat: '70,946',
    change: '12%',
    changeType: 'increase'
  },
  {
    name: '% neodopovedanih rezervacije',
    stat: '98%',
    previousStat: '96%',
    change: '2%',
    changeType: 'increase'
  },
  {
    name: '% uporabnikov ki da oceno',
    stat: '24.57%',
    previousStat: '28.62%',
    change: '4.05%',
    changeType: 'decrease'
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Zadnje leto:
        </h3>

        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map(item => (
            <div
              key={item.id}
              className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
            >
              <dt>
                <div className="absolute bg-indigo-500 rounded-md p-3">
                  <item.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                  {item.name}
                </p>
              </dt>
              <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">
                  {item.stat}
                </p>

                <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                  <div className="text-sm">
                    <button type="button">
                      <span
                        className="flex-grow"
                        onClick={() => setModalOpen(true)}
                      >
                        Več
                      </span>
                    </button>
                  </div>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      {modalOpen && (
        <ListOfRestaurantVisited setModalOpen={setModalOpen} />
      )}

      <div>
        <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
          {stats1.map(item => (
            <div key={item.name} className="px-4 py-5 sm:p-6">
              <dt className="text-base font-normal text-gray-900">
                {item.name}
              </dt>
              <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                  {item.stat}
                  <span className="ml-2 text-sm font-medium text-gray-500">
                    iz {item.previousStat}
                  </span>
                </div>

                <div
                  className={classNames(
                    item.changeType === 'increase'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800',
                    'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
                  )}
                >
                  {item.changeType === 'increase' ? (
                    <ArrowSmUpIcon
                      className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowSmDownIcon
                      className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  )}

                  <span className="sr-only">
                    {item.changeType === 'increase'
                      ? 'Increased'
                      : 'Decreased'}{' '}
                    by
                  </span>
                  {item.change}
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
