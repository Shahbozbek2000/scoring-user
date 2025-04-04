import { COLORS } from '@/constants/css'
import styled from '@emotion/styled'

export const FlexContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`

export const Card = styled('div')`
  width: 100%;
  padding: 16px 20px;
  border-radius: 16px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(8, 112, 95, 0.2);
    border-color: #08705f;
  }

  h4 {
    font-family: 'GothamProMedium', sans-serif;
    font-size: 15px;
    margin-bottom: 6px;
    color: ${COLORS.BLACK || '#333'};

    span {
      font-size: 13px;
      color: ${COLORS.BLACK20 || '#888'};
      margin-bottom: 2px;
    }
  }

  p {
    font-family: 'GothamProBold', sans-serif;
    font-size: 15px;
    color: ${COLORS.BLACK || '#333'};
    margin-top: 4px;

    span {
      font-size: 13px;
      color: ${COLORS.BLACK20 || '#888'};
    }
  }
`
