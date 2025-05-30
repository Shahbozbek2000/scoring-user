import { createApplications } from '@/apis/applications'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { useRegions } from '@/hooks/useRegions'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { type SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'
import { cropInsuranceSchema } from './form.schema'

interface CropInsurance {
  date: string
  region: string
  region_code: string
  district: string
  district_code: string
  type_code: number
  type_name: string
  status_code: boolean
  status_name: string
  farmer_name: string
  farmer_stir: number
  farmer_requisites: string
  farmer_address: string
  creditor_name: string
  creditor_stir: string
  creditor_mfo: string
  creditor_address: string
  crop_name: string
  crop_area: number
  crop_fertility_norm: number
  crop_price: number
  crop_actual_harvest: number
  crop_harvest_start: string
  crop_harvest_end: string
  credit_area_region_code: number
  credit_area_district_code: number
  credit_area_massiv_code: number
  credit_area_contour_numbers: number[]
  risk_factors_climatic: boolean
  risk_factors_dehydration: boolean
  risk_factors_insects: boolean
  risk_factors_third_party: boolean
  insurance_amount: number
  insurance_price: number
}

export const useCreate = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const crop = location.state.crop
  const form = useForm<any>({
    defaultValues: {
      credit_area_contour_numbers: [{ cad_num: '' }],
    },
    mode: 'onChange',
    resolver: yupResolver(cropInsuranceSchema),
  })
  useRegions()
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'credit_area_contour_numbers',
  })

  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation({
    mutationFn: async payload => await createApplications(payload),
    onSuccess: () => {
      toast.success('Ariza muvaffaqiyatli yaratildi')
      navigate('/main/apply/crop-insurance')
      void queryClient.invalidateQueries({ queryKey: [REACT_QUERY_KEYS.GET_ALL_APPLICATIONS] })
    },
    onError: (err: { response: { data: { message: string } } }) => {
      toast.error(err?.response?.data?.message || 'Nimadur xatolik yuz berdi!')
    },
  })

  const onCreate: SubmitHandler<CropInsurance | any> = data => {
    const {
      crop_actual_harvest,
      type_code,
      farmer_stir,
      crop_area,
      crop_fertility_norm,
      crop_price,
      credit_area_district_code,
      credit_area_region_code,
      credit_area_massiv_code,
      // insurance_amount,
      insurance_price,
      date,
      crop_harvest_start,
      crop_harvest_end,
      ...rest
    } = data

    mutate({
      date: dayjs(date).toISOString(),
      crop_actual_harvest: Number(crop_actual_harvest),
      farmer_stir: Number(farmer_stir),
      crop_area: Number(crop_area),
      crop_fertility_norm: Number(crop_fertility_norm),
      crop_price: Number(crop_price),
      credit_area_region_code: String(credit_area_region_code),
      credit_area_district_code: String(credit_area_district_code),
      credit_area_massiv_code: String(credit_area_massiv_code),
      insurance_price: Number(insurance_price),
      type_code: 1,
      crop_harvest_start: new Date(crop_harvest_start).toISOString(),
      crop_harvest_end: new Date(crop_harvest_end).toISOString(),
      ...rest,
    })
  }
  return {
    form,
    crop,
    fields,
    append,
    remove,
    isLoading,
    onCreate,
  }
}
