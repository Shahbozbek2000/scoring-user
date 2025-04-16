import { COLORS } from '@/constants/css'
import styled from '@emotion/styled'

export const FieldWrapper = styled('div')`
  display: flex;
  align-items: flex-end;
  gap: 10px;

  .plus-btn {
    height: 44px;
    border-radius: 8px;
    background-color: ${COLORS.GREY};
  }
`
