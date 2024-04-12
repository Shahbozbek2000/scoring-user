import {Divider, Stack, Typography} from "@mui/material";

const VideoInstruction = () => {
    return (
        <Stack gap='32px'>
            <Stack gap='12px'>
                <Typography sx={{color: '#191E1D', fontFamily: 'GothamProMedium', fontSize: 24, fontWeight: 500}}>
                    Welcome to AIS
                </Typography>
                <Divider/>
                <Typography sx={{color: '#191E1D', fontFamily: 'GothamProMedium', fontSize: 14, textAlign: 'justify'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at pharetra erat, eu congue felis. Ut
                    ultricies in mauris vulputate volutpat. Donec quis nibh hendrerit, dictum mi in, aliquam neque.
                    Praesent auctor finibus ante at tincidunt. Sed sodales blandit pretium. Suspendisse placerat
                    pulvinar dolor, et accumsan metus tincidunt sit amet. Morbi varius ex non viverra blandit. Donec sit
                    amet tristique purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    <br/><br/>
                    Suspendisse luctus ante a quam lobortis, nec egestas ligula laoreet. Nunc ut congue justo.
                    Suspendisse in mauris molestie, rutrum nulla id, dictum massa. Nulla ullamcorper lectus vel felis
                    rutrum tincidunt sit amet sit amet justo. In hac habitasse platea dictumst. Curabitur feugiat
                    blandit congue. Nulla mattis a tortor quis vehicula. Curabitur consequat risus ac justo gravida
                    iaculis. Praesent tempus a eros pulvinar scelerisque. Cras sagittis est vitae nibh lacinia, a
                    euismod ante cursus.
                </Typography>
            </Stack>
            <Stack gap='24px'>
                <Typography sx={{color: '#191E1D', fontFamily: 'GothamProMedium', fontSize: 24, fontWeight: 500}}>
                    How to use AIS
                </Typography>
                <Stack
                    src={'https://www.youtube.com/embed/aAIH6yLgI68?si=xfANKZEvK72-FRp_'}
                    allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'}
                    frameBorder='0'
                    allowFullScreen
                    component='iframe'
                    sx={{height: '600px', borderRadius: '24px'}}
                />
                <Typography sx={{color: '#191E1D', fontFamily: 'GothamProMedium', fontSize: 14, textAlign: 'justify'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at pharetra erat, eu congue felis. Ut
                    ultricies in mauris vulputate volutpat. Donec quis nibh hendrerit, dictum mi in, aliquam neque.
                    Praesent auctor finibus ante at tincidunt. Sed sodales blandit pretium. Suspendisse placerat
                    pulvinar dolor, et accumsan metus tincidunt sit amet. Morbi varius ex non viverra blandit. Donec sit
                    amet tristique purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </Typography>
            </Stack>
            <Stack gap='24px'>
                <Typography sx={{color: '#191E1D', fontFamily: 'GothamProMedium', fontSize: 24, fontWeight: 500}}>
                    How to use AIS
                </Typography>
                <Stack
                    src={'https://www.youtube.com/embed/aAIH6yLgI68?si=xfANKZEvK72-FRp_'}
                    allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'}
                    frameBorder='0'
                    allowFullScreen
                    component='iframe'
                    sx={{height: '600px', borderRadius: '24px'}}
                />
                <Typography sx={{color: '#191E1D', fontFamily: 'GothamProMedium', fontSize: 14, textAlign: 'justify'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at pharetra erat, eu congue felis. Ut
                    ultricies in mauris vulputate volutpat. Donec quis nibh hendrerit, dictum mi in, aliquam neque.
                    Praesent auctor finibus ante at tincidunt. Sed sodales blandit pretium. Suspendisse placerat
                    pulvinar dolor, et accumsan metus tincidunt sit amet. Morbi varius ex non viverra blandit. Donec sit
                    amet tristique purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </Typography>
            </Stack>
        </Stack>
    )
}

export default VideoInstruction
