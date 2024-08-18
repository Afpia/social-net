import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { SideBar } from './Sidebar/SideBar'

export const LayoutChat: FC = () => (
	<>
		<SideBar />
		<main>
			<Outlet />
		</main>
	</>
)
