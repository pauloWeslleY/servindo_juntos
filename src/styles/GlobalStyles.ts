import { grey } from '@mui/material/colors'

export default {
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    textDecoration: 'none',

    '::-webkit-scrollbar': {
      width: '0.65rem',
    },
    '::-webkit-scrollbar-track': {
      background: grey[100],
    },
    '::-webkit-scrollbar-thumb': {
      background: grey[500],
      borderRadius: '2.2rem',
    },
  },
}
