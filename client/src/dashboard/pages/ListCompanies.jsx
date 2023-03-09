import React from "react";
import { CompanyTable } from "../components";
import ClipLoader from "react-spinners/ClipLoader";

export const ListCompanies = ({ data, isLoading, error }) => {
  console.log(data)

  return (
    <>
      <h1 className="text-4xl mt-24 mb-12 text-gray-700 uppercase  dark:text-gray-400 text-center font-bold">
        Registered companies
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-2xl mx-auto mt-24">
        <CompanyTable data={data} isLoading={isLoading} error={error} />
      </div>
      
    </>
  );
};
