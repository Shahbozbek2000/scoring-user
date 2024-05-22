import { Button, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import { ReactComponent as Logogreeen } from '@/assets/icons/logo-green.svg'
import { Form, NavLink } from 'react-router-dom'
import VerificationInput from 'react-verification-input'
import { LoadingOverlay } from '@/components/loading-overlay'
import { useCode } from './useCode'

const RegisterCode = () => {
  const { value, setValue, onVerify, isLoading } = useCode()

  return (
    <>
      <Form onSubmit={onVerify}>
        <Stack
          width='832px'
          borderRadius='12px'
          p='32px 24px'
          mx='auto'
          gap='24px'
          bgcolor={theme => theme.palette.allColors.WHITE}
        >
          <Typography
            variant='h4'
            textAlign='center'
            fontWeight='bold'
            fontSize='24px'
            mb='24px'
            fontFamily='GothamProBold'
          >
            Kodni kiritish
          </Typography>

          <Stack width='100%' gap='24px' direction='row' alignItems='center'>
            <Stack gap='24px' width='50%'>
              <Typography
                variant='subtitle2'
                // textAlign='center'
                fontWeight={500}
                fontFamily='GothamProRegular'
                fontSize='14px'
              >
                Biz sizning elektron pochta manzilingizga tasdiqlash kodini yubordik. Iltimos, kodni
                pastga kiriting
              </Typography>
              <VerificationInput
                value={value}
                onChange={setValue}
                length={5}
                placeholder=' '
                classNames={{
                  container: 'container',
                  character: 'character',
                  characterInactive: 'character--inactive',
                  characterSelected: 'character--selected',
                  characterFilled: 'character--filled',
                }}
              />
              <Typography
                variant='subtitle2'
                textAlign='center'
                fontFamily='GothamProMedium'
                fontWeight={500}
                fontSize='14px'
              >
                Agar kod raqami kelmagan bo’lsa,
                <br />
                <NavLink
                  style={{
                    color: '#004646',
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontSize: '14px',
                  }}
                  to={'#'}
                >
                  Kodni qayta jo’natish
                </NavLink>
              </Typography>
              <Button type='submit'>Kodni tasdiqlash</Button>
              <NavLink
                style={{
                  color: '#004646',
                  textDecoration: 'none',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontFamily: 'GothamProRegular',
                }}
                to={'/register'}
              >
                Ortga qaytish
              </NavLink>
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
    </>
  )
}
export default RegisterCode
