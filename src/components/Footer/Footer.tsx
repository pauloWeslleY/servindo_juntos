import { FooterLink } from './FooterLink'
import footerLinks from '@/routes/links'
import * as S from './styles'

type TitleProps = { text: string }

const Title = ({ text }: TitleProps) => (
  <S.FooterTitle component="h3" variant="body2">
    {text}
  </S.FooterTitle>
)

export const Footer = () => {
  return (
    <>
      <S.Footer component="footer">
        <S.MenuWrapper>
          <S.FooterMenu component="ul">
            {footerLinks.map(props => (
              <FooterLink key={props.path} component="li" props={props} />
            ))}
          </S.FooterMenu>

          <Title text="Servindo Juntos" />
        </S.MenuWrapper>

        <S.Divider />

        <S.Wrapper>
          <S.Content>
            <Title text="Endereço" />
          </S.Content>
          <S.Content>
            <Title text="Quem Somos" />
          </S.Content>
        </S.Wrapper>
      </S.Footer>

      <S.FooterBar>
        <S.Copy>Mapa do Site</S.Copy>

        <S.Copy>Siga-nos</S.Copy>
      </S.FooterBar>
    </>
  )
}
