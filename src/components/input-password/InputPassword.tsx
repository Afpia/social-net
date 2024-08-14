import { forwardRef, MutableRefObject, useRef, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'

import { cn } from '@/lib/utils'
import { Input, InputProps } from '@/UI/Input'

type input = 'password' | 'text'

export const InputPassword = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
	const [typeInput, setTypeInput] = useState<input>('password')
	const refClear = useRef() as MutableRefObject<HTMLInputElement>

	const changeType = () => {
		if (typeInput === 'password') return setTypeInput('text')
		setTypeInput('password')
	}

	const clearValue = () => {
		refClear.current.value = ''
	}

	return (
		<div className='relative' ref={ref}>
			<Input type={typeInput} placeholder='Пароль' className={cn('pr-12', className)} {...props} ref={refClear} />
			{typeInput == 'password' ? (
				<FaEye onClick={changeType} className='absolute right-3 top-2/4 -translate-y-1/2 cursor-pointer' />
			) : (
				<FaEyeSlash onClick={changeType} className='absolute right-3 top-2/4 -translate-y-1/2 cursor-pointer' />
			)}
			<RxCross2 onClick={clearValue} className='absolute right-8 top-2/4 -translate-y-1/2 cursor-pointer text-xl' />
		</div>
	)
})
