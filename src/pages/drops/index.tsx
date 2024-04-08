import Typography from '@mui/material/Typography'
import { Gallery } from './components'
import * as S from './drops-styles'

export const Gotas = () => {
  return (
    <S.Wrapper>
      <div>
        <Typography
          component="h2"
          variant="body2"
          sx={(theme) => ({
            fontSize: theme.spacing(1.75),
            color: theme.palette.primary.main,
          })}
        >
          Gotas
        </Typography>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          similique cum pariatur nam dolores dolorem, accusantium voluptatum.
          Recusandae voluptatem quasi soluta illo autem nam, vero, sit assumenda
          maiores perferendis minima!
        </span>

        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          similique cum pariatur nam dolores dolorem, accusantium voluptatum.
          Recusandae voluptatem quasi soluta illo autem nam, vero, sit assumenda
          maiores perferendis minima!
        </span>
      </div>

      <Gallery />
    </S.Wrapper>
  )
}
