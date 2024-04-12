import { getAuth } from '@firebase/auth';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const prepareHeaders = async (headers: Headers) => {
  const token = await getAuth().currentUser?.getIdToken();

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  return headers;
}

export const prepareBaseQuery = () => fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders,
});
