import React from 'react'
import { FormControl, InputLabel, MenuItem, Select, type SelectProps } from '@mui/material'
import { Controller, type Control } from 'react-hook-form'

interface IOption {
  value: number
  label: string
}

interface ICustomSelectProps extends Omit<SelectProps, 'placeholder'> {
  name: string
  control: Control<any>
  options: IOption[]
  label: string
  placeholder?: string  // Add this but handle it differently
}

export const CustomSelect: React.FC<ICustomSelectProps> = ({
  name,
  control,
  options,
  label,
  placeholder,
  ...props
}) => (
  <FormControl fullWidth>
    <InputLabel>{label}</InputLabel>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select {...field} {...props} sx={{ borderColor: 'red' }}>
          {placeholder && (
            <MenuItem value="" disabled>
              {placeholder}
            </MenuItem>
          )}
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