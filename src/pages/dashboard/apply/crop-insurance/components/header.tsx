import { Button, Stack } from '@mui/material'
import { CropsList } from './list-of-crops'
import { useState } from 'react'

export const Header = () => {
  const [open, setOpen] = useState(false)

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
          setOpen(true)
        }}
      >
        Ariza yaratish
      </Button>
      <CropsList open={open} setOpen={setOpen} />
    </Stack>
  )
}
