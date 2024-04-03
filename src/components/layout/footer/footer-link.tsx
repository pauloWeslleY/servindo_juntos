import * as S from './footer-styles'

type FooterLinkProps = {
  props: {
    text: string
    path: string
  }
}

export const FooterLink = ({ props }: FooterLinkProps) => (
  <li>
    <S.MenuLink to={props.path}>{props.text}</S.MenuLink>
  </li>
)
