import { AboutUs } from './components/AboutUs'
import { GoogleMaps } from './components/GoogleMaps'
import * as S from './styles'

export const About = () => {
  return (
    <S.Container component="main">
      <AboutUs.Root imageUrl="/image/bg3.jpg">
        <AboutUs.Content
          props={{
            title: 'Aqui você pode contar mais sobre sua empresa.',
            description1: `Tem algo mais a dizer ou mostrar? Pode usar esta seção para isso.
              Adicione fotos e uma curta descrição para mostrar aos visitantes o que
              mais você desejar.`,
            description2: 'Adicione uma descrição',
          }}
        />
      </AboutUs.Root>

      <S.Divider />
      <GoogleMaps />
      <S.Divider />

      <AboutUs.Root imageUrl="/image/bg3.jpg">
        <AboutUs.Content
          props={{
            title: 'Aqui você pode contar mais sobre sua empresa.',
            description1: `Tem algo mais a dizer ou mostrar? Pode usar esta seção para isso.
              Adicione fotos e uma curta descrição para mostrar aos visitantes o que
              mais você desejar.`,
            description2: 'Adicione uma descrição',
          }}
        />
      </AboutUs.Root>
    </S.Container>
  )
}
