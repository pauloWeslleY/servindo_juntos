import Typography from '@mui/material/Typography'
import { Gallery } from './components'
import * as S from './drops-styles'

export const Gotas = () => {
  return (
    <S.Wrapper>
      <div>
        <Typography
          component="h2"
          variant="h2"
          sx={(theme) => ({
            fontSize: theme.spacing(1.75),
            color: theme.palette.primary.main,
          })}
        >
          Gotas Bíblicas
        </Typography>
        <span>
          A Benção da Manhã: Nas suaves horas da aurora, quando a luz derrama
          seus primeiros raios sobre a terra adormecida, as gotas bíblicas são
          como orvalho celeste, banhando nossas almas com renovada esperança.
          Cada palavra, uma pérola de sabedoria, cintilando com a promessa de um
          novo dia abençoado. Que essas gotas, como o maná caído do céu,
          alimentem nossas almas famintas e nos guiem pelo caminho da justiça.
        </span>

        <span>
          O Refúgio nas Tempestades: Como gotas de chuva que caem do alto para
          saciar a terra seca, as palavras bíblicas são nosso refúgio nas
          tempestades da vida. Quando os ventos da aflição sopram furiosamente e
          as águas ameaçam nos submergir, encontramos abrigo seguro nas
          promessas divinas. Que essas gotas sejam como âncoras para nossas
          almas, ancorando-nos na fé inabalável em meio à tormenta.
        </span>
      </div>

      <Gallery />
    </S.Wrapper>
  )
}
