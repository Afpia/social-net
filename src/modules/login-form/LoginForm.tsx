import { SubmitHandler, useForm } from 'react-hook-form'

// import { useNavigate } from 'react-router-dom'
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { InputPassword } from '@/components/input-password/InputPassword'
import { Button } from '@/UI/Button'
import { Input } from '@/UI/Input'

export interface form {
	email: string
	password: string
}

export const LoginForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<form>()
	console.log(errors)
	// const navigate = useNavigate()

	const submit: SubmitHandler<form> = async data => {
		// const auth = getAuth()
		// const response = await signInWithEmailAndPassword(auth, data.email, data.password)

		// navigate('/', { replace: true })
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(submit)} className='flex flex-col items-center justify-center gap-4'>
			<Input
				type='text'
				placeholder='Почта'
				className='w-80'
				{...register('email', {
					required: 'Обязательное поле',
					minLength: { value: 3, message: 'Минимальная длина 3 символа' }
				})}
				error={Boolean(errors.email?.message)}
			/>
			{errors.email?.message && <p>{errors.email?.message}</p>}

			<InputPassword
				{...register('password', {
					required: 'Обязательное поле',
					minLength: { value: 3, message: 'Минимальная длина 3 символа' }
				})}
				className='w-80'
				error={Boolean(errors.password?.message)}
			/>
			{errors.password?.message && <p>{errors.password?.message}</p>}

			<Button type='submit'>Отправить</Button>
		</form>
	)
}
