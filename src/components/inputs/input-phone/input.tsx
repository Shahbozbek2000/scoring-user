import Stack from '@mui/material/Stack'
import { InputMask } from '../input-mask'
import Typography from '@mui/material/Typography'
import { type FieldValues } from 'react-hook-form'
import { type InputPhoneProps } from '@/types/components'
import InputAdornment from '@mui/material/InputAdornment'

export const InputPhone = <T extends FieldValues>(props: InputPhoneProps<T>) => {
  return (
    <InputMask
      fullWidth
      {...props}
      mask={[/\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <Stack gap='10px' direction='row' alignItems='center'>
              <Typography color='#60676D' fontFamily='GothamProRegular' fontSize={14}>
                +998
              </Typography>
            </Stack>
          </InputAdornment>
        ),
        ...props.InputProps,
      }}
    />
  )
}
