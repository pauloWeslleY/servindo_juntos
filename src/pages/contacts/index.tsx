import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { Form } from './components'
import * as S from './contacts-styles'

export const Contact = () => {
  return (
    <Box
      component="main"
      sx={{ bgcolor: (theme) => theme.palette.primary.light }}
    >
      <S.Wrap component="div">
        <header>
          <Typography
            variant="h2"
            component="h2"
            sx={(theme) => ({
              color: theme.palette.primary.main,
              fontSize: theme.spacing(1.75),
              fontWeight: theme.typography.fontWeightBold,
              marginBottom: theme.spacing(0.57),
            })}
          >
            Fale comigo
          </Typography>
          <p>Escreva algo neste espaço.</p>
        </header>
      </S.Wrap>

      <Form />

      <S.Section>
        <section>
          <span>Fale de você ou de sua empresa aqui.</span>
          <Typography
            variant="body2"
            component="h2"
            sx={(theme) => ({
              color: theme.palette.primary.contrastText,
              fontSize: theme.spacing(1.75),
              fontWeight: theme.typography.fontWeightBold,
              marginBottom: theme.spacing(0.57),
            })}
          >
            Escreva sobre sua paixão/ empresa aqui.
          </Typography>
        </section>

        <Divider
          sx={(theme) => ({
            borderColor: theme.palette.primary.contrastText,
            width: { md: '100%', lg: theme.spacing(10.5) },
          })}
        />

        <p>
          Use esse elemento para apresentar sua paixão, empresa ou serviços.
        </p>

        <div>
          <Button
            variant="secondary"
            color="secondary"
            sx={{ fontWeight: 'bold', p: '.7rem' }}
          >
            Conte-nos mais
          </Button>
        </div>
      </S.Section>
    </Box>
  )
}
