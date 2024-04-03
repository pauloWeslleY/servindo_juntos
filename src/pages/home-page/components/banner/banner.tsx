import { Button } from '@/components/ui/button'
import * as S from './banner-styles'

export const Banner = () => (
  <S.Container>
    <S.BannerTitle variant="body2">Bem-vindo a Servindo Juntos</S.BannerTitle>

    <div>
      <S.BannerSubTitle>
        Bem vindo ao mais novo site de relacionamento cristão Em breve nessa
        pagina voce desfrutara de uma nova experiencia!
      </S.BannerSubTitle>
      <Button label="Conte-nos mais" color="secondary" variant="secondary" />
    </div>
  </S.Container>
)
