import React from "react";

export const ListBusiness = () => {
  return (
    <>
      <h1 className="text-4xl mt-24 mb-12 text-gray-700 uppercase  dark:text-gray-400 text-center font-bold">
        Registered companies
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Companie
              </th>
              <th scope="col" className="px-6 py-3">
                Direction
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                nit
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Name
              </th>
              <td className="px-6 py-4">Direction</td>
              <td className="px-6 py-4">Nit</td>
              <td className="px-6 py-4">Phone</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
