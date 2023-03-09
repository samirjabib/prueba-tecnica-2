import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const businessApi = createApi({
  reducerPath: "business",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1",
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "post",
        body: data,
      }),
    }),
    createCompany: builder.mutation({
      query: (data) => ({
        url: "/company",
        method: "post",
        body: data,
      }),
    }),
    getCompanies: builder.query({
      query: () => `/company`,
    }),
    getCompaniesByNit: builder.query({
      query: (id) => `/company/${id}`,
    }),
    createProductCompany: builder.mutation({
      query: (data, id) => ({
        url: `/company/${id}`,
        method: "post",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetCompaniesByNitQuery,
  useGetCompaniesQuery,
  useCreateCompanyMutation,
  useCreateProductCompanyMutation,
} = businessApi;
