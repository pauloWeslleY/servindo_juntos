import { styled } from '@mui/material/styles'
import MuiStack, { StackProps as MuiStackProps } from '@mui/material/Stack'
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box'

export const Wrapper = styled(MuiStack)<MuiStackProps>(({ theme }) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: theme.spacing(0.5),

  marginTop: theme.spacing(2),
}))

export const Thumbnail = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  display: 'flex',
  flexBasis: theme.spacing(21),
  flexGrow: 1,
  flexShrink: 1,

  margin: theme.spacing(0.1),
  boxShadow: theme.shadows[5],
  borderRadius: theme.spacing(0.5),

  '& > img': {
    width: '100%',
    height: 'auto',
    borderRadius: theme.spacing(0.5),
  },
}))
