import { forwardRef, InputHTMLAttributes } from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '@utils/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	disabled?: boolean
	error?: boolean
}

const inputVariants = cva(
	// eslint-disable-next-line max-len
	'border-input bg-white focus-visible:outline-none focus-visible:ring-blue-dark flex h-10 w-full rounded-md border px-3 py-2 text-sm file:bg-transparent file:border-0 file:text-sm file:font-medium   dark:bg-white dark:text-black disabled:cursor-not-allowed disabled:opacity-50'
)

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, error, ...props }, ref) => (
	<input
		type={type}
		className={cn(inputVariants(), { 'border-red focus:border-2': error }, className)}
		ref={ref}
		{...props}
	/>
))
Input.displayName = 'Input'
