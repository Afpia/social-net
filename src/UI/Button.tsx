import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	loading?: boolean
	children: ReactNode
}

const buttonVariants = cva('', {
	variants: {
		variant: {
			contained: 'bg-blue p-2 px-4 rounded-md dark:text-white dark:bg-blue-dark',
			outlined: 'border-2 border-blue-dark rounded-md p-2 px-4'
		},
		loading: {
			true: 'dark:bg-gray-dark opacity-50 p-2 px-4 flex items-center gap-2'
		}
	},

	defaultVariants: {
		variant: 'contained'
	}
})

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, variant, loading, className, ...props }, ref) => (
		<button
			type='button'
			className={cn(buttonVariants({ variant, loading }), className)}
			ref={ref}
			disabled={loading}
			{...props}
		>
			<span>{children}</span>
			{loading && <AiOutlineLoading3Quarters className='animate-spin opacity-100' />}
		</button>
	)
)

Button.displayName = 'Button'
