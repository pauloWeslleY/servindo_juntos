import { HomeLayout } from '@/Layout/HomeLayout'
import { Devotional } from '@/pages/Devotional'
import { Home } from '@/pages/Home'
import { RouteObject } from 'react-router-dom'

export const AppRoutes: RouteObject = {
  path: '/',
  element: <HomeLayout />,
  errorElement: <h1>Not found</h1>,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/devotional',
      element: <Devotional />,
    },
    {
      path: '/register',
      element: <h1>Cadastro</h1>,
    },
    {
      path: '/about',
      element: <h1>Sobre Nos</h1>,
    },
    {
      path: '/contact',
      element: <h1>Contatos</h1>,
    },
  ],
}
