import { forwardRef } from 'react'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import FormHelperText from '@mui/material/FormHelperText'
import { InputOutlinedProps } from './input-props'

export const Input = forwardRef<HTMLInputElement, InputOutlinedProps>(
  ({ id, label, sx, helperText, isDisabled, error, ...rest }, ref) => (
    <FormControl
      variant="outlined"
      size="small"
      sx={sx}
      disabled={isDisabled}
      error={error}
    >
      <InputLabel htmlFor={id} disabled={isDisabled} error={error}>
        {label}
      </InputLabel>
      <OutlinedInput
        id={id}
        ref={ref}
        {...rest}
        label={label}
        disabled={isDisabled}
        error={error}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  ),
)

Input.displayName = 'Input'
