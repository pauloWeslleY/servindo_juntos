// ==============================|| OVERRIDES - INPUT LABEL ||============================== //
import { Theme, alpha } from '@mui/material'
import { grey, red } from '@mui/material/colors'
import { COLORS, FONTS } from '@/styles'

export const InputLabel = (theme: Theme) => ({
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontWeight: FONTS.fontWeight.semibold,

        '&.Mui-disabled': {
          color: grey[600],
        },
      },
      outlined: {
        fontWeight: theme.typography.fontWeightBold,

        '&.MuiInputLabel-sizeSmall': {
          color: alpha(COLORS.crimson[600], 0.6),

          '&.Mui-error': {
            color: red[700],
          },
        },
      },
    },
  },
})
