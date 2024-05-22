// @ts-nocheck
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { verify } from '@/apis/login'
import { ROUTER } from '@/constants/router'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/user/register'

export const useCode = () => {
  const navigate = useNavigate()
  const login = useAuthStore((state: any) => state.login)
  const [value, setValue] = useState<string>('')

  console.log(login, 'login')
  const { mutate, isLoading } = useMutation({
    mutationFn: async data => await verify(data),
    onSuccess: res => {
      console.log(res, 'res')
      // localStorage.setItem('token', res?.data?.token)
      // sessionStorage.setItem('token', res?.data?.token)
      // navigate(ROUTER.HOME)
      // window.location.href = ROUTER.HOME
    },
    onError: () => {},
  })

  const onVerify = () => {
    mutate({
      login,
      code: value,
    })
  }

  return {
    value,
    setValue,
    onVerify,
    isLoading,
  }
}
