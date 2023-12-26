import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputField } from '@/components/InputField'
import { SchemaFormProps, schemaForm } from '@/Schema/SchemaFormRegisterProps'
import * as S from './styles'

export const FormRegister = () => {
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

  return (
    <S.Container>
      <S.FormWrapper>
        <S.Head>
          <S.EmailIcon />
          <S.Title component="h3" variant="body2">
            Inscreva-se
          </S.Title>
          <span>Assine nossa newsletter e mantenha-se atualizado</span>
        </S.Head>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            {...register('email')}
            variant="outlined"
            label="Insira seu endereço de email"
            error={!!errors.email?.message}
            helperText={errors.email?.message}
          />

          <div>
            <S.Button type="submit" variant="contained" color="secondary">
              Inscreva-se
            </S.Button>
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
