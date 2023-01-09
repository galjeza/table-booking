import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const AddTableModal = ({ restaurantId, tables, setTables }) => {
  const [showModal, setShowModal] = useState(false);
  const [number, setNumber] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const cancelButtonRef = useRef(null);
  const addTable = async () => {
    const res = await fetch('/api/tables/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ restaurantId, number, capacity })
    });
    const data = await res.json();
    setTables([...tables, data]);
    setShowModal(false);
  };

  return (
    <>
      <div className={'flex justify-end'}>
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-500 w-full hover:bg-indigo-700 text-white  py-2 px-4 mb-2 rounded sm:w-auto"
        >
          Dodaj mizo
        </button>
      </div>
      {showModal ? (
        <>
          <Transition.Root show={showModal} as={Fragment}>
            <Dialog
              as="div"
              className="fixed z-10 inset-0 overflow-y-auto"
              initialFocus={cancelButtonRef}
              onClose={setShowModal}
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

                {/* This element is to trick the browser into centering the modal contents. */}
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
                    <div>
                      <div className=" text-left sm:mt-5">
                        <div>
                          <label
                            htmlFor="number"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Številka mize
                          </label>
                          <div className="mt-1">
                            <input
                              type="number"
                              name="number"
                              value={number}
                              onChange={e =>
                                setNumber(e.target.value)
                              }
                              id="number"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="you@example.com"
                            />
                          </div>
                        </div>
                        <div className={'mt-5'}>
                          <label
                            htmlFor="capacity"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Kapaciteta
                          </label>
                          <div className="mt-1">
                            <input
                              type="number"
                              name="capacity"
                              value={capacity}
                              onChange={e =>
                                setCapacity(e.target.value)
                              }
                              id="capacity"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="you@example.com"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                        onClick={() => {
                          addTable();
                          setShowModal(false);
                        }}
                      >
                        Dodaj mizo
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                        onClick={() => setShowModal(false)}
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
      ) : null}
    </>
  );
};

export default AddTableModal;
