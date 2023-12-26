import { FormHTMLAttributes } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputField } from '@/components/InputField'
import { Button } from '@/components/Button'
import {
  SchemaFormContactProps,
  schemaFormContact,
} from '@/Schema/SchemaFormContactProps'
import * as S from './styles'
import { grey } from '@mui/material/colors'
import { useMuiTheme } from '@/hooks/useMuiTheme'

type FormProps = FormHTMLAttributes<HTMLFormElement>

export const Form = ({ ...props }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaFormContactProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaFormContact),
  })
  const theme = useMuiTheme()

  console.log(errors)

  const createContact = (data: SchemaFormContactProps) => {
    console.log({ data })
  }

  return (
    <S.Form {...props} onSubmit={handleSubmit(createContact)}>
      <S.Wrap>
        <div>
          <InputField
            {...register('name')}
            label="Nome"
            variant="outlined"
            error={!!errors.name?.message}
            helperText={errors.name?.message}
          />
          <InputField
            {...register('lastName')}
            label="Sobrenome"
            variant="outlined"
            error={!!errors.lastName?.message}
            helperText={errors.lastName?.message}
          />
          <InputField
            {...register('email')}
            label="Seu e-mail"
            variant="outlined"
            error={!!errors.email?.message}
            helperText={errors.email?.message}
          />
          <InputField
            {...register('text')}
            label="Assunto do e-mail"
            variant="outlined"
            error={!!errors.text?.message}
            helperText={errors.text?.message}
          />
        </div>

        <div>
          <S.TextArea
            {...register('message')}
            placeholder="Sua mensagem"
            error={errors.message?.message}
          />
          {errors.message?.message && (
            <S.HelperText text={errors.message?.message}>
              {errors.message?.message}
            </S.HelperText>
          )}
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
            label="Enviar mensagem"
            variant="contained"
            color="secondary"
            sx={{ p: theme.spacing(0.7), color: grey[900] }}
          />
        </div>
      </S.FormActions>
    </S.Form>
  )
}
