import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@pages': path.resolve(__dirname, './src/pages'),
			'@components': path.resolve(__dirname, './src/components'),
			'@constants': path.resolve(__dirname, './src/constants'),
			'@UI': path.resolve(__dirname, './src/UI'),
			'@modules': path.resolve(__dirname, './src/modules'),
			'@utils': path.resolve(__dirname, './src/utils')
		}
	}
})
