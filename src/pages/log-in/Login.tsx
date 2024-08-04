import { useTheme } from '@/components/providers/theme'

export const Login = () => {
	console.log(import.meta.env)

	const { theme, setTheme } = useTheme()

	const changeTheme = () => {
		if (theme == 'dark') return setTheme('light')
		setTheme('dark')
	}

	return (
		<div className='h-screen w-screen'>
			<div className='flex h-screen flex-col items-center justify-center gap-4'>
				<h1 className='text-3xl dark:text-orange-500'>Логин</h1>
				<input type='text' placeholder='Почта' className='w-48 p-2' />
				<input type='text' placeholder='Пароль' className='w-48 p-2' />
				<button onClick={changeTheme} type='submit'>
					Изменить тему {theme}
				</button>
			</div>
		</div>
	)
}
