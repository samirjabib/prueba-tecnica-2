import { useParams } from "react-router-dom";
import { useGetCompaniesByNitQuery } from "../../store/api/businessApi";

export const BusinessDetail = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetCompaniesByNitQuery(id);

  if(isLoading){
    return <div>Cargando</div>
  }
  const { name, address, inventary, phone } = data;
  const { products } = inventary;

  return (
    <div className="mt-20">
      <div
        href="#"
        className="block max-w-sm p-6 bg-white border-gray-200 mx-auto rounded-lg shadow  dark:bg-gray-800  dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {phone}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {address}
        </p>
        <button
          className="inline-flex items-center mt-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Downland Inventary
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
