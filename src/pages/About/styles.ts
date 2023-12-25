import { styled } from '@mui/material/styles'
import { BoxProps as MuiBoxProps } from '@mui/material/Box'

export const Container = styled('div')<MuiBoxProps>(({ theme }) => ({
  background: theme.palette.primary.main,
}))

export const Divider = styled('hr')<MuiBoxProps>(({ theme }) => ({
  border: `${theme.spacing(0.1)} solid ${theme.palette.primary.light}`,
}))
