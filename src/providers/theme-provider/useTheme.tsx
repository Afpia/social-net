import { useContext } from 'react'

import { ThemeContext } from './theme-context'

export const useTheme = () => {
	const context = useContext(ThemeContext)

	if (context === undefined) throw new Error('хук должен быть в контексте')

	return context
}
