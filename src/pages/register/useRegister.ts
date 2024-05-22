import { type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { formSchema } from './form.schema'
import { useMutation } from '@tanstack/react-query'
import { register } from '@/apis/login'
import { ROUTER } from '@/constants/router'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/user/register'
import toast from 'react-hot-toast'

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
  const setLogin = useAuthStore((state: any) => state.setLogin)

  const { mutate, isLoading } = useMutation({
    mutationFn: async data => await register(data),
    onSuccess: res => {
      toast.success('Verification code sent to email')
      navigate(ROUTER.CODE)
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message)
    },
  })

  const onRegister: SubmitHandler<FormValues | any> = credentials => {
    mutate(credentials)
    setLogin(credentials?.login)
  }

  return {
    form,
    onRegister,
    isLoading,
  }
}
