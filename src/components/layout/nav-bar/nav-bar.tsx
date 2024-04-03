import { lighten } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import { MenuMobile } from '../menu-mobile'
import { NavLink } from './nav-link'
import { useNavBar } from './hook/useNavBar'
import { Props } from './nav-bar-props'
import { ElevationScroll } from './components'
import { COLORS, FONTS } from '@/styles'
import * as S from './nav-bar-styles'

export const NavBar = (props: Props) => {
  const { window, children } = props
  const { container, mobileOpen, handleDrawerToggle, routesLinks } = useNavBar({
    window,
  })

  return (
    <Box sx={{ display: 'flex' }}>
      <ElevationScroll {...props}>
        <AppBar
          component="nav"
          sx={{
            padding: (theme) => theme.spacing(0.5, 0),
            bgcolor: lighten(COLORS.crimson[600], 0.5),
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontSize: (theme) => theme.spacing(2),
                display: 'flex',
                justifyContent: { sm: 'flex-start', md: 'center' },
              }}
            >
              Servindojuntos
            </Typography>
            <S.NavWrapper>
              {routesLinks.map((item) => (
                <NavLink key={item.path} props={item} />
              ))}
              <Button
                variant="primary"
                href="https://unidos-com-cristo.vercel.app"
                startIcon={<AccountCircleRoundedIcon />}
                sx={{
                  '&.MuiButton-primary': { fontWeight: FONTS.fontWeight.bold },
                }}
              >
                Login
              </Button>
            </S.NavWrapper>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <nav>
        <MenuMobile.Root
          open={mobileOpen}
          container={container}
          onClose={handleDrawerToggle}
        >
          <MenuMobile.Content
            onClick={handleDrawerToggle}
            props={{ label: 'servindojuntos', navItems: routesLinks }}
          />
        </MenuMobile.Root>
      </nav>
      {children}
    </Box>
  )
}
