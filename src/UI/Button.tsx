import { ButtonHTMLAttributes, forwardRef } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	type?: 'submit'
	loading?: boolean
}

const buttonVariants = cva('', {
	variants: {
		variant: {
			contained: 'text-white bg-blue p-2 px-4 rounded-md ',
			outlined: 'border-2 border-blue-dark rounded-md p-2 px-4'
		},
		loading: {
			true: 'dark:bg-gray-dark opacity-50 p-2 px-4 flex items-center justify-center gap-2 cursor-not-allowed'
		}
	},

	defaultVariants: {
		variant: 'contained'
	}
})

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, type, variant, loading, className, ...props }, ref) => (
		<button
			type={type ? 'submit' : 'button'}
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
