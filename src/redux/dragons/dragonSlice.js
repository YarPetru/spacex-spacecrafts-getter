import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dragonInfoApi = createApi({
  reducerPath: 'dragonInfoApi',
  refetchOnFocus: true,
  //   keepUnusedDataFor: для работы с кешем
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spacexdata.com/v4/',
  }),
  tagTypes: ['DragonInfo'],
  endpoints: builder => ({
    getAllDragons: builder.query({
      query: () => ({
        url: `dragons`,
        method: 'GET',
      }),
      providesTags: ['dragonInfo'],
    }),
    getDragonById: builder.query({
      query: id => ({
        url: `dragons/${id}`,
        method: 'GET',
      }),
      providesTags: ['DragonInfo'],
    }),
  }),
});

export const { useGetAllDragonsQuery, useGetDragonByIdQuery } = dragonInfoApi;
