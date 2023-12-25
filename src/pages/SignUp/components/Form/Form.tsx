import { FormHTMLAttributes } from 'react'
import { InputField } from '@/components/InputField/InputField'
import * as S from './styles'

type FormProps = FormHTMLAttributes<HTMLFormElement>

export const Form = ({ ...props }: FormProps) => {
  return (
    <S.Form {...props}>
      <S.Wrap>
        <div>
          <InputField variant="outlined" label="Nome" />
          <InputField variant="outlined" label="Sobrenome" />
          <InputField variant="outlined" label="Seu e-mail" />
          <InputField variant="outlined" label="Assunto do e-mail" />
        </div>

        <div>
          <S.TextArea minRows={16} placeholder="Sua mensagem" />
        </div>
      </S.Wrap>
    </S.Form>
  )
}
