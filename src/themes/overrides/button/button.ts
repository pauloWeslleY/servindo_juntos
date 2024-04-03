/* eslint-disable prettier/prettier */
import { ButtonClasses, ButtonProps, Interpolation, Theme } from '@mui/material'
import { grey } from '@mui/material/colors'
import { OverridesStyleRules } from '@mui/material/styles/overrides'
import { useButtonPrimary } from './variants/useButtonPrimary'
import { COLORS, FONTS } from '@/styles'
import { useButtonSecondary } from './variants/useButtonSecondary'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true
    secondary: true
  }
}

type DefaultProps = Partial<ButtonProps> | undefined

type VariantsProps = {
  props: Partial<ButtonProps>
  style: Interpolation<{ theme: unknown }>
}[] | undefined

type StyleOverridesProps =
  | Partial<OverridesStyleRules<keyof ButtonClasses, 'MuiButton', unknown>>
  | undefined

export function Button(theme: Theme) {
  const { secondaryStyles, secondaryStylesActive, secondaryStylesHover } =
    useButtonSecondary(theme)

  const { rootStyles, activeStyles, hoverStyles } = useButtonPrimary(theme)

  const disabledStyle = {
    '&.Mui-disabled': {
      backgroundColor: grey[200],
      color: grey[700],
      border: 0,
      cursor: 'default',
      boxShadow: 'none',
      transform: 'scale(1)',
    },
  }

  const hoverStyle = {
    '&:hover': {
      color: COLORS.crimson[200],
      backgroundColor: COLORS.crimson[500],
      borderColor: COLORS.crimson[200],
      borderRadius: theme.spacing(0.75),
    },
  }

  const activeStyle = {
    '&:active': {
      boxShadow: 'none',
      borderRadius: theme.spacing(0.75),
      backgroundColor: COLORS.crimson[400],
      borderColor: COLORS.crimson[400],
      transform: 'scale(0.99)',
    },
  }

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
      } satisfies DefaultProps,
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',

          fontWeight: FONTS.fontWeight.bold,
          fontSize: FONTS.fontSizes.md,
          ...hoverStyle,
          ...activeStyle,
        },
        contained: {
          ...disabledStyle,
        },
        outlined: {
          ...disabledStyle,
        },
      } satisfies StyleOverridesProps,
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            ...rootStyles,

            ...activeStyles,
            ...hoverStyles,
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            ...secondaryStyles,

            ...secondaryStylesActive,
            ...secondaryStylesHover,
          },
        },
      ] satisfies VariantsProps,
    },
  }
}
