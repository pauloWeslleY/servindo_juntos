import { Outlet } from 'react-router-dom'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

import * as S from './styles'

export const HomeLayout = () => {
  return (
    <div>
      <NavBar>
        <S.Toolbar />
      </NavBar>

      <Outlet />

      <Footer />
    </div>
  )
}
