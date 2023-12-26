import { styled } from '@mui/material/styles'
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material/TextField'
import { grey, red } from '@mui/material/colors'

export const Input = styled(MuiTextField)<MuiTextFieldProps>(({ theme }) => ({
  boxShadow: '0px 2px 4px rgba(0,0,0, 0.05)',

  '& label': {
    fontWeight: theme.typography.fontWeightBold,
    color: grey[600],
  },

  '& label.Mui-focused': {
    color: grey[600],
  },

  '& .MuiInput-underline:after': {
    borderBottomColor: grey[500],
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: grey[600],
      borderWidth: 2,

      transition: 'all .2s ease-in-out',

      '& legend': {
        '& span': {
          fontFamily: theme.typography.fontFamily,
        },
      },
    },

    '&:hover fieldset': {
      borderColor: grey[700],
    },

    '&:focus-visible fieldset': {
      borderColor: red[600],
    },

    '&.Mui-focused fieldset': {
      borderColor: grey[600],
    },
  },

  '& .MuiInputBase-root': {
    '& input': {
      fontWeight: theme.typography.fontWeightBold,
      color: grey[500],
      outline: 'none',

      transition: 'all .3s ease-in-out',

      '&:focus-visible': {
        color: grey[500],
      },
    },
  },

  '& .MuiFormHelperText-root': {
    ...theme.typography.subtitle2,
    fontSize: theme.spacing(1),
    color: red[600],
  },
}))
