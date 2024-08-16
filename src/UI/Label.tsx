import { forwardRef, LabelHTMLAttributes } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const labelVariants = cva('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70')

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelVariants> {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, children, ...props }, ref) => (
	<label ref={ref} className={cn(labelVariants(), className)} {...props}>
		{children}
	</label>
))

Label.displayName = 'Label'
