import { Form } from './components/Form'

import * as S from './styles'

export const SignUp = () => {
  return (
    <S.Container component="main">
      <S.Wrap component="div">
        <header>
          <S.Heading variant="body2" component="h2">
            Fale comigo
          </S.Heading>
          <p>Escreva algo neste espaço.</p>
        </header>
      </S.Wrap>

      <Form />
    </S.Container>
  )
}
