import { Link } from 'react-router-dom'

import { SignupForm } from '@/modules/signup-form/SignupForm'

export const SignUp = () => (
	<div className='absolute left-2/4 top-2/4 -translate-x-3/4 -translate-y-3/4'>
		<h1 className='pb-3 text-center text-3xl dark:text-orange-500'>Зарегистрироваться</h1>
		<SignupForm />
		<Link to={'/login'} replace={true}>
			Войти
		</Link>
	</div>
)
