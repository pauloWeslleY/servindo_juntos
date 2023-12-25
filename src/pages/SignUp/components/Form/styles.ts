import { styled } from '@mui/material/styles'
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box'
import {
  TextareaAutosize as MuiTextareaAutosize,
  TextareaAutosizeProps as MuiTextareaAutosizeProps,
} from '@mui/base/TextareaAutosize'
import { grey } from '@mui/material/colors'

export const Form = styled('form')(({ theme }) => ({
  marginInline: theme.spacing(16.75),
  paddingBottom: theme.spacing(3.75),
}))

export const Wrap = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  columnGap: theme.spacing(2),

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.75),
  },
}))

export const TextArea = styled(MuiTextareaAutosize)<MuiTextareaAutosizeProps>(
  ({ theme }) => ({
    background: 'transparent',

    paddingTop: theme.spacing(0.75),
    paddingLeft: theme.spacing(0.75),
    borderRadius: theme.spacing(0.2),
    outline: `${theme.spacing(0.105)} solid ${grey[600]}`,

    resize: 'none',

    color: grey[400],
    fontSize: theme.spacing(0.8),

    '&::placeholder': {
      fontSize: theme.spacing(1.35),
    },
  })
)
