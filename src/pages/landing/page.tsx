import { Stack } from '@mui/material'
import { Main } from './components/main'
import { Statistics } from './components/statistics'
import { RequiedInformation } from './components/required-information'

const Landing = () => {
  return (
    <Stack sx={{ gap: '64px' }}>
      <Main />
      <Statistics />
      <RequiedInformation />
    </Stack>
  )
}

export default Landing
