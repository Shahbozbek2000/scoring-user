import { Input } from '@/components/inputs/input'
import { InputCheckbox } from '@/components/inputs/input-checkbox'
import { Grid, Stack, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Form } from 'react-router-dom'
import { useReset } from './useReset'

export default function EditCropInsurance() {
  const form = useForm()
  useReset({ form })

  return (
    <Stack
      width='100%'
      borderRadius='12px'
      p='24px'
      mx='auto'
      gap='24px'
      bgcolor={theme => theme.palette.allColors.WHITE}
    >
      <Form>
        <Grid container spacing={{ xs: 2, md: 2 }}>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='number'
              placeholder='Ariza raqami'
              label='Ariza raqami'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='date'
              placeholder='Sana'
              label='Sana'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4} />
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='region_name'
              placeholder='Viloyat'
              label='Viloyat'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='district_name'
              placeholder='Tuman'
              label='Tuman'
              InputProps={{
                readOnly: true,
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
          Sug’urta qildiruvchi to`g’risidagi ma’lumot
        </Typography>
        <Grid container spacing={{ xs: 2, md: 2 }}>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='farmer_name'
              placeholder='To`liq nomi'
              label='To`liq nomi'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='farmer_stir'
              placeholder='STIR raqami'
              label='STIR raqami'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='farmer_requisites'
              placeholder='Bank rekvizitlari'
              label='Bank rekvizitlari'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='creditor_address'
              placeholder='Yuridik manzili'
              label='Yuridik manzili'
              InputProps={{
                readOnly: true,
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
          Naf oluvchi to‘g‘risida ma’lumot
        </Typography>
        <Grid container spacing={{ xs: 2, md: 2 }}>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='creditor_name'
              placeholder='To`liq nomi'
              label='To`liq nomi'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='creditor_stir'
              placeholder='STIR raqami'
              label='STIR raqami'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='creditor_requisites'
              placeholder='Bank rekvizitlari'
              label='Bank rekvizitlari'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='creditor_address'
              placeholder='Yuridik manzili'
              label='Yuridik manzili'
              InputProps={{
                readOnly: true,
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
          Sug‘urtalash so‘ralgan ekinlar haqida asosiy ma’lumotlar
        </Typography>
        <Grid container spacing={{ xs: 2, md: 2 }}>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='crop_name'
              placeholder='Q/x ekini nomi'
              label='Q/x ekini nomi'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='crop_area'
              placeholder='Ekin (ko‘chat) maydoni, ga'
              label='Ekin (ko‘chat) maydoni, ga'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='crop_fertility_norm'
              placeholder='Me’yoriy hosildorlik, s/ga'
              label='Me’yoriy hosildorlik, s/ga'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='crop_price'
              placeholder='Hosilni 1 tn narxi, so‘m'
              label='Hosilni 1 tn narxi, so‘m'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='crop_actual_harvest'
              placeholder='Yalpi hosil, tn'
              label='Yalpi hosil, tn'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='legal_location2'
              placeholder='Terim-yig‘im muddati'
              label='Terim-yig‘im muddati'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='crop_harvest_start'
              placeholder='Boshlash sanasi'
              label='Boshlash sanasi'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='crop_harvest_end'
              placeholder='Yakunlash sanasi'
              label='Yakunlash sanasi'
              InputProps={{
                readOnly: true,
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
          Sug‘urtalash hududi
        </Typography>
        <Grid container spacing={{ xs: 2, md: 2 }}>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='credit_area_region_code'
              placeholder='Viloyat'
              label='Viloyat'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='credit_area_district_code'
              placeholder='Tuman'
              label='Tuman'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='credit_area_massiv_code'
              placeholder='Hudud (massiv)'
              label='Hudud (massiv)'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='credit_area_contour_numbers'
              placeholder='Kontur raqamlari'
              label='Kontur raqamlari'
              InputProps={{
                readOnly: true,
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
              disabled
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
              disabled
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
              disabled
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
              disabled
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
        <Grid container spacing={{ xs: 2, md: 2 }}>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='insurance_amount'
              placeholder='Sug‘urta qiymati, so‘m'
              label='Sug‘urta qiymati (mahsulot qiymati), so‘m'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Input
              control={form.control}
              name='insurance_price'
              placeholder='Sug‘urta summasi, so‘m'
              label='Sug‘urta summasi (sug‘urta javobgarligi), so‘m'
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>
      </Form>
    </Stack>
  )
}
