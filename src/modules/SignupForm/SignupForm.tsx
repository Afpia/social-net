import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Label } from '@UI'
import { FirebaseError } from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

import { InputPassword } from '@components/InputPassword'
import { useAuth } from '@components/providers/Auth'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form, LoginSchema } from '@modules/LoginForm/LoginSchema'

export const SignupForm = () => {
	const { setSession } = useAuth()
	const navigate = useNavigate()
	const auth = getAuth()

	const {
		handleSubmit,
		register,
		setError,
		formState: { errors, isSubmitting }
	} = useForm<Form>({
		mode: 'onTouched',
		resolver: yupResolver(LoginSchema)
	})

	const submit: SubmitHandler<Form> = async data => {
		try {
			const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password)

			setSession({ isLogin: true, userId: user.uid, accessToken: user.accessToken })

			navigate('/', { replace: true })
		} catch (error) {
			if (error instanceof FirebaseError) {
				if (error.code === 'auth/email-already-in-use') {
					setError('email', {
						type: 'auth/email-already-in-use',
						message: 'Пользователь с такой почтой уже существует'
					})
				} else {
					setError('email', {
						message: 'Неизвестная ошибка'
					})
				}
			}
		}
	}

	return (
		<form onSubmit={handleSubmit(submit)} className='flex flex-col items-center justify-center gap-4'>
			<Label htmlFor='email' className='w-full pb-2 font-semibold'>
				Почта
			</Label>

			<Input
				id='email'
				type='text'
				placeholder='Почта'
				className='mb-1'
				{...register('email')}
				error={Boolean(errors.email?.message)}
				disabled={isSubmitting}
			/>
			{errors.email?.message && <p className='w-full text-sm text-red'>{errors.email?.message}</p>}

			<Label htmlFor='password' className='w-full pb-2 pt-3 font-semibold'>
				Пароль
			</Label>

			<InputPassword
				id='password'
				className='mb-1'
				{...register('password')}
				error={Boolean(errors.password?.message)}
				disabled={isSubmitting}
			/>
			{errors.password?.message && <p className='w-full text-sm text-red'>{errors.password?.message}</p>}

			<Button className='mb-6 mt-5 w-full' type='submit' loading={isSubmitting}>
				Зарегистрироваться
			</Button>
		</form>
	)
}
