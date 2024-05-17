import { lazy } from 'react'
import { ROUTER } from '@/constants/router'
import Layout from '@/layout'
import { createBrowserRouter } from 'react-router-dom'
import EditCropInsurance from '@/pages/dashboard/apply/crop-insurance/edit'

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
const CreateCropInsurance = lazy(
  async () => await import('@/pages/dashboard/apply/crop-insurance/create'),
)
const CreateCoverageInsurance = lazy(
  async () => await import('@/pages/dashboard/apply/coverage-insurance/create'),
)
const VideoInstruction = lazy(async () => await import('@/pages/dashboard/video-instruction'))
const ContractCoverageInsurance = lazy(
  async () => await import('@/pages/dashboard/contracts/coverage-insurance'),
)
const CreateCoverageInsurance = lazy(
  async () => await import('@/pages/dashboard/contracts/coverage-insurance/create'),
)

const ContractCropInsurance = lazy(
  async () => await import('@/pages/dashboard/contracts/crop-insurance'),
)

const Landing = lazy(async () => await import('@/pages/landing'))
const Auth = lazy(async () => await import('@/pages/auth'))
const Register = lazy(async () => await import('@/pages/register'))
const RegisterCode = lazy(async () => await import('@/pages/register-code'))

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
        path: ROUTER.AUTH,
        element: <Auth />,
      },
      {
        path: ROUTER.REGISTER,
        element: <Register />,
      },
      {
        path: ROUTER.CODE,
        element: <RegisterCode />,
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
                  {
                    path: `${ROUTER.EDIT}/:id`,
                    element: <EditCropInsurance />,
                  },
                ],
              },
              {
                path: ROUTER.COVERAGE_INSURANCE,
                children: [
                  {
                    index: true,
                    element: <CoverageInsurance />,
                  },
                  {
                    path: ROUTER.CREATE,
                    element: <CreateCoverageInsurance />,
                  },
                ],
              },
            ],
          },
          {
            path: ROUTER.CONTRACTS,
            children: [
              {
                index: true,
                element: <Contracts />,
              },
              {
                path: ROUTER.COVERAGE_INSURANCE,
                children: [
                  {
                    index: true,
                    element: <ContractCoverageInsurance />,
                  },
                  {
                    path: `${ROUTER.CREATE}/:id`,
                    element: <CreateCoverageInsurance />,
                  },
                ],
              },
              {
                path: ROUTER.CROP_INSURANCE,
                element: <ContractCropInsurance />,
              },
            ],
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
