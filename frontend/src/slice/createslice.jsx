import {createSlice} from '@reduxjs/toolkit'

const initialState={
    users:"sanjay"
}

export const userslice=createSlice({
    name:"san",
    initialState,
    reducers:{
        setuser:(state,action)=>{
          state.users=action.payload
        },
        removeuser:(state)=>{
            state.users=null
        }
    }
})

export const{setuser,removeuser}=userslice.actions

export default userslice.reducer