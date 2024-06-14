import { createSlice } from "@reduxjs/toolkit";

const EmailPasswordSlice = createSlice({
    name:"EmailPassword",
    initialState:{
        Email:"",
        Password:"",
        Authenticated: false
    },
    reducers:{
        Email:(state, action)=>{
            state.Email = action.payload
        },
        Password:(state, action)=>{
            state.Password = action.payload
        },
        Authenticated:(state,action)=>{
            state.Authenticated = action.payload
        }
    }
})

export const {Email, Password,Authenticated } = EmailPasswordSlice.actions
export default EmailPasswordSlice.reducer