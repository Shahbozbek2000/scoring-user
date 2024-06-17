import { request } from '@/configs/requests'

export const getAllApplications = async ({ params, type_code }: any) => {
  return await request('/application/get/filtered', {
    params: {
      page: params.page,
      limit: params.limit,
      type_code,
    },
  })
}

export const createApplications = async <T>(payload: T) => {
  return await request.post('/application/new', payload)
}

export const getByIDApplications = async <T>(id: T) => {
  return await request(`/application/get/${id}`)
}

export const rejectApplications = async (payload: any) => {
  return await request.post(`/application/reject/${payload?.id}`, { comment: payload?.comment })
}

export const acceptApplications = async <T>(id: any, data: T) => {
  return await request.post(`/application/accept/${id}`, data)
}
