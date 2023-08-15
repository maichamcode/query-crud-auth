

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

interface AuthSignup{
    name:string,
    email:string,
    password:string,
    confirmPassword:string
}
interface AuthSignin{
    email:string,
    password:string
}

const authApi = createApi({
    reducerPath:"auth",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000"
    }),
    endpoints:(builder)=>({
        signup:builder.mutation<{user:{},message:string,accesstoken:string},AuthSignup>({
            query:(credentials)=>({
                url:"/auth/signup",
                method:'POST',
                body:credentials
            })
        }),
        signin:builder.mutation<{user:{},message:string,accesstoken:string},AuthSignin>({
            query:(credentials)=>({
                url:"/auth/signin",
                method:'POST',
                body:credentials
            })
        }),

    })
})

export const {useSignupMutation,useSigninMutation} = authApi;
export const authReducer = authApi.reducer;
export default authApi;