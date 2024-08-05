import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { SideBar } from '@/modules/sidebar/SideBar'

export const LayoutChat: FC = () => (
	<>
		<SideBar />
		<main>
			<Outlet />
		</main>
	</>
)
