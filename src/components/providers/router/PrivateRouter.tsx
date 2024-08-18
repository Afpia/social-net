import { Navigate, Outlet } from 'react-router-dom'

import { ROUTES } from '@utils/constants/ROUTES'

export const PrivateRouter = () => {
	const auth = false

	return auth ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace={true} />
}
