import { InputHTMLAttributes } from 'react'
import { OutlinedInputProps as MuiOutlinedInputProps } from '@mui/material/OutlinedInput'

type InputType = InputHTMLAttributes<HTMLInputElement> & MuiOutlinedInputProps

type InputOutlinedProps = InputType & {
  id: string
  label: string
  isDisabled?: boolean
  helperText?: string | undefined
  error?: boolean
  sx?: SxProps
}

export type { InputOutlinedProps }
