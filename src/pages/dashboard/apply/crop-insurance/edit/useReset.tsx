import { getByIDApplications } from '@/apis/applications'
import { DATE_FORMAT } from '@/constants/format'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { useFieldArray } from 'react-hook-form'
import { useParams } from 'react-router-dom'

interface IReset {
  form: any
}

export const useReset = ({ form }: IReset) => {
  const { id } = useParams()
  const { fields } = useFieldArray({
    control: form.control,
    name: 'credit_area_contour_numbers',
  })

  const { isLoading, isFetching } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_BY_ID_APPLICATIONS, id],
    queryFn: async () => await getByIDApplications(id),
    select: res => {
      return res?.data
    },
    onSuccess: response => {
      form.reset({
        date: dayjs(response?.date).format(DATE_FORMAT),
        credit_area_contour_numbers: response?.credit_area_contour_numbers,
        crop_harvest_start: dayjs(response?.crop_harvest_start).format(DATE_FORMAT),
        crop_harvest_end: dayjs(response?.crop_harvest_end).format(DATE_FORMAT),
        risk_factors_climatic: response?.risk_factors_climatic,
        risk_factors_dehydration: response?.risk_factors_dehydration,
        risk_factors_insects: response?.risk_factors_insects,
        risk_factors_third_party: response?.risk_factors_third_party,
        ...response,
      })
    },
    enabled: id !== null,
  })

  return {
    fields,
    isLoading,
    isFetching,
  }
}
