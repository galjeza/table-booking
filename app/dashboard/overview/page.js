'use client';
import { StarIcon } from '@heroicons/react/solid';

const products = [
  {
    id: 1,
    name: 'Restavracija Ancora',
    price: '8-14€',
    rating: 5,
    reviewCount: 38,
    imageSrc:
      'https://www.malcajt.com/upload/restaurant_gallery/restaurant_gallery1469703925291.jpg',
    imageAlt: 'TODO',
    href: '#'
  },
  {
    id: 2,
    name: 'Jack & Joe Steak and Burger Club',
    price: '13-22€',
    rating: 5,
    reviewCount: 18,
    imageSrc:
      'https://media-cdn.tripadvisor.com/media/photo-s/0a/8a/82/a6/jack-joe-steak-and-burger.jpg',
    imageAlt: 'TODO',
    href: '#'
  },
  {
    id: 3,
    name: 'Q-restavracija',
    price: '10€',
    rating: 5,
    reviewCount: 14,
    imageSrc:
      'https://www.malcajt.com/upload/restaurant/q-tabor-maribor.jpeg',
    imageAlt: 'TODO',
    href: '#'
  },
  {
    id: 4,
    name: 'Nana',
    price: '7-12€',
    rating: 4,
    reviewCount: 21,
    imageSrc:
      'https://si.gaultmillau.com/download/627bd09dedba9122da706bf6/image/jpeg/bistro-in-kavarna-nana.jpg',
    imageAlt: 'TODO',
    href: '#'
  }
  // More products...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map(product => (
            <div
              key={product.id}
              className="group relative p-4 border-r border-b border-gray-200 sm:p-6"
            >
              <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="pt-10 pb-4 text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    />
                    {product.name}
                  </a>
                </h3>
                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">
                    {product.rating} out of 5 stars
                  </p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map(rating => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? 'text-yellow-400'
                            : 'text-gray-200',
                          'flex-shrink-0 h-5 w-5'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.reviewCount} komentarjev
                  </p>
                </div>
                <p className="mt-4 text-base font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
