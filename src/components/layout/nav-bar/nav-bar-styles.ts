import { styled } from '@mui/material'

const NavWrapper = styled('div')`
  display: flex;
  gap: ${({ theme }) => theme.spacing(0.25)};

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    display: none;
  }
`

export { NavWrapper }
