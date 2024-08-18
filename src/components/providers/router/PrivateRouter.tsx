import { Navigate, Outlet } from 'react-router-dom'

import { ROUTES } from '@utils/constants/ROUTES'

import { useAuth } from '../Auth'

export const PrivateRouter = () => {
	const {
		session: { isLogin }
	} = useAuth()

	return isLogin ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace={true} />
}
