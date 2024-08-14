import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { InputPassword } from '@/components/input-password/InputPassword'
import { Button } from '@/UI/Button'
import { Input } from '@/UI/Input'

export interface form {
	email: string
	password: string
}
export const authAccess = false

export const LoginForm = () => {
	const {
		register,
		handleSubmit
		// formState: { errors }
	} = useForm<form>()
	const navigate = useNavigate()

	const submit: SubmitHandler<form> = async data => {
		const auth = getAuth()
		const response = await signInWithEmailAndPassword(auth, data.email, data.password)
		console.log(response)

		navigate('/', { replace: true })
	}

	return (
		<form onSubmit={handleSubmit(submit)} className='flex flex-col items-center justify-center gap-4'>
			<Input type='text' placeholder='Почта' className='w-80' {...register('email', { required: true })} />
			<InputPassword className='w-80' {...register('password', { required: true })} />
			<Button>Отправить</Button>
		</form>
	)
}
