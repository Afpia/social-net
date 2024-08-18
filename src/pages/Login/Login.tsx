import { FC } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { Button } from '@UI'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import { LoginForm } from '@modules/LoginForm'

// import video from '../../assets/video/animation.mp4'

export const Login: FC = () => {
	const provider = new GoogleAuthProvider()

	const auth = getAuth()
	auth.useDeviceLanguage()

	const signIn = async () => {
		try {
			const result = await signInWithPopup(auth, provider)
			const credential = GoogleAuthProvider.credentialFromResult(result)
			console.log(credential)
			console.log(result)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='flex justify-between'>
			<div className='flex h-screen w-1/2 flex-col justify-center'>
				<div className='m-auto w-96'>
					<h1 className='mb-2 text-3xl font-medium'>Начните прямо сейчас</h1>
					<h2 className='mb-8'>Введите свои учетные данные, чтобы получить доступ к своей учетной записи</h2>
					<Button variant={'outlined'} onClick={signIn} startIcon={<FcGoogle />}>
						Google
					</Button>
					<Button>Yandex</Button>
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
}
