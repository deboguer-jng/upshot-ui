import styled from '@emotion/styled'
import Flex from '../../Layout/Flex'
import Box from '../../Layout/Grid'
import Text from '../../@UI/Text'
import css from '@emotion/css'

export const StyledBox = styled(Box)`
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  opacity: 0.75;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints[1]}) {
      justify-content: end;
    }
  `}
`
export const StyledBoxMiddle = styled(Text)`
  margin: 5px;
  align-items: center;
  cursor: pointer;
`
export const StyledBoxMiddleSeparate = styled(Text)`
  margin: 5px;
  font-size: 16px;
`

export const LogoBox = styled(Box)`
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`

export const StyledBoxRight = styled(Box)`
  align-items: right;
  justify-items: end;
`

export const FooterLine = styled(Flex)`
  align-items: center;
  flex-direction: column-reverse;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 10px;
  font-size: 12px;

  ${({ theme }) => css`
    @media only screen and (min-width: ${theme.breakpoints[1]}) {
      flex-direction: row;
      padding-left: 70px;
      padding-right: 70px;
    }
  `}

  ${({ theme }) => css`
    @media only screen and (min-width: ${theme.breakpoints[2]}) {
      padding-left: 137px;
      padding-right: 137px;
    }
  `}
`

export const StyledBoxLeft = styled(Flex)`
  flex-grow: 1;
  align-items: center;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints[1]}) {
      width: 100%;
    }
  `}
`
