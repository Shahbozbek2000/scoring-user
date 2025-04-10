import { Button, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import { ReactComponent as Logogreeen } from '@/assets/icons/logo-green.svg'
import { Form, Navigate, NavLink } from 'react-router-dom'
import { Input } from '@/components/inputs/input'
import { InputPassword } from '@/components/inputs/input-password'
import { useLogin } from './useLogin'
import { LoadingOverlay } from '@/components/loading-overlay'
import { ReactComponent as IconOneId } from '@/assets/icons/one-id.svg'
import { getUser, isExpiredToken } from '@/utils/user'

const Auth = () => {
  const user = getUser()
  const { isExpiredAccess } = isExpiredToken()
  const { form, onLogin, oneidURL, isLoading, isLoadingOneID } = useLogin()

  if (user && !isExpiredAccess) {
    return <Navigate to='/' />
  }

  return (
    <Form onSubmit={form.handleSubmit(onLogin)}>
      <Stack
        width='832px'
        borderRadius='12px'
        p='32px 24px'
        mx='auto'
        gap='24px'
        bgcolor={theme => theme.palette.allColors.WHITE}
      >
        <Typography
          variant='subtitle1'
          textAlign='center'
          fontSize='24px'
          fontFamily='GothamProBold'
          mb='24px'
        >
          Hisobga kiring
        </Typography>

        <Stack width='100%' gap='24px' direction='row' alignItems='center'>
          <Stack gap='24px' width='50%'>
            <Input
              control={form.control}
              name='login'
              placeholder='Email (login)*'
              label='Email (login)*'
            />
            <InputPassword
              control={form.control}
              name='password'
              placeholder='Parol*'
              label='Parol*'
            />
            <NavLink
              style={{
                color: '#004646',
                textDecoration: 'none',
                textAlign: 'center',
                fontSize: '14px',
                fontFamily: 'GothamProMedium',
              }}
              to={'#'}
            >
              Parolni unutdingizmi?
            </NavLink>
            <Button type='submit'>Hisobga kiring</Button>
            <Button
              component='a'
              target='_blank'
              variant='contained'
              href={oneidURL}
              disabled={isLoadingOneID}
              sx={{
                paddingLeft: '40px',
                backgroundColor: '#4825C2',
                ':hover': {
                  backgroundColor: '#4825C2',
                },
                svg: {
                  width: '100px',
                  height: '35px',
                },
              }}
            >
              <IconOneId />
            </Button>
            <NavLink
              style={{
                color: '#004646',
                textDecoration: 'none',
                textAlign: 'center',
                fontSize: '14px',
                fontFamily: 'GothamProMedium',
              }}
              to={'#'}
            >
              E-imzo orqali tizimga kirish
            </NavLink>
            <Typography
              variant='h6'
              fontSize={14}
              textAlign={'center'}
              fontWeight={500}
              fontFamily='GothamProMedium'
            >
              Hisobingiz yo'qmi?{' '}
              <NavLink
                style={{ color: '#004646', textDecoration: 'none', fontFamily: 'GothamProMedium' }}
                to={'/register'}
              >
                Roʻyxatdan oʻtish
              </NavLink>
            </Typography>
          </Stack>
          <Stack
            width='50%'
            sx={{
              svg: {
                width: '100%',
                height: '120px',
              },
            }}
          >
            <Logogreeen />
          </Stack>
        </Stack>
      </Stack>
      <LoadingOverlay isLoading={isLoading} />
    </Form>
  )
}
export default Auth
