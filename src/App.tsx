import { useTheme } from './components/providers/theme'

export const App = () => {
	const { theme, setTheme } = useTheme()

	const changeTheme = () => {
		setTheme('light')
	}

	return (
		<>
			<div className='font-bold text-white underline dark:text-yellow-500'>hello</div>
			<h2>{theme}</h2>
			<button onClick={changeTheme}>hello</button>
		</>
	)
}
