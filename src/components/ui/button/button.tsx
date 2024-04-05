import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'

type ButtonProps = MuiButtonProps & {
  label: string
}

export const Button = ({ label, ...props }: ButtonProps) => (
  <MuiButton {...props}>{label}</MuiButton>
)
