import { TypographyOptions } from '@mui/material/styles/createTypography'
import { FONTS } from '@/styles'

type TypographyProps = { font: string[] }

export const Typography = ({ font }: TypographyProps): TypographyOptions => ({
  fontFamily: font.join(','),
  fontWeightLight: FONTS.fontWeight.light,
  fontWeightRegular: FONTS.fontWeight.regular,
  fontWeightMedium: FONTS.fontWeight.medium,
  fontWeightBold: FONTS.fontWeight.semibold,
  fontSize: 18,
  h1: {
    fontFamily: FONTS.fontFamily.PETIT,
    fontWeight: FONTS.fontWeight.semibold,
    fontSize: FONTS.fontSizes['4xl'],
    lineHeight: 1.21,
  },
  h2: {
    fontFamily: FONTS.fontFamily.PETIT,
    fontWeight: FONTS.fontWeight.semibold,
    fontSize: FONTS.fontSizes['3xl'],
    lineHeight: 1.27,
  },
  h3: {
    fontFamily: FONTS.fontFamily.PETIT,
    fontWeight: FONTS.fontWeight.semibold,
    fontSize: FONTS.fontSizes['2xl'],
    lineHeight: 1.33,
  },
  h4: {
    fontWeight: FONTS.fontWeight.semibold,
    fontSize: FONTS.fontSizes.md,
    lineHeight: 1.4,
  },
  h5: {
    fontWeight: FONTS.fontWeight.semibold,
    fontSize: FONTS.fontSizes.sm,
    lineHeight: 1.5,
  },
  h6: {
    fontWeight: FONTS.fontWeight.regular,
    fontSize: FONTS.fontSizes.xs,
    lineHeight: 1.57,
  },
  caption: {
    fontWeight: FONTS.fontWeight.regular,
    fontSize: FONTS.fontSizes.xs,
    lineHeight: 1.66,
  },
  body1: {
    fontSize: FONTS.fontSizes.lg,
    lineHeight: 1.57,
  },
  body2: {
    fontSize: FONTS.fontSizes.xs,
    lineHeight: 1.66,
  },
  subtitle1: {
    fontSize: FONTS.fontSizes.sm,
    fontWeight: FONTS.fontWeight.semibold,
    lineHeight: 1.57,
  },
  subtitle2: {
    fontSize: FONTS.fontSizes.xs,
    fontWeight: FONTS.fontWeight.regular,
    lineHeight: 1.66,
  },
  overline: {
    lineHeight: 1.66,
  },
  button: {
    textTransform: 'capitalize',
  },
})
