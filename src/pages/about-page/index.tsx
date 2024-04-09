import Stack from '@mui/material/Stack'
import { AboutUs } from './components'

export const About = () => {
  return (
    <Stack
      component="main"
      sx={{ display: 'block', bgcolor: (theme) => theme.palette.primary.light }}
    >
      <AboutUs.Root>
        <AboutUs.Content
          props={{
            title: 'Aqui você pode contar mais sobre sua empresa.',
            description1: `Tem algo mais a dizer ou mostrar? Pode usar esta seção para isso.
              Adicione fotos e uma curta descrição para mostrar aos visitantes o que
              mais você desejar.`,
            description2: 'Adicione uma descrição',
          }}
        />

        <AboutUs.Image>
          <img src="/image/bg3.jpg" alt="thumbnail" />
        </AboutUs.Image>
      </AboutUs.Root>

      <AboutUs.Root>
        <AboutUs.Image>
          <img src="/image/bg3.jpg" alt="thumbnail" />
        </AboutUs.Image>

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
    </Stack>
  )
}
