import { configureStore } from '@reduxjs/toolkit'

import userDataReducer from './slices/UserData'

export const store = configureStore({
	reducer: {
		userDataReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
