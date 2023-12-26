import { ComponentProps } from 'react'
import { Path, UseFormRegister } from 'react-hook-form'
import { SchemaFormProps } from '@/Schema/SchemaFormRegisterProps'
import { Input } from './styles'

type InputFieldProps = ComponentProps<typeof Input> & {
  text: Path<SchemaFormProps>
  register: UseFormRegister<SchemaFormProps>
}

export const InputLabel = ({ register, text, ...props }: InputFieldProps) => {
  return <Input {...props} {...register(text)} />
}
