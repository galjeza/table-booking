/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function IzbiraTermina({
  setProsto,
  setIzbiraTermina,
  setVnosPodatkov
}) {
  const container = useRef(null);
  const containerNav = useRef(null);
  const containerOffset = useRef(null);

  /*  useEffect(() => {
    // Set the container scroll position based on the current time.
    const currentMinute = new Date().getHours() * 60;
    container.current.scrollTop =
      ((container.current.scrollHeight -
        containerNav.current.offsetHeight -
        containerOffset.current.offsetHeight) *
        currentMinute) /
      1440;
  }, []);*/

  return (
    <div className="flex h-full flex-col">
      <header className="relative z-20 flex flex-none items-center justify-between border-b border-gray-200 py-4 px-6">
        <div>
          <h1 className="text-lg font-semibold leading-6 text-gray-900">
            <time dateTime="2022-01-22" className="sm:hidden">
              December 22, 2022
            </time>
            <time dateTime="2022-01-22" className="hidden sm:inline">
              Dec 22, 2022
            </time>
          </h1>
          <p className="mt-1 text-sm text-gray-500">Thursday</p>
        </div>
        <div className="flex items-center">
          <div className="hidden md:ml-4 md:flex md:items-center">
            <div className="ml-6 h-6 w-px bg-gray-300" />
          </div>
        </div>
      </header>
      <div className="flex flex-auto overflow-hidden bg-white">
        <div
          ref={container}
          className="flex flex-auto flex-col overflow-auto"
        >
          <div className="flex w-full flex-auto">
            <div className="w-14 flex-none bg-white ring-1 ring-gray-100" />
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* Horizontal lines */}
              <div
                className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                style={{
                  gridTemplateRows: 'repeat(48, minmax(3.5rem, 1fr))'
                }}
              >
                <div
                  ref={containerOffset}
                  className="row-end-1 h-7"
                ></div>
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    10AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    11AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    12PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    1PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    2PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    3PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    4PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    5PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    6PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    7PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    8PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    9PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    10PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    11PM
                  </div>
                </div>
                <div />
              </div>

              {/* Events */}
              <ol
                className="col-start-1 col-end-2 row-start-1 grid grid-cols-1"
                style={{
                  gridTemplateRows:
                    '1.75rem repeat(288, minmax(0, 1fr)) auto'
                }}
              >
                <li
                  className="relative mt-px flex"
                  style={{ gridRow: '74 / span 12' }}
                >
                  <a
                    href="#"
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100"
                    onClick={event => {
                      setIzbiraTermina(false);
                      setVnosPodatkov(true);
                      setProsto('16:00');
                    }}
                  >
                    <p className="order-1 font-semibold text-blue-700">
                      Prosto
                    </p>
                    <p className="text-blue-500 group-hover:text-blue-700">
                      <time dateTime="2022-12-22T016:00">
                        4:00 PM
                      </time>
                    </p>
                  </a>
                </li>
                <li
                  className="relative mt-px flex"
                  style={{ gridRow: '92 / span 30' }}
                >
                  <a
                    href="#"
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
                    onClick={event => {
                      setIzbiraTermina(false);
                      setVnosPodatkov(true);
                      setProsto('17:30');
                    }}
                  >
                    <p className="order-1 font-semibold text-pink-700">
                      Prosto
                    </p>
                    <p className="text-pink-500 group-hover:text-pink-700">
                      <time dateTime="2022-12-22T017:30">
                        5:30 PM
                      </time>
                    </p>
                  </a>
                </li>
                <li
                  className="relative mt-px flex"
                  style={{ gridRow: '134 / span 18' }}
                >
                  <a
                    href="#"
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-indigo-50 p-2 text-xs leading-5 hover:bg-indigo-100"
                    onClick={event => {
                      setIzbiraTermina(false);
                      setVnosPodatkov(true);
                      setProsto('21:00');
                    }}
                  >
                    <p className="order-1 font-semibold text-indigo-700">
                      Prosto
                    </p>
                    <p className="text-indigo-500 group-hover:text-indigo-700">
                      <time dateTime="2022-12-22T21:00">
                        21:00 PM
                      </time>
                    </p>
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
