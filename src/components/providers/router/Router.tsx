import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { LayoutChat } from '@/components/layouts/LayoutChat'
import { ROUTES } from '@/constants/routes'
import { Chat } from '@/pages/chat/Chat'
import { Login } from '@/pages/log-in/Login'
import { NotFound } from '@/pages/not-found/NotFound'
import { SignUp } from '@/pages/sign-up/Signup'

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

// const router = createBrowserRouter(
// 	createRoutesFromElements(
// 		<Route>
// 			<Route element={<LayoutChat />}>
// 				<Route path={ROUTES.MAIN} element={<Chat />} />
// 			</Route>
// 			<Route path='*' element={<NotFound />} />
// 		</Route>
// 	)
// )

export const Router = () => <RouterProvider router={router} />
