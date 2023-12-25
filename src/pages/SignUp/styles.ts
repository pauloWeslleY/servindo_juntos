import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box'
import MuiDivider, {
  DividerProps as MuiDividerProps,
} from '@mui/material/Divider'
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

  [theme.breakpoints.down('sm')]: {
    '& > header': {
      textAlign: 'center',
      marginInline: 0,
    },
  },
}))

export const Heading = styled(MuiTypography)<MuiTypographyProps>(
  ({ theme }) => ({
    fontSize: theme.spacing(1.75),
    fontWeight: theme.typography.fontWeightBold,

    marginBottom: theme.spacing(0.57),
  })
)

export const Separator = styled(MuiDivider)<MuiDividerProps>(({ theme }) => ({
  borderColor: theme.palette.primary.contrastText,
  width: theme.spacing(10.5),

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}))

export const Section = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  background:
    'linear-gradient(rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0.2)), url("/image/banner.jpeg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: theme.spacing(26.5),

  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: theme.spacing(1.5),

  padding: theme.spacing(2.5, 16.5),

  '& section': {
    '& > span': {
      display: 'inline-block',
      fontSize: theme.spacing(1.25),
      color: grey[50],

      marginBottom: theme.spacing(0.5),
    },
  },

  '& > p': {
    color: grey[50],
    letterSpacing: theme.spacing(0.025),
  },

  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    padding: theme.spacing(2.5, 1.5),

    textAlign: 'center',
  },
}))
