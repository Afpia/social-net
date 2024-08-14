import { forwardRef, InputHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => (
	<input
		type={type}
		className={cn(
			'border-input bg-black',
			'flex h-10 w-full rounded-md border px-3 py-2 text-sm',
			'file:bg-transparent file:border-0 file:text-sm file:font-medium',
			'focus-visible:outline-none focus-visible:ring-blue-dark focus-visible:ring-offset-2',
			'disabled:cursor-not-allowed disabled:opacity-50',
			className
		)}
		ref={ref}
		{...props}
	/>
))
Input.displayName = 'Input'
