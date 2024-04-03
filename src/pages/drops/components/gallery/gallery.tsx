import { ItemThumbnail } from './item-thumbnail'
import * as S from './gallery-styles'

const thumbnail = [
  { id: 1, imageUrl: '/image/01.jpg' },
  { id: 2, imageUrl: '/image/02.jpg' },
  { id: 3, imageUrl: '/image/03.jpg' },
  { id: 4, imageUrl: '/image/04.jpg' },
  { id: 5, imageUrl: '/image/05.jpg' },
  { id: 6, imageUrl: '/image/06.jpg' },
]

export const Gallery = () => (
  <S.Wrapper>
    {thumbnail.map((props, index) => (
      <ItemThumbnail key={index} item={props} />
    ))}
  </S.Wrapper>
)
