import { RouteObject } from 'react-router-dom'
import { HomeLayout } from '@/Layout/HomeLayout'
import { Home } from '@/pages/Home'
import { SignUp } from '@/pages/SignUp'
import { Devotional } from '@/pages/Devotional'

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
      element: <SignUp />,
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
