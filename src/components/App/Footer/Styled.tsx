import styled from '@emotion/styled'
import Grid from '../../Layout/Grid'
import Box from '../../Layout/Box'
import { Text } from 'theme-ui'

export const StyledBox = styled(Box)`
  justify-items: center;
`
export const StyledBoxMiddle = styled(Text)`
  margin: 5px;
  display: inline-block;
`
export const StyledBoxMiddleSeparate = styled(Text)`
  margin: 5px;
  font-size: 16px;
`

export const StyledBoxLeft = styled(Box)`
  margin-left: 20%;
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
`

