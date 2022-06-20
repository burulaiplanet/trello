import { createSlice } from "@reduxjs/toolkit"

 const initialState={
    showColumn: true,
    
   
 }

 const uiSlice=createSlice({
    name:'ui',
    initialState,
    reducers:{
        showColumn(state) {
			state.showColumn = !state.showColumn
		},
     
    }
 })

 export const uiActions=uiSlice.actions
 export default uiSlice