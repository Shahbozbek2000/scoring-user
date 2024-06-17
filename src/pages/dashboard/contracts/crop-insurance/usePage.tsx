/* eslint-disable quotes */
import { getAllContracts } from '@/apis/contracts'
import { DATE_FORMAT } from '@/constants/format'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { ROUTER } from '@/constants/router'
import { Badge } from '@/styles/global'
import { Button } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { createColumnHelper } from '@tanstack/react-table'
import dayjs from 'dayjs'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface IColumns {
  number: string | number
  name: string
  farmer_name?: string
  region?: string
  district?: string
  type?: string
  date?: string
  check_status?: string
  status_code: boolean
  status_name: string
}

const columnHelper = createColumnHelper<IColumns>()

export const usePage = () => {
  const navigate = useNavigate()
  const { search } = useLocation()
  const initial_params = new URLSearchParams(search)
  const [params, setParams] = useState({
    page: initial_params.has('page') ? Number(initial_params.get('page')) : 1,
    limit: initial_params.has('limit') ? Number(initial_params.get('limit')) : 10,
  })

  const {
    data = {
      count: 0,
      results: [],
    },
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_ALL_CONTRACTS, params],
    queryFn: async () => await getAllContracts({ params, type_code: 1 }),
    select: res => {
      return {
        count: res?.data?.count,
        results: res?.data?.result,
      }
    },
    keepPreviousData: true,
  })

  const columns = [
    columnHelper.accessor('number', {
      cell: info => info.row.index + 1,
      header: () => <span>№</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('status_name', {
      id: 'status_name',
      cell: ({ row }) => {
        return (
          <Badge
            className={`${row.original.status_code === null ? 'in_progress' : row.original?.status_code ? 'success' : 'canceled'}`}
          >
            {row.original?.status_name}
          </Badge>
        )
      },
      header: () => <span>Ariza statusi</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('farmer_name', {
      header: () => 'Korxona nomi',
      cell: ({ row }: any) => {
        return <p>{row.original.application?.farmer_name}</p>
      },
      footer: info => info.column.id,
    }),
    columnHelper.accessor('region', {
      header: () => <span>Viloyat</span>,
      cell: ({ row }: any) => {
        return <p>{row.original.application?.region_name}</p>
      },
      footer: info => info.column.id,
    }),
    columnHelper.accessor('district', {
      header: () => <span>Tuman</span>,
      cell: ({ row }: any) => {
        return <p>{row.original.application?.district_name}</p>
      },
      footer: info => info.column.id,
    }),
    columnHelper.accessor('type', {
      header: () => <span>Sug’urta turi</span>,
      cell: ({ row }: any) => {
        return <p>{row.original.application?.type_name}</p>
      },
      footer: info => info.column.id,
    }),
    columnHelper.accessor('date', {
      header: () => <span>Ariza sanasi</span>,
      cell: ({ row }: any) => {
        return <p>{dayjs(row.original?.application?.date).format(DATE_FORMAT)}</p>
      },
      footer: info => info.column.id,
    }),
    columnHelper.accessor('check_status', {
      header: () => <span>Statusni belgilash</span>,
      footer: info => info.column.id,
      cell: ({ row }: any) => {
        return (
          <Button
            variant='outlined'
            sx={{
              width: 108,
              height: 36,
              color: 'var(--Green)',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() => {
              console.log(row?.original?.user_acceptance, 'user_acceptance')
              if (row?.original?.user_acceptance === null) {
                navigate(`${ROUTER.CONTRACT}/${row?.original?._id}`)
              } else {
                navigate(`${ROUTER.CONTRACT}/${row?.original?._id}?user_accepted=true`)
              }
            }}
          >
            Ko'rish
          </Button>
        )
      },
    }),
  ]

  return {
    data: data.results,
    count: data.count,
    params,
    columns,
    setParams,
    isLoading,
    isFetching,
  }
}
