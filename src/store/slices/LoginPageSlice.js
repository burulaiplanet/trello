import { createSlice } from "@reduxjs/toolkit";

const initialState={
    email:'b@gmail.com',
    password:'1',
   
}
const loginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        login(state,action){
            state.datas.push({
                email:action.payload.email,
                password:action.payload.password
            })
        }
    }

})

export const loginActions=loginSlice.actions
export default loginSlice