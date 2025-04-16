import { CustomTable } from '@/components/table'
import { Stack } from '@mui/material'
import { usePage } from './usePage'
import { CustomPagination } from '@/components/pagination'
import BreadcrumpCustom from '@/components/breadcrump'
import { Header } from './components/header'

const CropInsurance = () => {
  const { data, params, columns, setParams } = usePage()

  return (
    <Stack>
      <BreadcrumpCustom />
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
          {data?.length > 0 && (
            <CustomPagination params={params} setParams={setParams} count={data.length} />
          )}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default CropInsurance
