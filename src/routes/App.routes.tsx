import { HomeLayout } from '@/Layout/HomeLayout'
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
  ],
}
