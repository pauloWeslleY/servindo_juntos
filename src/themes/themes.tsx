import { ReactNode, useMemo } from 'react'
import {
  CssBaseline,
  GlobalStyles,
  StyledEngineProvider,
  ThemeOptions,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material'
import { Typography } from './typography'
import { Palette } from './palette'
import { GlobalStyled } from './globalStyled'
import { ComponentOverrides } from './overrides'
import { FONTS, spacing } from '@/styles'

export function ThemeCustomization({ children }: { children: ReactNode }) {
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

  let themes = createTheme(themeOptions)
  themes.components = ComponentOverrides(themes)
  themes = responsiveFontSizes(themes)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <GlobalStyles styles={GlobalStyled} />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
