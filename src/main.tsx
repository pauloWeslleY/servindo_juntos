import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles, ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { App } from './App'
import GlobalStylesReset from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={GlobalStylesReset} />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
