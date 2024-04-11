import { CustomRadioGroup } from '@/components/radio'
import { Stack } from '@mui/material'
import { filter } from '../constants'

export const Header = () => {
  return (
    <Stack
      width='100%'
      borderRadius='12px'
      p='24px'
      mx='auto'
      gap='24px'
      bgcolor={theme => theme.palette.allColors.WHITE}
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
    >
      <CustomRadioGroup options={filter} />
    </Stack>
  )
}
