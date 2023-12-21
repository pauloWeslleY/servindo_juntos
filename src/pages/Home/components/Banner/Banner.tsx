import { Button } from '@mui/material'
import * as S from './styles'

export const Banner = () => {
  return (
    <S.Container>
      <S.BannerTitle variant="body2">Bem-vindo a servindojuntos</S.BannerTitle>

      <div>
        <S.BannerSubTitle>
          Bem vindo ao mais novo site de relacionamento cristão Em breve nessa
          pagina voce desfrutara de uma nova experiencia!
        </S.BannerSubTitle>
        <Button color="secondary" variant="contained">
          Conte-nos mais
        </Button>
      </div>
    </S.Container>
  )
}
