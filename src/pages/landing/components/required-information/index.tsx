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
    </Stack>
  )
}
