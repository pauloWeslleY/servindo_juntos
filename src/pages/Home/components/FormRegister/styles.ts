import { styled } from '@mui/material/styles'
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box'
import MuiStack, { StackProps as MuiStackProps } from '@mui/material/Stack'
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography'
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material/TextField'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import { grey, red } from '@mui/material/colors'

export const Container = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  background: theme.palette.primary.main,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  height: 'auto',

  paddingBlock: theme.spacing(2.4),

  [theme.breakpoints.down('xs')]: {
    paddingInline: theme.spacing(0.75),
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

  [theme.breakpoints.down('xs')]: {
    textAlign: 'center',
  },
}))

export const Head = styled(MuiStack)<MuiStackProps>(({ theme }) => ({
  '& > span': {
    fontSize: theme.spacing(1.3),
    color: theme.palette.primary.contrastText,
  },

  [theme.breakpoints.down('xs')]: {
    alignItems: 'center',
  },
}))

export const InputField = styled(MuiTextField)<MuiTextFieldProps>(
  ({ theme }) => ({
    boxShadow: '0px 2px 4px rgba(0,0,0, 0.05)',

    '& label': {
      fontWeight: theme.typography.fontWeightBold,
      color: grey[700],
    },

    '& label.Mui-focused': {
      color: grey[700],
    },

    '& .MuiInput-underline:after': {
      borderBottomColor: grey[500],
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: grey[700],
        borderWidth: 2,

        transition: 'all .2s ease-in-out',

        '& legend': {
          '& span': {
            fontFamily: theme.typography.fontFamily,
          },
        },
      },

      '&:hover fieldset': {
        borderColor: grey[500],
      },

      '&:focus-visible fieldset': {
        borderColor: red[600],
      },

      '&.Mui-focused fieldset': {
        borderColor: grey[700],
      },
    },

    '& .MuiInputBase-root': {
      '& input': {
        fontWeight: theme.typography.fontWeightBold,
        color: grey[600],
        outline: 'none',

        transition: 'all .3s ease-in-out',

        '&:focus-visible': {
          color: grey[500],
        },
      },
    },
  })
)

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
