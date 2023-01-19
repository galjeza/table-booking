import {
  MailIcon,
  PhoneIcon,
  TrashIcon,
  PencilIcon
} from '@heroicons/react/solid';

export default function ListItem({
  restaurant,
  setIsEditing,
  setModalOpen,
  setFields,
  setConfirmDeleteModalOpen
}) {
  return (
    <li
      key={restaurant.naslov}
      className="col-span-1 bg-white rounded-lg shadow-md divide-y divide-gray-200"
    >
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-sm font-medium truncate">
              {restaurant.naziv}
            </h3>
          </div>
          <p className="mt-1 text-gray-500 text-sm truncate">
            {restaurant.naslov}
          </p>
        </div>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div
            className="w-0 flex-1 flex"
            onClick={() => {
              setFields(restaurant);
              setIsEditing(true);
              setModalOpen(true);
            }}
          >
            <div className=" text-indigo-600 relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:bg-indigo-700 hover:text-white hover:cursor-pointer ">
              <PencilIcon className="w-5 h-5" aria-hidden="true" />
              <span className="ml-3 ">Uredi</span>
            </div>
          </div>
          <div
            className="-ml-px w-0 flex-1 flex"
            onClick={() => {
              setConfirmDeleteModalOpen(true);
            }}
          >
            <div className="text-red-400 relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:bg-red-400 hover:text-white hover:cursor-pointer">
              <TrashIcon className="w-5 h-5 " aria-hidden="true" />
              <span className="ml-3">Zbrisi</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
