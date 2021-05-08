import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserData {
	primary: string
	isOwner: boolean
}

const initialState: UserData = {
	primary: '',
	isOwner: false,
}

export const slice = createSlice({
	name: 'primary',
	initialState,
	reducers: {
		setIsOwner(state, action: PayloadAction<boolean>) {
			state.isOwner = action.payload
		},
		setPrimaryAccount(state, action: PayloadAction<string>) {
			state.primary = action.payload
		},
	},
})

export const UserDataActions = slice.actions

export default slice.reducer
