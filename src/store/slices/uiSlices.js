import { createSlice } from "@reduxjs/toolkit"

 const initialState={
    showColumn: true,
    valid: false
 }

 const uiSlice=createSlice({
    name:'ui',
    initialState,
    reducers:{
        showColumn(state) {
			state.showColumn = !state.showColumn
		},
      onValidorOff(state){
         state.valid = !state.valid;
      }
    },
    
 })

 export const uiActions=uiSlice.actions
 export default uiSlice