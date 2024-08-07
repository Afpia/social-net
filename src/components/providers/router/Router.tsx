import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { PrivateRouter } from './PrivateRouter'

import { LayoutChat } from '@/components/layouts/LayoutChat'
import { ROUTES } from '@/constants/routes'
import { Chat } from '@/pages/chat/Chat'
import { Login } from '@/pages/log-in/Login'
import { NotFound } from '@/pages/not-found/NotFound'
import { SignUp } from '@/pages/sign-up/Signup'

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
