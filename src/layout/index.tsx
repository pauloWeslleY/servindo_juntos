import { Outlet } from 'react-router-dom'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { Toolbar } from './styles'

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
