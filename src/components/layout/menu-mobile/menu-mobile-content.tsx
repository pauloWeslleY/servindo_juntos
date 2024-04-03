import { useNavigate } from 'react-router-dom'
import Box, { BoxProps as MuiBoxProps } from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

type MenuMobileContentProps = MuiBoxProps & {
  props: {
    label: string
    navItems: {
      text: string
      path: string
    }[]
  }
}

const MenuMobileContent = ({ props, ...rest }: MenuMobileContentProps) => {
  const { label, navItems } = props
  const navigate = useNavigate()

  return (
    <Box {...rest} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h2"
        sx={(theme) => ({
          marginBlock: theme.spacing(2),
          fontSize: theme.spacing(1.3),
        })}
      >
        {label}
      </Typography>
      <Divider />

      <List>
        {navItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export { MenuMobileContent }
