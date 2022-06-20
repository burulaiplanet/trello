import { configureStore } from '@reduxjs/toolkit'
import spinnerSlice from './slices/spinnerSlice'

import loginSlice from './slices/LoginPageSlice'
import columnSlice from './slices/columnsChangeSlise'
import uiSlice from './slices/uiSlices'

const store = configureStore({
	reducer: {
		login: loginSlice.reducer,
		spinner:spinnerSlice.reducer,
        column:columnSlice.reducer,
		uiSlice:uiSlice.reducer
	},
})

export default store
