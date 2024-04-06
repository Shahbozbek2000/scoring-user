import styled from '@emotion/styled'

export const Card = styled('div')`
  display: flex;
  align-items: center;
  gap: 18px;
  background-color: #fff;
  border-radius: 12px;
  border: 1.5px solid #ededed;
  width: 100%;
  min-height: 106px;
  padding: 16px 18px;
`

export const Info = styled('div')`
  .main-text {
    color: #60676d;
    font-family: 'GothamProRegular';
    font-size: 14px;
    line-height: 19px;
  }
  .primary-text {
    color: #313131;
    font-family: 'GothamProMedium';
    font-size: 24px;
  }
`
