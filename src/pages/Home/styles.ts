import { styled } from '@mui/material/styles'
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box'
import MuiStack, { StackProps as MuiStackProps } from '@mui/material/Stack'
import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography'

export const Wrapper = styled(MuiStack)<MuiStackProps>(({ theme }) => ({
  background: theme.palette.secondary.main,
  flexDirection: 'row',
  gap: theme.spacing(2),

  paddingInline: theme.spacing(15),
  paddingBlock: theme.spacing(2),
}))

export const Content = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  marginTop: theme.spacing(1.2),

  '& > span': {
    fontSize: theme.spacing(1.3),
    fontWeight: theme.typography.fontWeightLight,
  },
}))

export const Thumbnail = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  '& > img': {
    width: '100%',
    height: 'auto',

    borderRadius: theme.spacing(0.5),
  },
}))

export const Title = styled(MuiTypography)<MuiTypographyProps>(({ theme }) => ({
  fontSize: theme.spacing(2.8),
  marginBottom: theme.spacing(0.8),
}))
