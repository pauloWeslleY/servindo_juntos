import { useRoutes } from 'react-router-dom'
import { useAppRoutes } from './app.routes'

export const MappedRoutes = () => {
  const { appRoutes } = useAppRoutes()
  const routes = useRoutes([appRoutes])

  return routes
}
