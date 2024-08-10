import {  createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MessageResponse } from "../../types/api-types";
import { User } from "../../types/types";
import axios from "axios";


export const userApi = createApi({
    reducerPath :  "userApi", 
    baseQuery : fetchBaseQuery({
        baseUrl : `${import.meta.env.VITE_SERVER}/api/v1/user/`
    }),  
    endpoints : (builder) => ({
        login: builder.mutation<MessageResponse, User>({
            query: (user) => ({
                url: "new",
                method: "POST",
                body: user,
            }),
        })
    })
})

export const getUser = async (email:string) => {
    try{
        const res = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/user/email?email=${email}`)
        return res;
}catch(e){
        console.log(e.message); 
    }
}
// useLoginMutation is a     hook based on login endpoint 
export const {useLoginMutation}  = userApi;     