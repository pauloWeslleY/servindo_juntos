import { MappedRoutes } from './routes'
import { ScrollTop } from './components/scroll-top'
import { ThemeCustomization } from './themes'

export const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <MappedRoutes />
    </ScrollTop>
  </ThemeCustomization>
)
