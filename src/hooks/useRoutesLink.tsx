export const useRoutesLink = () => {
  const routesLinks = [
    { text: 'Home', path: '/' },
    { text: 'Devocional', path: '/devotional' },
    { text: 'Contatos', path: '/contact' },
    { text: 'Sobre Nos', path: '/about' },
  ]

  return {
    routesLinks,
  }
}