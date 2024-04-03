import { Theme } from '@mui/material'
import { COLORS } from '@/styles'

function useButtonSecondary(theme: Theme) {
  const secondaryStyles = {
    '&.MuiButton-secondary': {
      fontWeight: theme.typography.fontWeightMedium,
      lineHeight: 1.5,
      backgroundColor: COLORS.crimson[500],
      padding: '6px 14px',
      borderRadius: theme.spacing(0.75),
      color: 'white',
      border: `1px solid ${COLORS.crimson[500]}`,
    },
  }

  const secondaryStylesHover = {
    '&:hover': {
      background: COLORS.pink[600],
    },
  }

  const secondaryStylesActive = {
    '&:active': {
      color: COLORS.crimson[50],
      boxShadow: 'none',
      transform: 'scale(0.99)',
    },
  }

  return {
    secondaryStyles,
    secondaryStylesHover,
    secondaryStylesActive,
  }
}

export { useButtonSecondary }
