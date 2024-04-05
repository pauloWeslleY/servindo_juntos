import { useLocation, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'

type NavLinkProps = {
  props: {
    text: string
    path: string
  }
}

export const NavLink = ({ props }: NavLinkProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <Button
      onClick={() => navigate(props.path)}
      color={pathname === props.path ? 'error' : 'inherit'}
      variant={pathname === props.path ? 'secondary' : 'text'}
    >
      {props.text}
    </Button>
  )
}
