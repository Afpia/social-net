import { FC } from 'react'
import { Link } from 'react-router-dom'

import video from '../../assets/video/animation.mp4'

import { LoginForm } from '@/modules/login-form/LoginForm'

export const Login: FC = () => (
	<div className='flex justify-between bg-black'>
		<div className='flex h-screen w-1/2 flex-col justify-center bg-black'>
			<h1 className='pb-7 text-center text-3xl font-bold dark:text-white'>Добро пожаловать</h1>
			<LoginForm />
			<Link to={'/signup'} replace={true} className='text-center'>
				Зарегистрироваться
			</Link>
		</div>
		<video autoPlay loop muted src={video} className='absolute right-0 top-0 z-10 h-screen w-1/2 object-cover' />
	</div>
)
