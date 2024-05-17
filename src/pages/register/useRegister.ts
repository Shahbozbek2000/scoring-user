import { type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { formSchema } from './form.schema'
import { useMutation } from '@tanstack/react-query'
import { register } from '@/apis/login'
import { ROUTER } from '@/constants/router'
import { useNavigate } from 'react-router-dom'

interface FormValues {
  login: string
  password: string
  name: string
  surname: string
  middleName?: string
  email: string
  stir: string
}

export const useRegister = () => {
  const navigate = useNavigate()
  const form = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: async data => await register(data),
    onSuccess: res => {
      localStorage.setItem('token', res?.data?.token)
      sessionStorage.setItem('token', res?.data?.token)
      navigate(ROUTER.CODE)
    },
    onError: () => {},
  })

  const onRegister: SubmitHandler<FormValues | any> = credentials => {
    mutate(credentials)
  }

  return {
    form,
    onRegister,
    isLoading,
  }
}
