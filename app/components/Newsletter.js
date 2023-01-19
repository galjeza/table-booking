'use client';
export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Naroči se na naše novice
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Zaupaj nam tvoj e-poštni naslov, da boš obveščen o
            novostih v orodju in promocijskih ponudbah.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-md"
              placeholder="Vnesi svoj e-poštni naslov"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Naroči se
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm text-gray-500">
            Mar nam je za varnost vaših podatkov. Preberi našo{' '}
            <a href="#" className="font-medium underline">
              Politiko zasebnosti
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
