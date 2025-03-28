import styled from '@emotion/styled'

export const FlexContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`

export const Card = styled('div')`
  width: 100%;
  border: 1px solid silver;
  border-radius: 12px;
  padding: 0px 12px;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    border: 1px solid #08705f;
  }

  h4 {
    font-family: 'GothamProRegular', sans-serif;
    font-size: 14px;
  }
`
