import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name:"requests",
    initialState:null,
    reducers:{
        addRequestConnections:(state,action)=>{
            return action.payload
        },
        removeRequestConnections:(state,paylaod)=>{
            return null
        }

    }
})
export const {addRequestConnections,removeRequestConnections} = requestSlice.actions
export default requestSlice.reducer