import { Grid, Stack, Typography } from '@mui/material'
import { ReactComponent as IconArrowRight } from '@/assets/icons/arrow.right.svg'
import { info } from './constants'
import { Link } from 'react-router-dom'
import { List } from './style'

export const RequiedInformation = () => {
  return (
    <Stack width='100%' sx={{ gap: '24px' }}>
      <Typography sx={{ color: '#313131', fontFamily: 'GothamProMedium', fontSize: 28 }}>
        Kerakli ma’lumotlar
      </Typography>
      {info.map(v => {
        return (
          <Stack
            key={v.id}
            sx={{
              width: '100%',
              background: '#FBFBFB',
              border: '1.5px solid #EDEDED',
              padding: '24px',
              borderRadius: '16px',
              gap: '4px',
            }}
          >
            <Stack width='100%' display='flex' flexDirection='row' justifyContent='space-between'>
              <Typography
                sx={{
                  fontSize: '24px',
                  color: '#004646',
                  fontFamily: 'GothamProMedium',
                  lineHeight: '32px',
                }}
              >
                {v.text}
              </Typography>
              <IconArrowRight />
            </Stack>
            <Typography
              sx={{
                fontSize: '16px',
                fontFamily: 'GothamProRegular',
                color: '#60676D',
                lineHeight: '26px',
              }}
            >
              {v.description}
            </Typography>
          </Stack>
        )
      })}
      <Stack
        sx={{
          width: '100%',
          background: '#FBFBFB',
          border: '1.5px solid #EDEDED',
          padding: '24px',
          borderRadius: '16px',
          gap: '4px',
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            color: '#004646',
            fontFamily: 'GothamProMedium',
            lineHeight: '32px',
          }}
        >
          Texnik qo’llab quvvatlash
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={6} sm={6} md={3}>
            <List>
              <li>Telefon raqam:</li>
              <li>+998 99 631 42 21</li>
              <li>+998 90 901 86 69</li>
            </List>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <List>
              <li>Telegram:</li>
              <li>
                <Link to='/'>@Support_t/me</Link>
              </li>
              <li>+998 90 901 86 69</li>
            </List>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <List>
              <li>Email:</li>
              <li>aabduvokhid1999@gmail.com</li>
            </List>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  )
}
