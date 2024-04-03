import { ComponentProps, ReactNode } from 'react'
import * as S from './menu-mobile-styles'

type MenuMobileProps = ComponentProps<typeof S.MenuMobileWrapper> & {
  children: ReactNode
}

export const MenuMobileRoot = ({ children, ...props }: MenuMobileProps) => (
  <S.MenuMobileWrapper
    {...props}
    variant="temporary"
    ModalProps={{
      keepMounted: true, // Better open performance on mobile.
    }}
  >
    {children}
  </S.MenuMobileWrapper>
)
