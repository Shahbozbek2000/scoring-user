/* eslint-disable quotes */
import { createColumnHelper } from '@tanstack/react-table'
import { Badge } from '@/styles/global'
import { Button } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

interface IColumns {
  number: number
  apply_number: string
  status_name: string
  status_code: boolean | null
  farmer_name: string
  type_name: string
  date: string
  check_status?: string
  region: string
  district: string
}

const columnHelper = createColumnHelper<IColumns>()

export const usePage = () => {
  const { search } = useLocation()
  const initial_params = new URLSearchParams(search)
  const [params, setParams] = useState({
    page: initial_params.has('page') ? Number(initial_params.get('page')) : 1,
    limit: initial_params.has('limit') ? Number(initial_params.get('limit')) : 10,
  })

  const columns = [
    columnHelper.accessor('number', {
      cell: info => info.row.index + 1,
      header: () => <span>№</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('status_name', {
      id: 'status_name',
      cell: ({ row }: any) => {
        return (
          <Badge
            className={`${row.original.status_code === null ? 'in_progress' : row.original?.status_code === true ? 'success' : 'canceled'}`}
          >
            {row.original?.status_name}
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
    columnHelper.accessor('region', {
      header: () => 'Viloyat',
      cell: ({ row }) => {
        return <p>{row.original.region}</p>
      },
      footer: info => info.column.id,
    }),
    columnHelper.accessor('district', {
      header: () => 'Tuman',
      cell: ({ row }) => {
        return <p>{row.original.district}</p>
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
    }),
    columnHelper.accessor('check_status', {
      header: () => <span>Statusni belgilash</span>,
      footer: info => info.column.id,
      cell: () => (
        <Button
          variant='outlined'
          sx={{
            color: '#60676D',
            borderRadius: '4px',
            border: '1px solid #E7E7E7',
            width: 115,
            height: 32,
          }}
        >
          Belgilash
        </Button>
      ),
    }),
  ]

  const data: IColumns[] = [
    {
      number: 1,
      apply_number: '24022024',
      status_name: "Ro'yxatdan o'tdi",
      status_code: true,
      farmer_name: 'MCHJ',
      type_name: 'Xosil sug’urta',
      date: '24.02.2024',
      region: 'Toshkent sh.',
      district: 'Yunusobod',
    },
    {
      number: 2,
      apply_number: '24022024',
      status_name: 'Bekor qilingan',
      status_code: false,
      farmer_name: 'MCHJ',
      type_name: 'Xosil sug’urta',
      date: '24.02.2024',
      region: 'Samarqand',
      district: 'Qibray',
    },
  ]

  return {
    data,
    params,
    columns,
    setParams,
  }
}
