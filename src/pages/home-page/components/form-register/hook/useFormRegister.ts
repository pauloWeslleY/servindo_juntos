import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormRegisterProps } from '../types'
import { schemaFormRegister } from '../schema'

export const useFormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegisterProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaFormRegister),
  })

  const onSubmit = (data: FormRegisterProps) => {
    console.log({ data })
  }

  return { errors, onSubmit, register, handleSubmit }
}
