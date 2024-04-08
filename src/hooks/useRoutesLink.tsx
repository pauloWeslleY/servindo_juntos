export const useRoutesLink = () => {
  const routesLinks = [
    { text: 'Home', path: '/' },
    { text: 'Gotas Bíblicas', path: '/drops' },
    { text: 'Contatos', path: '/contact' },
    { text: 'Sobre Nos', path: '/about' },
  ]

  return {
    routesLinks,
  }
}
