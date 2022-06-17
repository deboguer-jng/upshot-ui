import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'theme-ui'

import Flex from '../../Layout/Flex'
import Box from '../../Layout/Grid'
import Text from '../../@UI/Text'
import { transientOptions } from '../../../themes'

export const StyledBox = styled(Box, transientOptions)`
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
export const StyledBoxMiddle = styled(Text, transientOptions)`
  margin: 5px;
  align-items: center;
  cursor: pointer;
`
export const StyledBoxMiddleSeparate = styled(Text, transientOptions)`
  margin: 5px;
  font-size: 16px;
`

export const LogoBox = styled(Link, transientOptions)`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`

export const StyledBoxRight = styled(Box, transientOptions)`
  align-items: right;
  justify-items: end;
`

export const FooterLine = styled(Flex, transientOptions)`
  position: relative;
  align-items: center;
  flex-direction: column-reverse;
  width: 100%;
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

export const StyledBoxLeft = styled(Flex, transientOptions)`
  flex-grow: 1;
  align-items: center;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints[1]}) {
      width: 100%;
    }
  `}
`
export const StyledMiddleLink = styled(Link, transientOptions)`
  margin: 5px;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`
