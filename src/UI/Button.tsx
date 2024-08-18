import { ButtonHTMLAttributes, forwardRef } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@utils/helpers/cn'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	type?: 'submit'
	loading?: boolean
	startIcon?: JSX.Element
	endIcon?: JSX.Element
}

const buttonVariants = cva('flex items-center justify-center', {
	variants: {
		variant: {
			contained: 'text-white bg-blue p-2 px-4 rounded-md',
			outlined: 'border-2 border-blue-dark rounded-md p-2 px-4 '
		},
		loading: {
			true: 'dark:bg-gray-dark opacity-50 p-2 px-4 flex items-center justify-center gap-2 cursor-not-allowed'
		},
		size: {
			small: 'text-sm py-2 px-4 ',
			medium: 'text-base py-3 px-5',
			large: 'text-2xl py-4 px-6'
		}
	},

	defaultVariants: {
		variant: 'contained',
		size: 'medium'
	}
})

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, type, size, startIcon, endIcon, variant, loading, className, ...props }, ref) => (
		<button
			type={type ? 'submit' : 'button'}
			className={cn(buttonVariants({ variant, size, loading }), className)}
			ref={ref}
			disabled={loading}
			{...props}
		>
			{startIcon && <span className='mr-2'>{startIcon}</span>}
			<span>{children}</span>
			{endIcon && <span className='ml-2'>{endIcon}</span>}
			{loading && <AiOutlineLoading3Quarters className='animate-spin opacity-100' />}
		</button>
	)
)

Button.displayName = 'Button'
