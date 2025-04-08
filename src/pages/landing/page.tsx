import { Stack } from '@mui/material'
import { Main } from './components/main'
import { Statistics } from './components/statistics'
// import { RequiedInformation } from './components/required-information'
import { Modules } from './components/modules'
import { getUser } from '@/utils/user'
import { usePage } from './usePage'

const Landing = () => {
  const user = getUser()
  const { statistics } = usePage()

  return (
    <Stack sx={{ gap: '64px' }}>
      <Main />
      {user !== null && <Modules />}
      <Statistics statistics={statistics} />
      {/* <RequiedInformation /> */}
    </Stack>
  )
}

export default Landing
