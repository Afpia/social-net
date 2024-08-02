export const Login = () => {
	console.log(import.meta.env)

	return (
		<div className='h-screen w-screen'>
			<div className='flex h-screen flex-col items-center justify-center gap-4'>
				<h1 className='text-3xl'>Логин</h1>
				<input type='text' placeholder='Почта' className='w-48 p-2' />
				<input type='text' placeholder='Пароль' className='w-48 p-2' />
			</div>
		</div>
	)
}
