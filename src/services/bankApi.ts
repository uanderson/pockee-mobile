import { createApi } from '@reduxjs/toolkit/query/react'
import { prepareBaseQuery } from '../utils/api';

export const bankApi = createApi({
  reducerPath: 'bankApi',
  baseQuery: prepareBaseQuery(),
  endpoints: (builder) => ({
    getBanks: builder.query<any, string>({
      query: () => 'banks',
    }),
  }),
})

export const { useGetBanksQuery } = bankApi
