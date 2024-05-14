/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Input } from '@/components/inputs/input'
import { InputCheckbox } from '@/components/inputs/input-checkbox'
import { TextArea } from '@/components/inputs/input-textarea'
import { COLORS } from '@/constants/css'
import { Button, Grid, Stack, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { LoadingOverlay } from '@/components/loading-overlay'
import { Form } from 'react-router-dom'
import { useCreate } from './useCreate'

const CreateCoverageInsurance = () => {
  const [isCanceled, setIsCanceled] = useState(false)
  const { form, isLoading, onCreate } = useCreate()

  return (
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
        mb='24px'
        fontFamily='GothamProRegular'
      >
        Kreditning qaytarilmaslik xatarini sug'urta qilish bo'yicha so'rovnoma-ariza
      </Typography>
      <Form onSubmit={form.handleSubmit(onCreate)}>
        <Grid container spacing={{ xs: 2, md: 2 }}>
          <Grid item xs={6}>
            <Input
              control={form.control}
              name='bank_name'
              placeholder='Text'
              label="Sug'urta qildiruvchi (bank)"
            />
          </Grid>
          <Grid item xs={6}>
            <Input control={form.control} name='name' placeholder='Ism' label='Qarz oluvchi' />
          </Grid>

          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='credit'
              placeholder='Toshkent'
              label='Kredit shartnomasi'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='credet_currens'
              placeholder="So'm"
              label='Kredit shartnomasining valyutasi'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='credet_count'
              placeholder="So'm"
              label='Kredit miqdori'
            />
          </Grid>
        </Grid>
        <Grid container spacing={{ xs: 2, md: 2 }} sx={{ padding: '8px 0' }}>
          <Grid item sm={6} md={3}>
            <Input
              control={form.control}
              name='credet_time'
              placeholder='13.12.2024'
              label='Kredit muddati'
              type='date'
            />
          </Grid>
          <Grid item sm={6} md={3}>
            <Input
              control={form.control}
              name='insurance_currence'
              placeholder="So'm"
              label="Sug'urta shartnomasining valyutasi"
            />
          </Grid>
          <Grid item sm={6} md={3}>
            <Input
              control={form.control}
              name='insurance_summa'
              placeholder="So'm"
              label="Sug'urta summasi"
            />
          </Grid>
          <Grid item sm={6} md={3}>
            <Input
              control={form.control}
              name='insurance_priod'
              placeholder="So'm"
              label="Sug'urta davri"
            />
          </Grid>
        </Grid>
        <Grid container sx={{ paddingBottom: '8px' }}>
          <Grid item xs={12}>
            <TextArea
              control={form.control}
              name='comment'
              placeholder='13.12.2024'
              label='Kreditning boshqa tafsilotlari'
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
          Sug‘urta qiymati va sug‘urta summasi
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          sx={{ paddingBottom: isCanceled ? '8px' : '32px' }}
        >
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='insurance_amount'
              placeholder='Sug‘urta qiymati, so‘m'
              label='Sug‘urta qiymati (mahsulot qiymati), so‘m'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='insurance_price'
              placeholder='Sug‘urta summasi, so‘m'
              label='Sug‘urta summasi (sug‘urta javobgarligi), so‘m'
            />
          </Grid>
        </Grid>

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

          <Button type='submit' variant='contained' sx={{ background: '#08705F', opacity: 0.7 }}>
            Yuborish
          </Button>
        </Stack>
      </Form>
      <LoadingOverlay isLoading={false} />
    </Stack>
  )
}

export default CreateCoverageInsurance
