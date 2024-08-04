import React from 'react'
import ReactDOM from 'react-dom/client'

import { Router } from './components/providers/router/Router'
import { ThemeProvider } from './components/providers/theme/theme-provider'

import './assets/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<Router />
		</ThemeProvider>
	</React.StrictMode>
)
