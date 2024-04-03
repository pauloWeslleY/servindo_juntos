import { PaletteOptions } from '@mui/material'
import { red } from '@mui/material/colors'
import { COLORS } from '@/styles'

type PaletteProps = { theme: 'light' | 'dark' }

export const Palette = ({ theme }: PaletteProps): PaletteOptions => ({
  mode: theme,
  common: {
    black: COLORS.black,
    white: COLORS.white,
  },
  primary: {
    main: COLORS.crimson[500],
    light: COLORS.crimson[200],
    dark: COLORS.crimson[800],
    contrastText: COLORS.white,
  },
  secondary: {
    main: COLORS.pink[500],
    light: COLORS.pink[300],
    dark: COLORS.pink[900],
    contrastText: COLORS.pink[700],
  },
  error: {
    main: red[600],
    light: red[500],
    dark: red[700],
  },
  background: {
    paper: COLORS.pink[100],
    default: COLORS.background,
  },
})
