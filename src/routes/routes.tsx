import { useRoutes } from 'react-router-dom'
import { AppRoutes } from './App.routes'

export const MappedRoutes = () => {
  const routes = useRoutes([AppRoutes])

  return routes
}
