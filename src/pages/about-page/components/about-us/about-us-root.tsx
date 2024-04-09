import { ComponentProps, ReactNode } from 'react'
import * as S from './about-us-styles'

type AboutUsRootProps = ComponentProps<typeof S.Section> & {
  children: ReactNode
}

const AboutUsRoot = ({ ...rest }: AboutUsRootProps) => <S.Section {...rest} />

export { AboutUsRoot }
