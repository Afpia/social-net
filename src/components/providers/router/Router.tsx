import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Chat, Login, NotFound, SignUp } from '@pages'

import { LayoutChat } from '@components/layouts'
import { ROUTES } from '@constants/routes'

import { PrivateRouter } from './PrivateRouter'

const router = createBrowserRouter([
	{
		path: '*',
		element: <NotFound />
	},
	{
		path: ROUTES.LOGIN,
		element: <Login />
	},
	{
		path: ROUTES.SIGNUP,
		element: <SignUp />
	},
	{
		element: <PrivateRouter />,
		children: [
			{
				element: <LayoutChat />,
				children: [
					{
						path: ROUTES.MAIN,
						element: <Chat />
					}
				]
			}
		]
	}
])

export const Router = () => <RouterProvider router={router} />
