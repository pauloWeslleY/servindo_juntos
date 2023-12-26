import { ComponentProps } from 'react'
import * as S from './styles'

type ButtonProps = ComponentProps<typeof S.Button> & {
  label: string
}

export const Button = ({ label, ...props }: ButtonProps) => {
  return <S.Button {...props}>{label}</S.Button>
}
