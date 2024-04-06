import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const Wrapper = styled('div')`
  position: relative;
`
export const CustomBox = styled(Box)`
  /* display: flex;
  flex-direction: column; */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
`
