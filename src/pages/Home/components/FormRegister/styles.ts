import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box'
import MuiStack, { StackProps as MuiStackProps } from '@mui/material/Stack'
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'

export const Container = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  background: theme.palette.primary.main,

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

export const FormWrapper = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  background: theme.palette.primary.light,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1.5),

  '& > form': {
    padding: theme.spacing(1.4, 0),

    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
  },

  '& > small': {
    color: grey[200],
    fontSize: theme.spacing(0.9),
  },

  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}))

export const Head = styled(MuiStack)<MuiStackProps>(({ theme }) => ({
  '& > span': {
    fontSize: theme.spacing(1.3),
    color: theme.palette.primary.contrastText,
  },

  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
  },
}))

export const Button = styled(MuiButton)<MuiButtonProps>(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  padding: theme.spacing(0.7, 1),
}))

export const Title = styled(MuiTypography)<MuiTypographyProps>(({ theme }) => ({
  fontSize: theme.spacing(2.4),
  color: theme.palette.secondary.main,

  marginBlock: theme.spacing(0.7),
}))

export const EmailIcon = styled(EmailRoundedIcon)(({ theme }) => ({
  color: theme.palette.primary.contrastText,

  width: theme.spacing(3),
  height: theme.spacing(3),
}))
