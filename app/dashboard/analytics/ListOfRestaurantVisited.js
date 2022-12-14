import React, { Fragment, useState, useRef } from 'react';

import { Dialog, Transition } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const messages = [
  {
    id: 1,
    subject: 'Velit placeat sit ducimus non sed',
    sender: 'Ancora',
    time: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.'
  },

  {
    id: 2,
    subject: 'Velit placeat sit ducimus non sed',
    sender: 'Nana',
    time: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.'
  }
  // More messages...
];

export default function ListOfRestaurantVisited({ setModalOpen }) {
  const cancelButtonRef = useRef(null);
  return (
    <>
      <Transition.Root show={true} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setModalOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className="mt-10 sm:mt-0">
                  <div className="md:grid md:grid-cols-2 md:gap-6">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                      <form action="#" method="POST">
                        <div className="shadow overflow-hidden sm:rounded-md">
                          <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                              <ul
                                role="list"
                                className="divide-y divide-gray-200"
                              >
                                {messages.map(message => (
                                  <li
                                    key={message.id}
                                    className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                                  >
                                    <div className="flex justify-between space-x-3">
                                      <div className="min-w-0 flex-1">
                                        <a
                                          href="#"
                                          className="block focus:outline-none"
                                        ></a>
                                      </div>
                                    </div>
                                    <div className="mt-1">
                                      <p className="line-clamp-2 text-sm text-gray-600">
                                        {message.sender}
                                      </p>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block" aria-hidden="true">
                  <div className="py-5">
                    <div className="border-t border-gray-200" />
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                    onClick={() => setModalOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Prekliči
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

/*
const people = [
    {
        name: 'Leonard Krasner',
        handle: 'leonardkrasner',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Floyd Miles',
        handle: 'floydmiles',
        imageUrl:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Emily Selman',
        handle: 'emilyselman',
        imageUrl:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Kristin Watson',
        handle: 'kristinwatson',
        imageUrl:
            'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

export default function listOfRestaurantVisited() {
    return (
        <div>
            <div className="flow-root mt-6">
                <ul role="list" className="-my-5 divide-y divide-gray-200">
                    {people.map((person) => (
                        <li key={person.handle} className="py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="h-8 w-8 rounded-full" src={person.imageUrl} alt="" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">{person.name}</p>
                                    <p className="text-sm text-gray-500 truncate">{'@' + person.handle}</p>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                                    >
                                        View
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-6">
                <a
                    href="#"
                    className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                    View all
                </a>
            </div>
        </div>
    )
}*/
