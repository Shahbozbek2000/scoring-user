import React from 'react'
import { FormControl, InputLabel, MenuItem, Select, type SelectProps } from '@mui/material'
import { Controller, type Control } from 'react-hook-form'

interface IOption {
  value: number
  label: string
}

interface ICustomSelectProps extends SelectProps {
  name: string
  control: Control<any>
  options: IOption[]
  label: string
}

export const CustomSelect: React.FC<ICustomSelectProps> = ({
  name,
  control,
  options,
  label,
  ...props
}) => (
  <FormControl fullWidth>
    <InputLabel>{label}</InputLabel>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select {...field} {...props}>
          {options.map(option => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            )
          })}
        </Select>
      )}
    />
  </FormControl>
)
