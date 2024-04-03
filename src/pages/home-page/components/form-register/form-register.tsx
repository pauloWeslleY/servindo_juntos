import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Input } from '@/components/ui'
import { useFormRegister } from './hook/useFormRegister'
import * as S from './form-register-styles'
import { COLORS } from '@/styles'

export const FormRegister = () => {
  const { errors, handleSubmit, onSubmit, register } = useFormRegister()

  return (
    <S.Container>
      <S.FormWrapper>
        <S.Head>
          <S.EmailIcon />
          <Typography
            component="h3"
            variant="h2"
            sx={(theme) => ({
              fontSize: theme.spacing(2.4),
              color: COLORS.zinc[700],
              marginBlock: theme.spacing(0.7),
            })}
          >
            Inscreva-se
          </Typography>
          <span>Assine nossa newsletter e mantenha-se atualizado</span>
        </S.Head>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('email')}
            id="email"
            label="Insira seu endereço de email"
            placeholder="Informe seu email"
            error={!!errors.email?.message}
            helperText={errors.email?.message}
          />

          <div>
            <Button type="submit" variant="secondary" color="secondary">
              Inscreva-se
            </Button>
          </div>
        </form>

        <small>
          Ao marcar esta caixa e enviar suas informações, você está nos dando
          permissão de lhe enviar e-mails. Você pode cancelar a qualquer
          momento.
        </small>
      </S.FormWrapper>
    </S.Container>
  )
}
