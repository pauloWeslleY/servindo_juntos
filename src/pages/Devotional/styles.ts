import { styled } from '@mui/material/styles'
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box'
import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography'
import MuiContainer, {
  ContainerProps as MuiContainerProps,
} from '@mui/material/Container'

export const Container = styled(MuiContainer)<MuiContainerProps>(
  ({ theme }) => ({
    background: theme.palette.primary.main,
  })
)

export const Wrapper = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: theme.spacing(5),

  '& > div': {
    color: theme.palette.primary.contrastText,
  },

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.15),

    '& > div': {
      textAlign: 'center',
    },
  },
}))

export const Title = styled(MuiTypography)<MuiTypographyProps>(({ theme }) => ({
  fontSize: theme.spacing(1.75),
  color: theme.palette.secondary.main,

  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1.15),
  },
}))
