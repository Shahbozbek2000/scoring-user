import { lazy } from 'react'
import { ROUTER } from '@/constants/router'
import Layout from '@/layout'
import { createBrowserRouter } from 'react-router-dom'

const NotFound = lazy(async () => await import('@/pages/404'))
const Home = lazy(async () => await import('@/pages/dashboard/home'))
const Apply = lazy(async () => await import('@/pages/dashboard/apply'))
const Contracts = lazy(async () => await import('@/pages/dashboard/contracts'))
const PaymentStatus = lazy(async () => await import('@/pages/dashboard/payment-status'))
const TechnicalSupport = lazy(async () => await import('@/pages/dashboard/technical-support'))
const Documents = lazy(async () => await import('@/pages/dashboard/documents'))

const Landing = lazy(async () => await import('@/pages/landing'))

export const router = createBrowserRouter([
  {
    path: ROUTER.LANDING,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: ROUTER.HOME,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: ROUTER.APPLY,
            element: <Apply />,
          },
          {
            path: ROUTER.CONTRACTS,
            element: <Contracts />,
          },
          {
            path: ROUTER.PAYMENT_STATUS,
            element: <PaymentStatus />,
          },
          {
            path: ROUTER.DOCUMENTS,
            element: <Documents />,
          },
          {
            path: ROUTER.TECHNICAL_SUPPORT,
            element: <TechnicalSupport />,
          },
        ],
      },
    ],
  },
  {
    path: ROUTER.NOT_FOUND,
    element: <NotFound />,
  },
])
