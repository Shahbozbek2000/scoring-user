import { Input } from '@/components/inputs/input'
import { InputPhone } from '@/components/inputs/input-phone'
import { Button, Grid, Stack, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'

const PersonalInformation = () => {
  const form = useForm()

  return (
    <Stack>
      <Typography
        variant='subtitle1'
        fontWeight='light'
        fontSize='18px'
        mb='24px'
        fontFamily='GothamProRegular'
      >
        Shaxsiy ma'lumotlar
      </Typography>
      <Stack
        width='100%'
        borderRadius='12px'
        p='32px 24px'
        mx='auto'
        gap='24px'
        bgcolor={theme => theme.palette.allColors.WHITE}
      >
        <Typography
          variant='subtitle1'
          fontWeight='light'
          fontSize='16px'
          fontFamily='GothamProRegular'
        >
          Foydalanuvchi ma'lumotlari
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Input
              name='company_name'
              label='Korxona nomi'
              control={form.control}
              placeholder='Korxona nomini kiriting'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Input
              name='tin'
              label='INN'
              type='number'
              control={form.control}
              placeholder='INNni kiriting'
            />
          </Grid>
        </Grid>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Input
              name='company_name'
              label='Yuridik manzili'
              control={form.control}
              placeholder='Yuridik manzilingizni kiriting'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Input
              name='region'
              label='Viloyat'
              control={form.control}
              placeholder='Viloyatingizni kiriting'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Input
              name='district'
              label='Tuman'
              control={form.control}
              placeholder='Tumaningizni kiriting'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <InputPhone
              name='phone'
              label='Telefon raqam'
              control={form.control}
              sx={{ color: '#60676D' }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Input
              name='district'
              label='Elektron pochta'
              control={form.control}
              placeholder='Elektron pochtangizni kiriting'
            />
          </Grid>
        </Grid>
        <Stack display='flex' justifyContent='flex-start'>
          <Button variant='outlined' sx={{ width: 195, border: '1.5px solid  #08705F' }}>
            O’zgartirish kiritish
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default PersonalInformation
