import { CustomRadioGroup } from '@/components/radio'
import { Button, Stack } from '@mui/material'
import { filter } from '../constants'
import { useNavigate } from 'react-router-dom'
import { ROUTER } from '@/constants/router'

export const Header = () => {
  const navigate = useNavigate()

  return (
    <Stack
      width='100%'
      borderRadius='12px'
      mx='auto'
      gap='24px'
      display='flex'
      flexDirection='row'
      justifyContent='flex-end'
    >
      <Button
        sx={{ maxWidth: 150, backgroundColor: '#08705F', height: 32, borderRadius: '4px' }}
        onClick={() => {
          navigate(ROUTER.CREATE)
        }}
      >
        Ariza yaratish
      </Button>
    </Stack>
  )
}
