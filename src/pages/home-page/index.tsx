import Typography from '@mui/material/Typography'
import { Banner, FormRegister } from './components'
import * as S from './home-styles'

export const Home = () => (
  <div>
    <Banner />

    <S.Wrapper component="section">
      <S.Content>
        <Typography
          component="h2"
          variant="h2"
          sx={(theme) => ({
            fontSize: theme.spacing(2.8),
            marginBottom: theme.spacing(0.8),
          })}
        >
          Aqui você pode contar mais sobre sua empresa.
        </Typography>
        <span>
          Tem algo mais a dizer ou mostrar? Pode usar esta seção para isso.
          Adicione fotos e uma curta descrição para mostrar aos visitantes o que
          mais você desejar.
        </span>
      </S.Content>
      <S.Thumbnail>
        <img src="/image/thumbnail.jpeg" alt="Thumbnail" />
      </S.Thumbnail>
    </S.Wrapper>

    <FormRegister />
  </div>
)
