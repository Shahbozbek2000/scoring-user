// @ts-nocheck
import MaskedInput from 'react-text-mask'
import TextField from '@mui/material/TextField'
import { type InputMaskProps } from '@/types/components'
import { useController, type FieldValues } from 'react-hook-form'

export const InputMask = <T extends FieldValues>({
  name,
  mask,
  pipe,
  guide,
  control,
  showMask,
  placeholderChar,
  keepCharPositions,
  inputRef,
  ...rest
}: InputMaskProps<T>) => {
  const {
    field,
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
  })

  return (
    <MaskedInput
      mask={mask}
      pipe={pipe}
      guide={guide}
      showMask={showMask}
      placeholderChar={placeholderChar}
      keepCharPositions={keepCharPositions}
      value={field.value || ''}
      onChange={e => {
        field.onChange(e.target.value)
      }} // Update react-hook-form state
      onBlur={field.onBlur}
      render={(maskedRef, props) => {
        return (
          <TextField
            {...rest}
            {...props}
            error={invalid}
            inputRef={el => {
              maskedRef(el)
              field.ref(el)
              if (inputRef) inputRef(el)
            }}
            variant='outlined'
            autoComplete='off'
            size='small'
            helperText={error?.message}
            InputLabelProps={{ shrink: true }}
            onChange={e => {
              props.onChange(e)
              if (rest?.onChange) rest?.onChange(e)
            }}
          />
        )
      }}
    />
  )
}
