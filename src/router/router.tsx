import { lazy } from 'react'
import { ROUTER } from '@/constants/router'
import Layout from '@/layout'
import { createBrowserRouter } from 'react-router-dom'
import CreateCropInsurance from '@/pages/dashboard/apply/crop-insurance/create'

const NotFound = lazy(async () => await import('@/pages/404'))
const Home = lazy(async () => await import('@/pages/dashboard/home'))
const Apply = lazy(async () => await import('@/pages/dashboard/apply'))
const Contracts = lazy(async () => await import('@/pages/dashboard/contracts'))
const PaymentStatus = lazy(async () => await import('@/pages/dashboard/payment-status'))
const TechnicalSupport = lazy(async () => await import('@/pages/dashboard/technical-support'))
const Documents = lazy(async () => await import('@/pages/dashboard/documents'))
const PersonalInformation = lazy(async () => await import('@/pages/dashboard/personal-information'))
const CropInsurance = lazy(async () => await import('@/pages/dashboard/apply/crop-insurance'))
const CoverageInsurance = lazy(
  async () => await import('@/pages/dashboard/apply/coverage-insurance'),
)
const VideoInstruction = lazy(async () => await import('@/pages/dashboard/video-instruction'))

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
            path: ROUTER.PERSONAL_INFORMATION,
            element: <PersonalInformation />,
          },
          {
            path: ROUTER.APPLY,
            children: [
              {
                index: true,
                element: <Apply />,
              },
              {
                path: ROUTER.CROP_INSURANCE,
                children: [
                  {
                    index: true,
                    element: <CropInsurance />,
                  },
                  {
                    path: ROUTER.CREATE,
                    element: <CreateCropInsurance />,
                  },
                ],
              },
              {
                path: ROUTER.COVERAGE_INSURANCE,
                element: <CoverageInsurance />,
              },
            ],
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
          {
            path: ROUTER.VIDEO_INSTRUCTION,
            element: <VideoInstruction />,
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
