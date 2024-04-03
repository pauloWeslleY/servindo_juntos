import { Components, Theme } from '@mui/material'
import { Button, FormHelperText, InputLabel, OutlinedInput } from './index'

export function ComponentOverrides(theme: Theme): Components {
  const { MuiButton } = Button(theme)
  const { MuiOutlinedInput } = OutlinedInput(theme)
  const { MuiInputLabel } = InputLabel(theme)
  const { MuiFormHelperText } = FormHelperText(theme)

  return {
    MuiButton,
    MuiInputLabel,
    MuiOutlinedInput,
    MuiFormHelperText,
  }
}
