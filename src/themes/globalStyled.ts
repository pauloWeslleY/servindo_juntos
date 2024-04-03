import { COLORS, FONTS, spacing } from '@/styles'

export const GlobalStyled = {
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,

    fontFamily: FONTS.fontFamily.MONTSERRAT,

    '::-webkit-scrollbar': {
      width: spacing(0.65),
    },
    '::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '::-webkit-scrollbar-thumb': {
      background: COLORS.pink.A200,
      borderRadius: spacing(2.2),
    },
  },

  'html, body, #root': {
    height: '100%',
  },

  button: { cursor: 'pointer' },
}
