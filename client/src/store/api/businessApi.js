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
  }),
});

export const { useLoginMutation } = businessApi;
