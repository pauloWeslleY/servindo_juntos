import { useMuiTheme } from '@/hooks/useMuiTheme'
import { Button } from '@/components/Button'
import { Form } from './components/Form'

import * as S from './styles'

export const Contact = () => {
  const theme = useMuiTheme()

  return (
    <S.Container component="main">
      <S.Wrap component="div">
        <header>
          <S.Heading
            variant="body2"
            component="h2"
            sx={{ color: theme.palette.secondary.main }}
          >
            Fale comigo
          </S.Heading>
          <p>Escreva algo neste espaço.</p>
        </header>
      </S.Wrap>

      <Form />

      <S.Section>
        <section>
          <span>Fale de você ou de sua empresa aqui.</span>
          <S.Heading
            variant="body2"
            component="h2"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            Escreva sobre sua paixão/ empresa aqui.
          </S.Heading>
        </section>

        <S.Separator />

        <p>
          Use esse elemento para apresentar sua paixão, empresa ou serviços.
        </p>

        <div>
          <Button
            label="Conte-nos mais"
            variant="contained"
            color="secondary"
            sx={{ fontWeight: 'bold', p: '.7rem' }}
          />
        </div>
      </S.Section>
    </S.Container>
  )
}
