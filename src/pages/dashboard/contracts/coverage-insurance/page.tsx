import { CustomTable } from '@/components/table'
import { Stack, Typography } from '@mui/material'
import { Header } from './components/header'
import { usePage } from './usePage'
import { CustomPagination } from '@/components/pagination'

const ContractCoverageInsurance = () => {
  const { data, params, columns, setParams } = usePage()

  return (
    <Stack>
      <Typography
        variant='subtitle1'
        fontWeight='light'
        fontSize='18px'
        mb='24px'
        fontFamily='GothamProRegular'
      >
        Kreditni qoplash sug’urtasi
      </Typography>
      <Stack gap='32px'>
        <Header />
        <Stack
          width='100%'
          borderRadius='12px'
          p='24px'
          mx='auto'
          gap='24px'
          bgcolor={theme => theme.palette.allColors.WHITE}
        >
          <CustomTable options={{ data, columns }} emptyTitle="Ma'lumot mavjud emas!" />
          <CustomPagination params={params} setParams={setParams} count={1} />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ContractCoverageInsurance
