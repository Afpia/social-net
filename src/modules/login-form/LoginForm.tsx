import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

// import { useNavigate } from 'react-router-dom'
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { yupResolver } from '@hookform/resolvers/yup'

import { InputPassword } from '@/components/input-password/InputPassword'
import { Button } from '@/UI/Button'
import { Input } from '@/UI/Input'
import { Label } from '@/UI/Label'

export interface form {
	email: string
	password: string
}

const schema = yup
	.object({
		email: yup.string().email('Email должен быть действительным').trim().required('Обязательное поле'),
		password: yup.string().min(3, 'Минимальная длина 3 символа').required('Обязательное поле')
	})
	.required()

export const LoginForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<form>({
		mode: 'onTouched',
		resolver: yupResolver(schema)
	})
	console.log(errors)
	// const navigate = useNavigate()

	const submit: SubmitHandler<form> = async data => {
		// const auth = getAuth()
		// const response = await signInWithEmailAndPassword(auth, data.email, data.password)

		// navigate('/', { replace: true })
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(submit)} className='flex flex-col items-center justify-center'>
			<Label htmlFor='email' className='w-full pb-2 font-semibold'>
				Почта
			</Label>
			<Input
				id='email'
				type='text'
				placeholder='Почта'
				className='mb-3'
				{...register('email')}
				error={Boolean(errors.email?.message)}
			/>
			{errors.email?.message && <p className='mb-3 w-full'>{errors.email?.message}</p>}

			<Label htmlFor='password' className='w-full pb-2 font-semibold'>
				Пароль
			</Label>
			<InputPassword
				id='password'
				className='mb-3'
				{...register('password')}
				error={Boolean(errors.password?.message)}
			/>
			{errors.password?.message && <p className='w-full'>{errors.password?.message}</p>}

			<Button className='mb-6 mt-5 w-full' type='submit'>
				Войти
			</Button>
		</form>
	)
}
