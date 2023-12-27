import { ComponentProps } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import * as S from './styles'

type NavLinkProps = ComponentProps<typeof S.NavLink> & {
  props: {
    text: string
    path: string
  }
}

export const NavLink = ({ props, ...rest }: NavLinkProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isActive = pathname === props.path ? 'secondary' : 'inherit'
  const isActiveLink = pathname === props.path ? 'outlined' : 'text'
  const isActiveText = pathname === props.path ? 'true' : 'false'

  const link = () => navigate(props.path)

  return (
    <S.NavLink
      {...rest}
      onClick={link}
      color={isActive}
      variant={isActiveLink}
      active={isActiveText}
    >
      {props.text}
    </S.NavLink>
  )
}
