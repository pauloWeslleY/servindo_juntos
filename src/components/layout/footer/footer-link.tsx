import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box'
import * as S from './footer-styles'

type FooterLinkProps = MuiBoxProps & {
  props: {
    text: string
    path: string
  }
}

export const FooterLink = ({ props, ...rest }: FooterLinkProps) => (
  <MuiBox {...rest}>
    <S.MenuLink to={props.path}>{props.text}</S.MenuLink>
  </MuiBox>
)
