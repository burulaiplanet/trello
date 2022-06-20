import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	toDo: [],
	}

const columnSlice = createSlice({
	name: 'column',
	initialState,
	reducers: {
		

		addColumn(state, actions) {
		
			const newtoDo = actions.payload
			state.toDo.push({
				id: newtoDo.id,
				title: newtoDo.title,
				toDos: [],
			})
		},
		addData(state, action) {
			console.log(action.payload)
			const { data,id} = action.payload
			state.toDo.map((el) => {
				if (el.id === id) {
					el.toDos.push({
						items:data,
						
					})
				}
			})
		},
		
	},
})

export const columnActions = columnSlice.actions
export default columnSlice
