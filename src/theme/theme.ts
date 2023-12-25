import { createTheme } from '@mui/material'
import { convertPixelToRem } from '@/utils/convert-pixel-to-rem'
import { THEME } from '@/styles/styes'

export const theme = createTheme({
  spacing: convertPixelToRem,
  palette: {
    primary: {
      main: THEME.COLORS.BLUE[700],
      light: THEME.COLORS.BLUE[100],
      contrastText: THEME.COLORS.GRAY[100],
    },
    secondary: {
      main: THEME.COLORS.ORANGE[400],
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
      'Petit Formal Script',
      'cursive',
    ].join(','),
    body1: {
      fontFamily: 'Montserrat',
    },
    body2: {
      fontFamily: "'Petit Formal Script', cursive",
    },
    button: {
      fontWeight: 600,
    },
  },
})
