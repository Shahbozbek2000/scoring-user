import { createApplications } from '@/apis/applications'
import { useMutation } from '@tanstack/react-query'
import { type SubmitHandler, useForm } from 'react-hook-form'

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
  creditor_requisites: string
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
  insurance_liability: number
}

export const useCreate = () => {
  const form = useForm()
  const { mutate, isLoading } = useMutation({
    mutationFn: async payload => await createApplications(payload),
    onSuccess: data => {},
    onError: () => {},
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
      insurance_amount,
      insurance_price,
      insurance_liability,
      ...rest
    } = data

    mutate({
      crop_actual_harvest: Number(crop_actual_harvest),
      type_code: 2,
      farmer_stir: Number(farmer_stir),
      crop_area: Number(crop_area),
      crop_fertility_norm: Number(crop_fertility_norm),
      crop_price: Number(crop_price),
      credit_area_region_code: Number(credit_area_region_code),
      credit_area_district_code: Number(credit_area_district_code),
      credit_area_massiv_code: Number(credit_area_massiv_code),
      insurance_amount: Number(insurance_amount),
      insurance_price: Number(insurance_price),
      insurance_liability: Number(insurance_liability),
      ...rest,
    })
    console.log(data)
  }
  return { form, isLoading, onCreate }
}
