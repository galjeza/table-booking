"use client";
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    DocumentReportIcon,
    ScaleIcon,
    UsersIcon
} from '@heroicons/react/outline'
import {
    CashIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    OfficeBuildingIcon,
    SearchIcon,
    UserIcon,
    TableIcon,
} from '@heroicons/react/solid'


const cards = [
    { name: 'Rezervacije danes', href: '#', icon: DocumentReportIcon, vrednost: '26' },
    { name: 'Število naročenih gostov danes', href: '#', icon: UsersIcon, vrednost: '65' },
    { name: 'Število rezervacij zadnjih 30 dni', href: '#', icon: TableIcon, vrednost: '69' },
]
const rezervacije = [
    {
        id: 1,
        name: 'Gal Jeza',
        href: '#',
        miza: '12',
        osebe: '4',
        time: '15:45',
    },
    {
        id: 2,
        name: 'Simon Plazar',
        href: '#',
        miza: '3',
        osebe: '2',
        time: '17:30',
    },
    {
        id: 3,
        name: 'Gal Jeza',
        href: '#',
        miza: '5',
        osebe: '6',
        time: '20:00',
    },

]


export default function Example() {
    return (
        <>


                            <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                                <div className="py-6 md:flex md:items-center md:justify-between ">
                                    <div className="flex-1 min-w-0">
                                        {/* Profile */}
                                        <div className="flex items-center">
                                            <img
                                                className="hidden h-16 w-16 rounded-full sm:block"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
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
                                                        Dober dan, Gal Jeza
                                                    </h1>
                                                </div>
                                                <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                                                    <dt className="sr-only">Company</dt>
                                                    <dd className="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
                                                        <OfficeBuildingIcon
                                                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                        Valvasorjeva ulica 92
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
                                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Dodaj rezervacijo
                                        </button>
                                    </div>
                                </div>
                            </div>


                        <div className="mt-8">
                            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h2 className="text-lg leading-6 font-medium text-gray-900">Pregled</h2>
                                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                    {/* Card */}
                                    {cards.map((card) => (
                                        <div key={card.name} className="bg-white overflow-hidden shadow rounded-lg">
                                            <div className="p-5">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <card.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                                    </div>
                                                    <div className="ml-5 w-0 flex-1">
                                                        <dl>
                                                            <dt className="text-sm font-medium text-gray-500 truncate">{card.name}</dt>
                                                            <dd>
                                                                <div className="text-lg font-medium text-gray-900">{card.vrednost}</div>
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
                                <ul role="list" className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
                                    {rezervacije.map((rezervacija) => (
                                        <li key={rezervacija.id}>
                                            <a href={rezervacija.href} className="block px-4 py-4 bg-white hover:bg-gray-50">
                        <span className="flex items-center space-x-4">
                          <span className="flex-1 flex space-x-2 truncate">
                            <UserIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                            <span className="flex flex-col text-gray-500 text-sm truncate">
                              <span className="truncate">{rezervacija.name}</span>

                              <time dateTime={rezervacija.datetime}>{rezervacija.date}</time>
                            </span>
                          </span>
                          <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                <nav
                                    className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200"
                                    aria-label="Pagination"
                                >
                                    <div className="flex-1 flex justify-between">
                                        <a
                                            href="#"
                                            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                                        >
                                            Previous
                                        </a>
                                        <a
                                            href="#"
                                            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                                        >
                                            Next
                                        </a>
                                    </div>
                                </nav>
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
                                                {rezervacije.map((rezervacija) => (
                                                    <tr key={rezervacija.id} className="bg-white">
                                                        <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                            <div className="flex">
                                                                <a href={rezervacija.href} className="group inline-flex space-x-2 truncate text-sm">
                                                                    <UserIcon
                                                                        className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                                        aria-hidden="true"
                                                                    />
                                                                    <p className="text-gray-500 truncate group-hover:text-gray-900">
                                                                        {rezervacija.name}
                                                                    </p>
                                                                </a>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                                            <span className="text-gray-900 font-medium">{rezervacija.miza} </span>
                                                            {rezervacija.currency}
                                                        </td>
                                                        <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                <span
                                    className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
                                >
                                  {rezervacija.osebe}
                                </span>
                                                        </td>
                                                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                                            <time >{rezervacija.time}</time>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                            {/* Pagination */}
                                            <nav
                                                className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                                                aria-label="Pagination"
                                            >
                                                <div className="hidden sm:block">
                                                    <p className="text-sm text-gray-700">
                                                        Prikazujem <span className="font-medium">1</span>-<span className="font-medium">10</span> od{' '}
                                                        <span className="font-medium">20</span> rezervacij
                                                    </p>
                                                </div>
                                                <div className="flex-1 flex justify-between sm:justify-end">
                                                    <a
                                                        href="#"
                                                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                                    >
                                                        Nazaj
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                                    >
                                                        Naprej
                                                    </a>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}
