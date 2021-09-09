import styled from '@emotion/styled'
import Grid from '../../Layout/Grid'
import Box from '../../Layout/Grid'

export const StyledBox = styled(Box)`
  justify-items: center;
`
export const StyledBoxMiddle = styled(Box)`
  margin: 5px;
`
export const StyledBoxMiddleSeparate = styled(Box)`
  margin: 5px;
  font-size: 16px;
`

export const StyledBoxLeft = styled(Box)`
  margin-left: 20%;
  float: left;
`
export const StyledBoxRight = styled(Box)`
  align-items: right;
  justify-items: end;
  margin-right: 10%;
`


export const FooterLine = styled(Grid)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 10px;
  font-size: 12px;
`

