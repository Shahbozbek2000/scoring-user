import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const Wrapper = styled('div')`
  position: relative;
`
export const CustomBox = styled(Box)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  .main-title {
    color: #fff;
    font-family: 'GothamProRegular';
    font-size: 48px;
  }
  .apply-btn {
    color: #fff;
    width: 191px;
    margin-top: 24px;
  }
  @media (max-width: 992px) {
    .main-title {
      font-size: 32px;
      width: 80%;
      margin: auto;
    }
  }
  @media (max-width: 676px) {
    width: 100%;
    .main-title {
      font-size: 18px;
      text-align: center;
    }
    .apply-btn {
      width: auto;
      height: 40px;
      font-size: 14px;
      margin-top: 16px;
    }
  }
`
