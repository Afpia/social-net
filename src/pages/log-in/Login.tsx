import { FC } from 'react'
import { Link } from 'react-router-dom'

import { LoginForm } from '@/modules/login-form/LoginForm'

export const Login: FC = () => (
	<>
		<video
			autoPlay
			loop
			muted
			src='../../../public/91087-629483817_small.mp4'
			className='absolute left-0 top-0 h-screen min-w-full object-cover'
		/>
		<div className='absolute left-2/4 top-2/4 -translate-x-3/4 -translate-y-3/4'>
			<h1 className='pb-3 text-center text-3xl dark:text-orange-500'>Логин</h1>
			<LoginForm />
			<Link to={'/signup'} replace={true}>
				Зарегистрироваться
			</Link>
		</div>
	</>
)
