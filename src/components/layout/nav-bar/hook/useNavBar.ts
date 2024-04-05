import { useState } from 'react'
import { useRoutesLink } from '@/hooks/useRoutesLink'

const useNavBar = ({ windows }: { windows?: () => Window }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { routesLinks } = useRoutesLink()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const container =
    windows !== undefined ? () => windows().document.body : undefined

  return {
    mobileOpen,
    container,
    handleDrawerToggle,
    routesLinks,
  }
}

export { useNavBar }
