import { ComponentProps } from 'react'
import * as S from './styles'

type FooterLinkProps = ComponentProps<typeof S.FooterLink> & {
  props: {
    text: string
    path: string
  }
}

export const FooterLink = ({ props, ...rest }: FooterLinkProps) => (
  <S.FooterLink {...rest}>
    <S.MenuLink to={props.path}>{props.text}</S.MenuLink>
  </S.FooterLink>
)
