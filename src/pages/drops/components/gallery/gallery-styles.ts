import { styled } from '@mui/material/styles'

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: theme.spacing(0.5),

  marginTop: theme.spacing(2),

  height: '100%',
}))

export const Thumbnail = styled('div')(({ theme }) => ({
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
