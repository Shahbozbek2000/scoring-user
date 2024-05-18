import { request } from '@/configs/requests'

export const getAllContracts = async () => {
  return await request('/contract/get/all')
}
export const acceptContract = async <T>(id: T) => {
  return await request(`/contract/accept/${id}`)
}
export const rejectContract = async <T>(id: string | undefined | number, payload: T) => {
  return await request.post(`/contract/reject/${id}`, payload)
}

export const acceptOrRejectContract = async <T>(id: string | undefined | number, payload: T) => {
  return await request.post(`contract/action/${id}`, payload)
}

export const contractGenerateDoc = async <T>(id: T) => {
  return await request(`/contract/generate-doc/${id}`)
}

export const contractDetail = async <T>(id: T) => {
  return await request(`/contract/get/${id}`)
}
