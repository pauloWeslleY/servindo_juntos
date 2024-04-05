// material-ui
import { Theme, alpha } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import { COLORS, FONTS } from '@/styles'

// ==============================|| OVERRIDES - OUTLINED INPUT ||============================== //

export const OutlinedInput = (theme: Theme) => ({
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        color: COLORS.pink[700],

        '& fieldset': {
          borderColor: alpha(COLORS.crimson[600], 0.6),
          borderWidth: 2,
          borderRadius: theme.spacing(1),

          transition: '.2s ease-in',
        },

        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: COLORS.pink.A100,
        },

        '&.Mui-focused fieldset': {
          borderColor: COLORS.pink.A100,
        },

        '&.MuiOutlinedInput-input:-webkit-autofill': {
          '&:hover, &:focus': {
            WebkitTextFillColor: 'red',
            background: 'transparent',
            transition: 'background-color 5000s ease-in-out 0s',
          },
        },

        '& input': {
          fontSize: FONTS.fontSizes.md,
          fontWeight: theme.typography.fontWeightMedium,
          color: COLORS.pink[700],
          outline: 'none',

          transition: 'all .3s ease-in-out',

          '&::placeholder': {
            color: grey[800],
            fontSize: FONTS.fontSizes.lg,
          },

          '&:focus-visible': {
            color: COLORS.pink.A700,
          },
        },

        '&.Mui-disabled': {
          background: alpha(theme.palette.grey[300], 0.1),
        },
      },
    },
  },
})
