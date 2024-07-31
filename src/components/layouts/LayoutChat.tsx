import { Outlet } from 'react-router-dom'

import { SideBar } from '@/modules/sidebar/SideBar'

export const LayoutChat = () => (
	<>
		<SideBar />
		<main>
			<Outlet />
		</main>
	</>
)
