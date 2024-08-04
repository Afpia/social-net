import { useEffect, useState } from 'react'

import { ThemeContext } from './theme-context'
import { Theme, ThemeProviderProps } from './types'

export const ThemeProvider = ({ children, defaultTheme = 'system', storageKey = 'theme' }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme)

	useEffect(() => {
		const root = window.document.documentElement

		root.classList.remove('light', 'dark')

		if (theme === 'system') {
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

			root.classList.add(systemTheme)
			return
		}

		root.classList.add(theme)
	}, [theme])

	const value = {
		theme,
		setTheme: (changedTheme: Theme) => {
			localStorage.setItem(storageKey, changedTheme)
			setTheme(changedTheme)
		}
	}

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
