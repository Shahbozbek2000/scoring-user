import { CustomModal } from '@/components/modal'
import { Card, FlexContainer } from './style'
import { useNavigate } from 'react-router-dom'
import { ROUTER } from '@/constants/router'
import { useQuery } from '@tanstack/react-query'
import { request } from '@/configs/requests'

interface CropsListProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CropsList = ({ open, setOpen }: CropsListProps) => {
  const navigate = useNavigate()

  const { data: cropTypes = [] } = useQuery({
    queryKey: ['get-api-config'],
    queryFn: async () => await request('config/'),
    select: res => {
      return res.data?.crop_prices
    },
  })

  return (
    <CustomModal title='Ekin turini tanlang' open={open} setOpen={setOpen} maxWidth='xs'>
      <FlexContainer>
        {cropTypes?.map((crop: any, idx: number) => (
          <Card
            key={idx}
            onClick={() => {
              navigate(ROUTER.CREATE, { state: { crop: crop?.crop_name } })
              setOpen(false)
            }}
          >
            <h4>{crop?.crop_name}</h4>
            {/* <p>
              <span>Narxi:</span> {crop?.price} so'm
            </p> */}
          </Card>
        ))}
      </FlexContainer>
    </CustomModal>
  )
}
