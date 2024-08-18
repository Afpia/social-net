import { createContext } from 'react'

export type SessionField = {
	isLogin: boolean
	userId: string
	accessToken: string
}

export interface AuthProviderState {
	session: SessionField
	setSession: (user: SessionField) => void
}

const initialState: AuthProviderState = {
	session: {
		isLogin: false,
		userId: '',
		accessToken: ''
	},
	setSession: () => null
}

export const AuthContext = createContext<AuthProviderState>(initialState)
