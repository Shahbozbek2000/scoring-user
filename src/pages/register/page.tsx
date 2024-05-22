import { Button, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import { ReactComponent as Logogreeen } from '@/assets/icons/logo-green.svg'
import { Form, NavLink, useNavigate } from 'react-router-dom'
import { Input } from '@/components/inputs/input'

import { LoadingOverlay } from '@/components/loading-overlay'
import { useRegister } from './useRegister'
import { InputPassword } from '@/components/inputs/input-password'

const Register = () => {
  const { form, onRegister, isLoading } = useRegister()
  const navigate = useNavigate()
  return (
    <Form onSubmit={form.handleSubmit(onRegister)}>
      <Stack
        width='832px'
        borderRadius='12px'
        p='32px 24px'
        mx='auto'
        gap='24px'
        bgcolor={theme => theme.palette.allColors.WHITE}
      >
        <Typography variant='h4' textAlign='center' fontWeight='bold' fontSize='24px' mb='24px'>
          Roʻyxatdan oʻtish
        </Typography>

        <Stack width='100%' gap='24px' direction='row' alignItems='center'>
          <Stack gap='24px' width='50%'>
            <Input control={form.control} name='login' placeholder='Login*' label='Login*' />
            <InputPassword
              control={form.control}
              name='password'
              placeholder='Password*'
              label='Password*'
            />
            <Input control={form.control} name='name' placeholder='Ism*' label='Ism*' />
            <Input
              control={form.control}
              name='surname'
              placeholder='Familiya*'
              label='Familiya*'
            />
            <Input
              control={form.control}
              name='middleName'
              placeholder='Otasining ismi'
              label='Otasining ismi'
            />
            <Input
              control={form.control}
              name='email'
              placeholder='Email yoki telefon raqami (login)*'
              label='Email yoki telefon raqami (login)*'
              type='email'
            />

            <Input
              control={form.control}
              name='stir'
              placeholder=''
              label='STIR raqami'
              type='number'
            />
            <Typography variant='h6' textAlign='center' fontWeight={500} fontSize='14px'>
              Sizda allaqachon hisob bormi?{' '}
              <NavLink style={{ color: '#004646', textDecoration: 'none' }} to={'/auth'}>
                Hisobga kiring
              </NavLink>
            </Typography>
            <Button type='submit'>Davom etish</Button>
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
export default Register
