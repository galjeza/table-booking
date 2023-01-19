'use client';
import { HomeIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import IzbiraRestavracije from './IzbiraRestavracije';
import IzbiraDatuma from './IzbiraDatuma';
import VnosPodatkov from './VnosPodatkos';
import IzbiraTermina from './IzbiraTermina';
const restaurants = [
  {
    naziv: 'Jack & Joe Stake',
    telst: '040402405',
    drzava: 'Slovenija',
    naslov: 'Naslov',
    mesto: 'Maribor',
    postnaSt: '2000',
    imageUrl:
      'https://media-cdn.tripadvisor.com/media/photo-s/0a/8a/82/a6/jack-joe-steak-and-burger.jpg'
  },

  {
    naziv: 'Ancora',
    telst: '040402405',
    drzava: 'Slovenija',
    naslov: 'Nekaj random',
    mesto: 'Maribor',
    postnaSt: '2000',
    imageUrl:
      'https://www.malcajt.com/upload/restaurant_gallery/restaurant_gallery1469703925291.jpg'
  }
];

const initialFields = {
  naziv: '',
  telst: '',
  drzava: '',
  naslov: '',
  mesto: '',
  postnaSt: '',
  imageUrl: ''
};

const pages = [
  { name: 'Izbira restavracije', href: '#', current: true },
  { name: 'Izbira datuma', href: '#', current: false },
  { name: 'Izbira termina', href: '#', current: false },
  { name: 'Vnos podatkov', href: '#', current: false }
];

export default function Page() {
  const [fields, setFields] = useState(initialFields);
  const [izbiraRestavracije, setIzbiraRestavracije] = useState(true);
  const [izbiraTermina, setIzbiraTermina] = useState(false);
  const [izbiraDatuma, setIzbiraDatuma] = useState(false);
  const [vnosPodatkov, setVnosPodatkov] = useState(false);
  const [prosto, setProsto] = useState('');
  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Rezervacija mize
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div>
                <nav className="flex" aria-label="Breadcrumb">
                  <ol
                    role="list"
                    className="bg-white rounded-md shadow px-6 flex space-x-4"
                  >
                    <li className="flex">
                      <div className="flex items-center">
                        <a
                          href="#"
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <HomeIcon
                            className="flex-shrink-0 h-5 w-5"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Domov</span>
                        </a>
                      </div>
                    </li>
                    {pages.map(page => (
                      <li key={page.name} className="flex">
                        <div
                          className={
                            'flex items-center' +
                            (page.current ? ' font-bold' : '')
                          }
                        >
                          <svg
                            className="flex-shrink-0 w-6 h-full text-gray-200"
                            viewBox="0 0 24 44"
                            preserveAspectRatio="none"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                          </svg>
                          <a
                            href={page.href}
                            className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                            aria-current={
                              page.current ? 'page' : undefined
                            }
                          >
                            {page.name}
                          </a>
                        </div>
                      </li>
                    ))}
                  </ol>
                </nav>
                {izbiraRestavracije && (
                  <IzbiraRestavracije
                    restaurants={restaurants}
                    setIzbiraRestavracije={setIzbiraRestavracije}
                    setFields={setFields}
                    setIzbiraDatuma={setIzbiraDatuma}
                  />
                )}
                {izbiraDatuma && (
                  <IzbiraDatuma
                    fields={fields}
                    setIzbiraTermina={setIzbiraTermina}
                    setIzbiraDatuma={setIzbiraDatuma}
                    setVnosPodatkov={setVnosPodatkov}
                  />
                )}
                {izbiraTermina && (
                  <IzbiraTermina
                    setProsto={setProsto}
                    setIzbiraTermina={setIzbiraTermina}
                    setVnosPodatkov={setVnosPodatkov}
                  />
                )}
                {vnosPodatkov && (
                  <VnosPodatkov fields={fields} prosto={prosto} />
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
