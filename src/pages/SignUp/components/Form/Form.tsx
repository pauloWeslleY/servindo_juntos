import { FormHTMLAttributes } from 'react'
import { InputField } from '@/components/InputField/InputField'
import { Button } from '@/components/Button'
import * as S from './styles'

type FormProps = FormHTMLAttributes<HTMLFormElement>

export const Form = ({ ...props }: FormProps) => (
  <S.Form {...props}>
    <S.Wrap>
      <div>
        <InputField variant="outlined" label="Nome" />
        <InputField variant="outlined" label="Sobrenome" />
        <InputField variant="outlined" label="Seu e-mail" />
        <InputField variant="outlined" label="Assunto do e-mail" />
      </div>

      <div>
        <S.TextArea placeholder="Sua mensagem" />
      </div>
    </S.Wrap>

    <S.FormActions>
      <S.FormControlLabel
        label="Ao selecionar esta caixa e enviar seus, você nos autoriza a te enviar
          e-mails. Você pode cancelar a qualquer momento"
        control={<S.Checkbox />}
      />

      <div>
        <Button
          label="Enviar mensagem"
          variant="contained"
          color="secondary"
          sx={S.ButtonSubmit}
        />
      </div>
    </S.FormActions>
  </S.Form>
)
