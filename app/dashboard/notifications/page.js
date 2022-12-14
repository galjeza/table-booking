/* This example requires Tailwind CSS v2.0+ */
'use client';
import {
  CheckIcon,
  ThumbUpIcon,
  UserIcon
} from '@heroicons/react/solid';

const timeline = [
  {
    id: 1,
    content: 'Oddali ste rezervacijo pri:',
    target: 'Jack & Joe Steak and Burger Club in Ancora',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: UserIcon,
    iconBackground: 'bg-gray-400'
  },
  {
    id: 2,
    content: 'Potrjena je bila rezervacija v restavraciji Ancora.',
    target: 'Ancora',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: ThumbUpIcon,
    iconBackground: 'bg-blue-500'
  },
  {
    id: 3,
    content:
      'Imate rezervacijo v restavraciji: Jack & Joe Steak and Burger Club ob 8.00.',
    target: 'Ancora',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: CheckIcon,
    iconBackground: 'bg-green-500'
  },
  {
    id: 4,
    content:
      'Potrjena je bila rezervacija v restavraciji Jack & Joe Steak and Burger Club.',
    target: 'Jack & Joe Steak and Burger Club',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: ThumbUpIcon,
    iconBackground: 'bg-blue-500'
  },
  {
    id: 5,
    content:
      'Imate rezervacijo v restavraciji: Jack & Joe Steak and Burger Club ob 6.00',
    target: 'Jack & Joe Steak and Burger Club',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500'
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    <event.icon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{' '}
                      <a
                        href={event.href}
                        className="font-medium text-gray-900"
                      >
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    <time dateTime={event.datetime}>
                      {event.date}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
