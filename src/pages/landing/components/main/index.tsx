import { Button, Stack, Typography } from '@mui/material'
import { CustomBox, Wrapper } from './style'
import { Image } from '@/components/image'
import mainBg from '@/assets/images/main-bg.png'
import { ReactComponent as IconCircle } from '@/assets/icons/ellipse.svg'
import { useNavigate } from 'react-router-dom'
import { ROUTER } from '@/constants/router'
import { getUser } from '@/utils/user'

export const Main = () => {
  const user = getUser()
  const navigate = useNavigate()

  const handleNavigate = () => {
    if (user === null) {
      navigate(ROUTER.AUTH)
    } else {
      navigate(`${ROUTER.HOME}/${ROUTER.APPLY}`)
    }
  }

  return (
    <Stack width='100%' sx={{ paddingTop: '42px' }}>
      <Wrapper>
        <Image src={mainBg} alt='main' sx={{ borderRadius: 24, minHeight: 200 }} />
        <CustomBox>
          <Typography className='main-title'>
            Agrosanoat sohasida sug'urtalashni avtomatlashtirilgan tizimi
          </Typography>
          <Typography sx={{ color: '#fff', fontFamily: 'GothamProRegular', fontSize: 16 }}>
            Skoring <IconCircle /> Sug’urta
          </Typography>
          <Button
            variant='outlined'
            className='apply-btn'
            onClick={() => {
              handleNavigate()
            }}
          >
            Online ariza berish
          </Button>
        </CustomBox>
      </Wrapper>
    </Stack>
  )
}
