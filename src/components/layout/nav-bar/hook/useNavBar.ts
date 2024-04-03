import { useState } from 'react'
import { useRoutesLink } from '@/hooks/useRoutesLink'

const useNavBar = ({ window }: { window?: () => Window }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { routesLinks } = useRoutesLink()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const container =
    window !== undefined ? () => window().document.body : undefined

  return {
    mobileOpen,
    container,
    handleDrawerToggle,
    routesLinks,
  }
}

export { useNavBar }
