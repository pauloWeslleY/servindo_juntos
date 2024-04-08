import { RouteObject } from 'react-router-dom'
import { Home, About, Contact, Gotas } from '@/pages'
import { Layout } from '@/layout'

export const useAppRoutes = () => {
  const appRoutes: RouteObject = {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/drops', element: <Gotas /> },
      { path: '/contact', element: <Contact /> },
      { path: '/about', element: <About /> },
      { path: '*', element: <h1>Not found</h1> },
    ],
  }

  return { appRoutes }
}
