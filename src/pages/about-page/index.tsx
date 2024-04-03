import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { AboutUs, GoogleMaps } from './components'

export const About = () => {
  return (
    <Box
      component="main"
      sx={{ bgcolor: (theme) => theme.palette.primary.light }}
    >
      <AboutUs.Root imageUrl="/image/bg3.jpg">
        <AboutUs.Content
          props={{
            title: 'Aqui você pode contar mais sobre sua empresa.',
            description1: `Tem algo mais a dizer ou mostrar? Pode usar esta seção para isso.
              Adicione fotos e uma curta descrição para mostrar aos visitantes o que
              mais você desejar.`,
            description2: 'Adicione uma descrição',
          }}
        />
      </AboutUs.Root>

      <Divider sx={{ borderColor: (theme) => theme.palette.primary.light }} />
      <GoogleMaps />
      <Divider sx={{ borderColor: (theme) => theme.palette.primary.light }} />

      <AboutUs.Root imageUrl="/image/bg3.jpg">
        <AboutUs.Content
          props={{
            title: 'Aqui você pode contar mais sobre sua empresa.',
            description1: `Tem algo mais a dizer ou mostrar? Pode usar esta seção para isso.
              Adicione fotos e uma curta descrição para mostrar aos visitantes o que
              mais você desejar.`,
            description2: 'Adicione uma descrição',
          }}
        />
      </AboutUs.Root>
    </Box>
  )
}
