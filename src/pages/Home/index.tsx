import { Banner } from './components/Banner'
import { FormRegister } from './components/FormRegister'

import * as S from './styles'

export const Home = () => {
  return (
    <div>
      <Banner />

      <S.Wrapper component="section">
        <S.Content>
          <S.Title component="h2" variant="body2">
            Aqui você pode contar mais sobre sua empresa.
          </S.Title>
          <span>
            Tem algo mais a dizer ou mostrar? Pode usar esta seção para isso.
            Adicione fotos e uma curta descrição para mostrar aos visitantes o
            que mais você desejar.
          </span>
        </S.Content>
        <S.Thumbnail>
          <img src="/image/thumbnail.jpeg" alt="Thumbnail" />
        </S.Thumbnail>
      </S.Wrapper>

      <FormRegister />
    </div>
  )
}
