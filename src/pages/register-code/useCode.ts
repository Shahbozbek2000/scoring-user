import { type SubmitHandler } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { verify } from '@/apis/login'
import { ROUTER } from '@/constants/router'
import { useNavigate } from 'react-router-dom'

interface FormValues {
  verify: number
}

export const useCode = () => {
  const navigate = useNavigate()

  const { mutate, isLoading } = useMutation({
    mutationFn: async data => await verify(data),
    onSuccess: res => {
      localStorage.setItem('token', res?.data?.token)
      sessionStorage.setItem('token', res?.data?.token)
      navigate(ROUTER.HOME)
      window.location.href = ROUTER.HOME
    },
    onError: () => {},
  })

  const onVerify: SubmitHandler<FormValues | any> = credentials => {
    mutate(credentials)
  }

  return {
    isLoading,
  }
}
