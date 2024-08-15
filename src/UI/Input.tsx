import { forwardRef, InputHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	error?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, label, error, ...props }, ref) => (
	<label htmlFor={label} className='text-left'>
		<p className={cn({ 'pb-2': label })}>{label}</p>
		<input
			type={type}
			id={label}
			className={cn(
				'border-input bg-black',
				'flex h-10 w-full rounded-md border px-3 py-2 text-sm',
				'file:bg-transparent file:border-0 file:text-sm file:font-medium',
				'focus-visible:outline-none focus-visible:ring-blue-dark focus-visible:ring-offset-2',
				'disabled:cursor-not-allowed disabled:opacity-50',
				{ 'border-red placeholder:text-red': error },
				className
			)}
			ref={ref}
			{...props}
		/>
	</label>
))
Input.displayName = 'Input'
