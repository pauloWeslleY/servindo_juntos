import { styled } from '@mui/material/styles'
import { BoxProps as MuiBoxProps } from '@mui/material/Box'
import { grey } from '@mui/material/colors'

export const Container = styled('div')<MuiBoxProps>(({ theme }) => ({
  background: theme.palette.primary.light,
}))

export const Divider = styled('hr')<MuiBoxProps>(({ theme }) => ({
  border: `${theme.spacing(0.1)} solid ${grey[600]}`,
}))
