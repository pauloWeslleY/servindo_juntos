import { Gallery } from './components/Gallery'
import * as S from './styles'

export const Devotional = () => {
  return (
    <S.Wrapper component="main">
      <div>
        <S.Title component="h2" variant="body2">
          Devotional
        </S.Title>
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
