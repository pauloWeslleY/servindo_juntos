import { ComponentProps, ReactNode } from 'react'
import * as S from './styles'

type AboutUsRootProps = ComponentProps<typeof S.Section> & {
  children: ReactNode
  imageUrl: string
}

const AboutUsRoot = ({ imageUrl, children, ...rest }: AboutUsRootProps) => {
  return (
    <S.Section {...rest}>
      {children}

      <S.Content>
        <img src={imageUrl} alt="thumbnail" />
      </S.Content>
    </S.Section>
  )
}

export { AboutUsRoot }
