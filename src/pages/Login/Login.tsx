import { FC } from 'react'
import { Link } from 'react-router-dom'

import { LoginForm } from '@modules/LoginForm'

// import video from '../../assets/video/animation.mp4'

export const Login: FC = () => (
	<div className='flex justify-between'>
		<div className='flex h-screen w-1/2 flex-col justify-center'>
			<div className='m-auto w-96'>
				<h1 className='mb-2 text-3xl font-medium'>Начните прямо сейчас</h1>
				<h2 className='mb-8'>Введите свои учетные данные, чтобы получить доступ к своей учетной записи</h2>
				<LoginForm />
				<div className='flex gap-1'>
					<p>Нет аккаунта ?</p>
					<Link to={'/signup'} replace={true} className='font-semibold text-blue'>
						Зарегистрироваться
					</Link>
				</div>
			</div>
		</div>
		{/* <video autoPlay loop muted src={video} className='absolute right-0 top-0 z-10 h-screen w-1/2 object-cover' /> */}
	</div>
)
