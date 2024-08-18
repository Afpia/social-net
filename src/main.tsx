import React from 'react'
import ReactDOM from 'react-dom/client'

import { AuthProvider, Router, ThemeProvider } from '@components/providers'

import './firebase'

import './assets/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AuthProvider>
			<ThemeProvider>
				<Router />
			</ThemeProvider>
		</AuthProvider>
	</React.StrictMode>
)
