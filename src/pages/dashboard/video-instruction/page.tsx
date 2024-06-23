import { Divider, Stack, Typography } from '@mui/material'
import ReactPlayer from 'react-player'

const VideoInstruction = () => {
  return (
    <Stack gap='32px'>
      <Stack gap='12px'>
        <Typography
          sx={{ color: '#191E1D', fontFamily: 'GothamProMedium', fontSize: 24, fontWeight: 500 }}
        >
          Welcome to AIS
        </Typography>
        <Divider />
        <Typography
          sx={{
            color: '#191E1D',
            fontFamily: 'GothamProMedium',
            fontSize: 14,
            textAlign: 'justify',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at pharetra erat, eu congue
          felis. Ut ultricies in mauris vulputate volutpat. Donec quis nibh hendrerit, dictum mi in,
          aliquam neque. Praesent auctor finibus ante at tincidunt. Sed sodales blandit pretium.
          Suspendisse placerat pulvinar dolor, et accumsan metus tincidunt sit amet. Morbi varius ex
          non viverra blandit. Donec sit amet tristique purus. Interdum et malesuada fames ac ante
          ipsum primis in faucibus.
          <br />
          <br />
          Suspendisse luctus ante a quam lobortis, nec egestas ligula laoreet. Nunc ut congue justo.
          Suspendisse in mauris molestie, rutrum nulla id, dictum massa. Nulla ullamcorper lectus
          vel felis rutrum tincidunt sit amet sit amet justo. In hac habitasse platea dictumst.
          Curabitur feugiat blandit congue. Nulla mattis a tortor quis vehicula. Curabitur consequat
          risus ac justo gravida iaculis. Praesent tempus a eros pulvinar scelerisque. Cras sagittis
          est vitae nibh lacinia, a euismod ante cursus.
        </Typography>
      </Stack>
      <Stack gap='24px'>
        <Typography
          sx={{ color: '#191E1D', fontFamily: 'GothamProMedium', fontSize: 24, fontWeight: 500 }}
        >
          How to use AIS
        </Typography>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=yNVZxzloWRA'
          width='100%'
          height={600}
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
          }}
        />
        <Typography
          sx={{
            color: '#191E1D',
            fontFamily: 'GothamProMedium',
            fontSize: 14,
            textAlign: 'justify',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at pharetra erat, eu congue
          felis. Ut ultricies in mauris vulputate volutpat. Donec quis nibh hendrerit, dictum mi in,
          aliquam neque. Praesent auctor finibus ante at tincidunt. Sed sodales blandit pretium.
          Suspendisse placerat pulvinar dolor, et accumsan metus tincidunt sit amet. Morbi varius ex
          non viverra blandit. Donec sit amet tristique purus. Interdum et malesuada fames ac ante
          ipsum primis in faucibus.
        </Typography>
      </Stack>
      <Stack gap='24px'>
        <Typography
          sx={{ color: '#191E1D', fontFamily: 'GothamProMedium', fontSize: 24, fontWeight: 500 }}
        >
          How to use AIS
        </Typography>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=X2KmyVFeMzw'
          width='100%'
          height={600}
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
          }}
        />
        <Typography
          sx={{
            color: '#191E1D',
            fontFamily: 'GothamProMedium',
            fontSize: 14,
            textAlign: 'justify',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at pharetra erat, eu congue
          felis. Ut ultricies in mauris vulputate volutpat. Donec quis nibh hendrerit, dictum mi in,
          aliquam neque. Praesent auctor finibus ante at tincidunt. Sed sodales blandit pretium.
          Suspendisse placerat pulvinar dolor, et accumsan metus tincidunt sit amet. Morbi varius ex
          non viverra blandit. Donec sit amet tristique purus. Interdum et malesuada fames ac ante
          ipsum primis in faucibus.
        </Typography>
      </Stack>
      <Stack gap='24px'>
        <Typography
          sx={{ color: '#191E1D', fontFamily: 'GothamProMedium', fontSize: 24, fontWeight: 500 }}
        >
          How to use AIS
        </Typography>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=UnI1-M7Vo98'
          width='100%'
          height={600}
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
          }}
        />
        <Typography
          sx={{
            color: '#191E1D',
            fontFamily: 'GothamProMedium',
            fontSize: 14,
            textAlign: 'justify',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at pharetra erat, eu congue
          felis. Ut ultricies in mauris vulputate volutpat. Donec quis nibh hendrerit, dictum mi in,
          aliquam neque. Praesent auctor finibus ante at tincidunt. Sed sodales blandit pretium.
          Suspendisse placerat pulvinar dolor, et accumsan metus tincidunt sit amet. Morbi varius ex
          non viverra blandit. Donec sit amet tristique purus. Interdum et malesuada fames ac ante
          ipsum primis in faucibus.
        </Typography>
      </Stack>
      <Stack gap='24px'>
        <Typography
          sx={{ color: '#191E1D', fontFamily: 'GothamProMedium', fontSize: 24, fontWeight: 500 }}
        >
          How to use AIS
        </Typography>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=svGtu-KHbhw'
          width='100%'
          height={600}
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
          }}
        />
        <Typography
          sx={{
            color: '#191E1D',
            fontFamily: 'GothamProMedium',
            fontSize: 14,
            textAlign: 'justify',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at pharetra erat, eu congue
          felis. Ut ultricies in mauris vulputate volutpat. Donec quis nibh hendrerit, dictum mi in,
          aliquam neque. Praesent auctor finibus ante at tincidunt. Sed sodales blandit pretium.
          Suspendisse placerat pulvinar dolor, et accumsan metus tincidunt sit amet. Morbi varius ex
          non viverra blandit. Donec sit amet tristique purus. Interdum et malesuada fames ac ante
          ipsum primis in faucibus.
        </Typography>
      </Stack>
    </Stack>
  )
}

export default VideoInstruction
