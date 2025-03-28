import { CustomModal } from '@/components/modal'
import { cropList } from '../../constants'
import { Card, FlexContainer } from './style'
import { useNavigate } from 'react-router-dom'
import { ROUTER } from '@/constants/router'

interface CropsListProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CropsList = ({ open, setOpen }: CropsListProps) => {
  const navigate = useNavigate()

  return (
    <CustomModal title="Ekinlar ro'yxati" open={open} setOpen={setOpen} maxWidth='xs'>
      <FlexContainer>
        {cropList.map(crop => (
          <Card
            key={crop.id}
            onClick={() => {
              navigate(ROUTER.CREATE, { state: { crop: crop.value } })
              setOpen(false)
            }}
          >
            <h4>{crop.name}</h4>
          </Card>
        ))}
      </FlexContainer>
    </CustomModal>
  )
}
