import Toggle from '../../components/form/Toggle';

export default function NotificationSettings() {
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Obvestila
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Kako vas naj obveščamo
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <fieldset>
                  <Toggle label={'Email obvestila'} />
                </fieldset>
                <fieldset>
                  <Toggle label={'SMS obvestila'} />
                </fieldset>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Shrani
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
