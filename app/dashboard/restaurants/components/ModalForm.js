import React, { Fragment, useState, useRef } from 'react';

import { Dialog, Transition } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ModalForm({
  setModalOpen,
  setIsEditing,
  fields,
  setFields,
  isEditing
}) {
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
                      <form
                        action="app/dashboard/restaurants/components/ModalForm#"
                        method="POST"
                      >
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
                                  value={fields.naziv}
                                  onChange={e => {
                                    setFields({
                                      ...fields,
                                      naziv: e.target.value
                                    });
                                  }}
                                  autoComplete="given-name"
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
                                  value={fields.telst}
                                  onChange={e => {
                                    setFields({
                                      ...fields,
                                      telst: e.target.value
                                    });
                                  }}
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
                                  value={fields.drzava}
                                  onChange={e => {
                                    setFields({
                                      ...fields,
                                      drzava: e.target.value
                                    });
                                  }}
                                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option>Slovenija</option>
                                  <option>ZDA</option>
                                  <option>Velika Britanija</option>
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
                                  value={fields.naslov}
                                  onChange={e => {
                                    setFields({
                                      ...fields,
                                      naslov: e.target.value
                                    });
                                  }}
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
                                  value={fields.mesto}
                                  onChange={e => {
                                    setFields({
                                      ...fields,
                                      mesto: e.target.value
                                    });
                                  }}
                                  autoComplete="address-level2"
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
                                  value={fields.postnaSt}
                                  onChange={e => {
                                    setFields({
                                      ...fields,
                                      postnaSt: e.target.value
                                    });
                                  }}
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
                <div className="hidden sm:block" aria-hidden="true">
                  <div className="py-5">
                    <div className="border-t border-gray-200" />
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                    onClick={() => setModalOpen(false)}
                  >
                    {isEditing ? 'Posodobi' : 'Dodaj'}
                  </button>
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
