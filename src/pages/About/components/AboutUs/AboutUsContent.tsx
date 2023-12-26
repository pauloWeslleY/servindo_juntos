import { Button } from '@/components/Button'
import { useMuiTheme } from '@/hooks/useMuiTheme'
import * as S from './styles'

type AboutUsContentProps = {
  props: {
    title: string
    description1: string
    description2: string
  }
}

export const AboutUsContent = ({ props }: AboutUsContentProps) => {
  const theme = useMuiTheme()
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
          label="Conte-nos mais"
          variant="contained"
          color="secondary"
          sx={{ padding: theme.spacing(0.65) }}
        />
      </div>
    </S.Content>
  )
}
