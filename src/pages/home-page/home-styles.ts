import { alpha, styled } from '@mui/material'
import MuiStack, { StackProps as MuiStackProps } from '@mui/material/Stack'
import { COLORS } from '@/styles'

const Wrapper = styled(MuiStack)<MuiStackProps>(({ theme }) => ({
  background: alpha(COLORS.crimson[300], 0.1),
  flexDirection: 'row',
  gap: theme.spacing(2),

  paddingInline: theme.spacing(15),
  paddingBlock: theme.spacing(2),

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    paddingInline: theme.spacing(1.2),
  },

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
    paddingInline: theme.spacing(1.5),
  },
}))

const Content = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(1.2),

  '& > span': {
    fontSize: theme.spacing(1.3),
    fontWeight: theme.typography.fontWeightLight,
  },

  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}))

const Thumbnail = styled('div')(({ theme }) => ({
  '& > img': {
    width: '100%',
    height: 'auto',

    borderRadius: theme.spacing(0.5),
  },
}))

export { Wrapper, Content, Thumbnail }
