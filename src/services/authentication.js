import { createApi, retry, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setToken } from '../redux/slices/authentication';

const DFSC_BACKEND_API = 'http://localhost:8000/api/v1';

// https://redux-toolkit.js.org/rtk-query/usage/mutations
export const AuthenticationAPI = createApi({
  reducerPath: 'authenticationApi',
  baseQuery: retry(fetchBaseQuery({
    baseUrl: DFSC_BACKEND_API
  }), { maxRetries: 2 }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: '/sts_connect/login/',
        method: 'POST',
        body
      }),
      async onQueryStarted(access_token, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("QUERY LOGIN SUCCESS");
          console.log(data);
          dispatch(setToken(data));
        } catch (err) {
          console.log("AN ERROR OCCURED WHILE TRYING TO LOGIN");
          console.log(err);
        }
      }
    })
  })
});

export const { useLoginUserMutation } = AuthenticationAPI;