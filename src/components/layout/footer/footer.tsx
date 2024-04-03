import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import { grey } from '@mui/material/colors'
import { FooterLink } from './footer-link'
import { useRoutesLink } from '@/hooks/useRoutesLink'
import * as S from './footer-styles'

const Title = ({ text }: { text: string }) => (
  <Typography
    component="h3"
    variant="body2"
    sx={(theme) => ({
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.spacing(1.4),
      color: grey[800],
    })}
  >
    {text}
  </Typography>
)

export const Footer = () => {
  const { routesLinks } = useRoutesLink()

  return (
    <>
      <Box
        component="footer"
        sx={{ background: (theme) => theme.palette.primary.contrastText }}
      >
        <S.MenuWrapper>
          <S.FooterMenu>
            {routesLinks.map((props) => (
              <FooterLink key={props.path} component="li" props={props} />
            ))}
          </S.FooterMenu>

          <Title text="Servindo Juntos" />
        </S.MenuWrapper>

        <Divider sx={{ marginInline: (theme) => theme.spacing(15) }} />

        <S.Wrapper>
          <Grid>
            <Title text="Endereço" />
          </Grid>
          <Grid>
            <Title text="Quem Somos" />
          </Grid>
        </S.Wrapper>
      </Box>

      <S.FooterBar>
        <Typography
          sx={(theme) => ({
            fontWeight: theme.typography.fontFamily,
            fontSize: theme.spacing(1.25),
          })}
        >
          Mapa do Site
        </Typography>

        <Typography
          sx={(theme) => ({
            fontWeight: theme.typography.fontFamily,
            fontSize: theme.spacing(1.25),
          })}
        >
          Siga-nos
        </Typography>
      </S.FooterBar>
    </>
  )
}
