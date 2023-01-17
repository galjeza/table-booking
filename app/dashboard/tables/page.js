'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import AddTableModal from './Modal';

const TableList = () => {
  const { data: session } = useSession();
  const [tables, setTables] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (!session?.user) return;
      const restaurantId = session?.user?.restaurantId;
      const res = await fetch(`/api/restaurants/${restaurantId}`);
      const data = await res.json();
      let tablesCopy = data.tables;
      tablesCopy.sort((a, b) => a.number - b.number);
      setTables(tablesCopy);
    }

    fetchData();
  }, [session]);


  // render tables as cards with delete button and at the end of the list add a button to add a new table, each table has a number and a capacity
  return (
    <>
      <AddTableModal
        restaurantId={session?.user?.restaurantId}
        tables={tables}
        setTables={setTables}
      />
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                    >
                      Številka mize
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                    >
                      Kapaciteta
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tables.map(table => (
                    <tr key={table.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {table.number}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {table.capacity}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          onClick={() => {
                            async function deleteTable() {
                              const res = await fetch(
                                `/api/tables/delete`,
                                {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type':
                                      'application/json'
                                  },
                                  body: JSON.stringify({
                                    id: table.id
                                  })
                                }
                              );
                              const data = await res.json();
                              setTables(
                                tables.filter(t => t.id !== data.id)
                              );
                            }
                            deleteTable();
                          }}
                          className="text-indigo-600 hover:cursor-pointer hover:text-red-600"
                        >
                          Izbriši
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableList;
