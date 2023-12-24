import * as S from './styles'

type ItemThumbnailProps = {
  item: {
    id: number
    imageUrl: string
  }
}

export const ItemThumbnail = ({ item }: ItemThumbnailProps) => {
  return (
    <S.Thumbnail>
      <img src={item.imageUrl} alt="" />
    </S.Thumbnail>
  )
}
