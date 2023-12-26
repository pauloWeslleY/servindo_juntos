import { styled } from '@mui/material/styles'
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box'
import MuiGrid, { GridProps as MuiGridProps } from '@mui/material/Grid'
import MuiDivider, {
  DividerProps as MuiDividerProps,
} from '@mui/material/Divider'
import { grey } from '@mui/material/colors'

export const Section = styled(MuiGrid)<MuiGridProps>(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  columnGap: theme.spacing(1.5),

  padding: theme.spacing(5.5, 16.5),

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    padding: theme.spacing(5.5, 0.85),
    rowGap: theme.spacing(1.5),
  },
}))

export const Content = styled(MuiGrid)<MuiGridProps>(({ theme }) => ({
  '& > img': {
    width: '100%',
    height: 'auto',

    borderRadius: theme.spacing(0.65),
    boxShadow: theme.shadows[10],
  },

  '& div:nth-child(3)': {
    marginTop: theme.spacing(0.75),
  },

  [theme.breakpoints.down('md')]: {
    '& div:nth-child(3)': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
}))

export const Wrap = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  gap: theme.spacing(1.174),

  color: grey[100],

  '& > h3': {
    ...theme.typography.body2,
    fontSize: theme.spacing(1.75),
    color: theme.palette.secondary.main,

    marginTop: theme.spacing(0.675),
  },

  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}))

export const Separator = styled(MuiDivider)<MuiDividerProps>(({ theme }) => ({
  borderWidth: theme.spacing(0.25),
  borderColor: theme.palette.secondary.main,
  width: theme.spacing(2.5),

  [theme.breakpoints.down('md')]: {
    width: theme.spacing(5.5),
    margin: `${theme.spacing(0)} auto`,
  },
}))
