import { Controller } from 'react-hook-form'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'

export const InputDate = ({ name, control, ...props }: any) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <DesktopDatePicker
              {...field}
              {...props}
              sx={{ background: 'transparent !important', width: '100%' }}
            />
          </>
        )}
      />
    </LocalizationProvider>
  )
}
