import { Link, LinkProps } from 'react-router-dom'
import { styled } from '@mui/material'
import { grey } from '@mui/material/colors'
import MuiGrid, { GridProps as MuiGridProps } from '@mui/material/Grid'
import { COLORS } from '@/styles'

export const FooterBar = styled('div')(({ theme }) => ({
  background: COLORS.zinc[200],
  height: theme.spacing(3.5),
  borderRight: `${theme.spacing(1)} solid ${theme.palette.primary.main}`,

  padding: theme.spacing(0, 0.7),

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'space-around',
  },
}))

export const MenuWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',

  marginInline: theme.spacing(12),
  padding: theme.spacing(2, 3),

  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    flexDirection: 'column',

    gap: theme.spacing(0.95),
    marginInline: theme.spacing(0),
  },
}))

export const FooterMenu = styled('ul')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),

  listStyle: 'none',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',

    gap: theme.spacing(0.9),
    marginBottom: theme.spacing(0.8),

    '& > li': {
      textAlign: 'center',
      fontWeight: theme.typography.fontWeightBold,
    },
  },
}))

export const MenuLink = styled(Link)<LinkProps>(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  textDecoration: 'none',
  color: grey[800],

  transition: '.2s ease',

  '&:hover': {
    color: theme.palette.secondary.main,
  },
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
