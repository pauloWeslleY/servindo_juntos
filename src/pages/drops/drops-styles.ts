import { styled } from '@mui/material'
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box'
import { COLORS } from '@/styles'

export const Wrapper = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  background: theme.palette.primary.light,
  padding: theme.spacing(5),

  '& > div': {
    color: COLORS.zinc[700],
  },

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.15),

    '& > div': {
      textAlign: 'center',
    },
  },
}))
