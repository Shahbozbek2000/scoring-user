import { ReactComponent as Logo } from '@/assets/icons/logo.svg'
import { ROUTER } from '@/constants/router'
import { Button, Container } from '@mui/material'
import Stack from '@mui/material/Stack'
import { Link, useNavigate } from 'react-router-dom'
import { Profile } from './profile'
import { getUser } from '@/utils/user'

export const Header = () => {
  const user = getUser()
  const navigate = useNavigate()

  return (
    <Stack
      width='100%'
      direction='row'
      alignItems='center'
      gap='16px'
      p='16px 20px'
      flexWrap='wrap'
      bgcolor={theme => theme.palette.allColors.BRAND}
      borderBottom={theme => `1px solid ${theme.palette.allColors.GREY20}`}
    >
      <Container>
        <Stack direction='row' width='100%' justifyContent='space-between' alignItems='center'>
          <Link to={ROUTER.LANDING}>
            <Logo />
          </Link>
          {user === null ? (
            <Button
              variant='outlined'
              sx={{ color: '#fff', fontSize: 18 }}
              onClick={() => {
                navigate('/auth')
              }}
            >
              Kirish
            </Button>
          ) : (
            <Profile />
          )}
        </Stack>
      </Container>
    </Stack>
  )
}
