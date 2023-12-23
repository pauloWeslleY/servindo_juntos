import { ReactElement, cloneElement, useState } from 'react'
import { useScrollTrigger } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { MenuMobile } from '../MenuMobile'
import * as S from './styles'
import { NavLink } from './NavLink'

type Props = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */

  window?: () => Window
  children: ReactElement
}

const ElevationScroll = (props: Props) => {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const navItems = [
  { text: 'Home', path: '/' },
  { text: 'Devocional', path: '/devotional' },
  { text: 'Cadastro', path: '/register' },
  { text: 'Sobre Nos', path: '/about' },
  { text: 'Contatos', path: '/contact' },
]

export const NavBar = (props: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { window, children } = props

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <S.Container>
      <CssBaseline />
      <ElevationScroll {...props}>
        <S.AppBar component="nav">
          <S.Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <S.AppBarTitle variant="body2" component="div">
              servindojuntos
            </S.AppBarTitle>
            <S.NavWrapper>
              {navItems.map(item => (
                <NavLink key={item.path} props={item} />
              ))}
            </S.NavWrapper>
          </S.Toolbar>
        </S.AppBar>
      </ElevationScroll>
      <nav>
        <MenuMobile.Root
          open={mobileOpen}
          container={container}
          onClose={handleDrawerToggle}
        >
          <MenuMobile.Content
            onClick={handleDrawerToggle}
            props={{ label: 'servindojuntos', navItems }}
          />
        </MenuMobile.Root>
      </nav>
      {children}
    </S.Container>
  )
}
