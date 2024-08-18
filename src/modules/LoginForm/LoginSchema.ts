import * as yup from 'yup'

export const LoginSchema = yup
	.object({
		email: yup.string().email('Email должен быть действительным').trim().required('Обязательное поле'),
		password: yup.string().min(3, 'Минимальная длина 3 символа').required('Обязательное поле')
	})
	.required()

export type Form = yup.InferType<typeof LoginSchema>
