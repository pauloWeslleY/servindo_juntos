import { ComponentProps } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

type MenuMobileContentProps = ComponentProps<typeof S.Container> & {
  props: {
    label: string
    navItems: {
      text: string
      path: string
    }[]
  }
}

const MenuMobileContent = ({ props, ...rest }: MenuMobileContentProps) => {
  const { label, navItems } = props
  const navigate = useNavigate()

  return (
    <S.Container {...rest}>
      <S.TitleMobile variant="body2">{label}</S.TitleMobile>
      <S.Divider />

      <S.MenuList>
        {navItems.map((item, index) => (
          <S.MenuListItem
            key={index}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <S.MenuListItemButton>
              <S.MenuListItemText primary={item.text} />
            </S.MenuListItemButton>
          </S.MenuListItem>
        ))}
      </S.MenuList>
    </S.Container>
  )
}

export { MenuMobileContent }
