import { ButtonHTMLAttributes, forwardRef } from 'react'

import { cn } from '@/lib/utils'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ type, children, className, ...props }, ref) => (
	<button type={type} className={cn(className)} {...props} ref={ref}>
		{children}
	</button>
))
