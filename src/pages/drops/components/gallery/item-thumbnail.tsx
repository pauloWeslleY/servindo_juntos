import * as S from './gallery-styles'

type ItemThumbnailProps = {
  item: {
    id: number
    imageUrl: string
  }
}

export const ItemThumbnail = ({ item }: ItemThumbnailProps) => (
  <S.Thumbnail>
    <img src={item.imageUrl} alt="" />
  </S.Thumbnail>
)
