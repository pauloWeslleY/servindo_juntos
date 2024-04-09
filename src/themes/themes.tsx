import { ReactNode } from 'react'
import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  responsiveFontSizes,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material'
import { GlobalStyled } from './globalStyled'
import { ComponentOverrides } from './overrides'
import { useThemeCustomization } from './hook/useThemeCustomization'

export function ThemeCustomization({ children }: { children: ReactNode }) {
  const { themeOptions } = useThemeCustomization()
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
