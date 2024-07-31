import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { LayoutChat } from '@/components/layouts/LayoutChat'
import { ROUTES } from '@/constants/routes'
import { Chat } from '@/pages/chat/Chat'
import { NotFound } from '@/pages/not-found/NotFound'

const router = createBrowserRouter([
	{ element: <LayoutChat />, children: [{ path: ROUTES.MAIN, element: <Chat /> }] },
	{
		path: '*',
		element: <NotFound />
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
