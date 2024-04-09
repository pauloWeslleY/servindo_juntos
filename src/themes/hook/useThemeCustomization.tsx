import { useMemo } from 'react'
import { ThemeOptions } from '@mui/material'
import { Palette } from '../palette'
import { Typography } from '../typography'
import { FONTS, spacing } from '@/styles'

const useThemeCustomization = () => {
  const themePalette = Palette({ theme: 'light' })
  const themeTypography = Typography({
    font: FONTS.fontFamily.fonts,
  })

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
      spacing,
      typography: themeTypography,
      palette: themePalette,
    }),
    [themeTypography, themePalette],
  )

  return { themeOptions }
}

export { useThemeCustomization }
