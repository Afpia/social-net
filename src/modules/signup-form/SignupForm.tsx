import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

import { form } from '../login-form/LoginForm'

type input = 'password' | 'text'

export let authAccess = false

export const SignupForm = () => {
	const [typeInput, setTypeInput] = useState<input>('password')

	const { register, handleSubmit } = useForm<form>()

	const navigate = useNavigate()

	const changeType = () => {
		if (typeInput === 'password') return setTypeInput('text')
		setTypeInput('password')
	}

	const submit: SubmitHandler<form> = async data => {
		console.log(data)
		const auth = getAuth()
		const response = await createUserWithEmailAndPassword(auth, data.email, data.password)
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
			<button type='submit' className='w-48 bg-black p-2'>
				Отправить
			</button>
		</form>
	)
}
