import { Stack } from '@mui/material'
import { Main } from './components/main'
import { Statistics } from './components/statistics'
import { RequiedInformation } from './components/required-information'
import { Modules } from './components/modules'
import { getUser } from '@/utils/user'

const Landing = () => {
  const user = getUser()

  console.log(user, 'user')

  return (
    <Stack sx={{ gap: '64px' }}>
      <Main />
      {user !== null && <Modules />}
      <Statistics />
      <RequiedInformation />
    </Stack>
  )
}

export default Landing
