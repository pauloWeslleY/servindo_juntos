import Button from '@mui/material/Button'
import * as S from './about-us-styles'

type AboutUsContentProps = {
  props: {
    title: string
    description1: string
    description2: string
  }
}

export const AboutUsContent = ({ props }: AboutUsContentProps) => {
  const { title, description1, description2 } = props

  return (
    <S.Content>
      <S.Separator />

      <S.Wrap>
        <h3>{title}</h3>

        <span>{description1}</span>

        <p>{description2}</p>
      </S.Wrap>

      <div>
        <Button
          variant="secondary"
          color="secondary"
          sx={{ padding: (theme) => theme.spacing(0.65) }}
        >
          Conte-nos mais
        </Button>
      </div>
    </S.Content>
  )
}
