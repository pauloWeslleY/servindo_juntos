import { darken, styled } from '@mui/material/styles'
import MuiStack, { StackProps as MuiStackProps } from '@mui/material/Stack'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import { COLORS } from '@/styles'

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  height: 'auto',

  paddingBlock: theme.spacing(2.4),

  [theme.breakpoints.down('sm')]: {
    paddingInline: theme.spacing(0.75),
  },

  [theme.breakpoints.down('md')]: {
    paddingInline: theme.spacing(1.75),
  },
}))

export const FormWrapper = styled('div')(({ theme }) => ({
  background: darken(theme.palette.primary.light, 0.2),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1.5),

  '& > form': {
    padding: theme.spacing(1.4, 0),

    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
  },

  '& > small': {
    color: COLORS.zinc[800],
    fontSize: theme.spacing(0.9),
  },

  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}))

export const Head = styled(MuiStack)<MuiStackProps>(({ theme }) => ({
  '& > span': {
    fontSize: theme.spacing(1.3),
    color: COLORS.crimson[100],
  },

  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
  },
}))

export const EmailIcon = styled(EmailRoundedIcon)(({ theme }) => ({
  color: theme.palette.primary.contrastText,

  width: theme.spacing(3),
  height: theme.spacing(3),
}))
