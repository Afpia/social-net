import './assets/styles/global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { Router } from './providers/router/Router'
import { ThemeProvider } from './providers/theme/theme-provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<Router />
		</ThemeProvider>
	</React.StrictMode>
)
