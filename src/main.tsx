import React from 'react'
import ReactDOM from 'react-dom/client'

import { Router, ThemeProvider } from '@components/providers'

import './firebase'

import './assets/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<Router />
		</ThemeProvider>
	</React.StrictMode>
)
