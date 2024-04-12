import { createApi } from '@reduxjs/toolkit/query/react'
import { prepareBaseQuery } from '../utils/api';

export const accountApi = createApi({
  reducerPath: 'accountApi',
  baseQuery: prepareBaseQuery(),
  endpoints: (builder) => ({
    getAccounts: builder.query<any, string>({
      query: () => `accounts`,
    }),
  }),
})

export const { useGetAccountsQuery } = accountApi
