import React, { useState } from 'react';

export default function IzbiraRestavracije({
  restaurants,
  setIzbiraRestavracije,
  setFields,
  setIzbiraDatuma
}) {
  return (
    <>
      <div className="flow-root mt-6">
        <ul role="list" className="-my-5 divide-y divide-gray-200">
          {restaurants.map(restaurant => (
            <li
              key={restaurant.naslov}
              className="py-4 hover:cursor-pointer hover:bg-gray-200 rounded-sm p-3"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={restaurant.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {restaurant.naziv}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {restaurant.naslov}
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                    onClick={e => {
                      setFields({
                        ...restaurant
                      });
                      setIzbiraRestavracije(false);
                      setIzbiraDatuma(true);
                    }}
                  >
                    Izberi
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
