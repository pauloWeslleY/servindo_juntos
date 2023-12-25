import { SxProps, styled } from '@mui/material/styles'
import { blue, grey } from '@mui/material/colors'
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box'
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material/Checkbox'
import MuiFormControlLabel, {
  FormControlLabelProps as MuiFormControlLabelProps,
} from '@mui/material/FormControlLabel'

export const Form = styled('form')(({ theme }) => ({
  marginInline: theme.spacing(16.75),
  paddingBottom: theme.spacing(3.75),

  [theme.breakpoints.down('sm')]: {
    marginInline: theme.spacing(1.75),
  },

  [theme.breakpoints.down('md')]: {
    marginInline: theme.spacing(1.75),
  },
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

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    rowGap: theme.spacing(1.5),
  },
}))

export const TextArea = styled('textarea')(({ theme }) => ({
  background: 'transparent',

  padding: theme.spacing(0.75),
  borderRadius: theme.spacing(0.2),
  outline: `${theme.spacing(0.105)} solid ${grey[600]}`,

  resize: 'none',

  color: grey[400],
  fontSize: theme.spacing(1.2),
  fontWeight: theme.typography.fontWeightMedium,

  height: theme.spacing(16.2),
  overflow: 'hidden',

  '&::placeholder': {
    fontSize: theme.spacing(1.35),
  },
}))

export const FormActions = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  marginTop: theme.spacing(1.35),

  [theme.breakpoints.down('md')]: {
    '& > div': {
      marginTop: theme.spacing(1.1),
      alignSelf: 'center',
    },
  },
}))

export const FormControlLabel = styled(
  MuiFormControlLabel
)<MuiFormControlLabelProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  marginBottom: theme.spacing(0.55),

  color: grey[100],
}))

export const Checkbox = styled(MuiCheckbox)<MuiCheckboxProps>(() => ({
  color: grey[100],

  '&.Mui-checked': {
    color: blue[600],
  },
}))

export const ButtonSubmit: SxProps = {
  padding: '.7rem',
  fontWeight: 'bold',
  color: grey[900],
}
