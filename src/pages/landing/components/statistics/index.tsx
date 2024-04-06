import { Card, Info } from './style'
import { Grid, Stack, Typography } from '@mui/material'
import { ReactComponent as IconDocument } from '@/assets/icons/document.svg'
import { ReactComponent as IconApplyCount } from '@/assets/icons/apply-count.svg'
import { ReactComponent as IconRejectedApplyCount } from '@/assets/icons/rejected.apply-count.svg'
import { ReactComponent as IconSeparatedInsurance } from '@/assets/icons/separated.insurance-price.svg'

export const Statistics = () => {
  return (
    <Stack sx={{ padding: '64px 0' }}>
      <Typography sx={{ color: '#313131', fontFamily: 'GothamProMedium', fontSize: 28 }}>
        Statistika
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={6} sm={6} md={3}>
          <Card>
            <IconDocument />
            <Info>
              <Typography className='main-text'>Yangi arizalar soni</Typography>
              <Typography className='primary-text'>36808</Typography>
            </Info>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Card>
            <IconApplyCount />
            <Info>
              <Typography className='main-text'>Ko’rib chiqilayatogan arizalar soni</Typography>
              <Typography className='primary-text'>36808</Typography>
            </Info>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Card>
            <IconRejectedApplyCount />
            <Info>
              <Typography className='main-text'>Qaytarilgan arizalar soni</Typography>
              <Typography className='primary-text'>36808</Typography>
            </Info>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Card>
            <IconSeparatedInsurance />
            <Info>
              <Typography className='main-text'>Ajratilgan sug’urta summasi</Typography>
              <Typography className='primary-text'>36808</Typography>
            </Info>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  )
}
