import { Outlet } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar'
import { NavBar, Footer } from '@/components/layout'

export const Layout = () => {
  return (
    <div>
      <NavBar>
        <Toolbar />
      </NavBar>

      <Outlet />

      <Footer />
    </div>
  )
}
