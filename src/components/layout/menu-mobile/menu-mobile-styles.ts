import { COLORS } from '@/styles'
import { lighten, styled } from '@mui/material'
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer'

const MenuMobileWrapper = styled(MuiDrawer)<MuiDrawerProps>(({ theme }) => ({
  '.MuiPaper-root': {
    width: theme.spacing(18),
    background: lighten(COLORS.crimson[600], 0.5),
    color: theme.palette.primary.contrastText,
  },

  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },

  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}))

export { MenuMobileWrapper }
