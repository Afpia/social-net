import { useState } from 'react'

import { AuthContext, type SessionField } from './AuthContext'

interface AuthProviderProps {
	children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [session, setSession] = useState<SessionField>(
		(JSON.parse(localStorage.getItem('session') as string) as SessionField) || {
			isLogin: false,
			userId: '',
			accessToken: ''
		}
	)

	const value = {
		session,
		setSession: (user: SessionField) => {
			localStorage.setItem('session', JSON.stringify(user))
			setSession(user)
		}
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
