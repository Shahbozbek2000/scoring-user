import { Button, Grid, Stack, Typography } from '@mui/material'
import { PaperWrapper } from './style'
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer'
import { LoadingOverlay } from '@/components/loading-overlay'
import { TextArea } from '@/components/inputs/input-textarea'
import { usePage } from './usePage'
import { useNavigate } from 'react-router-dom'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

const CreateContractCropInsurance = () => {
  const navigate = useNavigate()
  const { form, onCreate, onReject, isLoading, isCanceled, setIsCanceled, memoizedDocs } = usePage()
  const object = new URLSearchParams(document.location.search)
  const socialParams = Object.fromEntries(object.entries())

  return (
    <Stack gap='16px'>
      <Stack
        direction='row'
        alignItems='center'
        gap='8px'
        sx={{ cursor: 'pointer' }}
        onClick={() => {
          navigate(-1)
        }}
      >
        <ChevronLeftIcon />
        <Typography fontFamily='GothamProMedium'>Ortga qaytish</Typography>
      </Stack>
      <Stack
        width='100%'
        borderRadius='16px'
        p='24px'
        mx='auto'
        gap='24px'
        bgcolor={theme => theme.palette.allColors.WHITE}
      >
        <form onSubmit={form.handleSubmit(onReject)}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <PaperWrapper>
                <DocViewer
                  documents={memoizedDocs}
                  pluginRenderers={DocViewerRenderers}
                  style={{ height: 750 }}
                  config={{
                    header: {
                      disableHeader: true,
                    },
                  }}
                />
              </PaperWrapper>
            </Grid>
          </Grid>
          {isCanceled && (
            <Grid container sx={{ paddingBottom: '32px', paddingTop: '24px' }}>
              <Grid item xs={12} sm={12} md={6}>
                <TextArea
                  control={form.control}
                  name='comment'
                  placeholder='Shartnomani rad etish sababini kiriting'
                  label='Shartnomani rad etish sababini kiriting'
                />
              </Grid>
            </Grid>
          )}

          {socialParams?.user_accepted === 'accepted' ||
          socialParams?.user_accepted === 'canceled' ? (
            <Stack
              direction='row'
              width='100%'
              padding='24px 0'
              justifyContent='flex-start'
              gap='16px'
            >
              <a href={memoizedDocs?.[0]?.uri} download={true} target='_blank' rel='noreferrer'>
                <Button
                  variant='outlined'
                  sx={{ color: '#08705F', border: '1px solid #08705F !important' }}
                >
                  Yuklab olish
                </Button>
              </a>
            </Stack>
          ) : (
            <Stack
              direction='row'
              width='100%'
              padding='24px 0'
              justifyContent='flex-start'
              gap='16px'
            >
              {isCanceled ? (
                <Button
                  variant='outlined'
                  sx={{ color: '#EB5757', border: '1px solid #EB5757 !important' }}
                  onClick={() => {
                    onReject()
                  }}
                >
                  Rad etish
                </Button>
              ) : (
                <Button
                  variant='outlined'
                  sx={{ color: '#EB5757', border: '1px solid #EB5757 !important' }}
                  onClick={() => {
                    setIsCanceled(true)
                  }}
                >
                  Rad etish
                </Button>
              )}
              <Button
                sx={{ backgroundColor: '#08705F' }}
                onClick={() => {
                  onCreate()
                }}
              >
                Imzolash
              </Button>
            </Stack>
          )}
        </form>
        <LoadingOverlay isLoading={isLoading} />
      </Stack>
    </Stack>
  )
}

export default CreateContractCropInsurance
