import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SchemaFormProps, schemaForm } from '@/Schema/SchemaFormRegisterProps'

export const useFormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaFormProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaForm),
  })

  console.log(errors)

  const onSubmit = (data: SchemaFormProps) => {
    console.log({ data })
  }

  return { errors, onSubmit, register, handleSubmit }
}
