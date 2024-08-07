import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { Button } from '@/UI/button/Button'

export interface form {
	email: string
	password: string
}
export let authAccess = false

type input = 'password' | 'text'

export const LoginForm = () => {
	const [typeInput, setTypeInput] = useState<input>('password')
	const {
		register,
		handleSubmit
		// formState: { errors }
	} = useForm<form>()
	const navigate = useNavigate()

	const changeType = () => {
		if (typeInput === 'password') return setTypeInput('text')
		setTypeInput('password')
	}

	const submit: SubmitHandler<form> = async data => {
		const auth = getAuth()
		const response = await signInWithEmailAndPassword(auth, data.email, data.password)
		// localStorage.setItem('user')
		console.log(response)

		authAccess = true
		navigate('/', { replace: true })
	}
	return (
		<form onSubmit={handleSubmit(submit)} className='flex flex-col items-center justify-center gap-4'>
			<input type='text' placeholder='Почта' className='w-48 p-2' {...register('email', { required: true })} />
			<div className='relative'>
				<input
					type={typeInput}
					placeholder='Пароль'
					className='w-48 p-2'
					{...register('password', { required: true })}
				/>
				{typeInput == 'password' ? (
					<FaEye onClick={changeType} className='absolute right-3 top-2/4 -translate-y-1/2 cursor-pointer' />
				) : (
					<FaEyeSlash onClick={changeType} className='absolute right-3 top-2/4 -translate-y-1/2 cursor-pointer' />
				)}
			</div>
			<button type='submit' className='w-48 bg-red-900 p-2'>
				Отправить
			</button>
			<Button className='bg-'>Отправить</Button>
		</form>
	)
}
