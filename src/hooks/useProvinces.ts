import { request } from '@/configs/requests'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { useQuery } from '@tanstack/react-query'

interface IRegion {
  district_code: string
  district_name: string
}

export const useProvinces = () => {
  const { data: provinces = [] } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_PROVINCES],
    queryFn: async () => await request('/data/districts'),
    select: res => {
      return res?.data?.map((v: IRegion) => {
        return {
          value: v?.district_code,
          label: v?.district_name,
        }
      })
    },
  })

  return provinces
}
