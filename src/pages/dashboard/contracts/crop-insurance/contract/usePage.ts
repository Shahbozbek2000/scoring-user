/* eslint-disable quotes */
import { useMemo, useState } from 'react'
import { acceptOrRejectContract, contractGenerateDoc } from '@/apis/contracts'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

interface FormValues {
  status_plan: string
  percent: string
  comment: string
}

export const usePage = () => {
  const { id } = useParams()
  const form = useForm<FormValues>()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [docs, setDocs] = useState<any[]>([])
  const [isCanceled, setIsCanceled] = useState(false)

  const { isLoading } = useQuery({
    queryKey: ['GENERATE-DOC', id],
    queryFn: async () => await contractGenerateDoc(id),
    select: res => res?.data?.link,
    onSuccess: res => {
      setDocs([
        {
          uri: res,
          fileType: 'docx',
          fileName: 'test.docx',
        },
      ])
    },
    onError: () => {
      toast.error('Nimdur xatolik yuz berdi!')
    },
  })

  const { mutate } = useMutation({
    mutationFn: async () => await acceptOrRejectContract(id, { action: 'accept' }),
    onSuccess: res => {
      if (res?.data?.message === "❌ Shartnoma to'xtatilgan") {
        toast.error(res?.data?.message)
      } else {
        void queryClient.invalidateQueries({ queryKey: [REACT_QUERY_KEYS.GET_ALL_CONTRACTS] })
        navigate('/main/contracts/crop-insurance')
        toast.success('Shartnoma muvaffaqiyatli imzolandi!')
      }
    },
    onError: () => {
      toast.error('Nimdur xatolik yuz berdi!')
    },
  })
  const onCreate = () => {
    mutate()
  }

  const { mutate: rejectMutate } = useMutation({
    mutationFn: async data => await acceptOrRejectContract(id, data),
    onSuccess: res => {
      if (res?.data?.message === "❌ Shartnoma to'xtatilgan") {
        toast.error(res?.data?.message)
      } else {
        void queryClient.invalidateQueries({ queryKey: [REACT_QUERY_KEYS.GET_ALL_CONTRACTS] })
        navigate('/main/contracts/crop-insurance')
        toast.success('Shartnoma rad etildi')
      }
    },
    onError: err => {
      console.log(err)
      toast.error('Nimadur xatolik yuz berdi')
    },
  })
  const onReject = () => {
    const payload: any = { action: 'reject', comment: form.watch('comment') }
    rejectMutate(payload)
  }

  const memoizedDocs = useMemo(() => {
    return docs
  }, [docs])

  return {
    form,
    onCreate,
    onReject,
    isLoading,
    isCanceled,
    setIsCanceled,
    memoizedDocs,
  }
}
