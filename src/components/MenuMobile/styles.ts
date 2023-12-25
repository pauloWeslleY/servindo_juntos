import { styled } from '@mui/material/styles'
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box'
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer'
import MuiDivider, {
  DividerProps as MuiDividerProps,
} from '@mui/material/Divider'
import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography'
import MuiList, { ListProps as MuiListProps } from '@mui/material/List'
import MuiListItem, {
  ListItemProps as MuiListItemProps,
} from '@mui/material/ListItem'
import MuiListItemButton, {
  ListItemButtonProps as MuiListItemButtonProps,
} from '@mui/material/ListItemButton'
import MuiListItemText, {
  ListItemTextProps as MuiListItemTextProps,
} from '@mui/material/ListItemText'

const textCenter = 'center'

export const MenuMobileWrapper = styled(MuiDrawer)<MuiDrawerProps>(
  ({ theme }) => ({
    '& .MuiDrawer-paper': {
      width: theme.spacing(14),
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },

    [theme.breakpoints.up('sm')]: {
      display: 'block',
      '& .MuiDrawer-paper': {
        width: theme.spacing(25),
      },
    },

    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  })
)

export const Divider = styled(MuiDivider)<MuiDividerProps>(() => ({}))

export const Container = styled(MuiBox)<MuiBoxProps>(() => ({
  textAlign: textCenter,
}))

export const TitleMobile = styled(MuiTypography)<MuiTypographyProps>(
  ({ theme }) => ({
    marginBlock: theme.spacing(2),
    fontSize: theme.spacing(1.3),
  })
)

export const MenuList = styled(MuiList)<MuiListProps>(() => ({}))
export const MenuListItem = styled(MuiListItem)<MuiListItemProps>(() => ({}))

export const MenuListItemButton = styled(
  MuiListItemButton
)<MuiListItemButtonProps>(() => ({
  textAlign: textCenter,
}))

export const MenuListItemText = styled(MuiListItemText)<MuiListItemTextProps>(
  () => ({})
)
