/* eslint-disable no-unused-vars */
// @ts-nocheck
import { Fragment, useEffect, useRef, useState } from 'react'
import { Input } from '@/components/inputs/input'
import { InputCheckbox } from '@/components/inputs/input-checkbox'
import { TextArea } from '@/components/inputs/input-textarea'
import { COLORS } from '@/constants/css'
import { Button, Grid, IconButton, Stack, Typography } from '@mui/material'
import { LoadingOverlay } from '@/components/loading-overlay'
import { Form } from 'react-router-dom'
import { useCreate } from './useCreate'
import BreadcrumpCustom from '@/components/breadcrump'
import { InputDate } from '@/components/inputs/datepicker'
import { CustomSelect } from '@/components/select'
import { useRegions } from '@/hooks/useRegions'
import { useQuery } from '@tanstack/react-query'
import { request } from '@/configs/requests'
import dayjs from 'dayjs'
import { insurancePrice } from '../constants'
import { InputMask } from '@/components/inputs/input-mask'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import { FieldWrapper } from './style'

const CreateCropInsurance = () => {
  const regions = useRegions()
  const [isCanceled, setIsCanceled] = useState(false)
  const { form, crop, fields, append, remove, isLoading, onCreate } = useCreate()

  const { data: provinces = [] } = useQuery({
    queryKey: ['get-provinces', form.watch('region_code')],
    queryFn: async () => await request(`/data/districts/${form.watch('region_code')}`),
    select: res => {
      return res?.data?.map((v: any) => {
        return {
          value: v?.region_soato,
          label: v?.district,
        }
      })
    },
    enabled: form.watch('region_code') !== undefined,
  })
  const { data: provinces2 = [] } = useQuery({
    queryKey: ['get-provinces-2', form.watch('credit_area_region_code')],
    queryFn: async () => await request(`/data/districts/${form.watch('credit_area_region_code')}`),
    select: res => {
      return res?.data?.map((v: any) => {
        return {
          value: v?.region_soato,
          label: v?.district,
        }
      })
    },
    enabled: form.watch('credit_area_region_code') !== undefined,
  })

  const { data: massiveList = [] } = useQuery({
    queryKey: ['get-confines', form.watch('credit_area_district_code')],
    queryFn: async () => await request(`/data/massifs/${form.watch('credit_area_district_code')}`),
    select: res => {
      return res?.data?.map((v: any) => {
        return {
          value: v?.massiv_kod,
          label: v?.massiv,
        }
      })
    },
    enabled: form.watch('credit_area_district_code') !== undefined,
  })

  const { isLoading: defaultLoading, isFetching } = useQuery({
    queryKey: ['get-oneid-user-info'],
    queryFn: async () => await request('auth/oneid/user'),
    select: res => {
      return res?.data
    },
    onSuccess: res => {
      form.reset({
        crop_name: crop,
        company_name: res?.company_name,
        pin: res?.stir || res?.pin,
        phone_number: res?.phone_number,
        region_code: res?.region,
        district_code: res?.district,
        email: res?.email,
        address: res?.address,
        farmer_stir: res?.stir,
        farmer_address: res?.address,
        farmer_name: res?.company_name,
        date: dayjs(new Date()),
      })
    },
  })

  const inputRefs = useRef<Array<HTMLInputElement | null>>([])

  useEffect(() => {
    if (fields.length > 0) {
      const lastIndex = fields.length - 1
      inputRefs.current[lastIndex]?.focus()
    }
  }, [fields.length])

  console.log(fields)

  return (
    <Stack>
      <BreadcrumpCustom />
      <Stack
        width='100%'
        borderRadius='12px'
        p='24px'
        mx='auto'
        gap='24px'
        bgcolor={theme => theme.palette.allColors.WHITE}
      >
        <Typography
          variant='subtitle1'
          fontWeight='light'
          fontSize='18px'
          fontFamily='GothamProRegular'
        >
          Ariza yaratish
        </Typography>
        {defaultLoading || isFetching ? (
          <LoadingOverlay isLoading={isLoading || isFetching} />
        ) : (
          <Form onSubmit={form.handleSubmit(onCreate)}>
            <Grid container spacing={{ xs: 2, md: 2 }}>
              <Grid item xs={6} sm={4} md={4}>
                <InputDate
                  control={form.control}
                  name='date'
                  placeholder='Sana'
                  label='Sana'
                  defaultValue={dayjs(new Date())}
                  disabled
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <CustomSelect
                  name='region_code'
                  control={form.control}
                  placeholder='Viloyat'
                  label='Viloyat'
                  options={regions}
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <CustomSelect
                  name='district_code'
                  control={form.control}
                  placeholder='Tuman'
                  label='Tuman'
                  options={provinces}
                />
              </Grid>
            </Grid>
            <Typography
              sx={{
                fontFamily: 'GothamProRegular',
                fontSize: 16,
                color: 'var(--dark)',
                margin: '8px 0',
              }}
            >
              Sug’urta qildiruvchi to`g’risidagi ma’lumot
            </Typography>
            <Grid container spacing={{ xs: 2, md: 2 }}>
              <Grid item xs={6} sm={4} md={4}>
                <Input
                  control={form.control}
                  name='farmer_name'
                  placeholder='To`liq nomi'
                  label='To`liq nomi'
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <Input
                  control={form.control}
                  name='farmer_stir'
                  placeholder='STIR raqami'
                  label='STIR raqami'
                  type='number'
                  disabled
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <Input
                  control={form.control}
                  name='farmer_requisites'
                  placeholder='Bank rekvizitlari'
                  label='Bank rekvizitlari'
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <Input
                  control={form.control}
                  name='farmer_address'
                  placeholder='Yuridik manzili'
                  label='Yuridik manzili'
                />
              </Grid>
            </Grid>
            <Typography
              sx={{
                fontFamily: 'GothamProRegular',
                fontSize: 16,
                color: 'var(--dark)',
                margin: '8px 0',
              }}
            >
              Naf oluvchi
            </Typography>
            <Grid container spacing={{ xs: 2, md: 2 }}>
              <Grid item xs={6} sm={4} md={4}>
                <Input
                  control={form.control}
                  name='creditor_name'
                  placeholder='To`liq nomi'
                  label='To`liq nomi'
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <Input
                  control={form.control}
                  name='creditor_stir'
                  placeholder='STIR raqami'
                  label='STIR raqami'
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <Input control={form.control} name='creditor_mfo' placeholder='MFO' label='MFO' />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <Input
                  control={form.control}
                  name='creditor_address'
                  placeholder='Yuridik manzili'
                  label='Yuridik manzili'
                />
              </Grid>
            </Grid>
            <Typography
              sx={{
                fontFamily: 'GothamProRegular',
                fontSize: 16,
                color: 'var(--dark)',
                margin: '8px 0',
              }}
            >
              Sug‘urtalash hududi
            </Typography>
            <Grid container spacing={{ xs: 2, md: 2 }}>
              <Grid item xs={6} sm={4} md={4}>
                <CustomSelect
                  name='credit_area_region_code'
                  control={form.control}
                  placeholder='Viloyat'
                  label='Viloyat'
                  options={regions}
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <CustomSelect
                  name='credit_area_district_code'
                  control={form.control}
                  placeholder='Tuman'
                  label='Tuman'
                  options={provinces2}
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <CustomSelect
                  name='credit_area_massiv_code'
                  control={form.control}
                  placeholder='Hudud (massiv)'
                  label='Hudud (massiv)'
                  options={massiveList}
                />
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
              >
                {fields.map((item, index) => {
                  return (
                    <FieldWrapper key={item.id}>
                      <InputMask
                        key={item.id}
                        control={form.control}
                        name={`credit_area_contour_numbers.${index}.cad_num`}
                        placeholder='Kontur raqamlari'
                        label='Kontur raqamlari'
                        inputRef={el => (inputRefs.current[index] = el)}
                        mask={[
                          /\d/,
                          /\d/,
                          ':',
                          /\d/,
                          /\d/,
                          ':',
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                        ]}
                      />
                      {index === fields.length - 1 ? (
                        <IconButton
                          type='button'
                          onClick={() => {
                            append({ cad_num: '' })
                          }}
                          className='plus-btn'
                        >
                          <AddIcon />
                        </IconButton>
                      ) : (
                        <IconButton
                          type='button'
                          onClick={() => {
                            remove(index)
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      )}
                    </FieldWrapper>
                  )
                })}
              </Grid>
            </Grid>
            <Typography
              sx={{
                fontFamily: 'GothamProRegular',
                fontSize: 16,
                color: 'var(--dark)',
                margin: '8px 0',
              }}
            >
              Sug‘urtalash uchun so‘ralgan ekinlar
            </Typography>
            <Grid container spacing={{ xs: 2, md: 2 }}>
              <Grid item xs={6} sm={4} md={4}>
                <Input
                  control={form.control}
                  name='crop_name'
                  placeholder='Q/x ekini nomi'
                  label='Q/x ekini nomi'
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <Input
                  control={form.control}
                  name='crop_area'
                  placeholder='Ekin (ko‘chat) maydoni, ga'
                  label='Ekin (ko‘chat) maydoni, ga'
                  type='number'
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <Input
                  control={form.control}
                  name='crop_fertility_norm'
                  placeholder='Me’yoriy hosildorlik, s/ga'
                  label='Me’yoriy hosildorlik, s/ga'
                  type='number'
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <Input
                  control={form.control}
                  name='crop_price'
                  placeholder='Hosilni 1 tn narxi, so‘m'
                  label='Hosilni 1 tn narxi, so‘m'
                  type='number'
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <Input
                  control={form.control}
                  name='crop_actual_harvest'
                  placeholder='Yalpi hosil, tn'
                  label='Yalpi hosil, tn'
                  type='number'
                />
              </Grid>
            </Grid>
            <Typography
              sx={{
                fontFamily: 'GothamProRegular',
                fontSize: 16,
                color: 'var(--dark)',
                margin: '8px 0',
              }}
            >
              Terim-yig'im muddati
            </Typography>
            <Grid container spacing={{ xs: 2, md: 2 }}>
              <Grid item xs={6} sm={4} md={4}>
                <InputDate
                  control={form.control}
                  name='crop_harvest_start'
                  placeholder='Boshlash sanasi'
                  label='Boshlash sanasi'
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <InputDate
                  control={form.control}
                  name='crop_harvest_end'
                  placeholder='Yakunlash sanasi'
                  label='Yakunlash sanasi'
                />
              </Grid>
            </Grid>

            <Typography
              sx={{
                fontFamily: 'GothamProRegular',
                fontSize: 16,
                color: 'var(--dark)',
                margin: '8px 0',
              }}
            >
              Sug‘urta tavakkalchiliklari
            </Typography>
            <Grid container spacing={{ xs: 2, md: 2 }}>
              <Grid item xs={6} sm={4} md={6}>
                <InputCheckbox
                  control={form.control}
                  name='risk_factors_climatic'
                  label='Surunkali yomg‘ir yog‘ishi xamda yog‘ingarchilikdan so‘ng xavo xaroratini 
              keskin isib ketishi natijasida tuproqning yuqori qatlamini qatqaloq bo‘lishi.'
                  labelPlacement='start'
                  sx={{
                    fontFamily: 'GothamProRegular !important',
                    marginLeft: 0,
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={4} md={6}>
                <InputCheckbox
                  control={form.control}
                  name='risk_factors_dehydration'
                  label='qurg‘oqchilik, yong‘in, bo‘ron, do‘l, kuchli yomg‘ir (jala), garmsel, qorasovuq,
               suv toshqini, yashin urishi, uchuvchi apparatlari va ularning qoldiqlarining tushishi'
                  labelPlacement='start'
                  sx={{
                    fontFamily: 'GothamProRegular !important',
                    marginLeft: 0,
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={4} md={6}>
                <InputCheckbox
                  control={form.control}
                  name='risk_factors_insects'
                  label='Uchinchi shaxslar tomonidan sug‘urta qilingan paxta xom ashyosi ekinlari va/yoki ularning hosili 
              vegityatsiya davrida qasddan yo‘q qilinishi yoki shikastlantirilishi.'
                  labelPlacement='start'
                  sx={{
                    fontFamily: 'GothamProRegular !important',
                    marginLeft: 0,
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={4} md={6}>
                <InputCheckbox
                  control={form.control}
                  name='risk_factors_third_party'
                  label='Zararkunanda xashoratlar yoki kasalliklarni Epifitotik xususiyatga ko‘ra tarqalishi'
                  labelPlacement='start'
                  sx={{
                    fontFamily: 'GothamProRegular !important',
                    marginLeft: 0,
                  }}
                />
              </Grid>
            </Grid>
            <Typography
              sx={{
                fontFamily: 'GothamProRegular',
                fontSize: 16,
                color: 'var(--dark)',
                margin: '8px 0',
              }}
            >
              Sug‘urta qiymati
            </Typography>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              sx={{ paddingBottom: isCanceled ? '8px' : '32px' }}
            >
              <Grid item xs={6} sm={4} md={4}>
                <CustomSelect
                  control={form.control}
                  name='insurance_price'
                  label="Sug'urta javobgarligi (foiz)"
                  options={insurancePrice}
                />
              </Grid>
            </Grid>
            {isCanceled && (
              <Grid container sx={{ paddingBottom: '32px' }}>
                <Grid item xs={6} sm={4} md={4}>
                  <TextArea
                    control={form.control}
                    name='comment'
                    placeholder='Arizani rad etish sababini kiriting'
                    label='Arizani rad etish sababini kiriting'
                    type='number'
                  />
                </Grid>
              </Grid>
            )}
            <Stack direction='row' spacing={2}>
              {isCanceled ? (
                <Button
                  variant='outlined'
                  sx={{
                    color: COLORS.RED,
                    borderRadius: '8px',
                    border: `1.5px solid ${COLORS.RED} !important`,
                  }}
                >
                  Rad etish
                </Button>
              ) : (
                <Button
                  variant='outlined'
                  sx={{
                    color: '#08705F',
                    borderRadius: '8px',
                    border: '1.5px solid #08705F',
                    opacity: 0.7,
                  }}
                >
                  Tozalash
                </Button>
              )}

              <Button
                type='submit'
                variant='contained'
                onClick={() => {
                  // naviagate('/')
                }}
                sx={{ background: '#08705F', opacity: 0.7 }}
              >
                Yuborish
              </Button>
            </Stack>
          </Form>
        )}
      </Stack>
      <LoadingOverlay isLoading={isLoading} />
    </Stack>
  )
}

export default CreateCropInsurance
