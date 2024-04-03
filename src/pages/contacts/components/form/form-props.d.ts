import { FormControlLabelProps as MuiFormControlLabelProps } from '@mui/material/FormControlLabel'
import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox'

type ErrorsProps = { error: string | undefined }
type TextAreaProps = ErrorsProps
type HelperTextProps = { text: string | undefined }
type FormControlProps = MuiFormControlLabelProps & ErrorsProps
type CheckboxProps = MuiCheckboxProps & ErrorsProps

export type { TextAreaProps, HelperTextProps, FormControlProps, CheckboxProps }
