'use client';
import { PlusSmIcon as PlusSmIconOutline } from '@heroicons/react/outline';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';

const tabs = [
  {
    name: 'Jack & Joe Steak and Burger Club',
    href: '#',
    current: true
  },
  { name: 'Ancora', href: '#', current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Page() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
    <>
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Restavracije
        </h3>
        <div className="lg:hidden">
          <label htmlFor="selected-tab" className="sr-only">
            Select a tab
          </label>
          <select
            id="selected-tab"
            name="selected-tab"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue={tabs.find(tab => tab.current).name}
          >
            {tabs.map(tab => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden lg:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map(tab => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                  )}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div>
        {/*className="mt-5 border-t border-gray-200"*/}
        <dl className="divide-y divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">
              Naziv{' '}
            </dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span className="flex-grow">
                Jack & Joe Steak and Burger Club
              </span>
              <span className="ml-4 flex-shrink-0">
                <button
                  type="button"
                  className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Posodobi
                </button>
              </span>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">
              Naslov
            </dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span className="flex-grow">Ob bregu 20</span>
              <span className="ml-4 flex-shrink-0">
                <button
                  type="button"
                  className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Posodobi
                </button>
              </span>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">
              Mesto
            </dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span className="flex-grow">Maribor</span>
              <span className="ml-4 flex-shrink-0">
                <button
                  type="button"
                  className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Posodobi
                </button>
              </span>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">
              Poštna številka
            </dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span className="flex-grow"> 2000</span>
              <span className="ml-4 flex-shrink-0">
                <button
                  type="button"
                  className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Posodobi
                </button>
              </span>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">
              Telefonska številka
            </dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span className="flex-grow">051 370 621</span>
              <span className="ml-4 flex-shrink-0">
                <button
                  type="button"
                  className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Posodobi
                </button>
              </span>
            </dd>
          </div>
          <button
            type="button"
            className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50"
            onClick={() => setOpen(true)}
          >
            <PlusSmIconOutline
              className="h-6 w-6"
              aria-hidden="true"
            />
            <span className="flex-grow">Dodaj restavracijo</span>
          </button>
          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              className="fixed z-10 inset-0 overflow-y-auto"
              initialFocus={cancelButtonRef}
              onClose={setOpen}
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
                                  <div className="col-span-6 sm:col-span-3">
                                    <label
                                      htmlFor="first-name"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Naziv
                                    </label>
                                    <input
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autoComplete="given-name"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>

                                  <div className="col-span-6 sm:col-span-3">
                                    <label
                                      htmlFor="last-name"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Last name
                                    </label>
                                    <input
                                      type="text"
                                      name="last-name"
                                      id="last-name"
                                      autoComplete="family-name"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>

                                  <div className="col-span-6 sm:col-span-4">
                                    <label
                                      htmlFor="email-address"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Telefonska številka
                                    </label>
                                    <input
                                      type="text"
                                      name="email-address"
                                      id="email-address"
                                      autoComplete="email"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>

                                  <div className="col-span-6 sm:col-span-3">
                                    <label
                                      htmlFor="country"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Država
                                    </label>
                                    <select
                                      id="country"
                                      name="country"
                                      autoComplete="country-name"
                                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                      <option>Slovenija</option>
                                      <option>ZDA</option>
                                      <option>
                                        Velika Britanija
                                      </option>
                                    </select>
                                  </div>

                                  <div className="col-span-6">
                                    <label
                                      htmlFor="street-address"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Naslov
                                    </label>
                                    <input
                                      type="text"
                                      name="street-address"
                                      id="street-address"
                                      autoComplete="street-address"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>

                                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                    <label
                                      htmlFor="city"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Mesto
                                    </label>
                                    <input
                                      type="text"
                                      name="city"
                                      id="city"
                                      autoComplete="address-level2"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>

                                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <label
                                      htmlFor="region"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      State / Province
                                    </label>
                                    <input
                                      type="text"
                                      name="region"
                                      id="region"
                                      autoComplete="address-level1"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>
                                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <label
                                      htmlFor="postal-code"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Poštna številka
                                    </label>
                                    <input
                                      type="text"
                                      name="postal-code"
                                      id="postal-code"
                                      autoComplete="postal-code"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div
                      className="hidden sm:block"
                      aria-hidden="true"
                    >
                      <div className="py-5">
                        <div className="border-t border-gray-200" />
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                        onClick={() => setOpen(false)}
                      >
                        Dodaj
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                        onClick={() => setOpen(false)}
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
          {/*<div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">
              Attachments
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul
                role="list"
                className="border border-gray-200 rounded-md divide-y divide-gray-200"
              >
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 flex-1 w-0 truncate">
                      resume_back_end_developer.pdf
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex space-x-4">
                    <button
                      type="button"
                      className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Update
                    </button>
                    <span
                      className="text-gray-300"
                      aria-hidden="true"
                    >
                      |
                    </span>
                    <button
                      type="button"
                      className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Remove
                    </button>
                  </div>
                </li>
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 flex-1 w-0 truncate">
                      coverletter_back_end_developer.pdf
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex space-x-4">
                    <button
                      type="button"
                      className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Update
                    </button>
                    <span
                      className="text-gray-300"
                      aria-hidden="true"
                    >
                      |
                    </span>
                    <button
                      type="button"
                      className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              </ul>
            </dd>
          </div>*/}
        </dl>
      </div>
    </>
  );
}
