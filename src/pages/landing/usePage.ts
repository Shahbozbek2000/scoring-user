import { request } from '@/configs/requests'
import { useQuery } from '@tanstack/react-query'

export const usePage = () => {
  const { data: statistics = null } = useQuery({
    queryKey: ['get-statistics'],
    queryFn: async () => await request('statistics'),
    select: res => {
      return res?.data
    },
  })

  return {
    statistics,
  }
}
