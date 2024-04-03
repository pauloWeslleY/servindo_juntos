import { ButtonProps as MuiButtonProps } from '@mui/material/Button'

type NavLinkProps = MuiButtonProps & { active?: 'true' | 'false' }

type Props = {
  window?: () => Window
  children: ReactElement
}

export type { NavLinkProps, Props }
