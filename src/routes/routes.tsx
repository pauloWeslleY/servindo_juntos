import { useRoutes } from 'react-router-dom'
import { useAppRoutes } from './main.routes'

export const MappedRoutes = () => {
  const { appRoutes } = useAppRoutes()
  const routes = useRoutes([appRoutes])

  return routes
}
