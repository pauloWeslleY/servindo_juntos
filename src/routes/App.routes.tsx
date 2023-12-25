import { RouteObject } from 'react-router-dom'
import { HomeLayout } from '@/layout/HomeLayout'
import { Home } from '@/pages/Home'
import { Contact } from '@/pages/Contact'
import { Devotional } from '@/pages/Devotional'
import { About } from '@/pages/About'

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
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/about',
      element: <About />,
    },
  ],
}
