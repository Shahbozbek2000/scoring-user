/* eslint-disable quotes */
import { createColumnHelper } from '@tanstack/react-table'
import { Badge } from '@/styles/global'
import { Button } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { getAllApplications } from '@/apis/applications'
import { ROUTER } from '@/constants/router'
import dayjs from 'dayjs'
import { DATE_FORMAT } from '@/constants/format'

interface IColumns {
  number: number
  apply_number: string
  status_name: string
  status_code: boolean | null
  farmer_name: string
  type_name: string
  date: string
  check_status?: string
  region_name: string
  district_name: string
}

const columnHelper = createColumnHelper<IColumns>()

export const usePage = () => {
  const { search } = useLocation()
  const initial_params = new URLSearchParams(search)
  const navigate = useNavigate()
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
  } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_ALL_APPLICATIONS, params],
    queryFn: async () => await getAllApplications({ params, type_code: 1 }),
    select: res => {
      return {
        count: res?.data?.count,
        results: res?.data?.result,
      }
    },
    keepPreviousData: true,
  })

  console.log(data, 'data')

  const columns = [
    columnHelper.accessor('number', {
      cell: info => info.row.index + 1,
      header: () => <span>№</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('status_name', {
      id: 'status_name',
      cell: ({ row }: any) => {
        console.log(row.original?.status_name, 'row')
        return (
          <Badge
            className={`${row?.original?.status_code === null ? 'in_progress' : row?.original?.status_code === true ? 'success' : 'canceled'}`}
          >
            {row?.original?.status_name}
          </Badge>
        )
      },
      header: () => <span>Statusi</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('apply_number', {
      header: () => 'Ariza raqami',
      cell: ({ row }) => {
        return <p>{row.original.farmer_name}</p>
      },
      footer: info => info.column.id,
    }),
    columnHelper.accessor('farmer_name', {
      header: () => 'Korxona nomi',
      cell: ({ row }) => {
        return <p>{row.original.farmer_name}</p>
      },
      footer: info => info.column.id,
    }),
    columnHelper.accessor('region_name', {
      header: () => 'Viloyat',
      cell: ({ row }) => {
        return <p>{row.original?.region_name}</p>
      },
      footer: info => info.column.id,
    }),
    columnHelper.accessor('district_name', {
      header: () => 'Tuman',
      cell: ({ row }) => {
        return <p>{row.original?.district_name}</p>
      },
      footer: info => info.column.id,
    }),
    columnHelper.accessor('type_name', {
      header: () => <span>Sug’urta turi</span>,
      cell: ({ row }) => {
        return <p>{row.original.type_name}</p>
      },
      footer: info => info.column.id,
    }),
    columnHelper.accessor('date', {
      header: () => <span>Ariza sanasi</span>,
      footer: info => info.column.id,
      cell: ({ row }) => <p>{dayjs(row?.original?.date).format(DATE_FORMAT)}</p>,
    }),
    columnHelper.accessor('check_status', {
      header: () => <span>Statusni belgilash</span>,
      footer: info => info.column.id,
      cell: ({ row }: any) => (
        <Button
          variant='outlined'
          sx={{
            color: '#60676D',
            borderRadius: '4px',
            border: '1px solid #E7E7E7',
            width: 115,
            height: 32,
          }}
          onClick={() => {
            navigate(`${ROUTER.EDIT}/${row?.original?._id}`)
          }}
        >
          Ko'rish
        </Button>
      ),
    }),
  ]

  return {
    data: data.results,
    params,
    columns,
    setParams,
    isLoading,
  }
}
