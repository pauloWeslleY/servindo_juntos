import { Theme } from '@mui/material'
import { red } from '@mui/material/colors'

export const FormHelperText = (theme: Theme) => ({
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        ...theme.typography.h5,

        '&.MuiFormHelperText-sizeSmall': {
          color: red[600],
        },
      },
    },
  },
})
