import { styled } from '@mui/material/styles'
import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography'

export const Container = styled('div')(({ theme }) => ({
  background:
    'linear-gradient(rgba(246, 171, 172, 0.2), rgba(0, 0, 0, 0.9)), url("/image/banner.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: theme.spacing(52.5),

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2.8),

  paddingInline: theme.spacing(15),
}))

export const BannerTitle = styled(MuiTypography)<MuiTypographyProps>(
  ({ theme }) => ({
    fontSize: theme.spacing(5),
    color: theme.palette.primary.contrastText,
  })
)

export const BannerSubTitle = styled(MuiTypography)<MuiTypographyProps>(
  ({ theme }) => ({
    fontSize: theme.spacing(1.5),
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(1),
  })
)
