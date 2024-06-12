import { type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { formSchema } from './form.schema'
import { useMutation, useQuery } from '@tanstack/react-query'
import { login } from '@/apis/login'
import { ROUTER } from '@/constants/router'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { request } from '@/configs/requests'

interface FormValues {
  login: string
  password: string
}

export const useLogin = () => {
  const navigate = useNavigate()
  const form = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  })
  const [searchParam] = useSearchParams()
  const code = searchParam.get('code')
  const state = searchParam.get('state')

  const { data: oneidURL = null, isLoading: isLoadingOneID } = useQuery({
    queryKey: ['get-oneid-url', code],
    queryFn: async () => await request('auth/oneid/url'),
    select: res => {
      return res?.data?.auth_code_url
    },
    enabled: !code,
  })

  const onSuccess = (res: any) => {
    localStorage.setItem('token', res?.data?.token)
    sessionStorage.setItem('token', res?.data?.token)
    navigate(ROUTER.HOME)
  }

  useQuery({
    queryKey: ['one-id-callback', code, state],
    queryFn: async () =>
      await request('/auth/oneid/catcher', {
        params: {
          code,
          state,
        },
      }),
    onSuccess,
    enabled: !!code,
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: async data => await login(data),
    onSuccess,
    onError: () => {},
  })

  const onLogin: SubmitHandler<FormValues | any> = credentials => {
    mutate(credentials)
  }

  return {
    form,
    onLogin,
    oneidURL,
    isLoading,
    isLoadingOneID,
  }
}
