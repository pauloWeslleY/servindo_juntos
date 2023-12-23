import { styled } from '@mui/material/styles'
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box'
import MuiDivider, {
  DividerProps as MuiDividerProps,
} from '@mui/material/Divider'
import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography'
import MuiGrid, { GridProps as MuiGridProps } from '@mui/material/Grid'
import { grey } from '@mui/material/colors'

export const Footer = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  background: theme.palette.primary.contrastText,
}))

export const FooterBar = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  background: grey[400],
  height: theme.spacing(3.5),
  borderRight: `${theme.spacing(1)} solid ${theme.palette.secondary.main}`,

  padding: theme.spacing(0, 0.7),

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  [theme.breakpoints.up('xs')]: {
    justifyContent: 'space-around',
  },
}))

export const MenuWrapper = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',

  marginInline: theme.spacing(12),
  padding: theme.spacing(2, 3),

  [theme.breakpoints.down('xs')]: {
    alignItems: 'center',
    flexDirection: 'column',

    gap: theme.spacing(0.95),
    marginInline: theme.spacing(0),
  },
}))

export const FooterMenu = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),

  listStyle: 'none',

  [theme.breakpoints.down('xs')]: {
    flexDirection: 'column',

    gap: theme.spacing(0.9),
    marginBottom: theme.spacing(0.8),

    '& > li': {
      textAlign: 'center',
      fontWeight: theme.typography.fontWeightBold,
    },
  },
}))

export const FooterTitle = styled(MuiTypography)<MuiTypographyProps>(
  ({ theme }) => ({
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.spacing(1.4),
    color: grey[800],
  })
)

export const Divider = styled(MuiDivider)<MuiDividerProps>(({ theme }) => ({
  marginInline: theme.spacing(15),
}))

export const Wrapper = styled(MuiGrid)<MuiGridProps>(({ theme }) => ({
  display: 'grid',

  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(1, 1fr)',

  textAlign: 'center',

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },

  marginInline: theme.spacing(3),
  padding: theme.spacing(0.5, 3, 2, 3),
}))

export const Content = styled(MuiGrid)<MuiGridProps>(() => ({}))

export const Copy = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  fontWeight: theme.typography.fontFamily,
  fontSize: theme.spacing(1.25),
}))
