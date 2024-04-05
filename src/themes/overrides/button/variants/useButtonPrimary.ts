import { Theme, lighten } from '@mui/material'
import { grey } from '@mui/material/colors'
import { COLORS, FONTS } from '@/styles'

export function useButtonPrimary(theme: Theme) {
  const rootStyles = {
    '&.MuiButton-primary': {
      fontWeight: FONTS.fontWeight.medium,
      lineHeight: 1.5,
      padding: '6px 14px',
      letterSpacing: '0.05em',
      borderRadius: theme.spacing(0.75),
      transition: 'all 150ms ease',
      boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.10)',
      border: `1px solid ${grey[200]}`,
      color: COLORS.pink.A100,
      background: COLORS.crimson[50],
    },
  }

  const hoverStyles = {
    '&:hover': {
      color: lighten(COLORS.crimson[800], 0.1),
      background: lighten(COLORS.crimson[300], 0.5),
      borderColor: grey[100],
    },
  }

  const activeStyles = {
    '&:active': {
      color: COLORS.crimson[400],
      backgroundColor: COLORS.crimson[100],
      borderColor: COLORS.crimson[200],
      boxShadow: theme.shadows[2],
    },
  }

  return {
    rootStyles,
    hoverStyles,
    activeStyles,
  }
}
