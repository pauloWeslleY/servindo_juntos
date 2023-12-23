import * as S from './styles'

export const FormRegister = () => {
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

        <form>
          <S.InputField
            variant="outlined"
            label="Insira seu endereço de email"
          />

          <div>
            <S.Button variant="contained" color="secondary">
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
