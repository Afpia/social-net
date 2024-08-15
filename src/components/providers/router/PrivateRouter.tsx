import { Navigate, Outlet } from 'react-router-dom'

import { ROUTES } from '@/constants/routes'
// import { authAccess } from '@/modules/login-form/LoginForm'

export const PrivateRouter = () => {
	const auth = false

	return auth ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace={true} />
}
