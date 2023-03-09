import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const businessApi = createApi({

    reducerPath:'business',


    baseQuery: fetchBaseQuery({
        baseUrl:"http://192.168.1.3:4000/api/v1/"
    }),

    endpoints:(builder) => ({

        postLogin: builder.mutation({
          query(data){
            
          }

        }),


    })

})

export const {  usePostLoginQuery } = businessApi