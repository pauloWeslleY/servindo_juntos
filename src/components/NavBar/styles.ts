import { styled } from '@mui/material/styles'
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box'
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography'
import MuiToolbar, {
  ToolbarProps as MuiToolbarProps,
} from '@mui/material/Toolbar'

export const AppBar = styled(MuiAppBar)<MuiAppBarProps>(({ theme }) => ({
  padding: theme.spacing(0.5, 0),
}))

export const Toolbar = styled(MuiToolbar)<MuiToolbarProps>(() => ({}))

export const Container = styled(MuiBox)<MuiBoxProps>(() => ({
  display: 'flex',
}))

export const AppBarTitle = styled(MuiTypography)<MuiTypographyProps>(
  ({ theme }) => ({
    flexGrow: 1,
    fontSize: theme.spacing(2),

    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    [theme.breakpoints.down('md')]: {
      display: 'block',
      textAlign: 'center',
    },
  })
)

export const NavWrapper = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}))

type NavLinkType = MuiButtonProps & { active?: 'true' | 'false' }

export const NavLink = styled(MuiButton)<NavLinkType>(({ theme, active }) => ({
  color:
    active === 'true'
      ? theme.palette.secondary.main
      : theme.palette.primary.contrastText,
  fontWeight:
    active === 'true'
      ? theme.typography.fontWeightBold
      : theme.typography.fontWeightRegular,
}))
