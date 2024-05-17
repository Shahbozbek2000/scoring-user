import { request } from '@/configs/requests'

export const login = async <T>(data: T) => {
  return await request.post('/auth/login', data)
}

export const register = async <T>(data: T) => {
  return await request.post('/auth/signup', data)
}
export const verify = async <T>(data: T) => {
  return await request.post('/auth/verify', data)
}
