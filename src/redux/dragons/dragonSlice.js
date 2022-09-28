import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dragonInfoApi = createApi({
  reducerPath: 'dragonInfoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spacexdata.com/v4/',
  }),
  tagTypes: ['dragonInfoApi'],
  endpoints: builder => ({
    getAllDragons: builder.query({
      query: () => ({
        url: `dragons`,
        method: 'GET',
      }),
      providesTags: ['dragonInfoApi'],
    }),
    getDragonById: builder.query({
      query: id => ({
        url: `dragons/${id}`,
        method: 'GET',
      }),
      providesTags: ['dragonInfoApi'],
    }),
  }),
});

export const { useGetAllDragonsQuery, useGetDragonByIdQuery } = dragonInfoApi;
