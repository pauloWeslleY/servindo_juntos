import { NavBar } from '@/components/NavBar'
import { Outlet } from 'react-router-dom'

export const HomeLayout = () => {
  return (
    <div>
      <NavBar />

      <Outlet />
    </div>
  )
}
