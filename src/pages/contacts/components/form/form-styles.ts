import { styled } from '@mui/material'
import { red } from '@mui/material/colors'
import MuiCheckbox from '@mui/material/Checkbox'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import { FormControlProps, CheckboxProps } from './form-props'
import { COLORS } from '@/styles'

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

export const Wrap = styled('div')(({ theme }) => ({
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

export const FormActions = styled('div')(({ theme }) => ({
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

export const FormControl = styled(MuiFormControlLabel)<FormControlProps>(
  ({ theme, error }) => ({
    display: 'flex',
    alignItems: 'center',

    marginBottom: theme.spacing(0.55),

    color: error === undefined ? COLORS.zinc[600] : red[600],
  }),
)

export const Checkbox = styled(MuiCheckbox)<CheckboxProps>(({ error }) => ({
  color: error === undefined ? COLORS.zinc[600] : red[600],

  '&.Mui-checked': {
    color: COLORS.crimson[600],
  },
}))
