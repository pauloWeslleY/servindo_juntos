import { styled } from '@mui/material/styles'
import { blue, grey, red } from '@mui/material/colors'
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box'
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material/Checkbox'
import MuiFormControlLabel, {
  FormControlLabelProps as MuiFormControlLabelProps,
} from '@mui/material/FormControlLabel'

type ErrorsProps = { error: string | undefined }

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

type HelperTextProps = { text: string | undefined }

export const HelperText = styled('span')<HelperTextProps>(
  ({ theme, text }) => ({
    ...theme.typography.subtitle1,
    color: text === '' ? grey[500] : red[600],
  })
)

type TextAreaProps = ErrorsProps

export const TextArea = styled('textarea')<TextAreaProps>(
  ({ theme, error }) => ({
    background: 'transparent',

    padding: theme.spacing(0.75),
    borderRadius: theme.spacing(0.2),
    border:
      error === undefined
        ? `${theme.spacing(0.185)} solid ${grey[600]}`
        : `${theme.spacing(0.185)} solid ${red[600]}`,

    resize: 'none',
    outline: 'none',

    color: error === undefined ? grey[400] : red[600],
    fontSize: theme.spacing(1.2),
    fontWeight: theme.typography.fontWeightBold,

    height: theme.spacing(16.2),
    overflow: 'hidden',

    '&::placeholder': {
      color: error === undefined ? grey[600] : red[600],
      fontSize: theme.spacing(1.25),
      fontWeight: theme.typography.fontWeightMedium,
    },
  })
)

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

type FormControlProps = MuiFormControlLabelProps & ErrorsProps

export const FormControl = styled(MuiFormControlLabel)<FormControlProps>(
  ({ theme, error }) => ({
    display: 'flex',
    alignItems: 'center',

    marginBottom: theme.spacing(0.55),

    color: error === undefined ? grey[100] : red[600],
  })
)

type CheckboxProps = MuiCheckboxProps & ErrorsProps

export const Checkbox = styled(MuiCheckbox)<CheckboxProps>(({ error }) => ({
  color: error === undefined ? grey[100] : red[600],

  '&.Mui-checked': {
    color: blue[600],
  },
}))
