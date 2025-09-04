import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({

      login: builder.mutation({
         query: (userInfo) => ({
            url: '/auth/login',
            method: 'POST',
            data: userInfo
         })
      }),

      logout: builder.mutation({
         query: () => ({
            url: '/auth/logout',
            method: 'POST',
         }),
         invalidatesTags: ['USER']
      }),

      register: builder.mutation({
         query: (userInfo) => ({
            url: '/user/register',
            method: 'POST',
            data: userInfo
         })
      }),

      userInfo: builder.query({
         query: () => ({
            url: '/user/me',
            method: 'GET'
         }),
         providesTags: ['USER'],
      }),

      getAllUsers: builder.query({
         query: () => ({
            url: '/user/all-users',
            method: 'GET'
         }),
         providesTags: ['USERS']
      }),

      removeUser: builder.mutation({
         query: (userId) => ({
            url: `/user/${userId}`,
            method: 'DELETE',
         }),
         invalidatesTags: ['USERS']
      })

   })
})

export const {
   useLoginMutation,
   useLogoutMutation,
   useRegisterMutation,
   useUserInfoQuery,
   useGetAllUsersQuery,
   useRemoveUserMutation

} = authApi;