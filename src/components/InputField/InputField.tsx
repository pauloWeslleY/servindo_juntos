import { ComponentProps } from 'react'
import { Input } from './styles'

type InputFieldProps = ComponentProps<typeof Input>

export const InputField = ({ ...props }: InputFieldProps) => {
  return <Input {...props} />
}
