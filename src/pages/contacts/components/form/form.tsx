import { FormHTMLAttributes } from 'react'
import Button from '@mui/material/Button'
import { grey } from '@mui/material/colors'
import { Input } from '@/components/ui'
import { useForms } from './hook/useForm'
import * as S from './form-styles'

type FormProps = FormHTMLAttributes<HTMLFormElement>

export const Form = ({ ...props }: FormProps) => {
  const { createContact, errors, handleSubmit, register, theme } = useForms()

  return (
    <S.Form {...props} onSubmit={handleSubmit(createContact)}>
      <S.Wrap>
        <div>
          <Input
            {...register('name')}
            id="name"
            label="Nome"
            placeholder="Informe seu nome"
            error={!!errors.name?.message}
            helperText={errors.name?.message}
          />
          <Input
            {...register('lastName')}
            id="lastName"
            label="Sobrenome"
            placeholder="Informe seu sobrenome"
            error={!!errors.lastName?.message}
            helperText={errors.lastName?.message}
          />
          <Input
            {...register('email')}
            id="email"
            label="Seu e-mail"
            placeholder="Informe seu e-mail"
            error={!!errors.email?.message}
            helperText={errors.email?.message}
          />
          <Input
            {...register('text')}
            id="text"
            label="Assunto do e-mail"
            placeholder="Informe seu texto"
            error={!!errors.text?.message}
            helperText={errors.text?.message}
          />
        </div>

        <div>
          <Input
            {...register('message')}
            id="message"
            label="Mensagem"
            placeholder="Sua mensagem"
            error={!!errors.message?.message}
            helperText={errors.message?.message}
            multiline
            rows={7}
          />
        </div>
      </S.Wrap>

      <S.FormActions>
        <S.FormControl
          label="Ao selecionar esta caixa e enviar seus, você nos autoriza a te enviar
              e-mails. Você pode cancelar a qualquer momento"
          error={errors.terms?.message}
          control={
            <S.Checkbox {...register('terms')} error={errors.terms?.message} />
          }
        />

        <div>
          <Button
            type="submit"
            variant="secondary"
            color="secondary"
            sx={{ p: theme.spacing(0.7), color: grey[900] }}
          >
            Enviar mensagem
          </Button>
        </div>
      </S.FormActions>
    </S.Form>
  )
}
