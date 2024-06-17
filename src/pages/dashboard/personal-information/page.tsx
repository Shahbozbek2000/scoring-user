import BreadcrumpCustom from '@/components/breadcrup'
import { Input } from '@/components/inputs/input'
import { InputPhone } from '@/components/inputs/input-phone'
import { Button, Grid, Stack, Typography } from '@mui/material'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQuery } from '@tanstack/react-query'
import { request } from '@/configs/requests'
import { useState } from 'react'
import { CustomSelect } from '@/components/select'
import { useRegions } from '@/hooks/useRegions'
import { useProvinces } from '@/hooks/useProvinces'
import { Form } from 'react-router-dom'
import toast from 'react-hot-toast'
import { LoadingOverlay } from '@/components/loading-overlay'

const PersonalInformation = () => {
  const form = useForm()
  const [hasEdit, setHasEdit] = useState(false)
  const regions = useRegions()
  const provinces = useProvinces()

  const { refetch, isLoading, isFetching } = useQuery({
    queryKey: ['get-oneid-user'],
    queryFn: async () => await request('auth/oneid/user'),
    select: res => {
      return res?.data
    },
    onSuccess: res => {
      form.reset({
        company_name: res?.company_name,
        pin: res?.pin,
        phone_number: res?.phone_number,
        region: 'Andijon',
        ...res,
      })
    },
  })

  const { mutate } = useMutation({
    mutationFn: async data => await request.post('auth/update', data),
    onSuccess: () => {
      void refetch()
      toast.success('Foydalanuvchi ma`lumotlari muvaffaqiyatli yangilandi')
    },
  })

  const onSubmit: SubmitHandler<any> = data => {
    const payload: any = {
      company_name: data?.company_name,
      stir: data?.pin,
      address: data?.address,
      region: data?.region,
      district: data?.district,
      phone_number: data?.phone_number,
      email: data?.email,
      constitution: '',
      constitutionFile: '',
    }
    console.log(payload)
    mutate(payload)
  }

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <Stack>
        <BreadcrumpCustom />
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
                InputProps={{
                  readOnly: !hasEdit,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Input
                name='pin'
                label='INN'
                type='number'
                control={form.control}
                placeholder='INNni kiriting'
                disabled
              />
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Input
                name='address'
                label='Yuridik manzili'
                control={form.control}
                placeholder='Yuridik manzilingizni kiriting'
                InputProps={{
                  readOnly: !hasEdit,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomSelect
                control={form.control}
                name='region'
                placeholder='Viloyatingizni kiriting'
                options={regions}
                label='Viloyat'
                disabled={!hasEdit}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomSelect
                control={form.control}
                name='district'
                placeholder='Tumaningizni kiriting'
                options={provinces}
                label='Tuman'
                disabled={!hasEdit}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <InputPhone
                name='phone_number'
                label='Telefon raqam'
                control={form.control}
                sx={{ color: '#60676D' }}
                InputProps={{
                  readOnly: !hasEdit,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Input
                name='email'
                label='Elektron pochta'
                control={form.control}
                placeholder='Elektron pochtangizni kiriting'
                InputProps={{
                  readOnly: !hasEdit,
                }}
              />
            </Grid>
          </Grid>
          {hasEdit ? (
            <Stack
              display='flex'
              justifyContent='flex-start'
              flexDirection='row'
              sx={{ gap: '10px', marginTop: '32px' }}
            >
              <Button
                variant='outlined'
                sx={{
                  width: 100,
                  border: '1.5px solid  #08705F !important',
                  color: '#08705F',
                  opacity: 0.7,
                }}
              >
                Tozalash
              </Button>
              <Button
                variant='contained'
                sx={{ width: 100, border: '1.5px solid  #08705F !important', opacity: 0.7 }}
                type='submit'
              >
                Saqlash
              </Button>
            </Stack>
          ) : (
            <Stack display='flex' justifyContent='flex-start' sx={{ marginTop: '32px' }}>
              <Button
                variant='outlined'
                sx={{ width: 195, border: '1.5px solid  #08705F !important', opacity: 0.7 }}
                onClick={() => {
                  setHasEdit(true)
                }}
              >
                O’zgartirish kiritish
              </Button>
            </Stack>
          )}{' '}
        </Stack>
      </Stack>
      <LoadingOverlay isLoading={isLoading || isFetching} />
    </Form>
  )
}

export default PersonalInformation
