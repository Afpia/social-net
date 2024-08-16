import { forwardRef, MutableRefObject, useRef, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { Input, InputProps } from '@UI'

import { cn } from '@utils/cn'

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
		<div className={cn('relative w-full', className)} ref={ref}>
			<Input type={typeInput} placeholder='Пароль' className='pr-12' {...props} ref={refClear} />
			{typeInput === 'password' ? (
				<FaEye onClick={changeType} className='absolute right-3 top-2/4 -translate-y-1/2 cursor-pointer' />
			) : (
				<FaEyeSlash onClick={changeType} className='absolute right-3 top-2/4 -translate-y-1/2 cursor-pointer' />
			)}
			<RxCross2 onClick={clearValue} className='absolute right-8 top-2/4 -translate-y-1/2 cursor-pointer text-xl' />
		</div>
	)
})
