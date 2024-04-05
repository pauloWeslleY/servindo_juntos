import { Theme } from '@mui/material'

export const Paper = (theme: Theme) => ({
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: theme.spacing(1),
      },
    },
  },
})
