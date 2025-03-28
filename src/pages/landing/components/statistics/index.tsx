import { Card, Info } from './style'
import { Grid, Stack, Typography } from '@mui/material'
import { ReactComponent as IconDocument } from '@/assets/icons/document.svg'
import { ReactComponent as IconApplyCount } from '@/assets/icons/apply-count.svg'
import { ReactComponent as IconRejectedApplyCount } from '@/assets/icons/rejected.apply-count.svg'
import { ReactComponent as IconSeparatedInsurance } from '@/assets/icons/separated.insurance-price.svg'

interface Data {
  applications: {
    total: number
    approved: number
    rejected: number
    pending: number
    by_crop_type: {
      wheat: number
      cotton: number
      others: number
      unspecified: number
    }
  }
  contracts: {
    total: number
    system_approved: number
    system_rejected: number
    system_pending: number
    user_approved: number
    user_rejected: number
    user_pending: number
  }
  users: {
    total: number
  }
  lands: {
    total_documents: number
    total_contours: number
    total_area: string
  }
}

interface StatisticsProps {
  statistics: Data
}

export const Statistics = ({ statistics }: StatisticsProps) => {
  return (
    <Stack>
      <Typography sx={{ color: '#313131', fontFamily: 'GothamProMedium', fontSize: 28 }}>
        Statistika
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <IconDocument />
            <Info>
              <Typography className='main-text'>Jami arizalar soni</Typography>
              <Typography className='primary-text'>{statistics?.applications?.total}</Typography>
            </Info>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <IconApplyCount />
            <Info>
              <Typography className='main-text'>Qabul qilingan arizalar soni</Typography>
              <Typography className='primary-text'>{statistics?.applications?.approved}</Typography>
            </Info>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <IconRejectedApplyCount />
            <Info>
              <Typography className='main-text'>Qaytarilgan arizalar soni</Typography>
              <Typography className='primary-text'>{statistics?.applications?.rejected}</Typography>
            </Info>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <IconSeparatedInsurance />
            <Info>
              <Typography className='main-text'>Sug'urtalangan yerlar maydoni</Typography>
              <Typography className='primary-text'>{statistics?.lands?.total_area} ga</Typography>
            </Info>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  )
}
