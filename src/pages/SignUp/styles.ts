import { styled } from '@mui/material/styles'
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box'
import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography'

export const Container = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  background: theme.palette.primary.light,
}))

export const Wrap = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  '& > header': {
    padding: theme.spacing(4.75, 1.75, 1.75, 1.75),
    marginInline: theme.spacing(15),

    '& > p': {
      color: theme.palette.primary.contrastText,
    },
  },
}))

export const Heading = styled(MuiTypography)<MuiTypographyProps>(
  ({ theme }) => ({
    fontSize: theme.spacing(1.75),
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.secondary.main,

    marginBottom: theme.spacing(0.57),
  })
)
