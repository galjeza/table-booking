import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const AddTableModal = ({
  restaurantId,
  reservations,
  setReservations,
  showModal,
  setShowModal,
  getReservations,
}) => {
  const [partySize, setPartySize] = useState(0);
  const [startTime, setStartTime] = useState('17:00');
  const [endTime, setEndTime] = useState('18:30');
  const [customer, setCustomer] = useState('');
  const [date, setDate] = useState('');

  const cancelButtonRef = useRef(null);
  const addReservation = async () => {
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
    console.log(data);
    getReservations();
    setShowModal(false);
  };

  return (
    <>
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
                            Število oseb
                          </label>
                          <div className="mt-1">
                            <input
                              type="number"
                              name="number"
                              value={partySize}
                              onChange={e =>
                                setPartySize(e.target.value)
                              }
                              id="number"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        <div className={'mt-5'}>
                          <label
                            htmlFor="customer"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Ime in priimek gosta
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="customer"
                              value={customer}
                              onChange={e =>
                                setCustomer(e.target.value)
                              }
                              id="capacity"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        <div className={'mt-5'}>
                          <label
                            htmlFor="startTime"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Od
                          </label>
                          <div className="mt-1">
                            <input
                              type="time"
                              name="startTime"
                              value={startTime}
                              onChange={e =>
                                setStartTime(e.target.value)
                              }
                              id="startTime"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        <div className={'mt-5'}>
                          <label
                            htmlFor="capacity"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Do
                          </label>
                          <div className="mt-1">
                            <input
                              type="time"
                              name="capacity"
                              value={endTime}
                              onChange={e =>
                                setEndTime(e.target.value)
                              }
                              id="capacity"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        <div className={'mt-5'}>
                          <label
                            htmlFor="capacity"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Datum
                          </label>
                          <div className="mt-1">
                            <input
                              type="date"
                              name="date"
                              value={date}
                              onChange={e => setDate(e.target.value)}
                              id="date"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                          addReservation();
                          setShowModal(false);
                        }}
                      >
                        Dodaj rezervacijo
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
